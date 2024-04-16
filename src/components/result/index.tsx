import { MessageProps } from "@/types"
import TabLabel from "./TabLabel"
import Content from "./Content"
import Download from "./Download"

type ResultProps = {
  messages: MessageProps[]
}

export default function Index({ messages }: ResultProps) {
  return (
    <div className="result-container">
      <ul id="tabs-nav" className="tabs-nav">
        {<TabLabel name="Qwen1.5-72b chat" />}
        {<TabLabel name="Mixtral-8x7b" />}
      </ul>
      <div id="tabs-content" className="tabs-content">
        <Content question="" answer="" />
        <Content question="" answer="" />
      </div>
      <Download />
    </div>
  )
}
