import { useSearchParams } from "react-router-dom"
import Indicator from "@components/Login/Indicator"
import useSSO from "@hooks/useSSO"
import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { userAuthState } from "@utils/atoms"

export default function Frame() {
  const [searchParams] = useSearchParams()
  const botrunToken = searchParams.get("botrun_token")
  const userName = searchParams.get("username") || ""
  const [, setUser] = useRecoilState(userAuthState)

  const { data = undefined, isError: isErrorSSO } = useSSO({ botrunToken, userName })

  const handleClick = () => {
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || ""
    const authUrl = API_BASE_URL + "/auth-login"

    if (authUrl) {
      window.location.href = authUrl + "?default_botrun=index"
    } else {
      console.error("Auth URL is not defined in environment variables.")
    }
  }

  const ElementByStatus = () => {
    // if (isErrorSSO || isErrorDinD) return <Indicator text="Oops!發生錯誤了..." />
    if (botrunToken !== undefined && userName !== "") return <Indicator text="正在初始化波特人" />

    return (
      <a className="br-btn for-login" onClick={handleClick}>
        <i className="icon icon-15"></i>
        <span>開始始用</span>
      </a>
    )
  }

  useEffect(() => {
    if (data && botrunToken) {
      setUser({
        token: botrunToken as string,
        type: "bearer",
        username: data.username,
      })
    }
  }, [data, botrunToken])

  return (
    <div className="botrun-login">
      <div className="botrun-login-container">
        <h1 className="logo">Botrun.ai</h1>
        <div className="content">
          <h2>
            波特人Botrun.ai是專門設計來解決
            <br />
            特定領域問題的生成式AI bot代理
          </h2>
          <div className="fn-area">
            <ElementByStatus />
          </div>
        </div>
        <div className="copyright">
          Botrun.ai © 2000 - 2024 CAMEO INC. All rights reserved.
          <a href="https://intro.botrun.ai/" target="_blank" className="br-knowmore">
            波特人官網
          </a>
        </div>
      </div>
    </div>
  )
}
