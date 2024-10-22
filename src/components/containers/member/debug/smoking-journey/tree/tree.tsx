import { debugSmokingJourneyTreeData } from "./fixtures";
import { JourneyLayout } from "@components/containers/journey/journey.layout";
import { SduiProvider } from "@components/sdui/_context/SduiProvider";
import { SduiScreen } from "@components/screens";

const SmokingJourneyTree = () => (
  <JourneyLayout isLoading={false}>
    <SduiProvider
      id={debugSmokingJourneyTreeData.getSduiJourney.stepId}
      isLoading={!debugSmokingJourneyTreeData.getSduiJourney}
    >
      <SduiScreen {...(debugSmokingJourneyTreeData.getSduiJourney || {})} />
    </SduiProvider>
  </JourneyLayout>
);

export default SmokingJourneyTree;
