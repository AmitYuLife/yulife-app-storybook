import React, { memo, useCallback } from "react";
import { Hyperlink, PressableWithDelay, Toast } from "@molecules";
import { Navigation } from "react-native-navigation";
import { Colours, Style } from "@styles";
import { Block, CloseSvg, Image, TextTemplate } from "@atoms";
import { PopoverBeak } from "@components/molecules/popover/popover-beak";
import { StyleSheet, View } from "react-native";
import {
  GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal_body as IBody,
  GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal_toast as IToast,
} from "@graphql/_core/schema";
import { ROUTES } from "@navigation/constants";

interface IProps {
  pageY: number;
  header: string;
  body: IBody[];
  toast: IToast;
}

const ActivityFeedPopMenu = ({ pageY, header, body, toast }: IProps) => {
  const onClose = useCallback(() => Navigation.dismissAllOverlays(), []);

  const onSettingPress = useCallback(() => {
    onClose();
    Navigation.push(ROUTES.todayEarnings, {
      component: {
        id: ROUTES.settings,
        name: ROUTES.settings,
      },
    });
  }, [onClose]);
  return (
    <PressableWithDelay onPress={onClose} style={[styles.wrapper, { top: pageY - Style.adjust(17) }]}>
      <Block style={styles.block}>
        <View style={styles.close}>
          <CloseSvg size={Style.adjust(12)} />
        </View>
        <View style={styles.popoverBreak}>
          <PopoverBeak backgroundColor={Colours.neutral.white} />
        </View>
        <TextTemplate type="l2">{header}</TextTemplate>
        <View style={styles.bodyWrapper}>
          {body.map(({ title, iconUrl }) => (
            <View style={styles.body} key={title}>
              <Image
                width={Style.adjust(16)}
                height={Style.adjust(16)}
                style={styles.image}
                source={{ uri: iconUrl?.uri }}
              />
              <TextTemplate type="l2">{title}</TextTemplate>
            </View>
          ))}
        </View>
        <View style={styles.toast}>
          <Toast
            iconWidth={57}
            iconHeight={64}
            iconUrl={toast?.iconUrl?.uri}
            backgroundColor={toast?.backgroundColor}
            borderColor={toast?.borderColor}
          >
            <View style={styles.description}>
              <TextTemplate type="l3b">{toast?.description}</TextTemplate>
            </View>
            <Hyperlink title="Go to settings" type="l3b" onPress={onSettingPress} />
          </Toast>
        </View>
      </Block>
    </PressableWithDelay>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    width: Style.DEVICE_WIDTH / 1.5,
    alignSelf: "center",
    right: Style.adjust(13),
  },
  block: {
    padding: Style.adjust(16),
  },
  close: {
    position: "absolute",
    right: Style.adjust(10),
    top: Style.adjust(8),
  },
  popoverBreak: {
    position: "absolute",
    right: Style.adjust(-19),
    top: Style.adjust(13),
    transform: [{ rotate: "180deg" }],
  },
  bodyWrapper: {
    marginTop: Style.adjust(16),
  },
  body: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: Style.adjust(4),
  },
  image: {
    marginRight: Style.adjust(10),
  },
  toast: {
    marginTop: Style.adjust(16),
  },
  description: {
    marginBottom: Style.adjust(4),
  },
});

export default memo(ActivityFeedPopMenu);
