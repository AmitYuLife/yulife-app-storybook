import React, { Component } from "react";
import { ConnectionInfo, NetInfo } from "react-native";
import { getUser, getUserFeatures, getUserStatus, setUser } from "../services/storage";
import { SideEffect } from "../typings";
import { EmptyFeatures, IUserFeaturesState } from "./features";
import { EmptyStatus, IUserStatusState } from "./status";
import { EmptyUser, IUserState } from "./user";

export interface IStore {
    state: IState;
    actions: {
        updateUser: (state: IUserState) => void;
        setError: SideEffect<Error>;
        clearError: SideEffect;
    };
}

const EmptyStore: IStore = {
    actions: null,
    state: {
        error: null,
        features: EmptyFeatures,
        isConnected: true,
        status: EmptyStatus,
        user: EmptyUser
    }
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

    public state: IState = {
        error: null,
        features: EmptyFeatures,
        isConnected: true,
        status: EmptyStatus,
        user: EmptyUser
    };

    private NET_INFO_EVENT_NAME = "connectionChange";

    public async componentDidMount() {
        NetInfo.addEventListener(this.NET_INFO_EVENT_NAME, this.checkConnection);
        await this.hydrateStore();
    }

    public componentWillUnmount() {
        NetInfo.removeEventListener(this.NET_INFO_EVENT_NAME, this.checkConnection);
    }

    public render() {
        const {
            setError,
            clearError,
            updateUser,
            state,
            props: { children }
        } = this;

        const actions = {
            clearError,
            setError,
            updateUser
        };

        return <Provider value={{ state, actions }}>{children}</Provider>;
    }

    private checkConnection = (info: ConnectionInfo) => {
        this.setState({ isConnected: info.type !== "none" });
    }

    private hydrateStore = async () => {
        const user = (await getUser()) || {};
        const status = (await getUserStatus()) || {};
        const features = (await getUserFeatures()) || {};

        this.setState((state) => ({
            features: { ...state.features, ...features },
            status: { ...state.status, ...status },
            user: { ...state.user, ...user }
        }));
    }

    private updateUser = async (user: IUserState) => {
        await setUser(user);
        await this.hydrateStore();
    }

    private setError = (error: Error) => {
        this.setState({ error });
    }

    private clearError = () => {
        this.setState({ error: null });
    }
}

export default ContextProvider;
