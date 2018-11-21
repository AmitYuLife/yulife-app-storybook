import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import LockedOverlay from "../locked-overlay";

const defaultProps = {
    code: "abcdef"
};

describe("LockedOverlay", () => {

    it("should render with default props", () => {
        const actual = shallow(
            <LockedOverlay
                {...defaultProps}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render with settings", () => {
        const actual = shallow(
            <LockedOverlay
                {...defaultProps}
                settings={{
                    __typename: "RewardUiSettings",
                    alertCancelLabel: null,
                    alertHeading: null,
                    alertOkLabel: null,
                    alertSubheading: null,
                    ctaLabel: null,
                    id: "TEST_ID",
                    logoHeight: 1234,
                    logoWidth: 1234,
                    offerHeading: null,
                    offerSubheading: null
                }}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
