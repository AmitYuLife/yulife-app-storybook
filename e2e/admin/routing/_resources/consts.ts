import moment = require("moment");
export const yesterdaysMonthYear = moment().subtract(1, "month").format("MMMM YYYY");

export const locationModalTitle = "Welcome to rewards!";
export const locationModalDesc =
  "Looking to make a purchase with YuCoin? Just choose your preferred store location and start shopping! Don't worry, you can always change your store location later.";
export const locationModalButton = "Confirm selection";
export const locationModalStoreLocation = "Store location";
export const emptyWalletTitle = "Your wallet is ready to be filled!";
export const rewardSearchNoResults = "We couldn’t find the brand you’re looking for.";
