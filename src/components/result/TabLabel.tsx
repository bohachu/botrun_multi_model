import { ModelItem } from "@/types"

export default function TabLabel({ model, link }: ModelItem) {
  return (
    <li className="tab-nav --active">
      <span>{model}</span>
      {link !== "" ? (
        <a href={link} target="_blank">
          <i className="icon icon-33"></i>
          <span>瀏覽模型網站</span>
        </a>
      ) : null}
      <div className="close-tab-btn">
        <i></i>
      </div>
    </li>
  )
}
