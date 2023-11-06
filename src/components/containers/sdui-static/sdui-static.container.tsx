import React from "react";
import { SduiScreen } from "@components/screens";
import { GQL_QUERY_GET_SDUI_STATIC_STEP } from "@graphql/sduiStatic";
import { SduiStaticLayout } from "./sdui-static.layout";
import { SduiProvider } from "@components/sdui/_context/SduiProvider";
import { useQueryOnScreenSeen } from "@hooks";

interface SduiStaticProps {
  stepId: string;
  journeyId?: string;
  dynamicId?: string;
  shouldRefetchOnScreenSeen?: boolean;
  componentId?: string;
}

const SduiStatic = ({ stepId, dynamicId, journeyId, shouldRefetchOnScreenSeen, componentId }: SduiStaticProps) => {
  const [, { data, loading }] = useQueryOnScreenSeen(
    GQL_QUERY_GET_SDUI_STATIC_STEP,
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

  return (
    <SduiStaticLayout isLoading={loading || !data?.getSduiStaticStep}>
      <SduiProvider isLoading={loading || !data?.getSduiStaticStep}>
        <SduiScreen {...(data?.getSduiStaticStep || {})} />
      </SduiProvider>
    </SduiStaticLayout>
  );
};

export default SduiStatic;
