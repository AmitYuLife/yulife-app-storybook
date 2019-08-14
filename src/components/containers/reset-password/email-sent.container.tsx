import { IReduxState } from "@redux/_core/reducers";
import { getCopy } from "@redux/copy/copy.selectors";
import * as React from "react";
import { PureComponent } from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import {
    GetMobileCopy_getMobileCopy_screens_emailSent as EmailSentCopy
} from "../../../graphql/_core/schema";
import { EmailSentScreen } from "../../screens";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId: string;
    email: string;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;

class EmailSentContainer extends PureComponent<IProps & ConnectedState> {
    public render() {
        return (
            <EmailSentScreen
                onLogInPress={this.onLogIn}
                copy={this.props.copy}
                email={this.props.email}
            />
        );
    }

    private onLogIn = async () => {
        await Navigation.popToRoot(this.props.componentId);
    };
}

const mapStateToProps = (state: IReduxState) => ({
    copy: getCopy(state, "emailSent") as EmailSentCopy
});

export default connect<ConnectedState, {}>(
    mapStateToProps,
    {}
)(EmailSentContainer);
