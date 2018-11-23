/* tslint:disable */
import React, { SFC } from "react";
import { G, Polygon } from "react-native-svg";

interface Props {
    filled?: number;
}

const Star: SFC<Props> = ({ filled }) => (
    <G>
        <G x="-204" y="-312" scale="0.5">
            <Polygon
                fill={
                    filled > 0
                        ? "rgb(255,255,255)"
                        : "rgba(255,255,255,0.3)"
                }
                points="378.1,663.9 387.5,663.9 380.1,669.7 383,678.7 375.2,673.5 367.5,679 370.1,669.9 362.5,664.3 371.9,664 374.8,655 "
            />
        </G>
        <G x="-188" y="-312" scale="0.5">
            <Polygon
                fill={
                    filled > 1
                        ? "rgb(255,255,255)"
                        : "rgba(255,255,255,0.3)"
                }
                points="378.1,663.9 387.5,663.9 380.1,669.7 383,678.7 375.2,673.5 367.5,679 370.1,669.9 362.5,664.3 371.9,664 374.8,655 "
            />
        </G>
        <G x="-172" y="-312" scale="0.5">
            <Polygon
                fill={
                    filled > 2
                        ? "rgb(255,255,255)"
                        : "rgba(255,255,255,0.3)"
                }
                points="378.1,663.9 387.5,663.9 380.1,669.7 383,678.7 375.2,673.5 367.5,679 370.1,669.9 362.5,664.3 371.9,664 374.8,655 "
            />
        </G>
    </G>
);

export default Star;
