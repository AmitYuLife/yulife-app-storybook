/* tslint:disable */
import React, { SFC } from "react";
import { G, Path } from "react-native-svg";

interface Props {
    x: string;
    y: string;
}

const Lock: SFC<Props> = ({ x, y }) => (
    <G x={x} y={y}>
        <Path
            x={-1 * 375}
            y={-1 * 665}
            fill="rgb(79, 151,139)"
            d="M384,664v-6c0-5-4-9-9-9s-9,4-9,9v6h-5v21h28v-21H384z M369,658c0-3.3,2.7-6,6-6s6,2.7,6,6v6h-12V658z M386,682h-22v-15h22V682z"
        />
        <Path
            x={-1 * 375}
            y={-1 * 665}
            fill="rgb(79, 151,139)"
            d="M375,677c1.4,0,2.5-1.1,2.5-2.5s-1.1-2.5-2.5-2.5s-2.5,1.1-2.5,2.5S373.6,677,375,677z"
        />
    </G>
);

export default Lock;
