/* tslint:disable */
import React, { SFC } from "react";
import { G, Circle, Path } from "react-native-svg";

interface Props {
    x: string;
    y: string;
}

const Lock: SFC<Props> = ({ x, y }) => (
    <G x={x} y={y}>
        <Circle
            fill="rgb(79, 151,139)"
            x={-5}
            y={13}
            r="2.8"
        />
        <Path
            x={-375}
            y={-665}
            fill="rgb(79, 151,139)"
            d="M394,660.5h-5v-6c0-5-4-9-9-9c-4.3,0-7.9,3-8.8,7.1c-0.4,0-0.8-0.1-1.2-0.1c-5,0-9,4-9,9v6h-5v21h28v-7h10 V660.5z M380,648.5c3.3,0,6,2.7,6,6v6h-7.1c-0.3-3.1-2.2-5.7-4.9-7C374.6,650.7,377,648.5,380,648.5z M364,661.5c0-3.3,2.7-6,6-6 s6,2.7,6,6v6h-12V661.5z M381,685.5h-22v-15h22V685.5z M391,678.5h-7v-11h-5v-4h12V678.5z"
        />
    </G>
);

export default Lock;
