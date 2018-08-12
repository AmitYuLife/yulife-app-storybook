import * as React from "react";
import { SFC } from "react";
import { Circle, G, Path, Rect } from "react-native-svg";
import { Colours } from "../../../../styles";

interface IProps {
    isActive: boolean;
    isPressed: boolean;
}

const Scroll: SFC<IProps> = ({ isActive, isPressed }) => (
    <G>
        <Path
            fill={
                isPressed
                    ? Colours.navBar.pressed
                    : isActive
                        ? Colours.navBar.active
                        : Colours.navBar.inactive
            }
            /*tslint:disable-next-line*/
            d="M253.5,55.3h-50c-3.6,0-6.5,2.9-6.5,6.5v46.5h-3.5c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5h50c3.6,0,6.5-2.9,6.5-6.5V68.3h3.5c3.6,0,6.5-2.9,6.5-6.5S257.1,55.3,253.5,55.3z M200,61.8c0-1.9,1.6-3.5,3.5-3.5H248c-0.6,1-1,2.2-1,3.5v46.5h-3.5H200V61.8z M190,114.8c0-1.9,1.6-3.5,3.5-3.5H238c-0.6,1-1,2.2-1,3.5s0.4,2.5,1,3.5h-44.5C191.6,118.3,190,116.7,190,114.8z M243.5,118.3c-1.9,0-3.5-1.6-3.5-3.5s1.6-3.5,3.5-3.5h3.5v3.5C247,116.7,245.4,118.3,243.5,118.3z M253.5,65.3H250v-3.5c0-1.9,1.6-3.5,3.5-3.5s3.5,1.6,3.5,3.5S255.4,65.3,253.5,65.3z"
        />
        <Rect
            x="208.5"
            y="76.3"
            fill={
                isPressed
                    ? Colours.navBar.pressed
                    : isActive
                        ? Colours.navBar.active
                        : Colours.navBar.inactive
            }
            width="30"
            height="3"
        />
        <Rect
            x="208.5"
            y="82.3"
            fill={
                isPressed
                    ? Colours.navBar.pressed
                    : isActive
                        ? Colours.navBar.active
                        : Colours.navBar.inactive
            }
            width="30"
            height="3"
        />
        <Rect
            x="208.5"
            y="88.3"
            fill={
                isPressed
                    ? Colours.navBar.pressed
                    : isActive
                        ? Colours.navBar.active
                        : Colours.navBar.inactive
            }
            width="22"
            height="3"
        />
        <Circle
            fill={
                isPressed
                    ? Colours.navBar.pressed
                    : isActive
                        ? Colours.navBar.active
                        : Colours.navBar.inactive
            }
            cx="223.5"
            cy="18"
            r="10"
        />
    </G>
);

export default Scroll;
