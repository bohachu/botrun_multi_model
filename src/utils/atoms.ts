import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"
import { UserStateProps, userInputProps } from "@/types"

const { persistAtom } = recoilPersist()
export const userAuthState = atom<UserStateProps | null>({
  key: "userAuthState",
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
