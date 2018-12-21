import { World1, World2 } from "./assets";

const getBackgrounds = (currentWorldNumber: number) => {
    switch (currentWorldNumber) {
        case 1:
            return World2;
        case 0:
        default:
            return World1;
    }
};

export default getBackgrounds;
