import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import { View } from "react-native";
import BlurProvider from "../blur-provider";

const filler = {
    render: () => <View />,
    renderOverlay: () => <View />,
};

describe("Blur Provider", () => {

    it("should render", () => {

        const actual = shallow(<BlurProvider />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with props", () => {

        const actual = shallow(
            <BlurProvider {...filler} />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render with viewRef", () => {

        const actual = shallow(<BlurProvider />);

        actual.setState({ viewRef: 1 });
        expect(actual).toMatchSnapshot();
    });

    it("should initialize viewRef to null", () => {

        const actual = shallow(<BlurProvider />);

        const instance = actual.instance() as BlurProvider;
        const viewRef = instance.viewRef;
        expect(viewRef).toBeNull();
    });

    it("should be able to setRef", () => {

        const actual = shallow(<BlurProvider />);

        /* tslint:disable-next-line */
        const instance = actual.instance() as any;
        const newViewRef = 1;
        instance.setRef(newViewRef);
        expect(instance.viewRef).toBe(newViewRef);
    });
});
