import { useRecoilState, useRecoilValue } from "recoil"
import { userInputState, downloadDataState } from "@utils/atoms"
import TabLabel from "./TabLabel"
import Content from "./Content"
import Download from "./Download"
import { useEffect } from "react"
import { ModelItem } from "@/types"
import useModel from "@/hooks/useModel"

type ResultPorps = {
  model1Message: string
  model2Message: string
}

export default function Index({ model1Message, model2Message }: ResultPorps) {
  const { data: models } = useModel()
  const userInput = useRecoilValue(userInputState)
  const [downloadData, setDownloadData] = useRecoilState(downloadDataState)

  useEffect(() => {
    setDownloadData([
      {
        question: userInput?.question,
        model: userInput?.model1,
        answer: model1Message,
        availability: 5,
        authenticity: 5,
        integrity: 5,
        timeliness: 5,
      },
      {
        question: userInput?.question,
        model: userInput?.model2,
        answer: model2Message,
        availability: 5,
        authenticity: 5,
        integrity: 5,
        timeliness: 5,
      },
    ])
  }, [userInput, model1Message, model2Message])

  return (
    <div className="result-container">
      <ul id="tabs-nav" className="tabs-nav">
        {<TabLabel {...(models?.list.find(m => m.model === userInput?.model1) as ModelItem)} />}
        {<TabLabel {...(models?.list.find(m => m.model === userInput?.model2) as ModelItem)} />}
      </ul>
      <div id="tabs-content" className="tabs-content">
        <Content
          showFeedback={userInput.isModel1Finish}
          model={userInput?.model1}
          question={userInput?.question}
          answer={model1Message}
          index={0}
        />
        <Content
          showFeedback={userInput.isModel2Finish}
          model={userInput?.model2}
          question={userInput?.question}
          answer={model2Message}
          index={1}
        />
      </div>
      {userInput.isModel1Finish && userInput.isModel2Finish ? (
        <Download data={downloadData} />
      ) : null}
    </div>
  )
}
