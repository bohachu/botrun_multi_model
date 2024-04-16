import { useEffect, useState } from "react"
import useWebSocket from "react-use-websocket"
import { MessageProps } from "@/types"

type WebSocketProps = {
  setMessages: React.Dispatch<React.SetStateAction<MessageProps[]>>
}

export default function useBotrunWebSocket(props: WebSocketProps) {
  const { setMessages } = props
  const webSocketUrl = process.env.REACT_APP_WEB_SOCKET_URL || "ws://localhost:8000/chat"

  const onMessage = (event: WebSocketEventMap["message"]) => {
    const data = event.data
    console.log(data)
  }

  return useWebSocket(webSocketUrl, {
    shouldReconnect: closeEvent => true,
    onMessage,
    reconnectAttempts: 10,
  })
}
