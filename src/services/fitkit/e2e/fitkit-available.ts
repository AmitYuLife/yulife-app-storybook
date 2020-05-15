import mock from "@services/socket/socketClient";
import { Component } from "react";

interface IProps {
    children: any;
}

// we make this global per app session so it persists between sceens when mocking
const globalState = {
    loading: false,
    available: true,
    authorised: false,
};

class FitKitAvailable extends Component<IProps> {

    private unlisten: ReturnType<typeof mock.onFitkitAuthorised>;

    public state = globalState;

    public constructor(props: IProps) {
        super(props);
        this.unlisten = mock.onFitkitAuthorised(this.authorise.bind(this));
    }

    public componentWillUnmount() {
        this.unlisten();
    }

    public render() {
        const { available, authorised, loading } = this.state;

        return this.props.children({
            available,
            authorised,
            authorise: this.authorise,
            loading
        });
    }

    public async authorise(authorised = true) {
        globalState.authorised = authorised;
        globalState.available = authorised;
        this.setState({ authorised, available: authorised });
    }
}

export default FitKitAvailable;

