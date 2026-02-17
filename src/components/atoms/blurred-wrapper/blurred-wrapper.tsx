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
  isBlurred?: boolean;
  contentStyle?: ViewStyle;
}

const BlurredWrapper = ({
  children,
  tint = "light",
  backgroundColor = "rgba(0,0,0,.5)",
  testID,
  isVisible = true,
  isBlurred = true,
  contentStyle,
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
      ...contentStyle,
    };
  }, [height, contentStyle]);

  if (!isVisible) {
    return null;
  }

  if (!isBlurred) {
    return (
      <View style={wrapperStyle} pointerEvents={isVisible ? undefined : "none"}>
        <View style={containerStyle} testID={testID}>
          {children}
        </View>
      </View>
    );
  }

  const blurContainer = isBlurred ? (
    <Blur style={wrapperStyle} targetId={componentId} type={tint}>
      {children}
    </Blur>
  ) : (
    <View style={wrapperStyle} testID={testID}>
      {children}
    </View>
  );

  return (
    <View style={wrapperStyle} pointerEvents={isVisible ? undefined : "none"}>
      {blurContainer}
    </View>
  );
};

export default memo(BlurredWrapper);
