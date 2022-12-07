import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { getUserFeatures } from "@redux/user/user.selectors";
import { View } from "react-native-animatable";
import { TextTemplate } from "@atoms";
import { ScrollView, StyleSheet } from "react-native";
import { GenericHeadingAbsolute } from "@organisms";
import { TOP_BAR } from "@styles";

const UserFeatures = () => {
  const userFeatures = useSelector(getUserFeatures);
  const onClose = useCallback(() => Navigation.pop(ROUTES.debug), []);

  return (
    <View>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        {!Object.keys(userFeatures).length ? (
          <TextTemplate type="b2b">Empty</TextTemplate>
        ) : (
          <TextTemplate type="b2b">{JSON.stringify(userFeatures, null, 4)}</TextTemplate>
        )}
      </ScrollView>
      <GenericHeadingAbsolute heading="Features" onRightIconPress={onClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingTop: TOP_BAR.TOP_BAR_WITH_PAD,
  },
});

export default UserFeatures;
