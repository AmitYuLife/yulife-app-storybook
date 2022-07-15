import moment = require("moment");
export const yesterdaysDateDaysOnly = moment().subtract(1, "days").date().toString()
