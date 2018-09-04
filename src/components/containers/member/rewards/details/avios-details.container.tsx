import * as React from "react";
import { Component } from "react";
import { Alert, Linking } from "react-native";
import { Config } from "react-native-config";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { GetRewards_getRewards, RedeemReward } from "../../../../../graphql/_core/schema";
import RedeemRewardMutation, {
    redeemRewardGql,
    RedeemRewardMutationType
} from "../../../../../graphql/rewards/redeemReward.gql";
import { ROUTES } from "../../../../../navigation/routes";
import { IReduxState } from "../../../../../redux/_core/reducers";
import { getTotalCoins } from "../../../../../redux/coins/coins.selectors";
import { BlurProvider, Loading } from "../../../../atoms";
import { ListPicker } from "../../../../molecules";
import { AviosRewardDetailsScreen } from "../../../../screens";
import {
    IOnPressPickerArgs,
    IRewardReturnedUsersItem
} from "../../../../screens/member/rewards/details/avios-details.screen";

enum Programmes {
    aerLingus = "aerclub",
    vueling = "vueling club",
    meridiana = "meridiana club",
    britishAirways = "the british airways executive club"
}

interface IProgrammesItem {
    id: Programmes;
    label: Programmes;
}

interface IPressableRewardReturnedUsersItem extends IRewardReturnedUsersItem {
    onPress: () => void;
}

interface IProps {
    componentId: string;
    reward: GetRewards_getRewards;
    onTabChange: (tab: "rewards" | "purchases", componentId: string) => void;
}

interface IConnectedState {
    totalCoins: number;
}

type Props = IProps & IConnectedState;

interface IState {
    loyalty?: IProgrammesItem;
    forename?: string;
    surname?: string;
    accountNumber?: string;
    amount?: IRewardReturnedUsersItem;
    items?: IPressableRewardReturnedUsersItem[];
    instruction?: string;
    loyaltyList?: IRewardReturnedUsersItem[];
    amountList?: IRewardReturnedUsersItem[];
    isAccountNumberDirty?: boolean;
}

class AviosRewardDetailsContainer extends Component<Props, IState> {
    public state = {
        accountNumber: "",
        amount: {},
        amountList: [],
        forename: "",
        instruction: "",
        isAccountNumberDirty: false,
        items: [],
        loyalty: {},
        loyaltyList: [],
        surname: ""
    } as IState;
    private blurProvider: BlurProvider;

    public componentDidMount() {
        const { reward } = this.props;

        const forename = "";
        const surname = "";
        const accountNumber = "";

        const loyaltyList = reward.loyalty_programme.map((name: string) => ({
            id: name,
            label: name
        }));
        const amountList = reward.available_denominations.map(({ yuCoin, value }) => ({
            id: String(value),
            label: `${value} avios - ${yuCoin} yucoin`
        }));

        this.setState({
            accountNumber,
            amountList,
            forename,
            loyaltyList,
            surname
        });
    }

    public render() {
        const {
            totalCoins,
            reward: {
                code,
                currency_code,
                description,
                available_denominations,
                uiSettings,
                redeem_steps: { info }
            }
        } = this.props;
        const [{ yuCoin, value }] = available_denominations;

        const { hasError, isValidAccountNumber } = this.validateForm();
        const isDisabledCta = hasError || !isValidAccountNumber;
        const hasErrorAccountNumber = this.state.isAccountNumberDirty && !isValidAccountNumber;

        return (
            <RedeemRewardMutation mutation={redeemRewardGql}>
                {(redeemReward, { loading }) => {
                    const handleSubmit = async () => {
                        this.handleRewardPurchase(redeemReward);
                    };

                    if (loading) {
                        return <Loading />;
                    }

                    return (
                        <BlurProvider
                            ref={(ref) => (this.blurProvider = ref)}
                            type={BlurProvider.Types.DARK}
                            render={({ toggleOverlay }) => (
                                <AviosRewardDetailsScreen
                                    uiSettings={uiSettings}
                                    isDisabledCta={isDisabledCta}
                                    hasErrorAccountNumber={hasErrorAccountNumber}
                                    onPressLoyaltyPicker={this.handlePressPicker({
                                        picker: "loyalty",
                                        toggleOverlay
                                    })}
                                    onPressAmountPicker={this.handlePressPicker({
                                        picker: "amount",
                                        toggleOverlay
                                    })}
                                    {...this.state}
                                    loyaltyValue={this.state.loyalty.label}
                                    forenameValue={this.state.forename}
                                    surnameValue={this.state.surname}
                                    amountValue={this.state.amount.label}
                                    accountNumberValue={this.state.accountNumber}
                                    onForenameChange={this.handleTextChange("forename")}
                                    onSurnameChange={this.handleTextChange("surname")}
                                    onCardChange={this.handleTextChange("accountNumber")}
                                    coins={totalCoins}
                                    onPressTopBar={this.handleRewardsPress}
                                    onLeftTabPress={this.handleRewardsPress}
                                    onRightTabPress={this.handlePurchasesPress}
                                    code={code}
                                    cost={yuCoin}
                                    rewardValue={value}
                                    rewardCurrency={currency_code}
                                    welcomeHeading="Welcome aboard"
                                    welcomeParagraph={description}
                                    instructionsHeading="Connect yucoin to Avios"
                                    instructionsParagraph={info}
                                    confirmButtonLabel={
                                        !isDisabledCta
                                            ? `buy avios with ${this.state.amount.id} yucoin`
                                            : "select amount"
                                    }
                                    onPressConfirm={handleSubmit}
                                    onPressPolicy={() => this.openLink("")}
                                    onPressSetUp={() => this.openLink("avios")}
                                />
                            )}
                            renderOverlay={({ toggleOverlay }) => (
                                <ListPicker
                                    onPressCancel={toggleOverlay}
                                    instruction={this.state.instruction}
                                    items={this.state.items}
                                />
                            )}
                        />
                    );
                }}
            </RedeemRewardMutation>
        );
    }

