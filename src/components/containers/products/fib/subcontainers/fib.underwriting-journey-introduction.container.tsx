import React from "react";
import { FibLocalNavigation, FIB_UNDERWRITING_JOURNEY } from "../fib.types";
import { useQuery } from "@apollo/react-hooks";
import { GetYuliferData, GQL_QUERY_GET_YULIFER } from "@graphql/yuscreen";
import { Loading } from "@atoms";
import { FibUnderwritingIntroduction } from "../../../../screens/products/fib/underwriting-journey/fib.underwriting-intro.screen";

interface Props {
  navigation: FibLocalNavigation;
}

function FibUnderwritingJourneyIntroductionContainer(props: Props) {
  const { navigation } = props;
  const { loading, error, data } = useQuery<GetYuliferData>(GQL_QUERY_GET_YULIFER, {
    fetchPolicy: "cache-only",
  });

  if (loading || error) {
    return <Loading />;
  }

  return (
    <FibUnderwritingIntroduction
      avatar={data?.getYulifer.avatarRemoteFiles?.pngFull}
      onContinue={() => navigation.push(FIB_UNDERWRITING_JOURNEY)}
      onNavigateBack={() => navigation.popToMain()}
    />
  );
}

export default FibUnderwritingJourneyIntroductionContainer;
