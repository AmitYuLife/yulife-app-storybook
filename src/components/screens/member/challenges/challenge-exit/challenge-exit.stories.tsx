import React, { useState } from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import { ChallengeExitScreen } from "@components/screens";
import { withProvider } from "@components/storybook/withProvider";

const voidFunc: () => void = () => null;

storiesOf("ChallengeExitScreen", module)
  .addDecorator(withKnobs)
  .addDecorator(withProvider)
  .addDecorator((g: () => React.ReactNode) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>{g()}</View>
  ))
  .add("default", () => <ChallengeExitStory />);

function ChallengeExitStory() {
  const [isLoading, setLoadingState] = useState(false);

  function handleClick() {
    setLoadingState(true);

    setTimeout(() => {
      setLoadingState(false);
    }, 2000);
  }

  return <ChallengeExitScreen isCancelling={isLoading} onClose={voidFunc} onPressExit={handleClick} />;
}
