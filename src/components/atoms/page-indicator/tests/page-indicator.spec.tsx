import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import PageIndicator from "../page-indicator";

describe("PageIndicator", () => {
    it("should render", () => {
        const actual = shallow(<PageIndicator pages={[1, 2]} activePage={0} />);

        expect(actual).toMatchSnapshot();
    });

    it("should not render anything", () => {
        const actual = shallow(<PageIndicator pages={[]} activePage={0} />);

        expect(actual).toMatchSnapshot();
    });

    it("should have 2nd item as active page", () => {
        const actual = shallow(<PageIndicator pages={[1, 2]} activePage={1} />);

        expect(actual).toMatchSnapshot();
    });
});
