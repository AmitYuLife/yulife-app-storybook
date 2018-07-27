import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import LinkGroup from "../link-group";

const data = [
    {
        label: "Forgot password",
        onPress: (): null => null,
    },
    {
        label: "Sign up",
        onPress: (): null => null,
    },
];

describe("LinkGroup", () => {
    it("should render", () => {
        const wrapper = shallow(<LinkGroup data={data} />);
        expect(wrapper).toMatchSnapshot();
    });
});
