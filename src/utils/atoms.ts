import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"
import { UserStateProps, userInputProps, DownloadData } from "@/types"

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

export const downloadDataState = atom<DownloadData[]>({
  key: "downloadDataState",
  default: [
    {
      question: "",
      model: "",
      answer: "",
      availability: 5,
      authenticity: 5,
      integrity: 5,
      timeliness: 5,
    },
    {
      question: "",
      model: "",
      answer: "",
      availability: 5,
      authenticity: 5,
      integrity: 5,
      timeliness: 5,
    },
  ],
})
