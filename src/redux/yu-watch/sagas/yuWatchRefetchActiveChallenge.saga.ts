import { sendMessage } from "@yu-life/react-native-yu-watch";
import { YuWatchAction } from "../yu-watch.types";

export default function* yuWatchRefetchActiveChallengeSaga() {
  try {
    yield sendMessage({ type: YuWatchAction.RefreshChallenges });
  } catch {
    // Probably a session unreachable error, we don't care. Fire and forget
  }
}
