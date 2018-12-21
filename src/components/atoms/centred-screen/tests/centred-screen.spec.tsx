import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import CentredScreen from "../centred-screen";

describe("CentredScreen", () => {
    it("should render without any props", () => {
        const actual = shallow(<CentredScreen />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with a forest footer image", () => {
        const actual = shallow(<CentredScreen footerImage="forest" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with a gray forest footer image", () => {
        const actual = shallow(<CentredScreen footerImage="gray_forest" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with a large forest footer image", () => {
        const actual = shallow(<CentredScreen footerImage="large_forest" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with a mountain footer image", () => {
        const actual = shallow(<CentredScreen footerImage="challenge_failed_forest" />);

        expect(actual).toMatchSnapshot();
    });
});
