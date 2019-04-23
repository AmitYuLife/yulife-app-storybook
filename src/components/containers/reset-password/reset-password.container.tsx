import { bottomTabs, ROUTES } from "@navigation/constants";
import * as React from "react";
import { PureComponent } from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { GetMobileCopy_getMobileCopy_screens_resetPassword as ResetPasswordCopy} from "../../../graphql/_core/schema";
import SendMagicLinkMutation, {
    sendMagicLinkGql,
    SendMagicLinkMutationFunction
} from "../../../graphql/user/sendMagicLink.gql";
import { IReduxState } from "../../../redux/_core/reducers";
import { getCopy } from "../../../redux/copy/copy.selectors";
import { ResetPasswordScreen } from "../../screens";
import { validateEmail } from "../login/login.helpers";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId: string;
}

interface IState {
    email: string;
    emailError: string;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;

type Props = IProps & ConnectedState;

class ResetPasswordContainer extends PureComponent<Props, IState> {

    public state: IState = {
        email: "",
        emailError: ""
    };

    public render() {
        return (
            <SendMagicLinkMutation mutation={sendMagicLinkGql}>
                {(sendMagicLink, { loading }) => {
                    const { email, emailError } = this.state;
                    const { copy } = this.props;
                    const disableSubmit = email === "" || emailError !== "";

                    return (
                        <ResetPasswordScreen
                            disableSubmit={disableSubmit}
                            email={email}
                            emailError={emailError}
                            isSubmitting={loading}
                            onCancelPress={this.onCancel}
                            onEmailChange={this.onEmailChange}
                            onSubmitPress={() => this.onSubmit(sendMagicLink)}
                            copy={copy}
                        />
                    );
                }}
            </SendMagicLinkMutation>
        );
    }

    private onCancel = () => {
        Navigation.pop(this.props.componentId);
    };

    private onEmailChange = (email: string) => {
        const emailError = validateEmail(email);

        this.setState({ email, emailError });
    };

    private isFormValid = () => {
        let formIsValid = true;
        const { email } = this.state;

        if (validateEmail(email)) {
            formIsValid = false;
        }

        return formIsValid;
    };

    private onSubmit = async (sendMagicLink: SendMagicLinkMutationFunction) => {
        const { email } = this.state;

        if (this.isFormValid()) {
            try {
                const results = await sendMagicLink({
                    variables: {
                        email
                    }
                });

                if (results && results.data) {
                    await Navigation.push(this.props.componentId, {
                        component: {
                            name: ROUTES.resetPasswordSuccess,
                            options: { bottomTabs }
                        }
                    });
                }
            } catch (e) {
                // tslint:disable-next-line
                console.log(e);
            }
        }
    };
}

const mapStateToProps = (state: IReduxState) => ({
    copy: getCopy(state, "resetPassword") as ResetPasswordCopy
});

export default connect<ConnectedState, {}>(
    mapStateToProps,
    null
)(ResetPasswordContainer);
