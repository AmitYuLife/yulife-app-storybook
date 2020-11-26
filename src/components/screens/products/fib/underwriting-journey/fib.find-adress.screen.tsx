import React, { memo, useRef, useCallback, useState, useEffect } from "react";
import { FibUnderwritingJourneyLayout } from "../layouts/fib.underwriting-journey-layout";
import { View, StyleSheet, TextStyle, ViewStyle, FlatList, ListRenderItemInfo, ActivityIndicator } from "react-native";
import { TextField, TouchableOpacityWithDelay } from "@components/molecules";
import { Text, Pad } from "@atoms";
import { Style } from "@styles";
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
    >
      <View style={styles.wrapper}>
        <View style={styles.enterPostCodeWrapper}>
          <FibTitle title={"Enter your post code"} />
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
          <Text style={styles.textBold}>{isEntryPoint ? "" : "No results could be found."}</Text>
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
        <Text style={styles.itemAddressTextBold}>
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
    backgroundColor: "#f8f8f8",
    flex: 1,
  } as ViewStyle,
  enterPostCodeWrapper: {
    paddingTop: 30,
    paddingHorizontal: 32,
    backgroundColor: "white",
  } as ViewStyle,
  addressItemWrapper: {
    height: 80,
    borderBottomWidth: 1,
    borderColor: "#E7E7EB",
    justifyContent: "space-around",
  } as ViewStyle,
  textBold: {
    marginTop: 16,
    fontSize: 16,
    lineHeight: 24,
    color: "#5A5A5C",
    letterSpacing: 1,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    paddingHorizontal: 32,
  } as TextStyle,
  itemAddressTextBold: {
    fontSize: 16,
    lineHeight: 24,
    color: "#5A5A5C",
    letterSpacing: 1,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    paddingHorizontal: 32,
  } as TextStyle,
  itemAddressText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#5A5A5C",
    letterSpacing: 1,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
  } as TextStyle,
});
