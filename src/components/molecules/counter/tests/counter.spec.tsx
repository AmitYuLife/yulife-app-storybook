import { shallow } from "enzyme";
import * as React from "react";
import Counter from "../counter";

const defaultProps = {
    textAfterValue: "steps",
    value: 100
};

describe("Counter", () => {
    it("should render", () => {
        const actual = shallow(<Counter {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });
});
