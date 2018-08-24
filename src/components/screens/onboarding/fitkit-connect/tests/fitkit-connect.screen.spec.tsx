import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import FitKitConnectScreen from "../fitkit-connect.screen";

// TODO add fitkit states

describe("FitKitConnectScreen", () => {

    it("should render when not connecting", () => {

        const actual = shallow(
            <FitKitConnectScreen
                connecting={false}
                fitKitAvailable={true}
                onConnectPress={jest.fn()}
                onPrivacyPolicyPress={jest.fn()}
                onSkipPress={jest.fn()}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render when connecting", () => {

        const actual = shallow(
            <FitKitConnectScreen
                connecting={true}
                fitKitAvailable={true}
                onConnectPress={jest.fn()}
                onPrivacyPolicyPress={jest.fn()}
                onSkipPress={jest.fn()}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render when FitKit is unavailable", () => {

        const actual = shallow(
            <FitKitConnectScreen
                connecting={true}
                fitKitAvailable={false}
                onConnectPress={jest.fn()}
                onPrivacyPolicyPress={jest.fn()}
                onSkipPress={jest.fn()}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
