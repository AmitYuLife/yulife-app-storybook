import { Box, Image, TextTemplate } from "@atoms";
import { memo, useCallback } from "react";
import { AchievementPoints, Button } from "@molecules";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Style } from "@styles";
import { Navigation } from "@navigation/main";
import { MODALS } from "@navigation/constants";
import { t } from "@locale";

interface IProps {
  title: string;
  icon: {
    uri?: string;
    id: string;
  };
  description: string;
  points: number;
  percentageOfUsersWithAchievement: string;
  isEquipped?: boolean;
}

const onClose = () => Navigation.dismissModal(MODALS.viewAchievementModal);

const ViewAchievementModal = ({
  title,
  description,
  icon,
  points,
  isEquipped,
  percentageOfUsersWithAchievement,
}: IProps) => {
  const insets = useSafeAreaInsets();

  const onButtonPress = useCallback(() => console.log("add graphql mutation"), []);

  return (
    <Box flex={1}>
      <GenericHeadingPad />
      <Box alignItems="center" justifyContent="center" p={38}>
        <Image source={icon} width={Style.adjust(232)} height={Style.adjust(232)} />
        <Box mt={60} mb={16}>
          <TextTemplate type="h2">{title}</TextTemplate>
        </Box>
        <TextTemplate type="b2" textAlign="center">
          {description}
        </TextTemplate>
        {!percentageOfUsersWithAchievement ? null : (
          <Box mt={56}>
            <TextTemplate type="b2b" textAlign="center">
              {percentageOfUsersWithAchievement}
            </TextTemplate>
          </Box>
        )}
      </Box>
      <Box position="absolute" bottom={insets.bottom} left={0} right={0} alignItems="center">
        <Button
          testID="id-baby"
          translatedLabel={isEquipped ? t("unequip") : t("equip")}
          onPress={onButtonPress}
          isLoading={false}
        />
      </Box>
      <GenericHeadingAbsolute onRightIconPress={onClose} />
      <Box position="absolute" top={insets.top} left={16}>
        <AchievementPoints autoWidth={true} points={points} />
      </Box>
    </Box>
  );
};

export default memo(ViewAchievementModal);
