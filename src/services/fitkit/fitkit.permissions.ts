import { FitKitAuthOptions, FitKitTypes } from "@services/fitkit/fitkit.service";

const Permissions: FitKitAuthOptions = {
    read: [
        FitKitTypes.Types.MindfulSession,
        FitKitTypes.Types.StepCount
    ]
};

export default Permissions;
