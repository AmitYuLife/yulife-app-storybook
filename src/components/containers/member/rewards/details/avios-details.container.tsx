import { useMutation } from "@apollo/react-hooks";
import { RedeemRewardMutationTuple, GQL_MUTATION_REDEEM_REWARD } from "@graphql/rewards";
import React, { FC, useEffect, useCallback, useMemo, useState } from "react";
import { Alert } from "react-native";
import Config from "react-native-config";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { GetRewards_getRewards, RedeemReward } from "../../../../../graphql/_core/schema";
import { bottomTabs, MODALS, ROUTES } from "../../../../../navigation/constants";
import { IReduxState } from "../../../../../redux/_core/reducers";
import { getOfflineState } from "../../../../../redux/app/app.selectors";
import { getTotalCoins } from "../../../../../redux/coins/coins.selectors";
import { getCopy } from "../../../../../redux/copy/copy.selectors";
import { getUserStart } from "../../../../../redux/user/user.actions";
import Logger from "../../../../../services/logging/logger";
import { BlurProvider } from "../../../../atoms";
import { ListPicker } from "../../../../molecules";
import { AviosRewardDetailsScreen } from "../../../../screens";
import { handleLinkPress } from "@services/app-link";

enum Programmes {
  aerLingus = "aerclub",
  vueling = "vueling club",
  meridiana = "meridiana club",
  britishAirways = "the british airways executive club",
}

interface IProgrammesItem {
  id: Programmes;
  label: Programmes;
}

