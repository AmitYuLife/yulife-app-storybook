import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { getUserFeatures } from "@redux/user/user.selectors";
import { TextTemplate } from "@atoms";
import { ScrollView, StyleSheet, View } from "react-native";
import { GenericHeadingAbsolute } from "@organisms";
import { Style, TOP_BAR } from "@styles";
import { Switch } from "@components/molecules";
import { useMutation } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { useDispatch } from "react-redux";
import { getUserDataStart } from "@redux/user/user.actions";
import { AppDataType } from "@redux/user/user.types";

const UserFeatures = () => {
  const userFeatures: Record<string, boolean> = useSelector(getUserFeatures);
  const onClose = useCallback(() => Navigation.pop(ROUTES.debug), []);
  const [setFeature] = useMutation(gql("SetFeatureDocument"));
  const dispatch = useDispatch();

  const onPress = useCallback(
    async (feature: string, value: boolean) => {
      await setFeature({ variables: { feature: feature, value } });
      await dispatch(getUserDataStart({ types: [AppDataType.features] }));
    },
    [dispatch, setFeature]
  );

  return (
    <View>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        {!Object.keys(userFeatures).length ? (
          <TextTemplate type="b2b">Empty</TextTemplate>
        ) : (
          Object.keys(userFeatures).map((key) => (
            <View key={key} style={styles.featureWrapper}>
              <View style={styles.textWrapper}>
                <TextTemplate key={key} type="b2b">
                  {key}
                </TextTemplate>
              </View>

              <Switch onPress={() => onPress(key, !userFeatures[key])} value={userFeatures[key]} />
            </View>
          ))
        )}
      </ScrollView>
      <GenericHeadingAbsolute heading="Features" onRightIconPress={onClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingTop: TOP_BAR.PADDING_TOP,
  },
  featureWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Style.adjust(8),
    marginHorizontal: Style.adjust(16),
  },
  textWrapper: {
    maxWidth: (Style.DEVICE_WIDTH - Style.adjust(32)) * 0.8,
  },
});

export default UserFeatures;
