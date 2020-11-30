import React, { FunctionComponent } from "react";
import { View, Keyboard, StyleSheet } from "react-native";
import { useMutation } from "@apollo/react-hooks";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import { GQL_MUTATION_UPDATE_NICKNAME } from "@graphql/user";
import { ChangeMemberNickname } from "@components/screens";
import { UpdateNickname, UpdateNicknameVariables } from "@graphql/_core/schema/UpdateNickname";

const ChangeMemberNicknameContainer: FunctionComponent = () => {
  const [updateNickname, { loading }] = useMutation<UpdateNickname, UpdateNicknameVariables>(
    GQL_MUTATION_UPDATE_NICKNAME
  );
  const handleOnPress = async (nickname: string) => {
    try {
      await updateNickname({ variables: { nickname } });
      Keyboard.dismiss();
      Navigation.pop(ROUTES.changeMemberNickname);
    } catch (e) {
      // TODO: show error message?
    }
  };

  return (
    <View style={styles.wrapper}>
      <ChangeMemberNickname enableButton={true} onPress={handleOnPress} isLoading={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default ChangeMemberNicknameContainer;
