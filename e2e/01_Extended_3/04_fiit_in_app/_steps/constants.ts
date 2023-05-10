import { MEDIA_10, MEDIA_11, MEDIA_2, MEDIA_3, MEDIA_4, MEDIA_5, MEDIA_6, MEDIA_7, MEDIA_8, MEDIA_9 } from "@data"
import { FIIT_LOGO, MEDIA_SMALL_LOGO } from "@ids"
import { fiitCategoryList, fiitCopy, FiitMediaList } from "./types"

export const fiitInfo: fiitCopy = {
  title: "Workout collections",
  description: "Free classes powered by",
  logo: FIIT_LOGO,
  smallLogo: MEDIA_SMALL_LOGO("https://yulife-develop.imgix.net/logos/fiit-logo-icon-with-bg.png?ixlib=js-3.2.1&fit=clip&fm=png&s=cea31b62c641ed467b2966ba838e7a69"),
  challengeName: "fiit",
  duration: "10 mins",
}

export const fiitRebalanceMedia: FiitMediaList = [
  MEDIA_7,
  MEDIA_8,
  MEDIA_9,
  MEDIA_10,
  MEDIA_11
]

export const fiitStrengthMedia: FiitMediaList = [
  MEDIA_2,
  MEDIA_3,
]

export const fiitCardioMedia: FiitMediaList = [
  MEDIA_4,
  MEDIA_5,
  MEDIA_6,
]

export const fiitCategories: fiitCategoryList = [
  {
    title: "Strength",
    description: "Target muscles across your entire body.",
    media: fiitStrengthMedia,
  },
  {
    title: "Cardio",
    description: "Want to lose weight and tone up?",
    media: fiitCardioMedia,
  },
  {
    title: "Rebalance",
    description: "Discover the benefits of yoga, pilates and mindfulness.",
    media: fiitRebalanceMedia,
  },
]
