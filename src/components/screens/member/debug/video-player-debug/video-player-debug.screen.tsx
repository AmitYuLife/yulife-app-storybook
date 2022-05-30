import React from "react";
import { VideoPlayer } from "@organisms";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import { Alert } from "react-native";

const VideoPlayerDebugScreen = () => {
  const popNav = () => Navigation.popTo(ROUTES.debug);

  const onEnd = () => Alert.alert("Meditation complete", "this will go to rewards screen");
  return (
    <VideoPlayer
      source="https://yulife-local.imgix.net/videos/meditation/five-minutes/yulife-meditopia-relaxing-the-body-example.mp4?ixlib=js-3.2.1&s=b35cefd097fa678232e546e51e51b6d1"
      poster="https://i.ibb.co/PNz23Lx/test.jpg"
      title="Relaxing the body"
      cover="https://i.ibb.co/zJFPXZf/Screenshot-2022-05-19-at-10-40-32.png"
      description="He initially considers the transformation to be temporary and slowly ponders the consequences of this metamorphosis. Stuck on his back and unable to get up and leave the bed, Gregor reflects on his job as a traveling salesman and cloth merchant."
      shortDescription="5 minutes - Now"
      theme="light"
      onLeftIconPress={popNav}
      onRightIconPress={popNav}
      onEnd={onEnd}
      yuCoin={50}
      stars={3}
    />
  );
};

export default VideoPlayerDebugScreen;
