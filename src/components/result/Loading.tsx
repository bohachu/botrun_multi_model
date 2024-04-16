import React from "react"

export default function Loading({ model }: { model: string }) {
  return (
    <div className="br-init">
      <div className="loader-container">
        <span className="loader"></span>
      </div>
      <span className="bling">
        <strong>{model}</strong> 回答中
      </span>
    </div>
  )
}
