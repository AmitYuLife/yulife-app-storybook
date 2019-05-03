import World1Movie from "./world-1/world-1-unity";
import World2Movie from "./world-2/world-2-unity";
import World3Movie from "./world-3/world-3-unity";
import World4Movie from "./world-4/world-4-unity";

export default function getUnity(currentWorld: number): any {
    switch (currentWorld) {
        case 3:
            return World4Movie;
        case 2:
            return World3Movie;
        case 1:
            return World2Movie;
        case 0:
        default:
            return World1Movie;
    }
}
