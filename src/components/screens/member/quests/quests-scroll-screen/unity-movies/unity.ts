import World1Movie from "./world-1/quests-next-episode";

export default function getUnity(currentWorldNumber: number): any {
    switch (currentWorldNumber) {
        case 0:
        default:
            return World1Movie;
    }
}
