import axios, { AxiosResponse, AxiosError } from "axios"
import { userAuthState } from "@utils/atoms"
import { useRecoilValue } from "recoil"
import { useEffect, ReactNode, useState } from "react"
type interceptorProps = {
  children: ReactNode
}

const baseUrl = process.env.REACT_APP_API_BASE_URL
const client = axios.create({ baseURL: baseUrl })

export function request({ ...options }) {
  return client(options)
}

export function AxiosInterceptor({ children }: interceptorProps) {
  const user = useRecoilValue(userAuthState)
  const [isSet, setIsSet] = useState(false)
  // const [token, setToken] = useRecoilState(authTokenState)
  // const refreshAccessToken = async () => {
  //   const refreshToken = token?.refreshToken
  //   if (!refreshToken) {
  //     throw new Error("No refresh token found")
  //   }
  //   try {
  //     const response = await axios({
  //       method: "POST",
  //       url: baseUrl + "token/refresh",
  //       params: {
  //         refresh_token: refreshToken,
  //       },
  //       headers: {
  //         accept: "application/json",
  //       },
  //     })
  //     const newAccessToken = response.data.access_token
  //     if (!newAccessToken) {
  //       throw new Error("No access token in response")
  //     }
  //     return response.data
  //   } catch (error) {
  //     setToken(null)
  //     console.error("Failed to refresh access token: ", error)
  //     throw error
  //   }
  // }

  // Utility function to create a delay
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  const restartDocker = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}/restart-user-docker`, {
        headers: { Authorization: `${user?.type} ${user?.token}` },
      })
      return data.is_success
    } catch (error) {
      console.error("Error restarting Docker status", error)
      return false
    }
  }

  const checkDocker = async (attempt = 1): Promise<boolean> => {
    if (attempt > 15) return false
    try {
      const { data } = await axios.get(`${baseUrl}/check-docker`, {
        params: { userName: user?.username },
      })
      // Return true immediately if the check is successful
      if (data.is_success) {
        return true
      } else {
        // Wait for 2 seconds before making the next attempt
        await delay(2000)
        return await checkDocker(attempt + 1)
      }
    } catch (error) {
      console.error("Error checking Docker status", error)
      return false
    }
  }

  // const errInterceptor = async (error: AxiosError) => {
  // if (error.response && error.response.status === 401) {
  //   try {
  //     const refreshToken = await refreshAccessToken()
  //     setToken({
  //       ...(token as TokenProps),
  //       accessToken: refreshToken.access_token,
  //       tokenType: refreshToken.token_type,
  //     })
  //     if (error.config) {
  //       const config = error.config
  //       config.headers.Authorization = `${refreshToken.token_type} ${refreshToken.access_token}`
  //       return await axios(config)
  //     } else {
  //       console.error("Error object does not contain config.")
  //       return Promise.reject(new Error("Error object does not contain config."))
  //     }
  //   } catch (refreshError) {
  //     return Promise.reject(refreshError)
  //   }
  // }
  //   return Promise.reject(error)
  // }

  useEffect(() => {
    const useDockerInDocker = process.env.REACT_APP_USE_DOCKER_IN_DOCKER === "True"
    if (user && useDockerInDocker && baseUrl) {
      // const updatedBaseUrl = updatedBaseUrlWithName(baseUrl, user.username)
      const updatedBaseUrl = baseUrl

      client.defaults.baseURL = updatedBaseUrl
    }
    // const errInterceptor = async (error: AxiosError) => {
    //   return Promise.reject(error)
    // }
    // const resInterceptor = (response: AxiosResponse) => {
    //   return response
    // }

    client.defaults.headers.common.Authorization = `${user?.type} ${user?.token}`
    const interceptor = client.interceptors.response.use(undefined, undefined)

    setIsSet(true)
    return () => client.interceptors.response.eject(interceptor)
  }, [user])

  return isSet ? <>{children}</> : null
}
