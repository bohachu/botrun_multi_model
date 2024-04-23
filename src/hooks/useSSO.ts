import { AxiosResponse, AxiosError } from "axios"
import { useQuery } from "react-query"
import { request } from "@utils/axios-util"
import { useSearchParams } from "react-router-dom"

export default function useSSO({
  botrunToken,
  userName,
}: {
  botrunToken: string | null
  userName: string
}) {
  const [, setSearchParams] = useSearchParams()
  const baseUrl = process.env.REACT_APP_API_BASE_URL || ""

  const getFormData = () => {
    const data = new FormData()
    data.append("access_token", botrunToken as string)
    return data
  }

  const queryFn = () =>
    request({
      url: "/token_verify",
      method: "post",
      data: getFormData(),
    })

  return useQuery(["use-sso-login-api"], {
    queryFn,
    onError: (error: AxiosError) => {
      console.log(error)
      setSearchParams({})
    },
    select: (res: AxiosResponse) => {
      return res.data
    },
    enabled: botrunToken !== null,
  })
}
