import { useState } from "react"
import Panel from "@components/panel"
import Result from "@components/result"
import { MessageProps } from "@/types"

export default function Index() {
  const [messages, setMessages] = useState<MessageProps[]>([])

  return (
    <div className="multi-module-container">
      <Panel setMessages={setMessages} />
      <Result messages={messages} />
    </div>
  )
}
