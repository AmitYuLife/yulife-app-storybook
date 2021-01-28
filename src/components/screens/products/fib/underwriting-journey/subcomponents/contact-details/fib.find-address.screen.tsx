import React, { useCallback, memo, useState, useEffect } from "react";
import { View } from "react-native";
import { useBackHandler } from "../../../../../../../services/hooks/useBackHandler";
import GenericHeadingAbsolute, {
  GenericHeadingPad,
} from "../../../../../../atoms/generic-heading/generic-heading-absolute";
import { useDebouncedQuery } from "../../../../../../../services/hooks/useDebouncedQuery";
import { Address, AddressVariables, Address_findUserAddress } from "../../../../../../../graphql/_core/schema";
import { AddressIcon, SearchInput, SearchList } from "@atoms";
import SearchItem, { ISearchItem } from "../../../../../../atoms/search/search-item";
import { Colours } from "../../../../../../../styles";
import { GQL_QUERY_GET_ADDRESS_BY_POSTCODE } from "../../../../../../../graphql/yuscreen/getAdress.gql";
import SearchListEmpty from "../../../../../../atoms/search/search-list-empty";
import { formatPostCode } from "../../../../../../../services/utils";

interface IFibFindAddressScreenProps {
  onBackButtonPress: () => void;
  onAddressSelected: (address: Address_findUserAddress) => void;
  onClose?: () => void;
}

function keyExtractor(item: ISearchItem<Address_findUserAddress>, index: number) {
  return `${item.addressPostCode}-${item.addressFirstLine}-${item.addressSecondLine}-${index}`;
}

export const postCodeRegex = /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/;
export const postCodeRegexSpecial = /^(([A-Z]{1,2}[0-9][A-Z0-9]?|ASCN|STHL|TDCU|BBND|[BFS]IQQ|PCRN|TKCA) ?[0-9][A-Z]{2}|BFPO ?[0-9]{1,4}|(KY[0-9]|MSR|VG|AI)[ -]?[0-9]{4}|[A-Z]{2} ?[0-9]{2}|GE ?CX|GIR ?0A{2}|SAN ?TA1)$/;

function _FibFindAddressScreen(props: IFibFindAddressScreenProps) {
  const { onClose, onBackButtonPress, onAddressSelected } = props;

  const backHandler = useCallback(() => {
    onBackButtonPress();
    return true;
  }, [onBackButtonPress]);

  useBackHandler(backHandler);

  const [addressList, setAddressList] = useState<ISearchItem<Address_findUserAddress>[]>([]);
  const [onLoad, setOnLoad] = useState(true);
  const [postCode, setPostCode] = useState<string>(null);

  const [search, { loading, data, networkStatus, called }] = useDebouncedQuery<Address, AddressVariables>(
    GQL_QUERY_GET_ADDRESS_BY_POSTCODE,
    { fetchPolicy: "cache-and-network" },
    null,
    null
  );

  const onChangeText = useCallback(
    (postCode: string) => {
      setPostCode(postCode);
      search({ postcode: formatPostCode(postCode) });

      if (onLoad) {
        setOnLoad(false);
      }
    },
    [search, onLoad, setPostCode]
  );

  const onRefresh = useCallback(async () => {
    if (postCode) {
      search({ postcode: formatPostCode(postCode) });
    }
  }, [search, postCode]);

  useEffect(() => {
    // Run query for navigating back cases
    onRefresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (data?.findUserAddress.length >= 0 && data.findUserAddress.length !== addressList.length && called) {
    setAddressList(
      data.findUserAddress.map((address: Address_findUserAddress, index: number) => {
        const addressLine = address.addressSecondLine
          ? `${address.addressFirstLine}, ${address.addressSecondLine}`
          : address.addressFirstLine;
        return {
          ...address,
          onPress: () => onAddressSelected(address),
          icon: <AddressIcon color={!index ? Colours.primary.p600 : null} />,
          text: [addressLine, `${address.addressCity}, ${address.addressPostCode} `],
        };
      })
    );
  }

  const emptyText = onLoad
    ? "Start typing your post code to generate results."
    : "Sorry, but we couldn’t find any results based on your search.";

  return (
    <View style={{ height: "100%", width: "100%" }}>
      <GenericHeadingPad />
      <SearchInput title="Enter your post code:" query={postCode} onChangeText={onChangeText} />
      <SearchList
        data={addressList}
        networkStatus={networkStatus}
        onRefresh={onRefresh}
        loading={loading}
        searchItem={SearchItem}
        keyExtractor={keyExtractor}
        emptyElement={<SearchListEmpty emptyText={emptyText} />}
      />
      <GenericHeadingAbsolute
        heading="Contact Details"
        onLeftIconPress={onBackButtonPress}
        onRightIconPress={onClose}
        hideBorder={false}
      />
    </View>
  );
}

export const FibFindAddressScreen = memo(_FibFindAddressScreen);