    public openLink = async (link: string) => {
        let url = "";

        switch (link) {
            case "avios":
                url = "https://www.avios.com/gb/en_gb/my-account/log-into-avios";
                break;
            case "aviosTerms":
                url = `${Config.FRONTEND_URL}/static/aviosTerms.pdf`;
                break;
            default:
                url = `${Config.FRONTEND_URL}/static/rewardsPolicy.pdf`;
        }
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        }
    }

    private handleRewardsPress = () => {
        this.props.onTabChange("rewards", this.props.componentId);
    }

    private handlePurchasesPress = () => {
        this.props.onTabChange("purchases", this.props.componentId);
    }

    private handlePick = ({ picker, item }: { picker: string; item: IRewardReturnedUsersItem }) => () => {
        this.setState({ [picker]: item }, () => this.blurProvider.toggleOverlay());
    }

    private handlePressPicker = ({ toggleOverlay, picker }: { toggleOverlay: () => void; picker: string }) => {
        return ({ items, instruction }: IOnPressPickerArgs) => {
            this.setState(
                {
                    instruction,
                    items: items.map((item) => {
                        return {
                            ...item,
                            onPress: this.handlePick({
                                item,
                                picker
                            })
                        };
                    })
                },
                () => toggleOverlay()
            );
        };
    }

    private validateForm = () => {
        const {
            forename,
            surname,
            amount: { id }
        } = this.state;
        return {
            hasError: !forename || !surname || !id,
            isValidAccountNumber: this.verifyAccountNumber()
        };
    }

    private handleTextChange = (key: string) => {
        return (value: string) => {
            this.setState({
                [key]: value,
                isAccountNumberDirty: key === "accountNumber"
            } as Partial<IState>);
        };
    }

    private verifyAccountNumber = () => {
        const {
            loyalty: { id },
            accountNumber
        } = this.state;
        if (!id || !accountNumber) {
            return false;
        }
        const sanitizedAccountNumber = accountNumber.split(" ").join("");
        const isnum = /^\d+$/.test(sanitizedAccountNumber);
        const programme = id.toLowerCase();
        if (programme === Programmes.aerLingus || programme === Programmes.vueling) {
            return sanitizedAccountNumber.startsWith("308147") && sanitizedAccountNumber.length === 16 && isnum;
        } else if (programme === Programmes.britishAirways || programme === Programmes.meridiana) {
            return sanitizedAccountNumber.length === 8 && isnum;
        } else {
            return false;
        }
    }

    private handleRewardPurchase = (redeemReward: RedeemRewardMutationType) => {
        const { reward } = this.props;
        const {
            forename: firstName,
            surname: lastName,
            accountNumber,
            amount: { id, label },
            loyalty: { id: loyaltyProgramme }
        } = this.state;

        const metadata = {
            avios: {
                accountNumber,
                firstName,
                lastName,
                loyaltyProgramme
            }
        };

        Alert.alert("Confirm yucoin purchase", `You are about to buy ${label.replace("-", "with")}.`, [
            {
                style: "cancel",
                text: "Cancel"
            },
            {
                onPress: async () => {
                    const result = await redeemReward({ variables: { id: reward.code, amount: Number(id), metadata } });
                    if ((result as { data: RedeemReward }).data.redeemReward) {
                        await Navigation.push(ROUTES.member, {
                            component: {
                                id: ROUTES.aviosConfirmed,
                                name: ROUTES.aviosConfirmed,
                                passProps: {
                                    onTabChange: this.props.onTabChange,
                                    purchase: (result as { data: RedeemReward }).data.redeemReward
                                }
                            }
                        });
                    }
                },
                text: "Confirm"
            }
        ]);
    }
}

const mapStateToProps = (state: IReduxState) => ({
    totalCoins: getTotalCoins(state)
});

export default connect<IConnectedState>(mapStateToProps)(AviosRewardDetailsContainer);
