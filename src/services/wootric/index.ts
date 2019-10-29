import RNWootric from "@wootric/react-native-wootric";
import moment from "moment";
import Config from "react-native-config";
import DeviceInfo from "react-native-device-info";

interface IUserIdentity {
    wootricId: string;
    businessAccountId: string;
    businessAccountName: string;
    createdAt: string;
    membershipType: string;
    currentLevel: number;
    hasBusinessLeaderboard: boolean;
}

class WootricClient {
    private appVersion: string = DeviceInfo.getVersion();
    private userDetailsSet: boolean = false;

    constructor() {
        RNWootric.configureWithClientID(Config.WOOTRIC_CLIENT_ID, Config.WOOTRIC_ACCOUNT_TOKEN);
        RNWootric.showOptOut(true);
        RNWootric.setEndUserProperties({ app_version: this.appVersion });

        if (Config.ENV === "dev") {
            // `surveyImmediately` is basically a flag to not check for time-based eligibility,
            // and show a survey to this user once SDK has initialized.
            // To prevent more surveys from appearing in same session, the Wootric SDK
            // stores a flag in local storage which gets cleared between sessions.
            // Other throttle mechanisms apply to each session as well.
            //
            // In summary, this lets you send multiple surveys for the same user, bypassing the usual throttles.
            // However because of the local storage flag, you'll need to restart the app each time
            // you want to see a survey.
            RNWootric.setSurveyImmediately(true);
        }
    }

    public setUserProperties = (user: IUserIdentity) => {
        RNWootric.setEndUserEmail(user.wootricId);
        RNWootric.setEndUserCreatedAt(moment.parseZone(user.createdAt).unix());
        RNWootric.setEndUserProperties({
            wootric_id: user.wootricId,
            app_version: this.appVersion,
            created_at: user.createdAt,
            last_request_at: moment().format(),
            current_level: "" + user.currentLevel, // Cast to string, to avoid android casting as a float
            businessAccountId: user.businessAccountId,
            company_name: user.businessAccountName,
            membershipType: user.membershipType,
            business_leaderboard: user.hasBusinessLeaderboard
        });

        this.userDetailsSet = true;

        RNWootric.showSurvey();
    };

    /**
     * Shows a survey to the user.
     * This will respoct any throttles set in local storage or in the wootric dashboard,
     * and according to the specific survey logic set via the wootric dashboard.
     * That is, it will only actually show a survey if all the conditions are right.
     * It will also respect the delay (5 secs by default) set in the dashboard under "Time Delay on Page".
     */
    public showSurvey() {
        if (this.userDetailsSet) {
            RNWootric.showSurvey();
        }
    }

    get client() {
        return RNWootric;
    }
}

const Wootric = new WootricClient();

export default Wootric;
