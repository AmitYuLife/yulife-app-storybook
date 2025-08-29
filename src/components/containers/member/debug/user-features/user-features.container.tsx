import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { getUserFeatures } from "@redux/user/user.selectors";
import { Box, TextTemplate } from "@atoms";
import { ScrollView, TextInput } from "react-native";
import { GenericHeadingAbsolute } from "@organisms";
import { Style, TOP_BAR, StyleSheet } from "@styles";
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
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dispatch = useDispatch();

  const filteredFeatures = Object.keys(userFeatures).filter((key) =>
    key.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const onPress = useCallback(
    async (feature: string, value: boolean) => {
      await setFeature({ variables: { feature: feature, value } });
      await dispatch(getUserDataStart({ types: [AppDataType.features] }));
    },
    [dispatch, setFeature]
  );

  return (
    <Box>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainerStyle}>
        <TextInput
          style={styles.search}
          value={searchQuery}
          placeholder="Search feature"
          onChangeText={setSearchQuery}
          autoCorrect={false}
          autoCapitalize="none"
        />
        {!filteredFeatures.length ? (
          <Box mh={16}>
            <TextTemplate type="b2b">Empty</TextTemplate>
          </Box>
        ) : (
          filteredFeatures.map((key) => (
            <Box key={key} flexDirection="row" justifyContent="space-between" mb={8} mh={16}>
              <Box maxHeight={(Style.DEVICE_WIDTH - Style.adjust(32)) * 0.8}>
                <TextTemplate key={key} type="b2b">
                  {key}
                </TextTemplate>
              </Box>

              <Switch onPress={() => onPress(key, !userFeatures[key])} value={userFeatures[key]} />
            </Box>
          ))
        )}
      </ScrollView>

      <GenericHeadingAbsolute heading="Features" onRightIconPress={onClose} />
    </Box>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingTop: TOP_BAR.PADDING_TOP,
  },
  scrollView: {
    height: Style.DEVICE_HEIGHT,
  },
  search: {
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: Style.SCALE_UP_AND_DOWN(15),
    marginBottom: Style.SCALE_UP_AND_DOWN(15),
    paddingVertical: Style.SCALE_UP_AND_DOWN(15),
    flexGrow: 1,
  },
});

export default UserFeatures;
