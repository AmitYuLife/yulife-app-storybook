import { Box, Image, TextTemplate } from "@atoms";
import { memo, useCallback, useMemo } from "react";
import { AchievementPoints, Button } from "@molecules";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Style } from "@styles";
import { Navigation } from "@navigation/main";
import { MODALS } from "@navigation/constants";
import { addCommasToNumber } from "@utils";
import { useMutation } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { useSelector } from "react-redux";
import { getCurrentUserId } from "@redux/user/user.selectors";
import { AchievementStatus } from "@organisms/achievement-card/achievement-card";

interface IProps {
  id: string;
  name: string;
  icon: {
    uri?: string;
    id: string;
  };
  description: string;
  selectedSlot?: number;
  slotsAvailable: number[];
  points: number;
  shortDescription: string;
  status: "locked" | "unlocked" | "equipped";
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
  slotsAvailable = [],
  isInspectingUser,
  selectedSlot,
  onClose,
}: IProps) => {
  const [updateMobileGameUserAchievement, { loading }] = useMutation(gql("UpdateMobileGameUserAchievementDocument"));
  const currentUserId = useSelector(getCurrentUserId);
  const insets = useSafeAreaInsets();

  const hideButton = useMemo(
    () =>
      status === AchievementStatus.locked ||
      isInspectingUser ||
      (slotsAvailable.length === 0 && status === AchievementStatus.unlocked),
    [status, isInspectingUser, slotsAvailable.length]
  );

  const onButtonPress = useCallback(async () => {
    await updateMobileGameUserAchievement({
      variables: { id, ...(status === AchievementStatus.equipped ? {} : { slot: selectedSlot }) },
    });

    if (onClose) {
      await onClose();
    }

    onModalClose();
  }, [id, status, selectedSlot, currentUserId, onClose]);

  const showAchievementPoints = useMemo(() => typeof points === "number", [points]);

  return (
    <Box flex={1}>
      <GenericHeadingPad />
      <Box alignItems="center" justifyContent="center" p={38}>
        <Image source={icon} width={Style.adjust(318)} height={Style.adjust(298)} />
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
      {hideButton ? null : (
        <Box position="absolute" bottom={insets.bottom} left={0} right={0} alignItems="center">
          <Button
            translationKey={status === "equipped" ? "unequip" : "equip"}
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
