import ChatItem from "./ChatItem"
import Loading from "./Loading"

type ContentProps = {
  model: string
  question: string
  answer: string
}

export default function Content({ model, question, answer }: ContentProps) {
  return (
    <div className="tab-content">
      <div className="br-chat-display">
        <ChatItem title="提問" content={question} sender="self" />
        {answer === "" ? (
          <Loading model={model} />
        ) : (
          <ChatItem title="回答" content={answer} sender="system" />
        )}
      </div>
    </div>
  )
}
