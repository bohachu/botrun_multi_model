import { useState } from "react"
import { models } from "@/samples"
import useBotrunWebSocket from "@/hooks/useBotrunWebSocket"
import { MessageProps } from "@/types"
// import useModel from "@/hooks/useModel"

type PanelProps = {
  setMessages: React.Dispatch<React.SetStateAction<MessageProps[]>>
}

export default function Index({ setMessages }: PanelProps) {
  // const { data: models } = useModel()
  const [selectedCollection, setSelectedCollection] = useState("")
  const [selectedModelLeft, setSelectedModelLeft] = useState(models.list[0])
  const [selectedModelRight, setSelectedModelRight] = useState(models.list[0])

  const { sendJsonMessage } = useBotrunWebSocket({ setMessages })

  const handleCollectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value
    const pair = models.pairs.find(p => p.name === selected)
    setSelectedCollection(selected)
    if (pair) {
      setSelectedModelLeft(pair.models.model1)
      setSelectedModelRight(pair.models.model2)
    }
  }

  const handleModelLeftChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModelLeft(event.target.value)
  }

  const handleModelRightChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModelRight(event.target.value)
  }

  return (
    <div className="panel-container">
      <div className="form-container">
        <div className="form-item">
          <div className="field">選擇比較模型</div>
          <div className="value">
            <select
              name=""
              id="module-colet"
              className="collection"
              value={selectedCollection}
              onChange={handleCollectionChange}
            >
              <option value="" disabled>
                選擇測試的組合
              </option>
              {models.pairs.map(p => (
                <option key={`model-1-${p.name}`} value={p.name}>
                  {p.name}
                </option>
              ))}
            </select>

            <select
              name=""
              id="module-left"
              value={selectedModelLeft}
              onChange={handleModelLeftChange}
            >
              {models.list.map(m => (
                <option key={`model-1-${m}`} value={m}>
                  {m}
                </option>
              ))}
            </select>
            <select
              name=""
              id="module-right"
              value={selectedModelRight}
              onChange={handleModelRightChange}
            >
              {models.list.map(m => (
                <option key={`model-2-${m}`} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-item">
          <div className="field">提問</div>
          <div className="value">
            <textarea name="" cols={30} rows={10}></textarea>
          </div>
        </div>
      </div>
      <div className="fn-area">
        <button className="br-btn large full obvious">
          <span>提問</span>
        </button>
      </div>
    </div>
  )
}
