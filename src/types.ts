export type TokenProps = {
  tokenType: string
  accessToken: string
  refreshToken: string
}

export type UserStateProps = {
  token: string
  type: string
  username: string
}

export type MessageProps = {
  name: string
  message: string
}

export type userInputProps = {
  question: string
  model1: string
  model2: string
}
