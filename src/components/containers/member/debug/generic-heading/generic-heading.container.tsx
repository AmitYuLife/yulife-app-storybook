import React, { useCallback } from "react";
import GenericHeading from "@components/organisms/generic-heading/generic-heading";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { Button } from "@components/molecules";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { Box } from "@atoms";
import { ScrollView } from "react-native";

const GenericHeadingScreen = () => {
  const onIconPress = useCallback(() => {
    console.log("onIconPress");
  }, []);

  return (
    <ScrollView>
      <Box gap={10}>
        <Box borderWidth={1} borderColor="red">
          <GenericHeading
            color=""
            disabled={false}
            heading="VeryLongEvenLongerHeadingTitle"
            leftIconTestID="leftTestID"
            logo="yulife"
            onLeftIconPress={onIconPress}
            onRightIconPress={onIconPress}
            rightIconTestID="rightTestID"
          />
        </Box>
        <Box borderWidth={1} borderColor="green">
          <GenericHeading
            color=""
            disabled={false}
            leftIconTestID="leftTestID"
            logo="yulife"
            onLeftIconPress={onIconPress}
            onRightIconPress={onIconPress}
            rightIconTestID="rightTestID"
          />
        </Box>
        <Box borderWidth={1} borderColor="blue">
          <GenericHeading
            color=""
            disabled={false}
            leftIcon={LeftIcon.MENU}
            leftIconTestID="leftTestID"
            logo="yulife"
            onLeftIconPress={onIconPress}
            onRightIconPress={onIconPress}
            rightIcon="COINS"
            rightIconTestID="rightTestID"
          />
        </Box>
        <Box borderWidth={1} borderColor="green">
          <GenericHeading
            color=""
            disabled={false}
            heading="OkIWantTheHeaderToBeSoLongThatItBreaks"
            leftIcon={LeftIcon.BACK}
            leftIconTestID="leftTestID"
            onLeftIconPress={onIconPress}
            onRightIconPress={onIconPress}
            rightIcon="COINS"
            rightIconTestID="rightTestID"
          />
        </Box>
        <Box borderWidth={1} borderColor="green">
          <GenericHeading
            color=""
            disabled={false}
            heading="OkIWantTheHeaderToBeSoLongThatItBreaks"
            onRightIconPress={onIconPress}
            rightIcon="COINS"
            rightIconTestID="rightTestID"
          />
        </Box>
        <Box borderWidth={1} borderColor="orange">
          <GenericHeading
            color=""
            disabled={false}
            heading="Left icon + title"
            leftIcon={LeftIcon.BACK}
            leftIconTestID="leftTestID"
            logo="yulife"
            onLeftIconPress={onIconPress}
          />
        </Box>
        <Box borderWidth={1} borderColor="blue">
          <GenericHeading
            color=""
            disabled={false}
            leftIcon={LeftIcon.MENU}
            leftIconTestID="leftTestID"
            logo="yulife"
            onLeftIconPress={onIconPress}
            onRightIconPress={onIconPress}
            rightIcon="SETTINGS"
            rightIconTestID="rightTestID"
          />
        </Box>
        <Box borderWidth={1} borderColor="pink">
          <GenericHeading
            color=""
            disabled={false}
            heading="heading"
            leftIcon={LeftIcon.CLOSE}
            leftIconTestID="leftTestID"
            logo="yulife"
            onLeftIconPress={onIconPress}
            onRightIconPress={onIconPress}
            rightIcon="EDIT"
            rightIconTestID="rightTestID"
          />
        </Box>
        <Box borderWidth={1} borderColor="brown">
          <GenericHeading
            color=""
            disabled={false}
            heading=""
            leftIcon={LeftIcon.REFRESH}
            leftIconTestID="leftTestID"
            logo="yulife"
            onLeftIconPress={onIconPress}
            onRightIconPress={onIconPress}
            rightIcon="PLUS"
            rightIconTestID="rightTestID"
          />
        </Box>
        <Box borderWidth={1} borderColor="black">
          <GenericHeading
            color=""
            disabled={false}
            heading="Right Icon + title"
            logo="yulife"
            onRightIconPress={onIconPress}
            rightIcon="CLOSE"
            rightIconTestID="rightTestID"
          />
        </Box>
        <Button onPress={() => Navigation.popToRoot(ROUTES.debug)} translatedLabel={"Back"} testID="" />
      </Box>
    </ScrollView>
  );
};

export default GenericHeadingScreen;
