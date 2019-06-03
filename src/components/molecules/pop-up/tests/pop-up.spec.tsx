import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import PopUp, { CaretDirection, POPUPTYPE } from "../pop-up";

const defaultProps = {
    position: {
        top: 0
    },
    caretDirection: "top" as CaretDirection,
    type: POPUPTYPE.SURGE,
    isShowingButton: true,
    onPress: jest.fn(),
    copy: {
        surgeHeading: "surge heading test",
        surgeSubheading: "surge subheading test",
        leaderboardHeading: "leaderboard heading test",
        leaderboardSubheading: "leaderboard subheading test"
    }
};

describe("Popup", () => {
    it("should render with surge text", () => {
        const actual = shallow(<PopUp {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with leaderboard text", () => {
        const actual = shallow(<PopUp {...defaultProps} type={POPUPTYPE.LEADERBOARD} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render without any buttons", () => {
        const actual = shallow(<PopUp {...defaultProps} type={POPUPTYPE.LEADERBOARD} isShowingButton={false} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render and show caret on right", () => {
        const actual = shallow(<PopUp {...defaultProps} type={POPUPTYPE.LEADERBOARD} caretDirection="right" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render and show caret on bottom & caret position moved further more to right", () => {
        const actual = shallow(
            <PopUp
                {...defaultProps}
                type={POPUPTYPE.LEADERBOARD}
                caretDirection="bottom"
                caretPosition={{ left: 70 }}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
