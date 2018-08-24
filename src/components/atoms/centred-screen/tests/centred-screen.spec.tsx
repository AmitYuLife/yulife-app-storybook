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

        const actual = shallow(
            <CentredScreen
                footerImage={
                    CentredScreen.FooterImages.FOREST
                }
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render with a gray forest footer image", () => {

        const actual = shallow(
            <CentredScreen
                footerImage={
                    CentredScreen.FooterImages.GRAY_FOREST
                }
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render with a large forest footer image", () => {

        const actual = shallow(
            <CentredScreen
                footerImage={
                    CentredScreen.FooterImages.LARGE_FOREST
                }
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render with a mountain footer image", () => {

        const actual = shallow(
            <CentredScreen
                footerImage={
                    CentredScreen.FooterImages.MOUNTAINS
                }
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
