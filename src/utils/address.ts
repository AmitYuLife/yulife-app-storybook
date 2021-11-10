export const formatPostCode = (postCode: string) => {
  return postCode
    .replace(/ /g, "")
    .toUpperCase()
    .replace(/^(.*)(\d)/, "$1 $2");
};
