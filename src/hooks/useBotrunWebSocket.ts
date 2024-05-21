import { userInputProps } from "@/types"
import { Preview } from "@mui/icons-material"
import useWebSocket from "react-use-websocket"
import { SetterOrUpdater } from "recoil"

type WebSocketProps = {
  setModel1Message: React.Dispatch<React.SetStateAction<string>>
  setModel2Message: React.Dispatch<React.SetStateAction<string>>
  setUserInput: SetterOrUpdater<userInputProps>
}

export default function useBotrunWebSocket(props: WebSocketProps) {
  const { setModel1Message, setModel2Message, setUserInput } = props
  const webSocketUrl = process.env.REACT_APP_WEB_SOCKET_URL + "/chat" ?? "ws://localhost:8000/chat"

  const onMessage = (event: WebSocketEventMap["message"]) => {
    const data = event.data
    const parsedData = JSON.parse(data)

    if (parsedData.model1) setModel1Message(prev => prev + parsedData.model1)
    if (parsedData.model1Stop) setUserInput(prev => ({ ...prev, isModel1Finish: true }))

    if (parsedData.model2) setModel2Message(prev => prev + parsedData.model2)
    if (parsedData.model2Stop) setUserInput(prev => ({ ...prev, isModel2Finish: true }))
  }

  return useWebSocket(webSocketUrl, {
    shouldReconnect: closeEvent => true,
    onMessage,
    reconnectAttempts: 10,
  })
}
