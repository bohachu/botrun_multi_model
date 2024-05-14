import { useState } from "react"
import Panel from "@components/panel"
import Result from "@components/result"
import Sidebar from "@components/Sidebar"

export default function Index() {
  const [hidePanel, setHidePanel] = useState(false)
  const [model1Message, setModel1Message] = useState<string>("")
  const [model2Message, setModel2Message] = useState<string>("")

  return (
    <div className={`multi-module-container ${hidePanel ? " --hide-panel" : ""}`}>
      <Sidebar hidePanel={hidePanel} setHidePanel={setHidePanel} />
      <Panel setModel1Message={setModel1Message} setModel2Message={setModel2Message} />
      <Result model1Message={model1Message} model2Message={model2Message} />
    </div>
  )
}
