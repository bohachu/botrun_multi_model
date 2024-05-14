import Tooltip from "@mui/material/Tooltip"
import Slider from "@mui/material/Slider"
import InfoIcon from "@mui/icons-material/Info"

function FeedbackItem({ title, description }: { title: string; description: string }) {
  const handleChange = (event: Event, newValue: number | number[]) => {
    // setValue(newValue as number)
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "13px",
        }}
      >
        <label>{title}</label>
        <Tooltip title={description} placement="top" arrow>
          <InfoIcon />
        </Tooltip>
      </div>
      <Slider
        aria-label={title}
        defaultValue={5}
        valueLabelDisplay="auto"
        shiftStep={3}
        step={1}
        marks
        min={0}
        max={10}
        // value={value}
        onChange={handleChange}
      />
    </>
  )
}

export default function Feedback() {
  return (
    <>
      <div className="br-chat-item system">
        <div className="avatar-block">
          <div className="name">系統</div>
        </div>
        <div className="br-chat-block">
          <div className="markdown-wrapper">
            <p>問答結束</p>
          </div>
        </div>
      </div>
      <div className="br-chat-item" style={{ margin: 0 }}>
        <div className="avatar-block">
          <div className="name">回饋</div>
        </div>
      </div>
      <div style={{ padding: "0 24px" }}>
        <FeedbackItem title="可用性" description="123" />
        <FeedbackItem title="真實性" description="123" />
        <FeedbackItem title="完整性" description="123" />
        <FeedbackItem title="即時性" description="123" />
      </div>
    </>
  )
}
