export default function TabLabel({ name }: { name: string }) {
  return (
    <li className="tab-nav --active">
      <span>{name}</span>
      <a href="https://www.youtube.com/" target="_blank">
        <i className="icon icon-33"></i>
        <span>瀏覽模型網站</span>
      </a>
      <div className="close-tab-btn">
        <i></i>
      </div>
    </li>
  )
}
