import * as React from "react";
import { PureComponent } from "react";
import { Loading } from "../../atoms";

interface IProps {
    componentId: string;
}

export default class AppLoadingContainer extends PureComponent<IProps> {
    public render() {
        return <Loading />;
    }
}
