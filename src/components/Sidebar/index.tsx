import { useRecoilState } from "recoil"
import { userAuthState } from "@utils/atoms"

type SidebarProps = {
  hidePanel: boolean
  setHidePanel: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Index({ hidePanel, setHidePanel }: SidebarProps) {
  const [, setUser] = useRecoilState(userAuthState)
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="nav-holder">
          <div
            className="br-btn no-border square btn-pannel-toggle"
            onClick={() => setHidePanel(prev => !prev)}
            title={`${hidePanel ? "展開" : "縮小"}`}
          >
            <i className="icon icon-36"></i>
          </div>
        </div>
        <div className="system-holder">
          <a className="br-btn no-border square" onClick={() => setUser(null)} title="登出">
            <i className="icon icon-14"></i>
          </a>
        </div>
      </div>
    </div>
  )
}
