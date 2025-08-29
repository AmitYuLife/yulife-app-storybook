import {
  ImageStyle,
  TextStyle,
  ViewStyle,
  StyleProp,
  // eslint-disable-next-line no-restricted-imports
  StyleSheet as RNStyleSheet,
} from "react-native";

export type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export class StyleSheet {
  static create<T extends NamedStyles<T> | NamedStyles<any>>(styles: T & NamedStyles<any>): T {
    return RNStyleSheet.create(styles);
  }

  static flatten<T>(style?: StyleProp<T>): T extends (infer U)[] ? U : T {
    return RNStyleSheet.flatten(style);
  }

  static absoluteFill = RNStyleSheet.absoluteFill;
  static absoluteFillObject = RNStyleSheet.absoluteFillObject;
  static hairlineWidth = RNStyleSheet.hairlineWidth;
}
