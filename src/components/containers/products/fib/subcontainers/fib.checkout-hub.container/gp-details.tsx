import React, { memo } from "react";
import { InfoCard, LEFT_ICON } from "./info-card/info-card";
import { useSelector } from "react-redux";
import { getFIBState } from "@redux/product/product.selectors";
import { GetCheckoutDetails_gpDetails } from "@graphql/_core/schema";
import { GP_DETAILS_CARD } from "@ids";

interface Props {
  goToGpDetails: () => void;
  gpDetails?: GetCheckoutDetails_gpDetails;
}

export const GpDetails = memo((props: Props) => {
  const { gpDetails, goToGpDetails } = props;

  const localGpDetails = useSelector(getFIBState).gpDetails;
  const gpName = localGpDetails?.gpName || gpDetails?.gpName;
  const practiceName = localGpDetails?.practiceName || gpDetails?.gpPractice;
  const practiceAddress = localGpDetails?.practiceAddress || gpDetails?.gpAddress;
  const practiceTown = localGpDetails?.practiceTown || gpDetails?.gpTown;
  const practicePostCode = localGpDetails?.practicePostCode || gpDetails?.gpPostcode;

  const prompt = "Add GP details";
  const info = `**GP Details**\n${gpName}\n${practiceName}, ${practiceAddress}, ${practiceTown}\n${practicePostCode}`;
  const isEmpty = !gpName || !practiceName || !practiceAddress || !practiceTown;
  const markdown = isEmpty ? prompt : info;

  return (
    <InfoCard
      leftIcon={getLeftIcon({ gpName, practiceAddress, practiceName, practicePostCode, practiceTown })}
      markdown={markdown}
      onPress={goToGpDetails}
      isPrompt={isEmpty}
      testID={GP_DETAILS_CARD(gpName, practicePostCode)}
    />
  );
});

const getLeftIcon = ({
  gpName,
  practiceAddress,
  practiceName,
  practicePostCode,
  practiceTown,
}: {
  gpName: string;
  practiceAddress: string;
  practiceName: string;
  practicePostCode: string;
  practiceTown: string;
}) => {
  if (gpName && practiceAddress && practiceName && practicePostCode && practiceTown) {
    return LEFT_ICON.GP_DETAILS_COLOURED;
  }

  return LEFT_ICON.GP_DETAILS;
};
