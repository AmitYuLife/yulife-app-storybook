import { memo } from "react";
import { GetSduiJourneyQuery, ContentItemBlurredRaysWrapperFragment as Props } from "@graphql/__generated";
import { BlurredRaysWrapper } from "@organisms";
import { isiOS, parseJSON } from "@utils";
import { Renderer } from "../_renderer/renderer";
import { useSduiCallbackFunctionOrReduxAction } from "../_hooks";
import Box from "@atoms/box/box";
import { BLURRED_RAYS_Y_OFFSET } from "@organisms/blurred-rays-wrapper/blurred-rays-wrapper";
import { useSafeAreaFrame, useSafeAreaInsets } from "react-native-safe-area-context";
import { TOP_BAR_WITH_PAD } from "@styles/top-bar.styles";

type Body = GetSduiJourneyQuery["getSduiJourney"]["body"];

export const ContentItemBlurredRaysWrapper = memo(
  ({
    title,
    children,
    centrePiece,
    centrePieceHeight,
    rollingTextPreviousValue,
    rollingTextNewValue,
    buttonIsEnabled,
    buttonTestID,
    buttonLabel,
    onButtonPress,
    isLoading,
    showRays,
    testID,
    accessibilityLabelTitle,
  }: Props) => {
    const { data, isValid } = parseJSON<Body>(children);
    const { data: centrePieceData, isValid: isCentrePieceValid } = parseJSON<Body[number]>(centrePiece || "");
    const { handleSduiAction: handleButtonPress } = useSduiCallbackFunctionOrReduxAction(onButtonPress);
    const { top } = useSafeAreaInsets();
    const { height } = useSafeAreaFrame();

    if (!isValid || !data?.length) {
      return null;
    }

    const rollingTextProps =
      rollingTextPreviousValue && rollingTextNewValue
        ? {
            previousValue: rollingTextPreviousValue,
            newValue: rollingTextNewValue,
          }
        : undefined;

    const wrapperMarginTop = isiOS() ? top : 0;

    return (
      <Box height={height} mt={wrapperMarginTop} flex={1} disableAutoAdjust={true}>
        <BlurredRaysWrapper
          titlePaddingTop={TOP_BAR_WITH_PAD}
          title={title}
          rollingTextProps={rollingTextProps}
          buttonIsEnabled={buttonIsEnabled}
          buttonTestID={buttonTestID}
          buttonLabel={buttonLabel}
          onButtonPress={onButtonPress ? handleButtonPress : undefined}
          isLoading={isLoading}
          showRays={showRays}
          testID={testID}
          acceessibilityLabelTitle={accessibilityLabelTitle}
          isBlurred={false}
        >
          <>
            {data.filter(Boolean).map((dataItem) => (
              <Renderer key={(dataItem as { id: string }).id} item={dataItem} />
            ))}
            {isCentrePieceValid && centrePieceData ? (
              <Box
                position="absolute"
                top={-BLURRED_RAYS_Y_OFFSET + centrePieceHeight / 1.5}
                left={0}
                right={0}
                w="100%"
                h="100%"
                justifyContent="center"
                alignItems="center"
                pointerEvents="none"
              >
                <Renderer item={centrePieceData} />
              </Box>
            ) : null}
          </>
        </BlurredRaysWrapper>
      </Box>
    );
  }
);
