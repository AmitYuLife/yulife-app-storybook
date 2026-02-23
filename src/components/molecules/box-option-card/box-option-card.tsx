import { View, ViewStyle } from "react-native";
import { Image, TextTemplate } from "@atoms";
import { default as BoxOption } from "../box-option/box-option";
import { ContentItemButtonFragment, RemoteImage, SduiAction, VariableRemoteImage } from "@graphql/__generated";
import { Style, StyleSheet } from "@styles";
import { ComponentProps, useCallback, useRef, useState } from "react";
import { Title } from "./box-option-card.title";
import { BOX_OPTION_DESCRIPTION, BOX_OPTION_TITLE, RIGHT_SIDE_IMAGE_BOX_OPTION } from "@ids";
import { ArrowButton } from "../arrow-button";
import { useSduiCallbackFunctionOrReduxAction } from "@components/sdui/_hooks";
import { useDispatch } from "react-redux";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { VoidFunctionOrSduiActionPayload } from "@components/sdui/_types/sdui.types";
import { useTheme } from "@app/modules/themes/hooks/useTheme";

interface Props {
  title?: string;
  description?: string;
  image?: RemoteImage;
  variableImage?: VariableRemoteImage;
  resizeMode?: "center" | "stretch" | "cover" | "contain";
  onPress?: VoidFunctionOrSduiActionPayload;
  event?: SduiAction;
  descriptionTextType?: ComponentProps<typeof TextTemplate>["type"];
  innerHeight?: number;
  subtitle?: string;
  subtitleTextType?: ComponentProps<typeof TextTemplate>["type"];
  titleStyles?: ViewStyle;
  titleWrapperStyles?: ViewStyle;
  subtitleWrapperStyles?: ViewStyle;
  innerWrapperStyles?: ViewStyle;
  contentInnerWrapperStyles?: ViewStyle;
  titleNumberOfLines?: number;
  descriptionNumberOfLines?: number;
  testID?: string;
}

export const BoxOptionCard = ({
  title,
  description,
  innerHeight = 120,
  descriptionTextType = "b2",
  image,
  variableImage,
  resizeMode,
  onPress,
  event,
  subtitle,
  subtitleTextType = "l2b",
  titleWrapperStyles = {},
  titleStyles = {},
  subtitleWrapperStyles = {},
  innerWrapperStyles = {},
  contentInnerWrapperStyles = {},
  titleNumberOfLines,
  descriptionNumberOfLines,
}: Props) => {
  const dispatch = useDispatch();

  const [adjustedInnerHeight, setAdjustedInnerHeight] = useState(innerHeight);

  const contentWrapperRef = useRef(null as View);

  const handleLayout = () => {
    contentWrapperRef.current.measure((_fx, _fy, _width, height, _px, _py) => {
      const contentHeightAdjustedForMargins = height + 20;
      setAdjustedInnerHeight(
        contentHeightAdjustedForMargins > innerHeight ? contentHeightAdjustedForMargins : innerHeight
      );
    });
  };

  const eventCallback = useCallback(() => {
    const safeEventObj: Partial<ContentItemButtonFragment["event"]> = event || { payload: null };
    const payload = JSON.parse(safeEventObj.payload);
    const safePayloadObj = payload || {};
    dispatch(
      logMixpanelEventActionCreator(
        safePayloadObj.name || "button_pressed",
        safePayloadObj.props || { sdui_location: "app" }
      )
    );
  }, [event, dispatch, logMixpanelEventActionCreator]);

  const { handleSduiAction } = useSduiCallbackFunctionOrReduxAction(onPress, eventCallback);

  const imageUri = variableImage?.image.uri || image?.uri;
  const { theme } = useTheme();

  return (
    <BoxOption
      onPress={onPress ? handleSduiAction : null}
      isSelected={false}
      wrapperStyle={styles.wrapper}
      innerHeight={Style.adjust(adjustedInnerHeight)}
    >
      <View style={StyleSheet.flatten([styles.innerWrapper, innerWrapperStyles])}>
        {!imageUri ? null : (
          <View style={styles.imageWrapper}>
            <Image
              height={Style.adjust(variableImage ? variableImage.height ?? variableImage.width : 104)}
              width={Style.adjust(variableImage ? variableImage.width : 120)}
              source={{ uri: imageUri }}
              testID={RIGHT_SIDE_IMAGE_BOX_OPTION(imageUri)}
              resizeMode={resizeMode}
            />
          </View>
        )}
        <View onLayout={handleLayout} ref={contentWrapperRef} style={styles.contentWrapper}>
          <View
            style={StyleSheet.flatten([styles.contentInnerWrapper, contentInnerWrapperStyles])}
            testID={BOX_OPTION_DESCRIPTION(description)}
          >
            {!title ? null : (
              <View
                style={StyleSheet.flatten([styles.titleWrapper, titleWrapperStyles])}
                testID={BOX_OPTION_TITLE(title)}
              >
                <Title style={titleStyles} numberOfLines={titleNumberOfLines}>
                  {title}
                </Title>
              </View>
            )}
            {!subtitle ? null : (
              <View style={StyleSheet.flatten([styles.subtitleWrapper, subtitleWrapperStyles])}>
                <TextTemplate type={subtitleTextType}>{subtitle}</TextTemplate>
              </View>
            )}
            {!description ? null : (
              <TextTemplate numberOfLines={descriptionNumberOfLines} type={descriptionTextType}>
                {description}
              </TextTemplate>
            )}
          </View>
        </View>
        {!onPress ? null : (
          <View style={styles.arrowWrapper}>
            <ArrowButton color={theme.colors.primary.p600} />
          </View>
        )}
      </View>
    </BoxOption>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: Style.adjust(16),
  },
  innerWrapper: {
    width: "100%",
    padding: Style.adjust(8),
    flexDirection: "row",
    alignItems: "flex-start",
  },
  imageWrapper: {
    borderRadius: Style.adjust(12),
    overflow: "hidden",
  },
  contentWrapper: {
    flex: 1,
    flexDirection: "column",
    marginStart: Style.adjust(16),
  },
  contentInnerWrapper: {
    justifyContent: "center",
  },
  titleWrapper: {
    marginBottom: Style.adjust(8),
  },
  subtitleWrapper: {
    marginBottom: Style.adjust(4),
  },
  arrowWrapper: {
    alignSelf: "center",
    paddingStart: Style.adjust(8),
  },
});
