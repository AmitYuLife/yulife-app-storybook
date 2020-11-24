import * as React from "react";
import { StyleSheet, ListRenderItemInfo, View, Image, ImageStyle, TextStyle } from "react-native";
import { useMutation } from "@apollo/react-hooks";
import { GQL_MUTATION_UPDATE_NICKNAME } from "@graphql/user";
import { UpdateNickname, UpdateNicknameVariables } from "@graphql/_core/schema/UpdateNickname";
import { Text, Pad } from "@atoms";
import { OnboardingSwiper, OnboardingSwiperData } from "@organisms";
import { Style } from "@styles";
import { ChangeMemberNickname } from "@screens";
import { useKeyboardListeners } from "@services/hooks/useKeyboardListeners";

interface Props {
  setOnboardingShown: () => void;
}

const images = [
  require("../../../../../assets/community-goals/intro/first.png"),
  require("../../../../../assets/community-goals/intro/second.png"),
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
  },
];

const CommunityGoalsIntro: React.FunctionComponent<Props> = ({ setOnboardingShown }) => {
  const [nickname, setNickname] = React.useState<string>("");
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

  const renderItem = ({ item, index: sliderNumber }: ListRenderItemInfo<OnboardingSwiperData>) => {
    return sliderNumber !== 2 ? (
      <IntroItem sliderNumber={sliderNumber} item={item} />
    ) : (
      <ChangeMemberNickname onChange={setNickname} enableButton={false} />
    );
  };

  return <OnboardingSwiper data={data} renderItem={renderItem} onClose={handleClose} />;
};

export default CommunityGoalsIntro;

interface IntroItemProps {
  sliderNumber: number;
  item: OnboardingSwiperData;
}

const MARGIN_TOP = Style.DEVICE_HEIGHT * 0.1;

const IntroItem = React.memo((props: IntroItemProps) => {
  const isKeyboardShown = useKeyboardListeners();
  const { sliderNumber, item } = props;

  return (
    <View style={styles.fullWidth}>
      {isKeyboardShown ? <Pad height={MARGIN_TOP} /> : <Image style={styles.image} source={images[sliderNumber]} />}
      <Text style={styles.title} bold={true}>
        {item?.title}
      </Text>
      <Text style={styles.subTitle}>{item?.subtitle}</Text>
    </View>
  );
});

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
