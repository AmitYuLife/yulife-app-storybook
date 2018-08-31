import NavBar from "../../nav-bar";
import { getIconFill, getNotificationFill } from "../helpers";

const defaultValues = {
    colour: NavBar.Colours.LIGHT,
    isActive: false,
    isPressed: false
};

describe("helpers", () => {

    describe("getIconFill", () => {

        describe("when neither active or pressed", () => {

            it("returns when colour is light", () => {
                const actual = getIconFill({
                    ...defaultValues
                });

                expect(actual).toMatchSnapshot();
            });

            it("returns when colour is dark", () => {
                const actual = getIconFill({
                    ...defaultValues,
                    colour: NavBar.Colours.DARK
                });

                expect(actual).toMatchSnapshot();
            });
        });

        describe("when active", () => {

            it("returns when colour is light", () => {
                const actual = getIconFill({
                    ...defaultValues,
                    isActive: true
                });

                expect(actual).toMatchSnapshot();
            });

            it("returns when colour is darker", () => {
                const actual = getIconFill({
                    ...defaultValues,
                    colour: NavBar.Colours.DARKER,
                    isActive: true
                });

                expect(actual).toMatchSnapshot();
            });

            it("returns when colour is dark", () => {
                const actual = getIconFill({
                    ...defaultValues,
                    colour: NavBar.Colours.DARK,
                    isActive: true
                });

                expect(actual).toMatchSnapshot();
            });
        });

        describe("when pressed", () => {

            it("returns when colour is light", () => {
                const actual = getIconFill({
                    ...defaultValues,
                    isPressed: true
                });

                expect(actual).toMatchSnapshot();
            });

            it("returns when colour is darker", () => {
                const actual = getIconFill({
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
                const actual = getNotificationFill({
                    ...defaultValues
                });

                expect(actual).toMatchSnapshot();
            });

            it("returns when colour is dark", () => {
                const actual = getNotificationFill({
                    ...defaultValues,
                    colour: NavBar.Colours.DARK
                });

                expect(actual).toMatchSnapshot();
            });
        });

        describe("when active", () => {

            it("returns when colour is light", () => {
                const actual = getNotificationFill({
                    ...defaultValues,
                    isActive: true
                });

                expect(actual).toMatchSnapshot();
            });

            it("returns when colour is dark", () => {
                const actual = getNotificationFill({
                    ...defaultValues,
                    colour: NavBar.Colours.DARK,
                    isActive: true
                });

                expect(actual).toMatchSnapshot();
            });
        });

        describe("when pressed", () => {

            it("returns when colour is light", () => {
                const actual = getNotificationFill({
                    ...defaultValues,
                    isPressed: true
                });

                expect(actual).toMatchSnapshot();
            });

            it("returns when colour is dark", () => {
                const actual = getNotificationFill({
                    ...defaultValues,
                    colour: NavBar.Colours.DARK,
                    isPressed: true
                });

                expect(actual).toMatchSnapshot();
            });
        });
    });
});
