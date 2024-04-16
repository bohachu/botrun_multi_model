import Message from "./Message"

export default function Content({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="tab-content">
      <div className="br-chat-display">
        <div className="br-chat-item">
          <div className="avatar-block">
            <div className="name">提問</div>
          </div>
          <div className="br-chat-block">
            <Message content={question} />
          </div>
          <div className="br-chatfn-block">
            <button className="br-btn icon-only square no-border">
              <i className="icon icon-26"></i>
            </button>
            <button className="br-btn icon-only square no-border">
              <i className="icon icon-30"></i>
            </button>
          </div>
        </div>

        <div className="br-chat-item">
          <div className="avatar-block">
            <div className="name">回答</div>
          </div>
          <div className="br-chat-block">
            <Message content={answer} />
          </div>
          <div className="br-chatfn-block">
            <button className="br-btn icon-only square no-border">
              <i className="icon icon-26"></i>
            </button>
            <button className="br-btn icon-only square no-border">
              <i className="icon icon-30"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
