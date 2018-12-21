import NavBar from "../../nav-bar";
import { getColour } from "../helpers";

const defaultValues = {
    colour: NavBar.Colours.LIGHT,
    isActive: false,
    isPressed: false
};

describe("helpers", () => {

    describe("getIconFill", () => {

        describe("when neither active or pressed", () => {

            it("returns when colour is light", () => {
                const actual = getColour({
                    ...defaultValues
                });

                expect(actual).toMatchSnapshot();
            });

            it("returns when colour is dark", () => {
                const actual = getColour({
                    ...defaultValues,
                    colour: NavBar.Colours.DARK
                });

                expect(actual).toMatchSnapshot();
            });
        });

        describe("when active", () => {

            it("returns when colour is light", () => {
                const actual = getColour({
                    ...defaultValues,
                    isActive: true
                });

                expect(actual).toMatchSnapshot();
            });

            it("returns when colour is darker", () => {
                const actual = getColour({
                    ...defaultValues,
                    colour: NavBar.Colours.DARKER,
                    isActive: true
                });

                expect(actual).toMatchSnapshot();
            });

            it("returns when colour is dark", () => {
                const actual = getColour({
                    ...defaultValues,
                    colour: NavBar.Colours.DARK,
                    isActive: true
                });

                expect(actual).toMatchSnapshot();
            });
        });

        describe("when pressed", () => {

            it("returns when colour is light", () => {
                const actual = getColour({
                    ...defaultValues,
                    isPressed: true
                });

                expect(actual).toMatchSnapshot();
            });

            it("returns when colour is darker", () => {
                const actual = getColour({
                    ...defaultValues,
                    colour: NavBar.Colours.DARKER,
                    isPressed: true
                });

                expect(actual).toMatchSnapshot();
            });
        });
    });

    describe("getNotificationFill", () => {

        describe("when neither active or pressed", () => {

            it("returns when colour is light", () => {
                const actual = getColour({
                    ...defaultValues
                });

                expect(actual).toMatchSnapshot();
            });

            it("returns when colour is dark", () => {
                const actual = getColour({
                    ...defaultValues,
                    colour: NavBar.Colours.DARK
                });

                expect(actual).toMatchSnapshot();
            });
        });

        describe("when active", () => {

            it("returns when colour is light", () => {
                const actual = getColour({
                    ...defaultValues,
                    isActive: true
                });

                expect(actual).toMatchSnapshot();
            });

            it("returns when colour is dark", () => {
                const actual = getColour({
                    ...defaultValues,
                    colour: NavBar.Colours.DARK,
                    isActive: true
                });

                expect(actual).toMatchSnapshot();
            });
        });

        describe("when pressed", () => {

            it("returns when colour is light", () => {
                const actual = getColour({
                    ...defaultValues,
                    isPressed: true
                });

                expect(actual).toMatchSnapshot();
            });

            it("returns when colour is dark", () => {
                const actual = getColour({
                    ...defaultValues,
                    colour: NavBar.Colours.DARK,
                    isPressed: true
                });

                expect(actual).toMatchSnapshot();
            });
        });
    });
});
