import { shallow } from "enzyme";
import * as React from "react";
import Instruction from "../instruction";

const defaultProps = {
    bullet: 5,
    instruction: "This is an instruction"
};

describe("Instruction", () => {

    it("should render", () => {
        const actual = shallow(
            <Instruction
                {...defaultProps}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
