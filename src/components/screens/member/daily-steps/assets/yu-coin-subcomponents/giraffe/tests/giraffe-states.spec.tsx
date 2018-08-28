import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import { TiltDown, TiltNeutral, TiltUp } from "../giraffe-states";

describe("Giraffe States", () => {

    it("should render tilt down", () => {
        const actual = shallow(
            <TiltDown />
        );

        expect(actual).toMatchSnapshot();
    });

    describe("TiltNeutral", () => {

        it("should render as default", () => {
            const actual = shallow(
                <TiltNeutral
                    isGrayScale={false}
                />
            );

            expect(actual).toMatchSnapshot();
        });

        it("should render as grayscale", () => {
            const actual = shallow(
                <TiltNeutral
                    isGrayScale={true}
                />
            );

            expect(actual).toMatchSnapshot();
        });
    });

    it("should render tilt up", () => {
        const actual = shallow(
            <TiltUp />
        );

        expect(actual).toMatchSnapshot();
    });
});
