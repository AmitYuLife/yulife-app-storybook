import { navigateViaText } from "../../_common/given";

export { loginAsUser } from "../../_common/given";

export const continueLoginAfterStreak = async () => {
  await navigateViaText("let’s begin");
};
