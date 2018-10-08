import * as React from "react";
import { PureComponent } from "react";
import { Navigation } from "react-native-navigation";
import { getMagicLinkGql, GetMagicLinkQuery } from "../../../../graphql/user/getMagicLink.gql";
import { MemberZoneScreen } from "../../../screens";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId: string;
}

class SignUpContainer extends PureComponent<IProps> {
    public componentDidMount() {
        Navigation.mergeOptions(this.props.componentId, {
            topBar: {
                title: {
                    text: "Member zone"
                },
                visible: true
            }
        });
    }

    public render() {
        return (
            <GetMagicLinkQuery query={getMagicLinkGql} fetchPolicy="network-only">
                {({ error, loading, data }) => {
                    const uri = data.getMagicLink;

                    return (
                        <MemberZoneScreen
                            error={error ? "Something went wrong." : null}
                            loading={loading}
                            uri={uri}
                        />
                    );
                }}
            </GetMagicLinkQuery>
        );
    }

}

export default SignUpContainer;
