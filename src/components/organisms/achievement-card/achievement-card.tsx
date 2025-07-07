import { Box, Image, TextTemplate } from "@atoms";
import { CheckIcon } from "@atoms/icon/check-icon";
import { LockIcon } from "@atoms/icon/lock-icon";
import { AchievementPoints, BoxOption } from "@molecules";
import { Style } from "@styles";
import { memo, useMemo, ReactNode } from "react";
import { StyleSheet } from "react-native";
import { addCommasToNumber } from "@utils";

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

        <Box w={164} h={136} top={0} alignItems="center" justifyContent="center">
          <Image w={164} h={136} source={icon} />
        </Box>
        <Box mt={4}>
          <TextTemplate type="b2b" color="#464647" textAlign="center" numberOfLines={1}>
            {name}
          </TextTemplate>
          <TextTemplate type="l2b" color="#464647" textAlign="center" numberOfLines={1}>
            {description}
          </TextTemplate>
        </Box>
      </>
    </BoxOption>
  );
};

const Equipped = () => (
  <Box w={20} h={20} br={100} p={2} bg="#E30D76" alignItems="center" justifyContent="center">
    <CheckIcon color="white" size={11} />
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
    height: Style.adjust(136),
  },
  wrapperStyle: {
    width: "90%",
  },
  innerWrapperStyle: {
    alignItems: "center",
    paddingHorizontal: Style.adjust(8),
  },
});

export default memo(AchievementCard);
