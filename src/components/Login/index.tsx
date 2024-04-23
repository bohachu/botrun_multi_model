import Indicator from "@components/Login/Indicator"
import useToken from "@hooks/useToken"

export default function Frame() {
  const { refetch, isFetching } = useToken()

  const handleClick = () => {
    refetch()
  }

  const ElementByStatus = () => {
    if (isFetching) return <Indicator text="正在初始化波特人" />

    return (
      <a className="br-btn for-login" onClick={handleClick}>
        <i className="icon icon-15"></i>
        <span>開始始用</span>
      </a>
    )
  }

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
