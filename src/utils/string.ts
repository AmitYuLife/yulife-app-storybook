export function toCapitalLetter(str: string) {
  try {
    const splitedArray = str.toLowerCase().trim().split(" ");

    for (let i = 0, x = splitedArray.length; i < x; i++) {
      splitedArray[i] = !splitedArray[i][0]
        ? splitedArray[i]
        : splitedArray[i][0].toUpperCase() + splitedArray[i]?.substr(1);
    }

    return splitedArray.join(" ");
  } catch {
    return str;
  }
}

export const truncate = (str: string, chars = 30) => {
  if (!str) {
    return "";
  }

  if (str.length <= chars) {
    return str;
  }

  return `${str.substr(0, chars)}...`;
};

export function getQueryStringObject(fullUrl: string) {
  const urlArray = fullUrl.split("?");
  const url = urlArray[1] || urlArray[0];
  const properties = url.replace(/\%20/g, "+").split("&");
  const result: any = {};

  for (const property of properties) {
    const pair = property.split("=");
    result[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }

  return result;
}
