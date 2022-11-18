import React from "react";
import { useQuery } from "@apollo/client";
import { SduiScreen } from "@components/screens";
import { GQL_QUERY_GET_SDUI_STATIC_STEP } from "@graphql/sduiStatic";
import { GetSduiStaticStep, GetSduiStaticStepVariables } from "@graphql/_core/schema";
import { SduiStaticLayout } from "./sdui-static.layout";

interface SduiStaticProps {
  stepId: string;
}

const SduiStatic = ({ stepId }: SduiStaticProps) => {
  const { data } = useQuery<GetSduiStaticStep, GetSduiStaticStepVariables>(GQL_QUERY_GET_SDUI_STATIC_STEP, {
    variables: {
      stepId,
    },
    fetchPolicy: "no-cache",
  });

  return (
    <SduiStaticLayout isLoading={!data?.getSduiStaticStep}>
      <SduiScreen {...(data?.getSduiStaticStep || {})} />
    </SduiStaticLayout>
  );
};

export default SduiStatic;
