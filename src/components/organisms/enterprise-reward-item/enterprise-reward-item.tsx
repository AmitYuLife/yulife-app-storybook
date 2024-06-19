import React, { memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Colours, Style } from "@styles";
import { Image, TextTemplate } from "@atoms";
import { TouchableOpacityWithDelay } from "@molecules";
import { t } from "@locale";
import { SuccessIcon } from "@atoms/icon/success-icon";

export interface IEnterpriseRewardItem {
  backgroundColor: string;
  label: string;
  status?: "claim" | "claimed" | null;
  onPress?: () => void;
  icon: {
    width: number;
    height: number;
    uri: string;
  };
}

const EnterpriseRewardItem = ({ backgroundColor, label, icon, onPress, status }: IEnterpriseRewardItem) => {
  const wrapperStyle = useMemo(
    () => ({
      ...styles.wrapper,
      backgroundColor: getWrapperBackground(status, backgroundColor),
    }),
    [backgroundColor, status]
  );

  const labelContainerLabel = useMemo(
    () => ({
      ...styles.labelContainer,
      backgroundColor: status === "claim" ? "#E30D76" : Colours.primary.p40,
    }),
    [status]
  );

  return (
    <>
      <View style={wrapperStyle}>
        <Image style={styles.image} source={{ uri: icon.uri }} width={icon.width} height={icon.height} />
        <View style={styles.labelWrapper}>
          <View style={labelContainerLabel}>
            {status === "claimed" ? null : (
              <TouchableOpacityWithDelay onPress={onPress || null}>
                <TextTemplate type="l1b" color={status === "claim" ? Colours.neutral.white : "#E30D76"}>
                  {status === "claim" ? t("labels.cta.claim") : label}
                </TextTemplate>
              </TouchableOpacityWithDelay>
            )}
          </View>
        </View>
      </View>
      {status !== "claimed" ? null : (
        <>
          <View style={styles.claimedOverlay}>
            <View style={styles.claimedWrapper}>
              <View style={styles.claimedContainer}>
                <SuccessIcon checked={true} size={16.5} colour="#956AFF" />
              </View>
            </View>
          </View>
        </>
      )}
    </>
  );
};

const getWrapperBackground = (status: IEnterpriseRewardItem["status"], backgroundColor: string) => {
  switch (status) {
    case "claimed": {
      return "#F4F0FF";
    }

    case "claim": {
      return "#E30D76";
    }

    default: {
      return backgroundColor;
    }
  }
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 100,
    width: Style.adjust(64),
    height: Style.adjust(64),
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: Style.adjust(5),
  },
  labelWrapper: {
    position: "absolute",
    width: Style.adjust(50),
    backgroundColor: Colours.neutral.white,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: Colours.neutral.white,
    bottom: -10,
  },
  labelContainer: {
    backgroundColor: Colours.primary.p40,
    borderRadius: 4,
    width: "100%",
    alignItems: "center",
  },
  claimedOverlay: {
    position: "absolute",
    backgroundColor: "#F4F0FF",
    borderRadius: 100,
    width: Style.adjust(64),
    height: Style.adjust(64),
    opacity: 0.5,
  },
  claimedWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
    bottom: -8,
  },
  claimedContainer: {
    borderWidth: 2,
    borderColor: Colours.neutral.white,
    borderRadius: 100,
    backgroundColor: Colours.neutral.white,
    width: Style.adjust(20),
    height: Style.adjust(20),
    alignItems: "center",
  },
});

export default memo(EnterpriseRewardItem);
