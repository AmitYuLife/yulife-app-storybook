// tslint:disable:max-line-length
import * as React from "react";
import { SFC } from "react";
import { Circle, G, Path, Polygon, Rect } from "react-native-svg";
import { COLOURS } from "../nav-bar";
import { getIconFill } from "./helpers";
import { IconProps } from "./icon.model";

const Scroll: SFC<IconProps> = ({
    colour = COLOURS.LIGHT,
    hasDismiss,
    isActive,
    isIconHidden,
    isPressed
}) => (
    <G>
        {
            isIconHidden ? null : (
                <>
                    <Path
                        fill={getIconFill({
                            colour,
                            isActive,
                            isPressed
                        })}
                        d="M253.5,55.3h-50c-3.6,0-6.5,2.9-6.5,6.5v46.5h-3.5c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5h50c3.6,0,6.5-2.9,6.5-6.5V68.3h3.5c3.6,0,6.5-2.9,6.5-6.5S257.1,55.3,253.5,55.3z M200,61.8c0-1.9,1.6-3.5,3.5-3.5H248c-0.6,1-1,2.2-1,3.5v46.5h-3.5H200V61.8z M190,114.8c0-1.9,1.6-3.5,3.5-3.5H238c-0.6,1-1,2.2-1,3.5s0.4,2.5,1,3.5h-44.5C191.6,118.3,190,116.7,190,114.8z M243.5,118.3c-1.9,0-3.5-1.6-3.5-3.5s1.6-3.5,3.5-3.5h3.5v3.5C247,116.7,245.4,118.3,243.5,118.3z M253.5,65.3H250v-3.5c0-1.9,1.6-3.5,3.5-3.5s3.5,1.6,3.5,3.5S255.4,65.3,253.5,65.3z"
                    />
                    <Rect
                        x="208.5"
                        y="76.3"
                        fill={getIconFill({
                            colour,
                            isActive,
                            isPressed
                        })}
                        width="30"
                        height="3"
                    />
                    <Rect
                        x="208.5"
                        y="82.3"
                        fill={getIconFill({
                            colour,
                            isActive,
                            isPressed
                        })}
                        width="30"
                        height="3"
                    />
                    <Rect
                        x="208.5"
                        y="88.3"
                        fill={getIconFill({
                            colour,
                            isActive,
                            isPressed
                        })}
                        width="22"
                        height="3"
                    />
                </>
            )
        }
        {
            !hasDismiss ? (
                <Circle
                    fill={getIconFill({
                        colour,
                        isActive,
                        isPressed
                    })}
                    cx="223.5"
                    cy="18"
                    r="10"
                />
            ) : (
                    <G x={52} y={-28}>
                        <Path
                            scale={0.75}
                            fill={getIconFill({
                                colour,
                                isActive,
                                isPressed
                            })}
                            d="M228.5,41c-11.6,0-21,9.4-21,21s9.4,21,21,21s21-9.4,21-21S240.1,41,228.5,41z M228.5,80c-9.9,0-18-8.1-18-18s8.1-18,18-18s18,8.1,18,18S238.4,80,228.5,80z"
                        />
                        <Polygon
                            scale={0.75}
                            fill={getIconFill({
                                colour,
                                isActive,
                                isPressed
                            })}
                            points="232.6,55.7 228.5,59.9 224.4,55.7 222.2,57.9 226.4,62 222.2,66.1 224.4,68.3 228.5,64.1 232.6,68.3 234.8,66.1 230.6,62 234.8,57.9 "
                        />
                    </G>
                )
        }
    </G>
);

export default Scroll;
