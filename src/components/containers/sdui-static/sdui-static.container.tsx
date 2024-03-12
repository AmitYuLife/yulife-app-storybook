import React, { ComponentProps } from "react";
import { SduiScreen } from "@components/screens";
import { SduiStaticLayout } from "./sdui-static.layout";
import { SduiProvider } from "@components/sdui/_context/SduiProvider";
import { useQueryOnScreenSeen } from "@hooks";
import { gql } from "@graphql/__generated";

interface SduiStaticProps {
  stepId: string;
  journeyId?: string;
  dynamicId?: string;
  shouldRefetchOnScreenSeen?: boolean;
  componentId?: string;
}

const SduiStatic = ({ stepId, dynamicId, journeyId, shouldRefetchOnScreenSeen, componentId }: SduiStaticProps) => {
  const [, { data, loading }] = useQueryOnScreenSeen(
    gql("GetSduiStaticStepDocument"),
    componentId,
    {
      variables: {
        stepId,
        dynamicId,
        journeyId,
      },
      fetchPolicy: "no-cache",
    },
    {
      refetch: shouldRefetchOnScreenSeen,
    }
  );

  const typecastedData = data?.getSduiStaticStep as ComponentProps<typeof SduiScreen>;

  return (
    <SduiStaticLayout isLoading={loading || !typecastedData}>
      <SduiProvider isLoading={loading || !typecastedData}>
        <SduiScreen {...(typecastedData || {})} />
      </SduiProvider>
    </SduiStaticLayout>
  );
};

export default SduiStatic;
