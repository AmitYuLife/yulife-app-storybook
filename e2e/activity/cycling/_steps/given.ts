import { sendReduxEvent } from "@socket";

export { loginAsUser, loginToYuScreen, logInAndGoToTab } from "../../_common/given";

export const triggerAppUpdateState = async (): Promise<void> => {
  await sendReduxEvent({ type: "UPDATE_APP_STATE", payload: { appState: "active" } });
};
