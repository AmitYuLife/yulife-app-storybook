import { FitKitAuthOptions, FitKitTypes } from "react-native-fitkit";

const Permissions: FitKitAuthOptions = {
    read: [
        FitKitTypes.Types.MindfulSession,
        FitKitTypes.Types.StepCount
    ]
};

export default Permissions;
