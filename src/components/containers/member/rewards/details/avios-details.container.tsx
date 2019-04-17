import { RedeemRewardFunctionType, RedeemRewardMutation } from "@graphql/rewards";
import * as React from "react";
import { Component } from "react";
import { Alert, Linking } from "react-native";
import Config from "react-native-config";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { GetRewards_getRewards, RedeemReward } from "../../../../../graphql/_core/schema";
import { MODALS, ROUTES } from "../../../../../navigation/constants";
import { IReduxState } from "../../../../../redux/_core/reducers";
import { getOfflineState } from "../../../../../redux/app/app.selectors";
import { getTotalCoins } from "../../../../../redux/coins/coins.selectors";
import { getUserStart } from "../../../../../redux/user/user.actions";
import Logger from "../../../../../services/logging/logger";
import { BlurProvider } from "../../../../atoms";
import { ListPicker } from "../../../../molecules";
import { AviosRewardDetailsScreen } from "../../../../screens";
import {
    IOnPressPickerArgs,
    IRewardReturnedUsersItem
} from "../../../../screens/member/rewards/details/avios-details.screen";

type ProgrammesTypes = "aerclub" | "vueling club" | "meridiana club" | "the british airways executive club";

const Programmes: {[name: string]: ProgrammesTypes} = {
    aerLingus: "aerclub",
    vueling: "vueling club",
    meridiana: "meridiana club",
    britishAirways: "the british airways executive club"
};

interface IProgrammesItem {
    id: ProgrammesTypes;
    label: ProgrammesTypes;
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
    offline: boolean;
    totalCoins: number;
}

interface IConnectedDispatch {
    getUserStart: () => void;
}

type Props = IProps & IConnectedState & IConnectedDispatch;

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
        // TODO: Move to sagas
        Logger.logEvent("reward_viewed", {
            reward_availability: reward.availability,
            reward_available_denominations: reward.available_denominations,
            reward_best_sticker: reward.reward_sticker,
            reward_code: reward.code,
            reward_name: reward.name
        });

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
            <RedeemRewardMutation>
                {(redeemReward, { loading }) => {
                    const handleSubmit = async () => {
                        this.handleRewardPurchase(redeemReward);
                    };

                    return (
                        <BlurProvider
                            ref={(ref) => (this.blurProvider = ref)}
                            type={BlurProvider.Types.DARK}
                            render={({ toggleOverlay }) => (
                                <AviosRewardDetailsScreen
                                    uiSettings={uiSettings}
                                    isDisabledCta={isDisabledCta}
                                    isLoading={loading}
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
                url = `${Config.API_URL}/docs/avios-terms.pdf`;
                break;
            default:
                url = Config.REWARDS_POLICY_URL;
        }
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        }
    };

    private handleRewardsPress = () => {
        this.props.onTabChange("rewards", this.props.componentId);
    };

    private handlePurchasesPress = () => {
        this.props.onTabChange("purchases", this.props.componentId);
    };

    private handlePick = ({ picker, item }: { picker: string; item: IRewardReturnedUsersItem }) => () => {
        this.setState({ [picker]: item }, () => this.blurProvider.toggleOverlay());
    };

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
    };

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
    };

    private handleTextChange = (key: string) => {
        return (value: string) => {
            this.setState({
                [key]: value,
                isAccountNumberDirty: key === "accountNumber"
            } as Partial<IState>);
        };
    };

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
    };

    private handleRewardPurchase = (redeemReward: RedeemRewardFunctionType) => {
        const { offline, reward, totalCoins } = this.props;
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
                    try {
                        const result = await redeemReward({
                            variables: { id: reward.code, amount: Number(id), metadata }
                        });

                        if ((result as { data: RedeemReward }).data.redeemReward) {
                            this.props.getUserStart();
                            await Navigation.push(ROUTES.rewards, {
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
                    } catch (e) {
                        const passProps = {
                            ctaLabel: "check other rewards",
                            heading: "the voucher is not currently available",
                            onPress: () => Navigation.dismissModal(MODALS.rewards),
                            subheading: "Please come back later."
                        };

                        if (offline) {
                            passProps.ctaLabel = "got it";
                            passProps.heading = "you're offline";
                            passProps.subheading = "check your internet connection";
                        } else if (totalCoins < Number(id)) {
                            passProps.ctaLabel = "got it";
                            passProps.heading = "not enough coin";
                            passProps.subheading = "Earn more and come back later!";
                        }

                        await Navigation.showModal({
                            component: {
                                id: MODALS.rewards,
                                name: MODALS.rewards,
                                passProps
                            }
                        });
                    }
                },
                text: "Confirm"
            }
        ]);
    };
}

const mapStateToProps = (state: IReduxState) => ({
    offline: getOfflineState(state),
    totalCoins: getTotalCoins(state)
});

const mapDispatchToProps = {
    getUserStart
};

export default connect<IConnectedState, IConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(AviosRewardDetailsContainer);
