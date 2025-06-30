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
import { useMutation } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { AchievementStatus } from "@organisms/achievement-card/achievement-card";
import { useSelector } from "react-redux";
import { getCurrentUserId } from "@redux/user/user.selectors";

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
  onClose?: () => void;
}
const onModalClose = () => Navigation.dismissModal(MODALS.viewAchievementModal);

const ViewAchievementModal = ({
  id,
  name,
  description,
  icon,
  points,
  status,
  shortDescription,
  slotsTaken,
  isInspectingUser,
  selectedSlot,
  onClose,
}: IProps) => {
  const [updateMobileGameUserAchievement, { loading }] = useMutation(gql("UpdateMobileGameUserAchievementDocument"));
  const currentUserId = useSelector(getCurrentUserId);
  const insets = useSafeAreaInsets();

  const getSlot = useCallback((slot: number, selected: number) => {
    if (status === AchievementStatus.equipped) {
      return {};
    }

    if (selected) {
      return { slot: selected };
    }

    if (slot < 4 && status === AchievementStatus.unlocked) {
      return { slot };
    }

    return {};
  }, []);

  const onButtonPress = useCallback(async () => {
    const slot = slotsTaken + 1;
    await updateMobileGameUserAchievement({
      variables: { id, ...getSlot(slot, selectedSlot) },
    });

    if (onClose) {
      await onClose();
    }

    onModalClose();
  }, [slotsTaken, id, status, selectedSlot, currentUserId, onClose]);

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
            isLoading={loading}
          />
        </Box>
      )}
      <GenericHeadingAbsolute onRightIconPress={onModalClose} />
      {!showAchievementPoints ? null : (
        <Box position="absolute" top={insets.top} left={16}>
          <AchievementPoints autoWidth={true} label={addCommasToNumber(points)} locked={status === "locked"} />
        </Box>
      )}
    </Box>
  );
};

export default memo(ViewAchievementModal);
