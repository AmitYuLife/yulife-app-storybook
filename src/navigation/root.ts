import { Navigation } from "react-native-navigation";
import { ROUTES } from "./routes";
import { Style } from "../styles";

export const setAuthenticatedRoot = () =>
    Navigation.setRoot({
        root: {
            sideMenu: {
                left: {
                    component: {
                        name: ROUTES.menu,
                        id: ROUTES.menu,
                    },
                },
                center: {
                    stack: {
                        children: [
                            {
                                component: {
                                    id: ROUTES.member,
                                    name: ROUTES.member,
                                },
                            },
                        ],
                    },
                },
                options: {
                    sideMenu: {
                        left: {
                            width: Style.DEVICE_WIDTH,
                        },
                    },
                },
            },
        },
    });

export const setUnauthenticatedRoot = () =>
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            id: ROUTES.welcome,
                            name: ROUTES.welcome,
                        },
                    },
                ],
            },
        },
    });
