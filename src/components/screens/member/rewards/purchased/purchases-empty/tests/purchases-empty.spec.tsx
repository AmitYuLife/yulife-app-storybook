import { shallow } from "enzyme";
import * as React from "react";
import PurchasesEmpty from "../purchases-empty";

const defaultProps = {
    onCtaPress: jest.fn(),
    copy: { heading: "", subheading: "", ctaLabel: "" }
};

describe("PurchasesEmpty", () => {

    it("should render", () => {
        const actual = shallow(
            <PurchasesEmpty
                {...defaultProps}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
