import React, { memo, useContext } from "react";
import { View, StyleSheet, ViewStyle, Platform } from "react-native";
import { TextTemplate } from "@atoms";
import { PackageType } from "@molecules";
import { Colours, Style } from "@styles";
import { Image } from "@atoms";
import { SlotIcon } from "../product-step.slot-icon";
import { ContentItemPackageCardsFragment, YuWorld, CoverType } from "@graphql/__generated";
import media from "@styles/media";
import { ProductStepContext } from "../../product-step.context";
import { useSetDefaultAnswer } from "../../hooks/useSetDefaultAnswer";
import { LOCAL_ANSWER_KEY } from "../../utils/localAnswerKeys";
import { TEXT_TEMPLATE } from "@ids";

interface Props {
  header: ContentItemPackageCardsFragment["packageCards"][0]["header"];
  coverType: CoverType;
  width: number;
}

/**
 * Don't scale
 */
const BORDER_RADIUS = 12;
const OFFSET = media.select(
  [
    {
      condition: Platform.OS === "android" && Style.DEVICE_WIDTH <= media.DEVICES.SamsungGalaxyA5.width,
      value: 20,
    },
  ],
  0
);
const HEADER_HEIGHT = Style.adjust(112);

const PackageCardHeader = (props: Props) => {
  const { customerProductId, dynamicData, setDynamicData } = useContext(ProductStepContext);

  useSetDefaultAnswer({
    dynamicData,
    setDynamicData,
    answerKey: LOCAL_ANSWER_KEY.WorldId,
    answerKeyDefaultValue: YuWorld.Forest,
  });

  const headerImage = props.header?.backgroundUrl?.uri && { uri: props.header.backgroundUrl.uri };

  if (!headerImage) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.headerImage}
        resizeMode="cover"
        source={headerImage}
        width={props.width + OFFSET}
        height={HEADER_HEIGHT}
      />
      <View style={styles.inner} testID={TEXT_TEMPLATE(props.coverType)}>
        <SlotIcon
          backgroundUrl={props.header.slotInfo.backgroundUrl.uri}
          worldId={dynamicData[LOCAL_ANSWER_KEY.WorldId] as YuWorld}
          coverType={props.coverType as CoverType}
          customerProductId={customerProductId}
        />
        <View style={styles.distance}>
          <PackageType type={props.coverType} />
          <View style={styles.descriptionWrapper}>
            <TextTemplate color={Colours.neutral.white} type="h3" testID={TEXT_TEMPLATE(props.header.slotInfo.name)}>
              {props.header.slotInfo.name}
            </TextTemplate>
            {!props.header.slotInfo?.logoUrl?.id ? null : (
              <Image style={styles.logo} source={props.header.slotInfo.logoUrl} width={16} height={16} />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
    overflow: "hidden",
  },
  inner: {
    padding: Style.adjust(24),
    flexDirection: "row",
  } as ViewStyle,
  distance: {
    marginLeft: Style.adjust(20),
  } as ViewStyle,
  descriptionWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Style.adjust(8),
  },
  logo: {
    marginLeft: Style.adjust(8),
    marginBottom: Style.adjust(8),
  },
  headerImage: {
    position: "absolute",
    right: 0,
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
  },
});

export default memo(PackageCardHeader);
