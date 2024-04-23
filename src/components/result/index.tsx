import { useRecoilValue } from "recoil"
import { userInputState } from "@utils/atoms"
import TabLabel from "./TabLabel"
import Content from "./Content"
import Download from "./Download"

type ResultPorps = {
  model1Message: string
  model2Message: string
}

export default function Index({ model1Message, model2Message }: ResultPorps) {
  const userInput = useRecoilValue(userInputState)

  const downloadData = [
    { question: userInput?.question, model: userInput?.model1, answer: "" },
    { question: userInput?.question, model: userInput?.model2, answer: "" },
  ]

  return (
    <div className="result-container">
      <ul id="tabs-nav" className="tabs-nav">
        {<TabLabel name={userInput?.model1} />}
        {<TabLabel name={userInput?.model2} />}
      </ul>
      <div id="tabs-content" className="tabs-content">
        <Content model={userInput?.model1} question={userInput?.question} answer={model1Message} />
        <Content model={userInput?.model2} question={userInput?.question} answer={model2Message} />
      </div>
      {userInput?.question ? <Download data={downloadData} /> : null}
    </div>
  )
}
