import { Box, Image, TextTemplate } from "@atoms";
import { memo, useCallback, useMemo } from "react";
import { AchievementPoints, Button } from "@molecules";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Style } from "@styles";
import { Navigation } from "@navigation/main";
import { MODALS } from "@navigation/constants";
import { t } from "@locale";
import { addCommasToNumber } from "@utils";
interface IProps {
  id: string;
  name: string;
  icon: {
    uri?: string;
    id: string;
  };
  description: string;
  selectedSlot?: number;
  points: number;
  shortDescription: string;
  status: "locked" | "unlocked" | "equipped";
  slotsTaken: number;
  isInspectingUser?: boolean;
}

const onClose = () => Navigation.dismissModal(MODALS.viewAchievementModal);

const ViewAchievementModal = ({
  id,
  name,
  description,
  icon,
  points,
  status,
  shortDescription,
  slotsTaken,
  // selectedSlot,
  isInspectingUser,
}: IProps) => {
  const insets = useSafeAreaInsets();

  // uncomment when we add mutation
  // const getSlot = useCallback((slot: number, selected: number) => {
  //   if (selected) {
  //     return { slot: selected };
  //   }

  //   if (slot < 4 && status === "unlocked") {
  //     return { slot };
  //   }

  //   return {};
  // }, []);

  const onButtonPress = useCallback(async () => {
    // const slot = slotsTaken + 1;

    onClose();
  }, [slotsTaken, id, status]);

  const showAchievementPoints = useMemo(() => typeof points === "number", [points]);

  return (
    <Box flex={1}>
      <GenericHeadingPad />
      <Box alignItems="center" justifyContent="center" p={38}>
        <Image source={icon} width={Style.adjust(232)} height={Style.adjust(232)} />
        <Box mt={60} mb={16}>
          <TextTemplate type="h2">{name}</TextTemplate>
        </Box>
        <TextTemplate type="b2" textAlign="center">
          {description}
        </TextTemplate>
        {!shortDescription ? null : (
          <Box mt={56}>
            <TextTemplate type="b2b" textAlign="center">
              {shortDescription}
            </TextTemplate>
          </Box>
        )}
      </Box>
      {status === "locked" || isInspectingUser ? null : (
        <Box position="absolute" bottom={insets.bottom} left={0} right={0} alignItems="center">
          <Button
            testID="id-baby"
            translatedLabel={status === "equipped" ? t("unequip") : t("equip")}
            onPress={onButtonPress}
            isLoading={false}
          />
        </Box>
      )}
      <GenericHeadingAbsolute onRightIconPress={onClose} />
      {!showAchievementPoints ? null : (
        <Box position="absolute" top={insets.top} left={16}>
          <AchievementPoints autoWidth={true} label={addCommasToNumber(points)} locked={status === "locked"} />
        </Box>
      )}
    </Box>
  );
};

export default memo(ViewAchievementModal);
