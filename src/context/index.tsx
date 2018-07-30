import * as React from "react";
import { Component } from "react";
import { SideEffect } from "../typings";
import { loginUser_loginUser_user } from "../graphql/_core/schema";
import { EmptyUser } from "./user";
import { NetInfo, ConnectionInfo } from "react-native";

export interface IStore {
    state: IState;
    actions: {
        updateUser: (state: Partial<loginUser_loginUser_user>) => void;
        setError: SideEffect<Error>;
        clearError: SideEffect;
    };
}

const EmptyStore: IStore = {
    state: {
        user: EmptyUser,
        isConnected: true,
        error: null,
    },
    actions: null,
};

export const { Consumer, Provider } = React.createContext(EmptyStore);

export interface IState {
    user: loginUser_loginUser_user;
    isConnected: boolean;
    error: Error | null;
}

class ContextProvider extends Component<{}, IState> {
    NET_INFO_EVENT_NAME = "connectionChange";
    state: IState = {
        user: EmptyUser,
        isConnected: true,
        error: null,
    };

    componentDidMount() {
        NetInfo.addEventListener(this.NET_INFO_EVENT_NAME, this.checkConnection);
    }

    componentWillUnmount() {
        NetInfo.removeEventListener(this.NET_INFO_EVENT_NAME, this.checkConnection);
    }

    checkConnection = (info: ConnectionInfo) => {
        this.setState({ isConnected: info.type !== "none" });
    };

    formatObject = (obj: Partial<any>) => {
        const { __typename, ...result } = obj;
        return result;
    };

    updateUser = (obj: Partial<loginUser_loginUser_user>) => {
        this.setState(({ user }) => ({
            user: { ...user, ...this.formatObject(obj) },
        }));
    };

    setError = (error: Error) => {
        this.setState({ error });
    };

    clearError = () => {
        this.setState({ error: null });
    };

    render() {
        const {
            setError,
            clearError,
            updateUser,
            state,
            props: { children },
        } = this;

        const actions = {
            updateUser,
            clearError,
            setError,
        };

        return <Provider value={{ state, actions }}>{children}</Provider>;
    }
}

export default ContextProvider;
