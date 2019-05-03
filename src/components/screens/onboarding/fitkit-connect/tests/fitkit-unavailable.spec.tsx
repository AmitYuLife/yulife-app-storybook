import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import FitKitUnavailable from "../fitkit-unavailable";

describe("FitKitUnavailable", () => {
    it("should render default values", () => {
        const actual = shallow(
            <FitKitUnavailable
                copy={{
                    blurb: "",
                    heading: "",
                    linkButtonLabel: "",
                    primaryButtonConnecting: "",
                    primaryButtonLabel: "",
                    secondaryButtonLabel: "",
                    unavailableAndroid: "",
                    unavailableHeading: "",
                    unavailableIOS: ""
                }}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
