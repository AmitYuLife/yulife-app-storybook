import React, { memo, useRef, useCallback, useState, useEffect } from "react";
import { FibUnderwritingJourneyLayout } from "../layouts/fib.underwriting-journey-layout";
import { View, StyleSheet, TextStyle, ViewStyle, FlatList, ListRenderItemInfo, ActivityIndicator } from "react-native";
import { TextField, TouchableOpacityWithDelay } from "@components/molecules";
import { Text, Pad } from "@atoms";
import { Style, Colours } from "@styles";
import FibTitle from "../../../../atoms/fib/title/title";
import { Address_findUserAddress } from "../../../../../graphql/_core/schema/Address";
import { useBackHandler } from "../../../../../services/hooks/useBackHandler";

interface IFibFindAddressScreenProps {
  onBackButtonPress: () => void;
  onAddressSelected: (address: Address_findUserAddress) => void;
  onPostCodeAdded: (postCode: string) => void;
  data: Address_findUserAddress[];
  loading: boolean;
  onClose?: () => void;
}

export const postCodeRegex = /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/;
export const postCodeRegexSpecial = /^(([A-Z]{1,2}[0-9][A-Z0-9]?|ASCN|STHL|TDCU|BBND|[BFS]IQQ|PCRN|TKCA) ?[0-9][A-Z]{2}|BFPO ?[0-9]{1,4}|(KY[0-9]|MSR|VG|AI)[ -]?[0-9]{4}|[A-Z]{2} ?[0-9]{2}|GE ?CX|GIR ?0A{2}|SAN ?TA1)$/;

export const FibFindAddressScreen = memo(function (props: IFibFindAddressScreenProps) {
  const { onBackButtonPress, onAddressSelected, onPostCodeAdded, data, loading, onClose } = props;
  const [userIsTyping, setUserIsTyping] = useState(false);
  const [isEntryPoint, setIsEntryPoint] = useState(true);
  const [postCode, setPostCode] = useState("");
  const timer = useRef<NodeJS.Timer>(null);

  const backHandler = useCallback(() => {
    onBackButtonPress();
    return true;
  }, [onBackButtonPress]);

  useBackHandler(backHandler);

  useEffect(() => {
    return () => clearTimeout(timer.current);
  }, []);

  const startTimer = useCallback(
    (postcode: string) => {
      setPostCode(postcode);
      setIsEntryPoint(false);
      setUserIsTyping(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        if (postCodeRegex.test(postcode) || postCodeRegexSpecial.test(postcode)) {
          onPostCodeAdded(postcode);
        }

        setUserIsTyping(false);
      }, 300);
    },
    [timer, onPostCodeAdded]
  );
  return (
    <FibUnderwritingJourneyLayout
      heading={"Contact Details"}
      onClose={onClose}
      hideProgressBar={true}
      onPreviousQuestion={onBackButtonPress}
      wrapperStyle={styles.wrapper}
    >
      <FibTitle title={"Enter your post code"} />
      <View style={styles.contentWrapper}>
        <View style={styles.enterPostCodeWrapper}>
          <TextField
            placeholder={""}
            onChange={(val) => startTimer(val.toUpperCase())}
            type={"PostCodeFinder"}
            maxLength={8}
          />
          <Pad height={20} />
        </View>

        {loading || userIsTyping ? (
          <View style={{ marginTop: 16 }}>
            <ActivityIndicator />
          </View>
        ) : null}
        {loading || userIsTyping ? null : data?.length < 1 || isEntryPoint || !postCodeRegex.test(postCode) ? (
          <Text bold={true} style={styles.textBold}>
            {isEntryPoint ? "" : "No results could be found."}
          </Text>
        ) : (
          <FlatList
            renderItem={({ item }: ListRenderItemInfo<Address_findUserAddress>) => (
              <AddressItem onPress={() => onAddressSelected(item)} address={item} />
            )}
            keyExtractor={(item: Address_findUserAddress) => item.addressFirstLine}
            data={data}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps={"always"}
          />
        )}
      </View>
    </FibUnderwritingJourneyLayout>
  );
});

export const formatPostCode = (postCode: string) => {
  return postCode
    .replace(/ /g, "")
    .toUpperCase()
    .replace(/^(.*)(\d)/, "$1 $2");
};

interface ItemAddressProps {
  address: Address_findUserAddress;
  onPress: () => void;
}

const AddressItem = (props: ItemAddressProps) => {
  return (
    <TouchableOpacityWithDelay onPress={props.onPress}>
      <View style={styles.addressItemWrapper}>
        <Text bold={true} style={styles.itemAddressText}>
          {`${props.address.addressFirstLine}, `}
          <Text style={styles.itemAddressText}>
            {props.address.addressCity}, {props.address.addressPostCode}
          </Text>
        </Text>
      </View>
    </TouchableOpacityWithDelay>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colours.neutral.n50,
  } as ViewStyle,
  contentWrapper: {
    backgroundColor: Colours.neutral.n50,
    flex: 1,
    paddingHorizontal: Style.adjust(24),
  } as ViewStyle,
  enterPostCodeWrapper: {
    backgroundColor: Colours.neutral.n50,
  } as ViewStyle,
  addressItemWrapper: {
    height: Style.adjust(80),
    borderBottomWidth: 1,
    borderColor: Colours.neutral.n100,
    justifyContent: "space-around",
  } as ViewStyle,
  textBold: {
    marginTop: Style.adjust(16),
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    color: Colours.neutral.n800,
    letterSpacing: 1,
  } as TextStyle,
  itemAddressText: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    color: Colours.neutral.n800,
    letterSpacing: 1,
  } as TextStyle,
});
