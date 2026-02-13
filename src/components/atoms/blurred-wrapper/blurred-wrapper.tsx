import { BlurViewProps } from "@danielsaraldi/react-native-blur-view";
import { memo, ReactElement, useMemo } from "react";

import { StyleSheet } from "@styles";
import { useNavigation } from "@navigation/navigation.context";
import { useWindowDimensions, View, ViewStyle } from "react-native";
import Blur from "../blur/blur";

interface IProps extends Pick<BlurViewProps, "type"> {
  children: ReactElement;
  backgroundColor?: string;
  tint?: "light" | "dark";
  testID?: string;
  isVisible?: boolean;
}

const BlurredWrapper = ({
  children,
  tint = "light",
  backgroundColor = "rgba(0,0,0,.5)",
  testID,
  isVisible = true,
}: IProps) => {
  const { componentId } = useNavigation();
  const { height } = useWindowDimensions();

  const wrapperStyle = useMemo(
    () => ({
      backgroundColor,
      ...StyleSheet.absoluteFillObject,
    }),
    [backgroundColor]
  );

  const containerStyle = useMemo((): ViewStyle => {
    return {
      height,
      width: "100%",
      position: "absolute",
    };
  }, [height]);

  if (!isVisible) {
    return null;
  }

  return (
    <View style={wrapperStyle} pointerEvents={isVisible ? undefined : "none"}>
      <Blur style={wrapperStyle} targetId={componentId} type={tint}>
        <View style={containerStyle} testID={testID}>
          {children}
        </View>
      </Blur>
    </View>
  );
};

export default memo(BlurredWrapper);
