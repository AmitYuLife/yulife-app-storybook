import React, { useCallback } from "react";
import { PixelRatio, Platform, View, ViewStyle } from "react-native";
import { Navigation } from "react-native-navigation";
import { Style } from "@styles";
import WellBeingHub from "@components/screens/wellbeing-hub/wellbeing-hub";
import { GQL_QUERY_GET_CURRENT_USER } from "@graphql/user";
import { useQuery } from "@apollo/react-hooks";
import { GQL_QUERY_GET_WELLBEING_HUB_ITEMS } from "@graphql/wellbeingHub";
import { GetWellbeingHubItems } from "@graphql/_core/schema";

interface IProps {
  componentId: string;
}

const MemberServicesContainer = ({ componentId }: IProps) => {
  const handleClose = useCallback(() => Navigation.popToRoot(componentId), [componentId]);

  const { loading: userLoading, data: user } = useQuery(GQL_QUERY_GET_CURRENT_USER, {
    fetchPolicy: "cache-and-network",
    variables: { intercomHashMethod: Platform.OS },
  });

  const { data: wellbeing, loading: itemsLoading } = useQuery<GetWellbeingHubItems>(GQL_QUERY_GET_WELLBEING_HUB_ITEMS, {
    variables: {
      os: Platform.OS,
      width: PixelRatio.get() * Style.adjust(240),
      height: PixelRatio.get() * Style.adjust(208),
    },
    fetchPolicy: "cache-and-network",
  });

  return (
    <View style={styles.wrapper}>
      <WellBeingHub
        handleClose={handleClose}
        loading={userLoading || itemsLoading}
        userFirstName={user?.getCurrentUser.firstName}
        cards={wellbeing?.wellbeingHubItems}
      />
    </View>
  );
};

export default MemberServicesContainer;

const styles = {
  wrapper: {
    flex: 1,
  } as ViewStyle,
  tabsWrapper: {
    marginTop: Style.adjust(17),
  } as ViewStyle,
};
