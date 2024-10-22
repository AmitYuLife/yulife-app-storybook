import { useIntroModal } from "@components/containers/member/smoking/smoking-hub/hooks";
import { Navigation } from "@navigation/main";
import { useNavigation } from "@navigation/navigation.context";
import { GenericHeadingAbsolute } from "@organisms";
import { View } from "react-native";
import { debugSmokingJourneyStories } from "./fixtures";
import { useEffect } from "react";

const SmokingJourneyStories = () => {
  const { componentId } = useNavigation();
  const { showIntroModal } = useIntroModal(debugSmokingJourneyStories);

  useEffect(() => {
    if (!showIntroModal) {
      Navigation.pop(componentId);
    }
  }, [showIntroModal]);

  return (
    <View>
      <GenericHeadingAbsolute onLeftIconPress={() => Navigation.pop(componentId)} />
    </View>
  );
};

export default SmokingJourneyStories;