interface IProps {
  componentId: string;
  reward: GetRewards_getRewards;
  onTabChange: (tab: "rewards" | "purchases", componentId: string) => void;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

type Props = IProps & ConnectedState & ConnectedDispatch;

const verifyAccountNumber = (loyaltyId: string, accountNumber: string) => {
  if (!loyaltyId || !accountNumber) {
    return false;
  }

  const sanitizedAccountNumber = accountNumber.split(" ").join("");
  const isnum = /^\d+$/.test(sanitizedAccountNumber);
  const programme = loyaltyId.toLowerCase();

  if (programme === Programmes.aerLingus || programme === Programmes.vueling) {
    return sanitizedAccountNumber.startsWith("308147") && sanitizedAccountNumber.length === 16 && isnum;
  }

  if (programme === Programmes.britishAirways || programme === Programmes.meridiana) {
    return sanitizedAccountNumber.length === 8 && isnum;
  }

  return false;
};

const AviosRewardDetailsContainer: FC<Props> = (props) => {
  const {
    onTabChange,
    componentId,
    copy,
    totalCoins,
    reward: {
      code,
      availability,
      currency_code,
      reward_sticker,
      name,
      description,
      redeem_steps: { info },
      available_denominations,
      uiSettings,
      loyalty_programme,
    },
  } = props;

  useEffect(() => {
    Logger.logEvent("reward_viewed", {
      reward_availability: availability,
      reward_available_denominations: available_denominations,
      reward_best_sticker: reward_sticker,
      reward_code: code,
      reward_name: name,
    });
  }, [availability, available_denominations, reward_sticker, code, name]);

  const loyaltyList = useMemo(
    () =>
      loyalty_programme.map((programme: Programmes) => ({
        id: programme,
        label: programme,
      })),
    [loyalty_programme]
  );
  const amountList = useMemo(
    () =>
      available_denominations.map((ad) => ({
        id: String(ad.value),
        label: `${ad.value} avios - ${ad.yuCoin} yucoin`,
      })),
    [available_denominations]
  );

  const onRewardsTabPress = useCallback(() => onTabChange("rewards", componentId), [onTabChange, componentId]);
  const onPurchasesTabPress = useCallback(() => onTabChange("purchases", componentId), [onTabChange, componentId]);

  const handlePolicyPress = useMemo(() => handleLinkPress(Config.REWARDS_POLICY_URL), []);
  // const handleTermsPress = useMemo(() => handleLinkPress(`${Config.API_URL}/docs/avios-terms.pdf`), []);
  const handleAviosTermsPress = useMemo(
    () => handleLinkPress("https://www.avios.com/gb/en_gb/my-account/log-into-avios"),
    []
  );

  const [picker, setPicker] = useState("");
  const [amount, setAmount] = useState(amountList[0]);
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [accountNumber, setAccountNumber] = useState({ value: "", dirty: false });
  const [instruction, setInstruction] = useState("");
  const [loyalty, setLoyalty] = useState({} as IProgrammesItem);

  const [redeemReward, { loading }]: RedeemRewardMutationTuple = useMutation(GQL_MUTATION_REDEEM_REWARD);

  const { hasError, isValidAccountNumber } = useMemo(
    () => ({
      hasError: !firstName || !lastName || !loyalty.id,
      isValidAccountNumber: verifyAccountNumber(loyalty.id, accountNumber.value),
    }),
    [firstName, lastName, accountNumber, loyalty]
  );
  const isDisabledCta = hasError || !isValidAccountNumber;
  const hasErrorAccountNumber = accountNumber.dirty && !isValidAccountNumber;

  const [{ yuCoin, value }] = available_denominations;

  const handleRewardPurchase = useCallback(() => {
    const metadata = {
      avios: {
        accountNumber: accountNumber.value,
        firstName,
        lastName,
        loyaltyProgramme: loyalty.id,
      },
    };

    Alert.alert("Confirm yucoin purchase", `You are about to buy ${amount.label.replace("-", "with")}.`, [
      {
        style: "cancel",
        text: "Cancel",
      },
      {
        onPress: async () => {
          try {
            const result = await redeemReward({
              variables: { id: code, amount: Number(amount.id), metadata },
            });

            if ((result as { data: RedeemReward }).data.redeemReward) {
              props.getUserStart();
              await Navigation.push(ROUTES.rewards, {
                component: {
                  id: ROUTES.aviosConfirmed,
                  name: ROUTES.aviosConfirmed,
                  passProps: {
                    onTabChange: props.onTabChange,
                    purchase: (result as { data: RedeemReward }).data.redeemReward,
                  },
                  options: { bottomTabs },
                },
              });
            }
          } catch (e) {
            const passProps = {
              ctaLabel: copy.voucherNotAvailable.ctaLabel,
              heading: copy.voucherNotAvailable.heading,
              onPress: () => Navigation.dismissModal(MODALS.rewards),
              subheading: copy.voucherNotAvailable.subheading,
            };

            if (props.offline) {
              passProps.ctaLabel = copy.offline.ctaLabel;
              passProps.heading = copy.offline.heading;
              passProps.subheading = copy.offline.subheading;
            } else if (totalCoins < Number(amount.id)) {
              passProps.ctaLabel = copy.notEnoughCoins.ctaLabel;
              passProps.heading = copy.notEnoughCoins.heading;
              passProps.subheading = copy.notEnoughCoins.subheading;
            }

            await Navigation.showModal({
              component: {
                id: MODALS.rewards,
                name: MODALS.rewards,
                passProps,
              },
            });
          }
        },
        text: "Confirm",
      },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastName, firstName, accountNumber, loyalty, amount]);

  return (
    <BlurProvider
      backgroundColor="dark"
      render={({ toggleOverlay }) => (
        <AviosRewardDetailsScreen
          uiSettings={uiSettings}
          isDisabledCta={isDisabledCta}
          isLoading={loading}
          hasErrorAccountNumber={hasErrorAccountNumber}
          onPressLoyaltyPicker={() => {
            setPicker("loyalty");
            setInstruction("Select your loyalty programme");
            toggleOverlay();
          }}
          onPressAmountPicker={() => {
            setPicker("amount");
            setInstruction("Select your amount");
            toggleOverlay();
          }}
          loyaltyValue={loyalty.label}
          forenameValue={firstName}
          surnameValue={lastName}
          amountValue={amount.label}
          accountNumberValue={accountNumber.value}
          onForenameChange={setFirstName}
          onSurnameChange={setLastName}
          onCardChange={(input) => setAccountNumber({ value: input, dirty: true })}
          coins={totalCoins}
          onPressTopBar={onRewardsTabPress}
          onLeftTabPress={onRewardsTabPress}
          onRightTabPress={onPurchasesTabPress}
          code={code}
          cost={yuCoin}
          rewardValue={value}
          rewardCurrency={currency_code}
          welcomeHeading="Welcome aboard"
          welcomeParagraph={description}
          instructionsHeading="Connect yucoin to Avios"
          instructionsParagraph={info}
          confirmButtonLabel={
            !isDisabledCta ? `buy ${amount.label.replace(/^\d* avios -/, "avios with")}` : "select amount"
          }
          onPressConfirm={handleRewardPurchase}
          onPressPolicy={handlePolicyPress}
          onPressSetUp={handleAviosTermsPress}
        />
      )}
      renderOverlay={({ toggleOverlay }) => (
        <ListPicker
          onPressCancel={toggleOverlay}
          instruction={instruction}
          items={
            picker === "loyalty"
              ? loyaltyList.map((item) => ({
                  ...item,
                  onPress: () => {
                    setLoyalty(item);
                    toggleOverlay();
                  },
                }))
              : amountList.map((item) => ({
                  ...item,
                  onPress: () => {
                    setAmount(item);
                    toggleOverlay();
                  },
                }))
          }
        />
      )}
    />
  );
};

const mapStateToProps = (state: IReduxState) => ({
  offline: getOfflineState(state),
  totalCoins: getTotalCoins(state),
  copy: getCopy(state, "purchases"),
});

const mapDispatchToProps = {
  getUserStart,
};

export default connect<ConnectedState, ConnectedDispatch>(
  mapStateToProps,
  mapDispatchToProps
)(AviosRewardDetailsContainer);
