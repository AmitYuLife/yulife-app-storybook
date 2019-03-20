import mock from "@services/mock";
import { Component } from "react";

interface IProps {
    children: any;
}

class FitKitAvailable extends Component<IProps> {

    public state = {
        loading: false,
        available: true,
        authorised: false
    };
    private unlisten: any;

    public componentDidMount() {
        this.unlisten = mock.onFitkitAuthorised(this.setAuthorised);
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

    public async authorise(options: any) {
        const authorised = true || options;
        this.setState({ authorised });
        return authorised;
    }

    private setAuthorised = () => {
        this.setState({ authorised: true, available: true });
    }
}

export default FitKitAvailable;
