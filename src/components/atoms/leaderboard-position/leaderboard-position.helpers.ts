type Positions = "first" | "second" | "third";

export const getPositionName = (position: number): Positions => {
    if (position === 1) {
        return "first";
    } else if (position === 2) {
        return "second";
    } else if (position === 3) {
        return "third";
    }

    return null;
};
