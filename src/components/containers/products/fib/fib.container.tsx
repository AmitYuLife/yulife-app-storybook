import React, { memo } from "react";
import { FibBrowseScreen } from "@screens/index";
import { useQuery } from "@apollo/react-hooks";
import { handleNavigateBack } from "@navigation/utils";
import { transformAvatar } from "@components/screens/member/yu-screen/avatar-builder/avatar-builder.helper";
import { GQL_QUERY_GET_YULIFER, GetYuliferData } from "@graphql/yuscreen";
import { View } from "react-native";
import { Text } from "@atoms";

interface IFibContainer {
  componentId: string;
}

const FibContainer = memo(function (props: IFibContainer) {
  const { loading, error, data } = useQuery<GetYuliferData>(GQL_QUERY_GET_YULIFER);

  if (loading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  return (
    <FibBrowseScreen
      avatar={transformAvatar(data.getYulifer.avatar)}
      onNavigateBack={handleNavigateBack(props.componentId)}
      currentEarnRate={20}
      faqs={[]}
    />
  );
});

export default FibContainer;
