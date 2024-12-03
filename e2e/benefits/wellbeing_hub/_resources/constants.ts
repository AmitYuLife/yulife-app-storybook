import moment from "moment";

export const nextClaimDate = moment().add(1, "y").subtract(1, "month").format("DD MMM YYYY")

// have a question section

export const haveAQuestionHeader = "Have a question? "
export const haveAQuestionText = "Chat to us through the app, or read more from our Help Centre."
export const helpCentreButtonText = "Help Centre "