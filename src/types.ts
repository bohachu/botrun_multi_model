export type TokenProps = {
  tokenType: string
  accessToken: string
  refreshToken: string
}

export type UserStateProps = {
  username: string
  email: string
  name: string
  is_disabled: boolean
  is_admin: boolean
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
