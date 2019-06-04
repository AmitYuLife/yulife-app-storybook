import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import AviosConfirmed from "../avios-confirmed.screen";

const defaultProps = {
    coins: 200,
    loyaltyProgramme: "Test Programme",
    onPressCancel: jest.fn(),
    onPressConfirm: jest.fn(),
    onPressPolicy: jest.fn(),
    onPressTopBar: jest.fn(),
    purchaseDate: "29 May 2019",
    rewardName: "Avios Miles",
    status: "failed"
};

describe("AviosConfirmed", () => {
    it("should render with failed card state ", () => {
        const actual = shallow(<AviosConfirmed {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render delivered card state", () => {
        const actual = shallow(<AviosConfirmed {...defaultProps} status="delivered" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render pending card state", () => {
        const actual = shallow(<AviosConfirmed {...defaultProps} status={undefined} />);

        expect(actual).toMatchSnapshot();
    });
});
