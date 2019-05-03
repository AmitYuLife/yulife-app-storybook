import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import FitKitConnectScreen from "../fitkit-connect.screen";

const defaultProps = {
    connecting: false,
    fitKitAvailable: true,
    loading: false,
    onConnectPress: jest.fn(),
    onPrivacyPolicyPress: jest.fn(),
    onSkipPress: jest.fn(),
    copy: {
        blurb: "",
        heading: "",
        linkButtonLabel: "",
        primaryButtonConnecting: "",
        primaryButtonLabel: "",
        secondaryButtonLabel: "",
        unavailableAndroid: "",
        unavailableHeading: "",
        unavailableIOS: ""
    }
};

describe("FitKitConnectScreen", () => {
    it("should render when not connecting", () => {
        const actual = shallow(<FitKitConnectScreen {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render when loading", () => {
        const actual = shallow(<FitKitConnectScreen {...defaultProps} loading={true} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render when connecting", () => {
        const actual = shallow(<FitKitConnectScreen {...defaultProps} connecting={true} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render when FitKit is unavailable", () => {
        const actual = shallow(<FitKitConnectScreen {...defaultProps} fitKitAvailable={false} />);

        expect(actual).toMatchSnapshot();
    });
});
