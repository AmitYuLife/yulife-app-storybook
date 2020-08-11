import { useQuery } from "@apollo/react-hooks";
import { GenericHeading } from "@atoms/index";
import { GQL_QUERY_GET_USER_STATS } from "@graphql/yuscreen";
import { ROUTES } from "@navigation/constants";
import { Style } from "@styles/index";
import React, { FC, useCallback } from "react";
import { SafeAreaView, View } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { IReduxState } from "../../../../redux/_core/reducers";
import { getUserStart } from "../../../../redux/user/user.actions";
import { getUserFeatures } from "../../../../redux/user/user.selectors";
import {
  LoadingGeneralInfoCard,
  LoadingHeader,
  LoadingRecomendationCard,
} from "../../../screens/member/stats/cards/general-info-card";
import Stats from "../../../screens/member/stats/stats";
interface IProps {
  componentId: string;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

type Props = IProps & ConnectedState & ConnectedDispatch;

const StatsContainer: FC<Props> = ({ componentId }) => {
  const handleClose = useCallback(() => {
    Navigation.popToRoot(componentId);
  }, [componentId]);

  const handleActivityHistoryPress = useCallback(() => {
    Navigation.push(componentId, {
      component: {
        id: ROUTES.activityHistory,
        name: ROUTES.activityHistory,
        // options: { bottomTabs }
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { data, error, loading } = useQuery(GQL_QUERY_GET_USER_STATS, { fetchPolicy: "cache-and-network" });

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <GenericHeading heading={"statistics"} onRightIconPress={handleClose} />
        <View style={{ backgroundColor: "#FAFAFE", padding: Style.SCALE_UP_AND_DOWN(16) }}>
          <LoadingHeader />
          <LoadingRecomendationCard />
          <LoadingGeneralInfoCard />
          <LoadingRecomendationCard />
          <LoadingHeader />
          <LoadingRecomendationCard />
          <LoadingGeneralInfoCard />
          <LoadingRecomendationCard />
        </View>
      </SafeAreaView>
    );
  }

  if (error && (!data || !data.getUserStats)) {
    return null; // WTF?
  }

  return (
    <Stats data={data.getUserStats} onPressClose={handleClose} onPressActivityHistory={handleActivityHistoryPress} />
  );
};

const mapStateToProps = (state: IReduxState) => ({
  features: getUserFeatures(state),
});

const mapDispatchToProps = {
  getUserStart,
};

export default connect<ConnectedState, ConnectedDispatch>(mapStateToProps, mapDispatchToProps)(StatsContainer);
