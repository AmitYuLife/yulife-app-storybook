/* tslint:disable */
import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { Colours } from "../../../styles";

interface Props {
    scale?: number;
    colour?: string;
}

const DoubleLock: React.SFC<Props> = ({ scale = 1, colour }) => (
    <Svg width={String(24 * scale)} height={String(24 * scale)} viewBox="0 0 38 42.9167">
        <G>
            <Path
                fill={"transparent"}
                strokeWidth={3}
                stroke={colour || Colours.textInput.inactive}
                d="M 0.0001 -0.0002 L 0.0001 7.1248 C 0.0001 11.265425 -3.359275 14.6248 -7.4999 14.6248 C -11.640525 14.6248 -14.9999 11.265425 -14.9999 7.1248 L -14.9999 -0.0002 "
                transform="matrix(1,0,0,-1,21.4999,23.1248)"
            />
            <G clipRule="nonzero">
                <Path
                    fill={"transparent"}
                    strokeWidth={3}
                    stroke={colour || Colours.textInput.inactive}
                    d="M 26.5 1.498731 L 1.5 1.498731 L 1.5 19.4167 L 26.5 19.4167 Z M 26.5 1.498731 "
                    transform="matrix(1,0,0,-1,0,42.9167)"
                />
            </G>
            <Path
                fill={"transparent"}
                strokeWidth={3}
                stroke={colour || Colours.textInput.inactive}
                d="M 0.0001 0.00176875 C 0.0001 -0.689638 -0.558494 -1.248231 -1.2499 -1.248231 C -1.941306 -1.248231 -2.4999 -0.689638 -2.4999 0.00176875 C -2.4999 0.689269 -1.941306 1.251769 -1.2499 1.251769 C -0.558494 1.251769 0.0001 0.689269 0.0001 0.00176875 Z M 0.0001 0.00176875 "
                transform="matrix(1,0,0,-1,15.2499,32.4588)"
            />
            <Path
                fill={"transparent"}
                strokeWidth={3}
                stroke={colour || Colours.textInput.inactive}
                d="M 0.0001 -0.0002 L 0.0001 7.1248 C 0.0001 11.265425 -3.359275 14.6248 -7.4999 14.6248 C -11.523338 14.6248 -14.808494 11.452925 -14.992088 7.476362 "
                transform="matrix(1,0,0,-1,31.4999,16.1248)"
            />
            <Path
                fill={"transparent"}
                strokeWidth={3}
                stroke={colour || Colours.textInput.inactive}
                d="M 0.0001 -0.00116875 L 10.0001 -0.00116875 L 10.0001 17.9168 L -4.9999 17.9168 "
                transform="matrix(1,0,0,-1,26.4999,34.4168)"
            />
        </G>
    </Svg>
);

export default DoubleLock;
