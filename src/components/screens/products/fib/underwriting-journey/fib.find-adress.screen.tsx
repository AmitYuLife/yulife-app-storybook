import React, { memo, useRef, useCallback, useState, useEffect } from "react";
import { FibUnderwritingJourneyLayout } from "../layouts/fib.underwriting-journey-layout";
import { View, StyleSheet, TextStyle, ViewStyle, FlatList, ListRenderItemInfo, ActivityIndicator } from "react-native";
import { TextField, TouchableOpacityWithDelay } from "@components/molecules";
import { Text, Pad } from "@atoms";
import { Style } from "@styles";
import FibTitle from "../../../../atoms/fib/title/title";
import { Address_findUserAddress } from "../../../../../graphql/_core/schema/Address";
import { useBackHandler } from "../../../../../services/hooks/useBackHandler";

interface IFibFindAdressScreenProps {
  onBackButtonPress: () => void;
  onAddressSelected: (adress: Address_findUserAddress) => void;
  onPostCodeAdded: (postCode: string) => void;
  data: Address_findUserAddress[];
  loading: boolean;
  onClose?: () => void;
}

const postCodeRegex = /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))[0-9][A-Za-z]{2})$/;

export const FibFindAdressScreen = memo(function (props: IFibFindAdressScreenProps) {
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
        if (postCodeRegex.test(postcode)) {
          onPostCodeAdded(formatPostCode(postcode));
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
      progressBar={{ maxLength: 0, currentPosition: 0, isHidden: true }}
      onPreviousQuestion={onBackButtonPress}
    >
      <View style={styles.wrapper}>
        <View style={styles.enterPostCodeWrapper}>
          <FibTitle title={"Enter your post code"} />
          <TextField
            placeholder={""}
            onChange={(val) => startTimer(val.toUpperCase().replace(/ /g, ""))}
            type={"PostCode"}
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
          />
        )}
      </View>
    </FibUnderwritingJourneyLayout>
  );
});

export const formatPostCode = (postCode: string) => {
  return postCode.replace(/^(.*)(\d)/, "$1 $2");
};

interface ItemAdressProps {
  address: Address_findUserAddress;
  onPress: () => void;
}

const AddressItem = (props: ItemAdressProps) => {
  return (
    <TouchableOpacityWithDelay onPress={props.onPress}>
      <View style={styles.adressItemWrapper}>
        <Text style={styles.itemAdressTextBold}>
          {`${props.address.addressFirstLine}, `}
          <Text style={styles.itemAdressText}>
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
  adressItemWrapper: {
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
  itemAdressTextBold: {
    fontSize: 16,
    lineHeight: 24,
    color: "#5A5A5C",
    letterSpacing: 1,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    paddingHorizontal: 32,
  } as TextStyle,
  itemAdressText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#5A5A5C",
    letterSpacing: 1,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
  } as TextStyle,
});
