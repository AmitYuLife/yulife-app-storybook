import { NoAccessScreen } from "@screens/index";
import * as React from "react";

interface IProps {
    componentId: string;
}

const NoAccessContainer: React.FC<IProps> = () => <NoAccessScreen />;

export default NoAccessContainer;
