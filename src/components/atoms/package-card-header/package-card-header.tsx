import React, { memo } from "react";
import { View, StyleSheet } from "react-native";
import { PackageType, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { CoverType, YuProductStatus } from "@graphql/_core/schema/globalTypes";
import Logo from "@atoms/logo";
import { SlotIcon } from "@atoms/slot-icon/slot-icon";

interface ISlotInfo {
  status: YuProductStatus;
  itemUrl: string;
  backgroundUrl: string;
  name: string;
}

interface IProps {
  title: string;
  slotInfo: ISlotInfo;
  coverType: CoverType;
  actualCost?: number;
}

interface IPackageCardHeader {
  packageInfo: IProps;
}

const PackageCardHeader = ({ packageInfo }: IPackageCardHeader) => {
  const isNotEquipped = !Object.values(CoverType).includes(packageInfo?.coverType);

  const textColour = isNotEquipped ? Colours.neutral.n800 : Colours.neutral.white;
  return (
    <View
      style={[
        styles.wrapper,
        { backgroundColor: isNotEquipped ? Colours.metallic.m100 : Colours.products.fib[packageInfo?.coverType] },
      ]}
    >
      <View style={styles.container}>
        <View style={{ marginRight: Style.adjust(15) }}>
          <SlotIcon slot={packageInfo?.slotInfo} />
        </View>
        <View>
          <PackageType type={packageInfo?.coverType} />
          <View style={styles.descriptionWrapper}>
            <Logo width={17} height={17} style={styles.logo} type={isNotEquipped ? null : "inverted"} />
            <TextTemplate color={textColour} type="h3">
              {packageInfo?.title}
            </TextTemplate>
          </View>
        </View>
      </View>
      {!packageInfo?.actualCost ? null : (
        <View style={styles.priceWrapper}>
          <TextTemplate color={textColour} type="b1b">
            {`£${packageInfo.actualCost}`}
          </TextTemplate>
          <TextTemplate color={textColour} type="l1">
            {" / month"}
          </TextTemplate>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: Style.adjust(327),
    padding: Style.adjust(24),
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
  },
  descriptionWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Style.adjust(8),
  },
  logo: {
    marginRight: Style.adjust(8),
  },
  priceWrapper: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: Style.adjust(8),
  },
});

export default memo(PackageCardHeader);
