import React, { FunctionComponent } from "react";
import { Keyboard } from "react-native";
import { useMutation } from "@apollo/client";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { ChangeMemberNickname } from "@components/screens";
import { gql } from "@graphql/__generated";

const ChangeMemberNicknameContainer: FunctionComponent = () => {
  const [updateNickname, { loading }] = useMutation(gql("UpdateNicknameDocument"));
  const handleOnPress = async (nickname: string) => {
    try {
      await updateNickname({ variables: { nickname } });
      Keyboard.dismiss();
      Navigation.pop(ROUTES.changeMemberNickname);
    } catch (e) {
      // TODO: show error message?
    }
  };

  return <ChangeMemberNickname enableButton={true} onPress={handleOnPress} isLoading={loading} />;
};

export default ChangeMemberNicknameContainer;
