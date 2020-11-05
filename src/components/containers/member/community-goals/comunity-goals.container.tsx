import { useQuery, useMutation } from "@apollo/react-hooks";
import { GQL_QUERY_GET_COMMUNITY_GOALS, GQL_MUTATION_JOIN_COMMUNITY_GOAL } from "@graphql/communityGoals";
import { GetCommunityGoals, JoinCommunityGoal, JoinCommunityGoalVariables } from "@graphql/_core/schema";
import * as React from "react";
import { connect, ConnectedProps } from "react-redux";
import { CommunityGoalsScreen, CommunityGoalsIntro } from "@screens";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import { IReduxState } from "@redux/_core/reducers";
import { getShowCommunityGoalsIntro } from "@redux/onboarding/onboarding.selectors";
import { setCommunityGoalsIntroShown } from "@redux/onboarding/onboarding.actions";

interface IProps {
  componentId: string;
}

type Props = IProps & ConnectedProps<typeof redux>;

const _CommunityGoalsContainer: React.FC<Props> = (props) => {
  const { data, refetch, loading } = useQuery<GetCommunityGoals>(GQL_QUERY_GET_COMMUNITY_GOALS, {
    fetchPolicy: "cache-and-network",
  });
  const [joinCommunityGoal] = useMutation<JoinCommunityGoal, JoinCommunityGoalVariables>(
    GQL_MUTATION_JOIN_COMMUNITY_GOAL,
    { refetchQueries: [{ query: GQL_QUERY_GET_COMMUNITY_GOALS }] }
  );

  const handleRefetch = async () => {
    try {
      await refetch();
    } catch (e) {
      // safe
    }
  };

  if (props.introShown) {
    return <CommunityGoalsIntro setOnboardingShown={() => props.setCommunityGoalsIntroShown()} />;
  }

  return (
    <CommunityGoalsScreen
      data={data?.getCommunityGoals || []}
      loading={loading}
      joinCommunityGoal={joinCommunityGoal}
      onRefresh={handleRefetch}
      onClose={handleClose}
    />
  );
};

function handleClose() {
  Navigation.popToRoot(ROUTES.communityGoals);
}

const mapStateToProps = (state: IReduxState) => ({
  introShown: getShowCommunityGoalsIntro(state),
});

const mapDispatchToProps = {
  setCommunityGoalsIntroShown,
};

const redux = connect<ReturnType<typeof mapStateToProps>, typeof mapDispatchToProps, null>(
  mapStateToProps,
  mapDispatchToProps
);
const CommunityGoalsContainer = redux(_CommunityGoalsContainer);

export default CommunityGoalsContainer;
