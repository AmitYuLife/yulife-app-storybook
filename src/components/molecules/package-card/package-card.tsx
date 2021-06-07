import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { Colours, Style } from "@styles";
import { PackageCardHeader, PackageCardPerks, TextTemplate, YuCoinPowerMini } from "@atoms";
import { showEarnRateOverlay } from "@components/containers/member/yu/navigation/showEarnRateOverlay";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { ISlotIcon } from "@atoms/slot-icon/slot-icon";
import { DoubleChestIcon } from "@atoms/icon/double-chest-icon";
import { StreakIcon } from "@atoms/icon/streak-icon";
import { ShoeIcon } from "@atoms/icon/shoe-icon";

interface Key {
  [key: string]: any;
}

interface IPowers {
  title: string;
  description: string;
  icon: string;
  locked: boolean;
  coverType: CoverType;
}

interface IPackageCardProps {
  title: string;
  slotInfo: ISlotIcon;
  coverType: CoverType;
  actualCost: number;
  earnRate: number;
  powers: IPowers[];
}

export interface IProps {
  packageInfo: IPackageCardProps;
  onPress: (key: string) => void;
}

const packagePerks: Key = {
  double_chest: <DoubleChestIcon />,
  streak_reward: <StreakIcon />,
  daily_step_limit: <ShoeIcon />,
};

const PackageCard = ({ packageInfo, onPress }: IProps) => {
  return (
    <View style={[styles.wrapper, { borderColor: Colours.products.fib[packageInfo?.coverType] }]}>
      <PackageCardHeader packageInfo={{ ...packageInfo, coverType: packageInfo?.coverType }} />
      <View style={styles.container}>
        <View style={styles.yucoin}>
          <YuCoinPowerMini coinValue={packageInfo.earnRate} onPress={showEarnRateOverlay} />
        </View>

        <View style={styles.perk}>
          <TextTemplate color={Colours.neutral.n400} type="l1b">
            Perks
          </TextTemplate>
        </View>
        {packageInfo?.powers.map((perk, index: number) => (
          <View key={index} style={styles.perk}>
            <PackageCardPerks
              onLongPress={(coverType: CoverType) => onPress(coverType)}
              onPressOut={() => onPress(null)}
              perk={{
                ...perk,
                icon: packagePerks[perk.icon],
              }}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 16,
    borderWidth: 1,
  },
  container: {
    padding: Style.adjust(24),
  },
  yucoin: {
    marginBottom: Style.adjust(16),
    justifyContent: "center",
    alignItems: "center",
  },
  perk: {
    marginBottom: Style.adjust(8),
  },
});

export default memo(PackageCard);
