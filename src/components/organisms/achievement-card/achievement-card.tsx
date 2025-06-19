import { Box, Image, TextTemplate } from "@atoms";
import { CheckIcon } from "@atoms/icon/check-icon";
import { LockIcon } from "@atoms/icon/lock-icon";
import { t } from "@locale";
import { AchievementPoints, BoxOption } from "@molecules";
import { Style } from "@styles";
import { addCommasToNumber } from "@utils";
import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";
import { ReactNode } from "react";

export enum AchievementStatus {
  locked = "locked",
  unlocked = "unlocked",
  equipped = "equipped",
}

export interface IAchievementCardProps {
  id: string;
  name: string;
  description: string;
  onPress: () => void;
  points?: number;
  status: string;
  icon: {
    uri?: string;
    id: string;
  };
}

const AchievementCard = ({ name, description, onPress, points, icon, status }: IAchievementCardProps) => {
  const showAchievementPoints = useMemo(() => typeof points === "number", [points]);

  return (
    <BoxOption
      onPress={onPress}
      isSelected={false}
      innerHeight={Style.adjust(196)}
      wrapperStyle={styles.wrapperStyle}
      innerWrapperStyle={styles.innerWrapperStyle}
    >
      {/* we need to change the type of the BoxOption component for children */}
      <>
        <Box
          position="absolute"
          top={8}
          flexDirection="row"
          justifyContent={showAchievementPoints ? "space-between" : "flex-end"}
          left={8}
          right={8}
        >
          {!showAchievementPoints ? null : (
            <AchievementPoints
              label={addCommasToNumber(points)}
              autoWidth={true}
              locked={status === AchievementStatus.locked}
            />
          )}
          {STATUS_COMPONENTS[status]}
        </Box>
        <Box alignItems="center" justifyContent="center" mt={24}>
          <Image h={95} w={95} style={styles.image} source={icon} />
          <Box mt={4} gap={4}>
            <TextTemplate type="b2b" color="#464647" textAlign="center" numberOfLines={1}>
              {name}
            </TextTemplate>
            {!description ? null : (
              <TextTemplate type="l2b" color="#464647" textAlign="center" numberOfLines={1}>
                {description}
              </TextTemplate>
            )}
          </Box>
        </Box>
      </>
    </BoxOption>
  );
};

const Equipped = () => (
  <Box bg="#FFF2F2" flexDirection="row" alignItems="center" pl={8} pr={2} br={20} gap={4}>
    <TextTemplate color="#E30D76" type="l3b">
      {t("equipped")}
    </TextTemplate>
    <Box w={20} h={20} br={100} p={2} bg="#E30D76" alignItems="center" justifyContent="center">
      <CheckIcon color="white" size={11} />
    </Box>
  </Box>
);

const Locked = () => (
  <Box br={100} bg="#D9D9D7" p={4} alignItems="center" justifyContent="center">
    <LockIcon size={16} />
  </Box>
);

const STATUS_COMPONENTS: Record<string, ReactNode> = {
  unlocked: null,
  locked: <Locked />,
  equipped: <Equipped />,
};

const styles = StyleSheet.create({
  image: {
    height: Style.adjust(95),
  },
  wrapperStyle: {
    width: "90%",
  },
  innerWrapperStyle: {
    alignItems: "center",
    justifyContent: "center",
    padding: Style.adjust(8),
  },
});

export default memo(AchievementCard);
