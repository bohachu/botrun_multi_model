export default function Indicator({ text }: { text: string }) {
  return (
    <div className="br-init">
      <div className="loader-container">
        <span className="loader"></span>
        <i className="icon icon-15"></i>
      </div>
      <span className="bling">{text}</span>
    </div>
  )
}
