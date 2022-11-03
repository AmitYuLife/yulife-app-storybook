import moment = require("moment");
export const twoDaysAgoDate = moment().subtract(2, 'days').format('DD')