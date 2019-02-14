import World1Movie from "./world-1/world-1-unity";
import World2Movie from "./world-2/world-2-unity";

export default function getUnity(currentWorld: number): any {
    switch (currentWorld) {
        case 1:
            return World2Movie;
        case 0:
        default:
            return World1Movie;
    }
}
