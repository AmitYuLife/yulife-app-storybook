import SelectBody, { SelectedBody } from "@screens/member/yu-screen/select-body/select-body";
import * as React from "react";
import { connect, useDispatch } from "react-redux";
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
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Navigation } from "react-native-navigation";
import { ROUTES, MODALS } from "../../../../navigation/constants";
import { IAvatar, AvatarBuilderHeading } from "@components/screens/member/yu-screen/avatar-builder/avatar.types";
import {
  GQL_QUERY_GET_YULIFER_WITH_AVATAR,
  GetYuliferWithAvatarData,
} from "../../../../graphql/yuscreen/GetYuliferWithAvatar.gql";
import { transformAvatar } from "@screens/member/yu-screen/avatar-builder/avatar-builder.helper";
import { Loading } from "@atoms";
import { invalidateUserAvatarCache } from "@redux/avatar-cache/avatar-cache.actions";

interface IProps {
  componentId: string;
  heading: AvatarBuilderHeading;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;

type Props = IProps & ConnectedState;

const AvatarCreationContainer: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const [bodySelected, setBodySelected] = React.useState(false);
  const [bodyType, setBodyType] = React.useState<SelectedBody>("None");

  const handleBodySelected = React.useCallback(() => setBodySelected(true), []);

  const { avatar, heading } = props;

  const [updateUserAvatar, { loading: saveLoading }]: SaveAvatarMutationTuple = useMutation(GQL_MUTATION_SAVE_AVATAR, {
    refetchQueries: ["GetYulifer"],
  });

  const { data, loading } = useQuery<GetYuliferWithAvatarData>(GQL_QUERY_GET_YULIFER_WITH_AVATAR, {
    fetchPolicy: "network-only",
  });

  const avatarRemoteFile = data?.getYulifer?.avatarRemoteFile;

  const handleAvatarUpdate = React.useCallback(
    async (avatarToSave: IAvatar) => {
      dispatch(saveAvatar(avatarToSave));

      try {
        const response = await updateUserAvatar({
          variables: {
            avatar: generateAvatarObjectForServer(avatarToSave),
          },
          refetchQueries: ["GetYulifer"],
        });

        if (avatarRemoteFile?.length) {
          // we need to invalidate the current avatar cache in order to save the update
          dispatch(invalidateUserAvatarCache({ uri: avatarRemoteFile }));
        }

        if (response.data.updateUserAvatar?.rewarded) {
          Navigation.showModal({
            component: {
              id: MODALS.collectReward,
              name: MODALS.collectReward,
              passProps: {
                date: "Great work! \nYour Yumoji is ready for adventure.",
                onPress: returnToYuScreen,
                ctaLabel: "Done",
                yucoin: response.data.updateUserAvatar.rewardAmount,
              },
            },
          });

          dispatch(avatarCreated());
        } else {
          returnToYuScreen();
        }
      } catch (e) {
        // handleError();
      }
    },
    [updateUserAvatar, dispatch, avatarRemoteFile]
  );

  React.useEffect(() => {
    // if avatar exists on the server, hydrate the redux store with it
    if (data?.getYulifer?.avatar?.id) {
      const avatarFromServer = transformAvatar(data.getYulifer.avatar);
      dispatch(saveAvatar(avatarFromServer));

      if (data.getYulifer?.avatar?.body?.part?.partId) {
        setBodyType(data.getYulifer.avatar.body.part.partId.includes("female") ? "Female" : "Male");
      }
    }
  }, [data, dispatch]);

  if (loading || !avatar || saveLoading) {
    return <Loading />;
  }

  if (bodySelected) {
    return (
      <AvatarBuilder
        avatar={avatar}
        updateUserAvatar={handleAvatarUpdate}
        onBackPressed={() => {
          setBodySelected(false);
        }}
        heading={heading}
      />
    );
  }

  return (
    <SelectBody
      onMaleBodySelected={() => {
        setBodyType("Male");
        dispatch(maleBodySelected());
      }}
      onFemaleBodySelected={() => {
        setBodyType("Female");
        dispatch(femaleBodySelected());
      }}
      onContinue={handleBodySelected}
      onExitConfirmed={() => showExitModal(onExitConfirmed)}
      heading={heading}
      bodyType={bodyType}
    />
  );
};

const showExitModal = (onExitConfirmed: () => void) => {
  Navigation.showModal({
    component: {
      id: MODALS.generic,
      name: MODALS.generic,
      passProps: {
        onPress: () => {
          Navigation.dismissModal(MODALS.generic);
        },
        heading: "Exit Yumoji builder?",
        subheading: "Are you sure you want to exit? You will lose any unsaved changes.",
        ctaLabel: "Keep Editing",
        ctaLabelSecondary: "Exit",
        onPressSecondary: onExitConfirmed,
      },
    },
  });
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
});

export default connect<ConnectedState>(mapStateToProps)(AvatarCreationContainer);
