import { useRecoilValue } from "recoil"
import { userInputState } from "@utils/atoms"
import { MessageProps } from "@/types"
import TabLabel from "./TabLabel"
import Content from "./Content"
import Download from "./Download"

type ResultProps = {
  messages: MessageProps[]
}

export default function Index({ messages }: ResultProps) {
  const userInput = useRecoilValue(userInputState)

  return (
    <div className="result-container">
      <ul id="tabs-nav" className="tabs-nav">
        {<TabLabel name={userInput?.model1} />}
        {<TabLabel name={userInput?.model2} />}
      </ul>
      <div id="tabs-content" className="tabs-content">
        <Content model={userInput?.model1} question={userInput?.question} answer="" />
        <Content model={userInput?.model2} question={userInput?.question} answer="" />
      </div>
      <Download />
    </div>
  )
}
