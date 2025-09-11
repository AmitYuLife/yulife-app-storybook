import { Box, Image, TextTemplate } from "@atoms";
import { memo, useCallback, useMemo } from "react";
import { AchievementPoints, Button, InfoPanel, ProgressBar } from "@molecules";
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
import { t } from "@locale";

interface IProps {
  id: string;
  name: string;
  icon: {
    uri?: string;
    id: string;
  };
  description: string;
  points: number;
  shortDescription: string;
  status: "locked" | "unlocked" | "equipped";
  currentRoute: string;
  isInspectingUser?: boolean;
  progress?: {
    current: number;
    target: number;
  };
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
  currentRoute,
  isInspectingUser,
  progress,
}: IProps) => {
  const [updateMobileGameUserAchievement, { loading }] = useMutation(gql("UpdateMobileGameUserAchievementDocument"));
  const currentUserId = useSelector(getCurrentUserId);
  const insets = useSafeAreaInsets();

  const hideButton = useMemo(() => status === AchievementStatus.locked || isInspectingUser, [status, isInspectingUser]);

  const onButtonPress = useCallback(async () => {
    if (currentRoute) {
      Navigation.pop(currentRoute);
    }

    await updateMobileGameUserAchievement({
      variables: { id, ...(status === AchievementStatus.equipped ? {} : { slot: 1 }) },
    });

    onModalClose();
  }, [id, status, currentUserId, currentRoute, isInspectingUser]);

  const showAchievementPoints = useMemo(() => typeof points === "number", [points]);

  const showInfoPanel = useMemo(
    () => status === AchievementStatus.locked && progress?.current >= progress?.target,
    [status, progress]
  );

  const containerStyle = useMemo(() => (showInfoPanel ? { ph: 38 } : { p: 38 }), [showInfoPanel]);

  return (
    <Box flex={1}>
      <GenericHeadingPad />
      <Box alignItems="center" justifyContent="center" {...containerStyle}>
        <Image source={icon} width={Style.adjust(318)} height={Style.adjust(298)} />
        <Box mt={60} mb={16}>
          <TextTemplate type="h2">{name}</TextTemplate>
        </Box>
        <TextTemplate type="b2" textAlign="center">
          {description}
        </TextTemplate>

        <Box mt={status === AchievementStatus.locked ? 28 : 56}>
          {status !== AchievementStatus.locked && !progress ? null : (
            <Box mb={28}>
              <ProgressBar
                currentPosition={progress.current}
                maxLength={progress.target}
                wrapperWidth={Style.adjust(290)}
                height={Style.adjust(28)}
                unfilledBackgroundColor={"#EFF0FA"}
                unfilledStrokeColor={"#EFF0FA"}
                unfilledStrokeWidth={3}
                showCurrentAndTargetProgress={true}
              />
            </Box>
          )}
          {!shortDescription ? null : (
            <TextTemplate type="b2b" textAlign="center">
              {shortDescription}
            </TextTemplate>
          )}
        </Box>
      </Box>
      {showInfoPanel ? (
        <Box position="absolute" bottom={insets.bottom} width="100%" ph={38}>
          <InfoPanel markdown={t("modals.locked_achievement.title")} showIcon={true} />
        </Box>
      ) : null}
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
