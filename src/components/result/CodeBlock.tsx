import SyntaxHighlighter from "react-syntax-highlighter"
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs"

type CodeBlockProps = {
  match: RegExpExecArray | null
  children: React.ReactNode
}

export default function CodeBlock({ match, children }: CodeBlockProps) {
  const language = match ? match[1] : "unkown"
  const content = String(children).replace(/\n$/, "")
  const handleCopy = () => {}
  return (
    <div className={`code-style-container`}>
      <div className="code-style-top">
        <strong>{language}</strong>
        <div className="fn">
          <button className="br-btn icon-only square no-border" onClick={handleCopy}>
            <i className="icon icon-26"></i>
          </button>
        </div>
      </div>
      <div className={`code-style-body`}>
        <SyntaxHighlighter language={language} style={darcula}>
          {content}
        </SyntaxHighlighter>
      </div>
      <div className={`code-style-bottom`}>Boosted by Botrun.ai</div>
    </div>
  )
}
