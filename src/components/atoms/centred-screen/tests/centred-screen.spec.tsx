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

    it("should render with an image for challenge failed on forest world", () => {
        const actual = shallow(<CentredScreen footerImage="challenge_failed_forest" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with a ocean footer image", () => {
        const actual = shallow(<CentredScreen footerImage="ocean" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with a gray ocean footer image", () => {
        const actual = shallow(<CentredScreen footerImage="gray_ocean" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with a image for challenge failed on ocean world", () => {
        const actual = shallow(<CentredScreen footerImage="challenge_failed_ocean" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with a desert footer image", () => {
        const actual = shallow(<CentredScreen footerImage="desert" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with a gray desert footer image", () => {
        const actual = shallow(<CentredScreen footerImage="gray_desert" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with a image for challenge failed on desert world", () => {
        const actual = shallow(<CentredScreen footerImage="challenge_failed_desert" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with a mountain footer image", () => {
        const actual = shallow(<CentredScreen footerImage="mountain" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with a gray mountain footer image", () => {
        const actual = shallow(<CentredScreen footerImage="gray_mountain" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with a image for challenge failed on mountain world", () => {
        const actual = shallow(<CentredScreen footerImage="challenge_mountain" />);

        expect(actual).toMatchSnapshot();
    });
});
