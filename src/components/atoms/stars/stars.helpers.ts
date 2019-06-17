export function getColorFromType(type: string) {
    if (type === "mountain") {
        return {
            fill: "rgb(255, 213, 218)",
            accentFill: "rgb(246, 196, 203)"
        };
    } else {
        return {
            fill: "#E2E2E2",
            accentFill: "#C4C4C4"
        };
    }
}
