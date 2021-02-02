import React, { memo } from "react";
import { InfoCard, LEFT_ICON } from "./info-card/info-card";
import { useCheckoutQuery } from "../hooks/useCheckoutQuery";
import { GetCheckoutDetails_contactDetails } from "@graphql/_core/schema";

interface Props {
  goToContactDetails: () => void;
}

export const ContactDetails = memo(({ goToContactDetails }: Props) => {
  const { data } = useCheckoutQuery("cache-only");
  const prompt = "Add contact details";

  if (!data?.contactDetails) {
    return (
      <InfoCard leftIcon={LEFT_ICON.CONTACT_DETAILS} markdown={prompt} onPress={goToContactDetails} isPrompt={true} />
    );
  }

  const {
    contactDetails: {
      addressCity,
      addressFirstLine,
      addressPostCode,
      addressSecondLine,
      email,
      firstName,
      lastName,
      phone,
    },
  } = data;

  const info = `**Contact Details**\n${firstName} ${lastName}\n${addressFirstLine}, ${
    addressSecondLine ? `${addressSecondLine}, ` : ""
  }${addressCity},\n${addressPostCode}\n\n${email}\n${phone}`;
  const isEmpty = !addressFirstLine || !addressCity || !addressPostCode || !email || !phone;
  const markdown = isEmpty ? prompt : info;

  return (
    <InfoCard
      leftIcon={getLeftIcon({
        addressCity,
        addressFirstLine,
        addressPostCode,
        email,
        phone,
      })}
      markdown={markdown}
      onPress={goToContactDetails}
      isPrompt={isEmpty}
    />
  );
});

const getLeftIcon = ({
  addressCity,
  addressFirstLine,
  addressPostCode,
  email,
  phone,
}: Partial<GetCheckoutDetails_contactDetails>) => {
  if (addressFirstLine && addressCity && addressPostCode && email && phone) {
    return LEFT_ICON.CONTACT_DETAILS_COLOURED;
  }

  return LEFT_ICON.CONTACT_DETAILS;
};
