import React, { memo, useCallback } from "react";
import { Hyperlink, Pressable, Toast } from "@molecules";
import { Navigation } from "@navigation/main";
import { Style, StyleSheet } from "@styles";
import { Block, Box, CloseSvg, Image, TextTemplate } from "@atoms";
import { View } from "react-native";
import { ROUTES } from "@navigation/constants";
import { useTranslation } from "@hooks";
import { useDispatch } from "react-redux";
import { GetTodayEarningsQuery } from "@graphql/__generated";

type IQuestionMarkModal = GetTodayEarningsQuery["getTodayEarnings"]["activityFeed"][0]["questionMarkModal"];

interface IProps {
  header: string;
  body: IQuestionMarkModal["body"];
  toast: IQuestionMarkModal["toast"];
  accessibility: IQuestionMarkModal["accessibility"];
}

const ActivityFeedPopMenu = ({ header, body, toast, accessibility }: IProps) => {
  const dispatch = useDispatch();
  const onClose = useCallback(() => Navigation.dismissAllOverlays(), []);
  const t = useTranslation([
    "screens.today_earning.activity_feed.daily_core_activities.question_mark.toast.title",
    "generic_heading.right_icon.close.accessibility_label",
  ]);

  const onSettingPress = useCallback(() => {
    onClose();
    if (toast.button?.onPress) {
      const payload = {
        type: toast.button.onPress.type,
        payload: toast.button.onPress.payload,
      };

      dispatch(payload);
      return;
    }

    Navigation.push(ROUTES.todayEarnings, {
      component: {
        id: ROUTES.settings,
        name: ROUTES.settings,
      },
    });
  }, [onClose, toast.button]);

  return (
    <Pressable delay={1000} onPress={onClose} style={styles.wrapper} importantForAccessibility="no" accessible={false}>
      <Block style={styles.block}>
        <Pressable
          delay={1000}
          onPress={onClose}
          style={styles.close}
          accessibilityLabel={t["generic_heading.right_icon.close.accessibility_label"]}
        >
          <CloseSvg size={Style.adjust(12)} />
        </Pressable>
        <TextTemplate type="l2" accessibilityLabel={accessibility.accessibilityLabel}>
          {header}
        </TextTemplate>
        <View style={styles.bodyWrapper} accessible={false}>
          {body.map(({ title, iconUrl }) => (
            <View style={styles.body} key={title}>
              <Image
                width={Style.adjust(16)}
                height={Style.adjust(16)}
                style={styles.image}
                source={{ uri: iconUrl?.uri }}
              />
              <Box flexShrink={1}>
                <TextTemplate type="l2">{title}</TextTemplate>
              </Box>
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
              <TextTemplate type="l3b" accessibilityLabel={toast?.description}>
                {toast?.description}
              </TextTemplate>
            </View>
            <Hyperlink
              accessible={true}
              accessibilityLabel={
                t["screens.today_earning.activity_feed.daily_core_activities.question_mark.toast.title"]
              }
              title={
                toast.button?.label ||
                t["screens.today_earning.activity_feed.daily_core_activities.question_mark.toast.title"]
              }
              type="l3b"
              onPress={onSettingPress}
            />
          </Toast>
        </View>
      </Block>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    width: Style.DEVICE_WIDTH / 1.5,
    alignSelf: "center",
  },
  block: {
    padding: Style.adjust(16),
  },
  close: {
    position: "absolute",
    right: Style.adjust(10),
    top: Style.adjust(8),
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
    marginEnd: Style.adjust(10),
  },
  toast: {
    marginTop: Style.adjust(16),
  },
  description: {
    marginBottom: Style.adjust(4),
  },
});

export default memo(ActivityFeedPopMenu);
