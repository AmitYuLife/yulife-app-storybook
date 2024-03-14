import { sendMessage } from "@yu-life/react-native-yu-watch";

export default function* yuWatchRefetchActiveChallengeSaga() {
  try {
    yield sendMessage({ type: "RefetchChallenges" });
  } catch (error) {
    // Probably a session unreachable error, we don't care. Fire and forget
  }
}
