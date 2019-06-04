import { IColours } from "@app/components/molecules";
import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import QuestsOfflineScreen from "../quests-offline";

const defaultProps = {
    fitkitAvailable: true,
    onLeftMenuPress: jest.fn(),
    theme: {
        image: "desert",
        navBarType: "dark" as IColours
    },
    totalCoins: 500
};

describe("QuestsOfflineScreen", () => {
    it("should render default values", () => {
        const actual = shallow(<QuestsOfflineScreen {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render text for unsupported devices", () => {
        const actual = shallow(<QuestsOfflineScreen {...defaultProps} fitkitAvailable={false} />);

        expect(actual).toMatchSnapshot();
    });
});
