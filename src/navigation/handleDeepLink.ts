import { store } from "../redux/_core/store";
import { GET_HISTORICAL_DATA } from "../redux/daily-steps/daily-steps.actions";
import { labels } from "./root";

export default function handleDeepLink(fullUrl: string) {
    const url = fullUrl.replace("yulifeapp://yulife/", "");
    switch (url) {
        case labels[0].name:
            labels[0].onPress();
            return;
        case labels[1].name:
            labels[1].onPress();
            return;
        case labels[2].name:
            labels[2].onPress();
            return;
        case "historical-data":
            store.dispatch({ type: GET_HISTORICAL_DATA });
            return;
        case "feedback":
        default:
            return;
    }
}
