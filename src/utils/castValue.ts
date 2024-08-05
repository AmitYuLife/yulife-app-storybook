const IS_FLOAT_NUMBER = /^-?[0-9]*\.?[0-9]*$/;

export const castValue = (value: string) => {
  if (IS_FLOAT_NUMBER.test(value)) {
    const parsedValue = parseFloat(value);

    if (!isNaN(parsedValue)) {
      return parsedValue;
    }
  }

  return value;
};
