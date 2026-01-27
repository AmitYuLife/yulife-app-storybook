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

const THROTTLE_MS = 100;

const PathwaysVisibilityWrapper: React.FC<IPathwaysVisibilityWrapperProps> = memo(
  ({ scrollY, onScrollIntoView, children }) => {
    const viewRef = useRef<View>(null);
    const hasTrackedRef = useRef(false);
    const lastCheckRef = useRef(0);
    const { height: windowHeight } = useWindowDimensions();
    const { handleSduiAction } = useSduiCallbackFunctionOrReduxAction(onScrollIntoView);

    const checkVisibility = useCallback(() => {
      if (hasTrackedRef.current || !viewRef.current || !onScrollIntoView) {
        return;
      }

      const now = Date.now();
      if (now - lastCheckRef.current < THROTTLE_MS) {
        return;
      }

      lastCheckRef.current = now;

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
