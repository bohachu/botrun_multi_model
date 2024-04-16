import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"
import { TokenProps, UserStateProps, userInputProps } from "@/types"

const { persistAtom } = recoilPersist()
export const authTokenState = atom<TokenProps | null>({
  key: "authTokenState",
  default: null,
  effects_UNSTABLE: [persistAtom],
})

export const authUserState = atom<UserStateProps | null>({
  key: "authUserState",
  default: null,
  effects_UNSTABLE: [persistAtom],
})

export const userInputState = atom<userInputProps>({
  key: "userInputState",
  default: {
    question: "",
    model1: "",
    model2: "",
  },
})
