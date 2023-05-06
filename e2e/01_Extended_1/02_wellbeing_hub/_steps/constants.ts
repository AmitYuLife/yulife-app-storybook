import moment from "moment";

export const nextClaimDate = moment().add(1, "y").subtract(1, "d").subtract(1, "month").format("DD MMM YYYY")