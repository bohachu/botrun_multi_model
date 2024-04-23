import { AxiosResponse, AxiosError } from "axios"
import { useQuery } from "react-query"
import { request } from "@utils/axios-util"
import { useRecoilState } from "recoil"
import { userAuthState } from "@utils/atoms"

export default function useToken() {
  const [, setUser] = useRecoilState(userAuthState)

  const queryFn = () =>
    request({
      url: "/request_access_token",
      method: "get",
      params: {
        username: "cameo_test",
      },
    })

  return useQuery(["use-access-token-api"], {
    queryFn,
    onError: (error: AxiosError) => {
      console.log(error)
    },
    select: (res: AxiosResponse) => {
      return res.data
    },
    onSuccess: res => {
      if (res.is_success)
        setUser({
          token: res.access_token,
          type: "bearer",
          username: res.username,
        })
    },
    enabled: false,
  })
}
