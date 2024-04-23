import { parse } from "path"
import { useEffect, useState } from "react"
import useWebSocket from "react-use-websocket"

type WebSocketProps = {
  setModel1Message: React.Dispatch<React.SetStateAction<string>>
  setModel2Message: React.Dispatch<React.SetStateAction<string>>
}

export default function useBotrunWebSocket(props: WebSocketProps) {
  const { setModel1Message, setModel2Message } = props
  const webSocketUrl = process.env.REACT_APP_WEB_SOCKET_URL + "/chat" ?? "ws://localhost:8000/chat"

  const onMessage = (event: WebSocketEventMap["message"]) => {
    const data = event.data
    const parsedData = JSON.parse(data)

    if (parsedData.model1) setModel1Message(prev => prev + parsedData.model1)
    if (parsedData.model2) setModel2Message(prev => prev + parsedData.model2)
  }

  return useWebSocket(webSocketUrl, {
    shouldReconnect: closeEvent => true,
    onMessage,
    reconnectAttempts: 10,
  })
}
