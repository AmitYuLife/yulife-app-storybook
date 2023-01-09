import React from "react";
import { useQuery } from "@apollo/client";
import { SduiScreen } from "@components/screens";
import { GQL_QUERY_GET_SDUI_STATIC_STEP } from "@graphql/sduiStatic";
import { GetSduiStaticStep, GetSduiStaticStepVariables } from "@graphql/_core/schema";
import { SduiStaticLayout } from "./sdui-static.layout";
import { SduiProvider } from "@components/sdui/_context/SduiProvider";

interface SduiStaticProps {
  stepId: string;
  journeyId?: string;
  dynamicId?: string;
}

const SduiStatic = ({ stepId, dynamicId, journeyId }: SduiStaticProps) => {
  const { data } = useQuery<GetSduiStaticStep, GetSduiStaticStepVariables>(GQL_QUERY_GET_SDUI_STATIC_STEP, {
    fetchPolicy: "no-cache",
    variables: {
      stepId,
      dynamicId,
      journeyId,
    },
  });

  return (
    <SduiStaticLayout isLoading={!data?.getSduiStaticStep}>
      <SduiProvider isLoading={!data?.getSduiStaticStep}>
        <SduiScreen {...(data?.getSduiStaticStep || {})} />
      </SduiProvider>
    </SduiStaticLayout>
  );
};

export default SduiStatic;
