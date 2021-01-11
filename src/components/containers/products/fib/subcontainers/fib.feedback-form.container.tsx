import React, { useState } from "react";
import { FibLocalNavigation } from "../fib.types";
import { FibFeedbackFormScreen } from "@components/screens/products/fib/feedback-form/fib.feedback-form.screen";
import { FibFeedbackSuccessScreen } from "@components/screens/products/fib/feedback-form/fib.feedback-success.screen";
import { useQuery } from "@apollo/react-hooks";
import { GetYuliferData, GQL_QUERY_GET_YULIFER } from "@graphql/yuscreen";
import { Loading } from "@atoms";

interface Props {
  navigation: FibLocalNavigation;
}

function FibFeedbackFormContainer(props: Props) {
  const { navigation } = props;
  const [displaySuccessScreen, setDisplaySuccessScreenState] = useState(false);
  const { loading, error, data } = useQuery<GetYuliferData>(GQL_QUERY_GET_YULIFER, {
    fetchPolicy: "cache-only",
  });

  function onNavigateBack() {
    return navigation.pop();
  }

  function onNavigateToMain() {
    return navigation.popToMain();
  }

  if (loading || error) {
    return <Loading />;
  }

  if (displaySuccessScreen) {
    return (
      <FibFeedbackSuccessScreen avatar={data?.getYulifer.avatarRemoteFiles?.pngFull} onContinue={onNavigateToMain} />
    );
  }

  return (
    <FibFeedbackFormScreen onContinue={() => setDisplaySuccessScreenState(true)} onNavigateBack={onNavigateBack} />
  );
}

export default FibFeedbackFormContainer;
