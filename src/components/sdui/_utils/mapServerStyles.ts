import { ContentItemStyle } from "@graphql/_core/schema/ContentItemStyle";

type Style = ContentItemStyle;

export const mapServerStyles = (styles: Style[] = []) => {
  if (!styles?.length) {
    return null;
  }

  const style = styles.reduce((acc, curr) => {
    acc[curr.property] = castValue(curr.value);

    return acc;
  }, {} as Record<string, string | number>);

  return style;
};

const IS_FLOAT_NUMBER = /^[0-9]*\.?[0-9]*$/;

const castValue = (value: ContentItemStyle["value"]) => {
  if (IS_FLOAT_NUMBER.test(value)) {
    const parsedValue = parseFloat(value);

    if (!isNaN(parsedValue)) {
      return parsedValue;
    }
  }

  return value;
};
