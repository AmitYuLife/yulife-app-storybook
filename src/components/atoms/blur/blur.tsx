import { BlurView, BlurViewProps } from "@danielsaraldi/react-native-blur-view";
import { StyleSheet } from "@styles";

export type IBlurProps = BlurViewProps;

export default function Blur(props: IBlurProps) {
  return <BlurView style={StyleSheet.absoluteFillObject} {...props} />;
}
