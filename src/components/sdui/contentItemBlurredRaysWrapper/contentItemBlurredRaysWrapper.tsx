import React, { memo } from "react";
import { Dimensions } from "react-native";
import { GetSduiJourneyQuery, ContentItemBlurredRaysWrapperFragment as Props } from "@graphql/__generated";
import { BlurredRaysWrapper } from "@organisms";
import { parseJSON } from "@utils";
import { Renderer } from "../_renderer/renderer";
import { useSduiCallbackFunctionOrReduxAction } from "../_hooks";
import Box from "@atoms/box/box";
import { Style } from "@styles";
import { BLURRED_RAYS_Y_OFFSET } from "@organisms/blurred-rays-wrapper/blurred-rays-wrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { height: screenHeight } = Dimensions.get("screen");

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
    const { bottom } = useSafeAreaInsets();

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

    return (
      <Box mb={-bottom} height={Style.DEVICE_HEIGHT} disableAutoAdjust={true}>
        <BlurredRaysWrapper
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
        >
          <>
            {data.filter(Boolean).map((dataItem) => (
              <Renderer key={(dataItem as { id: string }).id} item={dataItem} />
            ))}
            {isCentrePieceValid && centrePieceData && (
              <Box
                position="absolute"
                top={screenHeight / 2.2 - BLURRED_RAYS_Y_OFFSET / 1.9 - centrePieceHeight / 2}
                left={0}
                right={0}
                justifyContent="center"
                alignItems="center"
                disableAutoAdjust={true}
              >
                <Renderer item={centrePieceData} />
              </Box>
            )}
          </>
        </BlurredRaysWrapper>
      </Box>
    );
  }
);
