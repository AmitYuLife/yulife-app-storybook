export const formatPostCode = (postCode: string) => {
  return postCode
    .replace(/ /g, "")
    .toUpperCase()
    .replace(/^(.*)(\d)/, "$1 $2");
};

const phoneRegEx = /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/;
export const phoneNumberIsValid = (phoneNumber: string) => {
  return phoneRegEx.test(phoneNumber);
};
