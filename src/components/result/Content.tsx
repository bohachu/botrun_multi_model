import ChatItem from "./ChatItem"

export default function Content({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="tab-content">
      <div className="br-chat-display">
        <ChatItem title="提問" content={question} sender="self" />
        <ChatItem title="回答" content={answer} sender="system" />
      </div>
    </div>
  )
}
