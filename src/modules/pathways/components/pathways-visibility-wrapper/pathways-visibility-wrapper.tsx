import { memo, useCallback, useRef, ReactNode } from "react";
import { View, useWindowDimensions } from "react-native";
import { SharedValue, runOnJS, useAnimatedReaction } from "react-native-reanimated";
import { useSduiCallbackFunctionOrReduxAction } from "@components/sdui/_hooks/useSduiCallbackFunctionOrReduxAction";
import { VoidFunctionOrSduiActionPayload } from "@components/sdui/_types/sdui.types";

interface IPathwaysVisibilityWrapperProps {
  scrollY?: SharedValue<number>;
  onScrollIntoView?: VoidFunctionOrSduiActionPayload;
  children: ReactNode;
}

const PathwaysVisibilityWrapper: React.FC<IPathwaysVisibilityWrapperProps> = memo(
  ({ scrollY, onScrollIntoView, children }) => {
    const viewRef = useRef<View>(null);
    const hasTrackedRef = useRef(false);
    const { height: windowHeight } = useWindowDimensions();
    const { handleSduiAction } = useSduiCallbackFunctionOrReduxAction(onScrollIntoView);

    const checkVisibility = useCallback(() => {
      if (hasTrackedRef.current || !viewRef.current || !onScrollIntoView) {
        return;
      }

      viewRef.current.measureInWindow((_x, y, _width, height) => {
        if (hasTrackedRef.current) {
          return;
        }

        const isVisible = y + height > 0 && y < windowHeight;

        if (isVisible) {
          hasTrackedRef.current = true;
          handleSduiAction();
        }
      });
    }, [onScrollIntoView, windowHeight, handleSduiAction]);

    useAnimatedReaction(
      () => scrollY?.value ?? 0,
      () => {
        runOnJS(checkVisibility)();
      }
    );

    return (
      <View ref={viewRef} onLayout={checkVisibility}>
        {children}
      </View>
    );
  }
);

export default PathwaysVisibilityWrapper;
