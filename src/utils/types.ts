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
