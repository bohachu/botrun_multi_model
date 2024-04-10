import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { RecoilRoot } from "recoil"
import { AxiosInterceptor } from "@utils/axios-util"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <BrowserRouter>
    <RecoilRoot>
      <AxiosInterceptor>
        <App />
      </AxiosInterceptor>
    </RecoilRoot>
  </BrowserRouter>
)
