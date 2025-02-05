import { StyleSheet, View } from "react-native";
import { GetHealthSmokingStateQuery } from "@graphql/__generated";
import { Image, TextTemplate } from "@atoms";
import { Style } from "@styles";
import { useSelector } from "react-redux";
import { getUserAvatar } from "@redux/user/user.selectors";
import { Avatar, LottieView } from "@components/molecules";
import { SMOKING_CELEBRATION_TITLE } from "@ids";

export const LastMilestoneCelebration = ({
  smokingData,
}: {
  smokingData: GetHealthSmokingStateQuery["getHealthSmokingState"];
}) => {
  const avatar = useSelector(getUserAvatar);

  const {
    streakCheckInOverlay: { lastMilestoneCelebration },
  } = smokingData;

  return (
    <View>
      <View style={styles.titleContainer}>
        <TextTemplate type="h3" textAlign="center" testID={SMOKING_CELEBRATION_TITLE(lastMilestoneCelebration.title)}>
          {lastMilestoneCelebration.title}
        </TextTemplate>
      </View>
      <View style={styles.illustration}>
        <Image source={lastMilestoneCelebration.image} width={Style.adjust(294)} height={Style.adjust(294)} />
        <View style={styles.avatarWrapper}>
          <Avatar
            uri={avatar?.avatarRemoteFiles?.pngMini}
            showEmpty={true}
            size={114}
            backgroundColor={"transparent"}
          />
        </View>
        <LottieView
          source={require("../assets/streak-sparkles.json")}
          autoPlay={true}
          loop={true}
          style={styles.sparks}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <TextTemplate type="b2" textAlign="center">
          {lastMilestoneCelebration.description}
        </TextTemplate>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    marginBottom: Style.adjust(6),
  },
  descriptionContainer: {
    paddingHorizontal: Style.adjust(30),
    marginTop: Style.adjust(4),
    marginBottom: Style.adjust(4),
  },
  illustration: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: Style.adjust(24),
  },
  avatarWrapper: {
    position: "absolute",
    top: Style.adjust(58),
  },
  sparks: {
    width: "100%",
    height: Style.adjust(220),
    position: "absolute",
    top: Style.adjust(16),
  },
});
