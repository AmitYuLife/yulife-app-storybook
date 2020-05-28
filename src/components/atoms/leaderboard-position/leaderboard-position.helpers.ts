type Positions = "first" | "second" | "third";

export const getPositionName = (position: number): Positions => {
  if (position === 1) {
    return "first";
  }

  if (position === 2) {
    return "second";
  }

  if (position === 3) {
    return "third";
  }

  return null;
};
