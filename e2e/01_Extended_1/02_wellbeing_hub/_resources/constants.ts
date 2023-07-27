import moment from "moment";

export const nextClaimDate = moment().add(1, "y").subtract(31, "d").format("DD MMM YYYY")