import World1Movie from "./world-1/quests-next-episode";

const getUnity = (currentWorldNumber: number): any => {
    switch (currentWorldNumber) {
        case 0:
        default:
            return World1Movie;
    }
};

export default getUnity;
