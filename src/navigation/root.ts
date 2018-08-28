import { Navigation } from "react-native-navigation";
import { Style } from "../styles";
import { ROUTES } from "./routes";

export const setAuthenticatedRoot = () =>
    Navigation.setRoot({
        root: {
            sideMenu: {
                center: {
                    stack: {
                        children: [
                            {
                                component: {
                                    id: ROUTES.member,
                                    name: ROUTES.member
                                }
                            }
                        ]
                    }
                },
                left: {
                    component: {
                        id: ROUTES.menu,
                        name: ROUTES.menu
                    }
                },
                options: {
                    sideMenu: {
                        left: {
                            width: Style.DEVICE_WIDTH
                        }
                    }
                }
            }
        }
    });

export const setUnauthenticatedRoot = () =>
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            id: ROUTES.welcome,
                            name: ROUTES.welcome
                        }
                    }
                ]
            }
        }
    });
