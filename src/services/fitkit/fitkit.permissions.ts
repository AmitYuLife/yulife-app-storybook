import { FitKitAuthOptions, FitKitTypes } from "react-native-fitkit";

const Permissions: FitKitAuthOptions = {
    read: [
        FitKitTypes.Types.Mindfulness,
        FitKitTypes.Types.Steps
    ]
};

export default Permissions;
