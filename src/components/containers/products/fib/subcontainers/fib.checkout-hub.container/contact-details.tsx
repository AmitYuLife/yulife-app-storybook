import React, { memo } from "react";
import { InfoCard, LEFT_ICON } from "./info-card/info-card";
import { useSelector } from "react-redux";
import { getContactDetails, getFullName } from "@redux/product/product.selectors";

interface Props {
  goToContactDetails: () => void;
}

export const ContactDetails = memo(({ goToContactDetails }: Props) => {
  const {
    firstAddressLine = "",
    secondAddressLine = "",
    townOrCity = "",
    postCode = "",
    personalEmail = "",
    phoneNumber = "",
  } = useSelector(getContactDetails);
  const fullName = useSelector(getFullName);

  const info = `**Contact Details**\n${fullName}\n${firstAddressLine}, ${
    secondAddressLine ? `${secondAddressLine}, ` : ""
  }${townOrCity},\n${postCode}\n\n${personalEmail}\n${phoneNumber}`;
  const prompt = "Add Contact Details";
  const isEmpty = !firstAddressLine || !townOrCity || !postCode || !personalEmail || !phoneNumber;
  const markdown = isEmpty ? prompt : info;

  return (
    <InfoCard
      leftIcon={getLeftIcon({ fullName, firstAddressLine, townOrCity, postCode, phoneNumber })}
      markdown={markdown}
      onPress={goToContactDetails}
      center={isEmpty}
    />
  );
});

const getLeftIcon = ({
  fullName,
  firstAddressLine,
  townOrCity,
  postCode,
}: {
  fullName: ReturnType<typeof getFullName>;
} & Partial<ReturnType<typeof getContactDetails>>) => {
  if (fullName && firstAddressLine && townOrCity && postCode) {
    return LEFT_ICON.CONTACT_DETAILS_COLOURED;
  }

  return LEFT_ICON.CONTACT_DETAILS;
};
