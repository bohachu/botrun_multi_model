export default function TabLabel({ name }: { name: string }) {
  return (
    <li className="tab-nav --active">
      <span>{name}</span>
      <div className="close-tab-btn">
        <i></i>
      </div>
    </li>
  )
}
