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

export type userInputProps = {
  question: string
  model1: string
  isModel1Finish: boolean
  model2: string
  isModel2Finish: boolean
}

export type DownloadData = {
  question: string
  model: string
  answer: string
  availability: number
  authenticity: number
  integrity: number
  timeliness: number
}

export type ModelItem = {
  model: string
  link: string
}
