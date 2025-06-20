import React, { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { ContentItemInfoButtonFragment as GqlInfoButton } from "@graphql/__generated";
import { Image, TextTemplate, Loading } from "@atoms";
import { TouchableWithDelay } from "@components/molecules";
import { StyleSheet, View } from "react-native";
import { Colours, Style } from "@styles";
import { sduiEventActionCreator } from "../_utils/sduiEventActionCreator";

type Props = Omit<GqlInfoButton, "onPress" | "answerKeys"> & {
  additionalInfo?: string;
  disabled?: boolean;
  isLoading?: boolean;
  onPress?: GqlInfoButton["onPress"] | (() => void);
};

const ICON_IMAGE_SIZE = Style.adjust(24);

export const ContentItemInfoButton = memo((props: Props) => {
  const { id, label, isLoading, disabled, onPress, infoBtnLeftIcon, infoBtnRightIcon, active, additionalInfo } = props;
  const dispatch = useDispatch();

  const handlePress = useCallback(() => {
    if (typeof onPress === "function") {
      onPress();
    } else if (onPress?.type) {
      dispatch(onPress);
    }

    dispatch(sduiEventActionCreator("button_pressed", { button_id: id }));
  }, [id, onPress, dispatch]);

  const isPrompt = !additionalInfo;

  if (isLoading) {
    return (
      <View style={styles.activityIndicator}>
        <Loading size="small" />
      </View>
    );
  }

  return (
    <TouchableWithDelay disabled={disabled} onPress={handlePress}>
      <View
        style={StyleSheet.flatten([
          styles.wrapper,
          isPrompt ? styles.wrapperPrompt : styles.wrapperFilled,
          disabled ? styles.disabledWrapper : {},
        ])}
      >
        <View style={styles.background} />
        <Image
          width={ICON_IMAGE_SIZE}
          height={ICON_IMAGE_SIZE}
          resizeMode="contain"
          source={isPrompt ? infoBtnLeftIcon : active.leftIcon}
        />
        <View style={styles.promptWrapper}>
          <TextTemplate type="b2b">{isPrompt ? label : active.label}</TextTemplate>
          {isPrompt ? null : <TextTemplate type="b2">{additionalInfo}</TextTemplate>}
        </View>
        <View style={StyleSheet.flatten([styles.iconRight, isPrompt ? null : styles.alignSelfCenter])}>
          <Image
            width={ICON_IMAGE_SIZE}
            height={ICON_IMAGE_SIZE}
            resizeMode="contain"
            source={isPrompt ? infoBtnRightIcon : active.rightIcon}
          />
        </View>
      </View>
    </TouchableWithDelay>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: Style.adjust(16),
    marginTop: Style.adjust(20),
    borderColor: Colours.neutral.n100,
    backgroundColor: Colours.neutral.n100,
    marginHorizontal: Style.adjust(24),
    borderRadius: 16,
    overflow: "hidden",
    flexDirection: "row",
    borderWidth: 1,
  },
  disabledWrapper: {
    opacity: 0.5,
  },
  background: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 16,
    overflow: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 4,
  },
  iconRight: {
    marginLeft: "auto",
  },
  promptWrapper: {
    marginLeft: Style.adjust(16),
    width: Style.DEVICE_WIDTH - 160,
  },
  alignSelfCenter: {
    alignSelf: "center",
  },
  wrapperPrompt: {
    paddingVertical: Style.adjust(30),
    alignItems: "center",
  },
  wrapperFilled: {
    paddingVertical: Style.adjust(16),
  },
  activityIndicator: {
    paddingHorizontal: Style.adjust(16),
    marginHorizontal: Style.adjust(24),
    marginTop: Style.adjust(20),
  },
});
