import SelectBody from "@screens/member/yu-screen/select-body/select-body";
import * as React from "react";
import { connect } from "react-redux";
import { SaveAvatarMutationTuple, GQL_MUTATION_SAVE_AVATAR } from "@graphql/yuscreen";
import Logger from "@services/logging/logger";
import { IReduxState } from "../../../../redux/_core/reducers";
import {
  femaleBodySelected,
  maleBodySelected,
  saveAvatar,
  avatarCreated,
} from "../../../../redux/avatar/avatar.actions";
import {
  getAvatarBody,
  getAvatarBoots,
  getAvatarChest,
  getAvatarEyes,
  getAvatarGlasses,
  getAvatarGloves,
  getAvatarHair,
  getAvatarHead,
  getAvatarPants,
  getAvatarFacialHair,
} from "../../../../redux/avatar/avatar.selectors";
import { getUserFeatures } from "../../../../redux/user/user.selectors";
import AvatarBuilder from "../../../screens/member/yu-screen/avatar-builder/avatar-builder";
import { useMutation } from "@apollo/react-hooks";
import { Navigation } from "react-native-navigation";
import { ROUTES, MODALS } from "../../../../navigation/constants";
import { IAvatar, AvatarBuilderHeading } from "@components/screens/member/yu-screen/avatar-builder/avatar.types";
import { getAvatarForYuscreen } from "../../../../redux/avatar/avatar.selectors";

interface IProps {
  componentId: string;
  refetch: () => void;
  heading: AvatarBuilderHeading;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

type Props = IProps & ConnectedState & ConnectedDispatch;

const AvatarCreationContainer: React.FC<Props> = (props) => {
  const [bodySelected, setBodySelected] = React.useState(false);

  const handleBodySelected = React.useCallback(() => setBodySelected(true), []);

  const {
    avatar,
    maleBodySelected: dispatchMaleBodySelected,
    femaleBodySelected: dispatchFemaleBodySelected,
    saveAvatar: saveAvatarToStore,
    avatarCreated: dispatchAvatarCreated,
    refetch,
    heading,
    avatarFromLocal,
  } = props;

  const [
    updateUserAvatar,
    { loading: updateAvatarInProgress },
  ]: SaveAvatarMutationTuple = useMutation(GQL_MUTATION_SAVE_AVATAR, { refetchQueries: ["GetLeaderboard"] });

  const handleAvatarUpdate = React.useCallback(
    async (avatarToSave: IAvatar) => {
      saveAvatarToStore(avatarToSave);

      try {
        const response = await updateUserAvatar({
          variables: {
            avatar: generateAvatarObjectForServer(avatarToSave),
          },
        });

        refetch();

        if (response.data.updateUserAvatar?.rewarded) {
          Navigation.showModal({
            component: {
              id: MODALS.collectReward,
              name: MODALS.collectReward,
              passProps: {
                date: "Great work! \nYour avatar is ready for adventure.",
                onPress: returnToYuScreen,
                ctaLabel: "Done",
                yucoin: response.data.updateUserAvatar.rewardAmount,
              },
            },
          });
          dispatchAvatarCreated();
        } else {
          returnToYuScreen();
        }
      } catch (e) {
        // handleError();
      }
    },
    [updateUserAvatar, saveAvatarToStore, refetch, dispatchAvatarCreated]
  );

  if (bodySelected) {
    return (
      <AvatarBuilder
        avatar={avatar}
        updateUserAvatar={handleAvatarUpdate}
        onExitConfirmed={onExitConfirmed}
        updateAvatarInProgress={updateAvatarInProgress}
        heading={heading}
      />
    );
  }

  return (
    <SelectBody
      onMaleBodySelected={dispatchMaleBodySelected}
      onFemaleBodySelected={dispatchFemaleBodySelected}
      onContinue={handleBodySelected}
      onExitConfirmed={onExitConfirmed}
      heading={heading}
      bodyType={!avatarFromLocal ? "None" : avatarFromLocal.head.partId.includes("female") ? "Female" : "Male"}
    />
  );
};

const onExitConfirmed = () => {
  Logger.logMixpanelEvent("avatar_save", { type: "discarded" });
  returnToYuScreen();
};

const returnToYuScreen = () => {
  Navigation.dismissAllModals();
  Navigation.popTo(ROUTES.yuScreen);
};

const generateAvatarObjectForServer = (avatar: IAvatar) => {
  const { head, eyes, hair, boots, body, pants, chest, gloves, facialHair, glasses } = avatar;

  const requestedAvatar = {
    head: { partId: head.partId, colorSchemeId: head.colors.colorSchemeId },
    eyes: { partId: eyes.partId, colorSchemeId: eyes.colors.colorSchemeId },
    hair: { partId: hair.partId, colorSchemeId: hair.colors.colorSchemeId },
    boots: { partId: boots.partId, colorSchemeId: "" },
    body: { partId: body.partId, colorSchemeId: body.colors.colorSchemeId },
    pants: { partId: pants.partId, colorSchemeId: "" },
    chest: { partId: chest.partId, colorSchemeId: "" },
    gloves: { partId: gloves.partId, colorSchemeId: "" },
    glasses: { partId: glasses.partId, colorSchemeId: "" },
    facialHair: {
      partId: facialHair.partId,
      colorSchemeId: facialHair.colors?.colorSchemeId,
    },
  };

  return requestedAvatar;
};

const mapStateToProps = (state: IReduxState) => ({
  features: getUserFeatures(state),
  avatar: {
    head: getAvatarHead(state),
    eyes: getAvatarEyes(state),
    hair: getAvatarHair(state),
    body: getAvatarBody(state),
    pants: getAvatarPants(state),
    boots: getAvatarBoots(state),
    chest: getAvatarChest(state),
    gloves: getAvatarGloves(state),
    glasses: getAvatarGlasses(state),
    facialHair: getAvatarFacialHair(state),
  },
  avatarFromLocal: getAvatarForYuscreen(state),
});

const mapDispatchToProps = {
  saveAvatar,
  maleBodySelected,
  femaleBodySelected,
  avatarCreated,
};

export default connect<ConnectedState, ConnectedDispatch>(mapStateToProps, mapDispatchToProps)(AvatarCreationContainer);
