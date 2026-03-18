import { Platform } from "react-native";
import NativeYuHealth, { Spec } from "./NativeYuHealth";

const LINKING_ERROR =
  `The package '@yu-life/react-native-yu-health' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: "" }) +
  "- You rebuilt the app after installing the package\n";

const YuHealthModule: Spec = NativeYuHealth
  ? NativeYuHealth
  : new Proxy(
      {} as Spec,
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export { YuHealthModule };
