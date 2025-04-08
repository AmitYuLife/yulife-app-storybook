import { Box, Image, TextTemplate } from "@atoms";
import { CheckIcon } from "@atoms/icon/check-icon";
import { t } from "@locale";
import { AchievementPoints, BoxOption } from "@molecules";
import { Style } from "@styles";
import { addCommasToNumber } from "@utils";
import { memo } from "react";
import { StyleSheet } from "react-native";

interface IProps {
  title: string;
  description: string;
  onPress: () => void;
  points: number;
  isEquipped?: boolean;
  icon: {
    uri?: string;
    id: string;
  };
}

const AchievementCard = ({ title, description, onPress, points, icon, isEquipped }: IProps) => {
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
        <Box position="absolute" top={8} flexDirection="row" justifyContent="space-between" left={8} right={8}>
          <AchievementPoints label={addCommasToNumber(points)} autoWidth={true} />
          {!isEquipped ? null : (
            <Box bg="#FFF2F2" flexDirection="row" alignItems="center" pl={8} pr={2} br={20} gap={4}>
              <TextTemplate color="#E30D76" type="l3b">
                {t("equipped")}
              </TextTemplate>
              <Box w={20} h={20} br={100} p={2} bg="#E30D76" alignItems="center" justifyContent="center">
                <CheckIcon color="white" size={11} />
              </Box>
            </Box>
          )}
        </Box>
        <Box alignItems="center" justifyContent="center" mt={24}>
          <Image h={95} w={95} style={styles.image} source={icon} />
          <Box mt={4} gap={4}>
            <TextTemplate type="b2b" color="#464647" textAlign="center" numberOfLines={2}>
              {title}
            </TextTemplate>
            {!description ? null : (
              <TextTemplate type="l2b" color="#464647" textAlign="center" numberOfLines={2}>
                {description}
              </TextTemplate>
            )}
          </Box>
        </Box>
      </>
    </BoxOption>
  );
};

const styles = StyleSheet.create({
  image: {
    height: Style.adjust(95),
  },
  wrapperStyle: {
    width: Style.adjust(164),
  },
  innerWrapperStyle: {
    alignItems: "center",
    justifyContent: "center",
    padding: Style.adjust(8),
  },
});

export default memo(AchievementCard);
