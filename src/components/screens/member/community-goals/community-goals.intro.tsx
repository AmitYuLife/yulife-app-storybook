import * as React from "react";
import { StyleSheet, ListRenderItemInfo, View, Image, ImageStyle, TextStyle } from "react-native";
import { useMutation } from "@apollo/react-hooks";

import { GQL_MUTATION_UPDATE_NICKNAME } from "@graphql/user";
import { UpdateNickname, UpdateNicknameVariables } from "@graphql/_core/schema/UpdateNickname";
import { Text, TextInput, Pad } from "@atoms";
import { OnboardingSwiper, OnboardingSwiperData } from "@organisms";
import { Style } from "@styles";
import { useKeyboardListeners } from "@services/hooks/useKeyboardListeners";

interface Props {
  setOnboardingShown: () => void;
}

const images = [
  require("../../../../../assets/community-goals/intro/first.png"),
  require("../../../../../assets/community-goals/intro/second.png"),
  require("../../../../../assets/community-goals/intro/third.png"),
];

const data: OnboardingSwiperData[] = [
  {
    id: "community_goals_onboarding_1",
    buttonLabel: "Next",
    title: "Work together to aim higher",
    subtitle: "Welcome to Community Goals! You’ll work together with other YuLifers to reach goals as a team.",
  },
  {
    id: "community_goals_onboarding_2",
    buttonLabel: "Next",
    title: "Earn big YuCoin bounties!",
    subtitle: "After completing a Community Goal, the YuCoin bounty will be distributed evenly to team members.",
  },
  {
    id: "community_goals_onboarding_3",
    buttonLabel: "Let's go",
    title: "Choose a nickname",
    subtitle: "Enter a nickname for other YuLifers to see, or leave it blank to be anonymous. ",
  },
];

const CommunityGoalsIntro: React.FC<Props> = ({ setOnboardingShown }) => {
  const [nickname, setNickname] = React.useState("");
  const [updateNickname] = useMutation<UpdateNickname, UpdateNicknameVariables>(GQL_MUTATION_UPDATE_NICKNAME);

  async function handleClose() {
    if (nickname) {
      try {
        await updateNickname({ variables: { nickname } });
      } catch (e) {
        // TODO: do not let them proceed?
      }
    }

    setOnboardingShown();
  }

  const renderItem = React.useMemo(() => getRenderItem({ nickname, setNickname }), [nickname]);

  return <OnboardingSwiper data={data} renderItem={renderItem} onClose={handleClose} />;
};

export default CommunityGoalsIntro;

interface GetRenderItem {
  nickname: string;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
}

function getRenderItem({ nickname, setNickname }: GetRenderItem) {
  return function renderItem({ item, index }: ListRenderItemInfo<OnboardingSwiperData>) {
    return <IntroItem item={item} index={index} nickname={nickname} setNickname={setNickname} />;
  };
}

interface IntroItemProps extends GetRenderItem {
  index: number;
  item: OnboardingSwiperData;
}

const MARGIN_TOP = Style.DEVICE_HEIGHT * 0.1;

function IntroItem(props: IntroItemProps) {
  const isKeyboardShown = useKeyboardListeners();
  const { index, item, setNickname, nickname } = props;

  return (
    <View style={styles.fullWidth}>
      {isKeyboardShown ? <Pad height={MARGIN_TOP} /> : <Image style={styles.image} source={images[index]} />}

      <Text style={styles.title} bold={true}>
        {item.title}
      </Text>
      <Text style={styles.subTitle}>{item.subtitle}</Text>
      {index !== 2 ? null : (
        <View style={styles.inputWrapper}>
          <TextInput onChange={setNickname} value={nickname} type={TextInput.Types.TEXT} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  fullWidth: {
    height: Style.DEVICE_HEIGHT,
    width: Style.DEVICE_WIDTH,
  },
  image: {
    alignSelf: "center",
    marginTop: MARGIN_TOP,
    height: Style.adjust(300),
    width: Style.adjust(300),
  } as ImageStyle,
  title: {
    alignSelf: "center",
    marginTop: Style.adjust(Style.isShortToMediumAndroid() ? 17 : 34),
    fontSize: 24,
    letterSpacing: 0.8,
    color: "#000000",
  } as TextStyle,
  subTitle: {
    alignSelf: "center",
    alignContent: "center",
    textAlign: "center",
    marginTop: 18,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: 16,
    lineHeight: 24,
    width: 280,
    letterSpacing: 0.8,
    color: "#5A5A5C",
  } as TextStyle,
  inputWrapper: {
    flex: 1,
    width: "100%",
    marginTop: Style.adjust(8),
    alignItems: "center",
  },
});
