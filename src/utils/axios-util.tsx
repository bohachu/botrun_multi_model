import axios, { AxiosResponse, AxiosError } from "axios"
import { TokenProps } from "@utils/types"
import { authTokenState } from "@utils/atoms"
import { useRecoilState } from "recoil"
import { useEffect, ReactNode, useState } from "react"
type interceptorProps = {
  children: ReactNode
}

const baseUrl = process.env.REACT_APP_API_URL
const client = axios.create({ baseURL: baseUrl })

export function request({ ...options }) {
  return client(options)
}

export function AxiosInterceptor({ children }: interceptorProps) {
  const [isSet, setIsSet] = useState(false)
  const [token, setToken] = useRecoilState(authTokenState)

  const refreshAccessToken = async () => {
    const refreshToken = token?.refreshToken

    if (!refreshToken) {
      throw new Error("No refresh token found")
    }

    try {
      const response = await axios({
        method: "POST",
        url: baseUrl + "token/refresh",
        params: {
          refresh_token: refreshToken,
        },
        headers: {
          accept: "application/json",
        },
      })

      const newAccessToken = response.data.access_token

      if (!newAccessToken) {
        throw new Error("No access token in response")
      }
      return response.data
    } catch (error) {
      setToken(null)
      console.error("Failed to refresh access token: ", error)
      throw error
    }
  }

  const errInterceptor = async (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      try {
        const refreshToken = await refreshAccessToken()
        setToken({
          ...(token as TokenProps),
          accessToken: refreshToken.access_token,
          tokenType: refreshToken.token_type,
        })

        if (error.config) {
          const config = error.config
          config.headers.Authorization = `${refreshToken.token_type} ${refreshToken.access_token}`
          return await axios(config)
        } else {
          console.error("Error object does not contain config.")
          return Promise.reject(new Error("Error object does not contain config."))
        }
      } catch (refreshError) {
        return Promise.reject(refreshError)
      }
    }
    return Promise.reject(error)
  }
  const resInterceptor = (response: AxiosResponse) => {
    // console.log("resInterceptor")
    return response
  }

  useEffect(() => {
    client.defaults.headers.common.Authorization = `${token?.tokenType} ${token?.accessToken}`
    const interceptor = client.interceptors.response.use(resInterceptor, errInterceptor)
    setIsSet(true)
    return () => client.interceptors.response.eject(interceptor)
  }, [token])

  return isSet ? <>{children}</> : null
}
