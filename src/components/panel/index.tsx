import { useRef, useState, useEffect } from "react"
import useBotrunWebSocket from "@/hooks/useBotrunWebSocket"
import { useRecoilState } from "recoil"
import { userInputState, userAuthState } from "@utils/atoms"
import useModel from "@/hooks/useModel"

type PanelProps = {
  setModel1Message: React.Dispatch<React.SetStateAction<string>>
  setModel2Message: React.Dispatch<React.SetStateAction<string>>
}

export default function Index({ setModel1Message, setModel2Message }: PanelProps) {
  const { data: models } = useModel()
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const [text, setText] = useState("")
  const [isComposing, setIsComposing] = useState(false)
  const [selectedCollection, setSelectedCollection] = useState("")
  const [selectedModelLeft, setSelectedModelLeft] = useState("")
  const [selectedModelRight, setSelectedModelRight] = useState("")
  const [, setUserInput] = useRecoilState(userInputState)
  const [user, setUser] = useRecoilState(userAuthState)

  const { sendJsonMessage } = useBotrunWebSocket({ setModel1Message, setModel2Message })

  const handleCollectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value
    const pair = models?.pairs.find(p => p.name === selected)
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
  function handleSend() {
    if (text.trim() === "") return
    setModel1Message("")
    setModel2Message("")
    sendJsonMessage({
      user_input: text,
      jwt_token: user?.token,
      model1: selectedModelLeft,
      model2: selectedModelRight,
      session_id: "new",
    })
    setUserInput({
      question: text,
      model1: selectedModelLeft,
      model2: selectedModelRight,
    })
    setText("")
    textareaRef.current?.focus()
  }
  function handleLogout() {
    setUser(null)
  }
  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value)
  }
  function onKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.shiftKey && event.key === "Enter") {
    } else if (event.key === "Enter" && !isComposing) {
      handleSend()
      event.preventDefault()
    }
  }
  const handleCompositionStart: React.CompositionEventHandler<HTMLTextAreaElement> = () => {
    setIsComposing(true)
  }
  const handleCompositionEnd: React.CompositionEventHandler<HTMLTextAreaElement> = () => {
    setIsComposing(false)
  }

  useEffect(() => {
    if (!textareaRef.current) return
    textareaRef.current.focus()
  }, [textareaRef])

  useEffect(() => {
    if (models) {
      setSelectedModelLeft(models.list[0])
      setSelectedModelRight(models.list[0])
    }
  }, [models])

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
              {models?.pairs.map(p => (
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
              {models?.list.map(m => (
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
              {models?.list.map(m => (
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
            <textarea
              ref={textareaRef}
              cols={30}
              rows={10}
              value={text}
              onChange={handleChange}
              onKeyDown={onKeyDown}
              onCompositionStart={handleCompositionStart}
              onCompositionEnd={handleCompositionEnd}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="fn-area">
        <button className="br-btn large full obvious" onClick={handleSend}>
          <span>提問</span>
        </button>
      </div>
      <button className="br-btn large full obvious" onClick={handleLogout}>
        <span>登出</span>
      </button>
    </div>
  )
}
