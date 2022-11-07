import { SduiActionWithServerPayload } from "./sdui.types";

export function getServerPayload(payload: unknown) {
  const type = typeof payload;

  if (type === "object" && !!payload) {
    return (payload as SduiActionWithServerPayload["payload"])?.serverPayload;
  }

  if (type === "string") {
    return payload as string;
  }

  return "";
}
