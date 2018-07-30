import React, { Component } from "react";
import { NetInfo, ConnectionInfo } from "react-native";
import { SideEffect } from "../typings";
import { EmptyUser, IUserState } from "./user";
import { EmptyStatus, IUserStatusState } from "./status";
import { EmptyFeatures, IUserFeaturesState } from "./features";
import { getUser, getUserStatus, getUserFeatures, setUser } from "../services/storage";

export interface IStore {
    state: IState;
    actions: {
        updateUser: (state: IUserState) => void;
        setError: SideEffect<Error>;
        clearError: SideEffect;
    };
}

const EmptyStore: IStore = {
    state: {
        user: EmptyUser,
        status: EmptyStatus,
        features: EmptyFeatures,
        isConnected: true,
        error: null,
    },
    actions: null,
};

export const { Consumer, Provider } = React.createContext(EmptyStore);

export interface IState {
    user: IUserState;
    status: IUserStatusState;
    features: IUserFeaturesState;
    isConnected: boolean;
    error: Error | null;
}

class ContextProvider extends Component<{}, IState> {
    NET_INFO_EVENT_NAME = "connectionChange";
    state: IState = {
        user: EmptyUser,
        status: EmptyStatus,
        features: EmptyFeatures,
        isConnected: true,
        error: null,
    };

    async componentDidMount() {
        NetInfo.addEventListener(this.NET_INFO_EVENT_NAME, this.checkConnection);
        await this.hydrateStore();
    }

    componentWillUnmount() {
        NetInfo.removeEventListener(this.NET_INFO_EVENT_NAME, this.checkConnection);
    }

    checkConnection = (info: ConnectionInfo) => {
        this.setState({ isConnected: info.type !== "none" });
    };

    hydrateStore = async () => {
        const user = (await getUser()) || {};
        const status = (await getUserStatus()) || {};
        const features = (await getUserFeatures()) || {};

        this.setState(state => ({
            user: { ...state.user, ...user },
            status: { ...state.status, ...status },
            features: { ...state.features, ...features },
        }));
    };

    updateUser = async (user: IUserState) => {
        await setUser(user);
        await this.hydrateStore();
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
