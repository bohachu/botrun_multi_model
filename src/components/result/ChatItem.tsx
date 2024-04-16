import Message from "./Message"

type ChatItemProps = {
  title: string
  content: string
  sender: "self" | "system"
}

export default function ChatItem({ title, content, sender }: ChatItemProps) {
  const handleCopy = (text: string) => {
    if (sender !== "self") text = text + "\n[Boosted by Botrun.ai]"
    navigator.clipboard.writeText(text).catch(err => {
      console.error("[FileCopyButton] Failed to copy: ", err)
    })
  }
  return (
    <div className="br-chat-item">
      <div className="avatar-block">
        <div className="name">{title}</div>
      </div>
      <div className="br-chat-block">
        <Message content={content} handleCopy={handleCopy} />
      </div>
      <div className="br-chatfn-block">
        <button className="br-btn icon-only square no-border" onClick={() => handleCopy(content)}>
          <i className="icon icon-26"></i>
        </button>
        <button className="br-btn icon-only square no-border">
          <i className="icon icon-30"></i>
        </button>
      </div>
    </div>
  )
}
