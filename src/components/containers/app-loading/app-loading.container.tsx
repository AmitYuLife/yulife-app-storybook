import * as React from "react";
import { PureComponent } from "react";
import { Linking, Platform } from "react-native";
import { labels, setNextRoot, setUnauthenticatedRoot } from "../../../navigation/root";
import { getToken } from "../../../services/storage";
import { Loading } from "../../atoms";

interface IProps {
    componentId: string;
}

export default class AppLoadingContainer extends PureComponent<IProps> {
    private appLink = "yulifeapp://yulife";

    public async componentDidMount() {
        const token = await getToken();

        if (token) {
            await setNextRoot();

            if (Platform.OS === "android") {
                try {
                    const url = await Linking.getInitialURL();

                    if (url) {
                        if (token) {
                            this.handleUrl(url.replace(this.appLink, "").slice(1));
                        }
                    }
                } catch (e) {
                    // console.log(e.message);
                }
            }
        } else {
            await setUnauthenticatedRoot();
        }
    }

    public componentWillUnmount() {
        // TODO add ios deep linking
    }

    public render() {
        return <Loading />;
    }

    private handleUrl = async (url: string) => {
        switch (url) {
            case labels[0].name:
                labels[0].onPress();
                return;
            case labels[1].name:
                labels[1].onPress();
                return;
            case labels[2].name:
                labels[2].onPress();
                return;
            default:
                return;
        }
    }
}
