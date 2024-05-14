import { useRecoilState } from "recoil"
import { downloadDataState } from "@utils/atoms"
import Tooltip from "@mui/material/Tooltip"
import Slider from "@mui/material/Slider"
import InfoIcon from "@mui/icons-material/Info"
import { DownloadData } from "@/types"

type FeedbackItemProps = {
  title: string
  description: string
  value: number
  onChange: (newValue: number) => void
}

function FeedbackItem({ title, description, value, onChange }: FeedbackItemProps) {
  const handleChange = (event: Event, newValue: number | number[]) => {
    onChange(newValue as number)
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
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={10}
        value={value}
        onChange={handleChange}
      />
    </>
  )
}

export default function Feedback({ index }: { index: number }) {
  const [downloadData, setDownloadData] = useRecoilState(downloadDataState)
  const modelData = downloadData[index]

  const handleSliderChange = (field: keyof DownloadData, newValue: number) => {
    if (modelData) {
      const updatedData = downloadData.map((data, i) =>
        i === index ? { ...data, [field]: newValue } : data
      )
      setDownloadData(updatedData)
    }
  }

  if (!modelData) {
    return <div>Loading...</div>
  }

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
        <FeedbackItem
          title="可用性"
          description="123"
          value={modelData.availability}
          onChange={newValue => handleSliderChange("availability", newValue)}
        />
        <FeedbackItem
          title="真實性"
          description="123"
          value={modelData.authenticity}
          onChange={newValue => handleSliderChange("authenticity", newValue)}
        />
        <FeedbackItem
          title="完整性"
          description="123"
          value={modelData.integrity}
          onChange={newValue => handleSliderChange("integrity", newValue)}
        />
        <FeedbackItem
          title="即時性"
          description="123"
          value={modelData.timeliness}
          onChange={newValue => handleSliderChange("timeliness", newValue)}
        />
      </div>
    </>
  )
}
