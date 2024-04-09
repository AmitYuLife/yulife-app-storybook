import React, { memo, useCallback, useContext, useEffect, useState } from "react";
import { ProductStepContext } from "@components/containers/products/product-step/product-step.context";
import { ContentItemSearchPostcode } from "@components/sdui";
import { useDebouncedQuery } from "@hooks";
import { ISearchItem } from "@molecules";
import { formatPostCode } from "@utils";
import { AddressIcon } from "@atoms";
import { Colours } from "@styles";
import { AddressQuery, ContentItemSearchPostcodeFragment as GqlButton, gql } from "@graphql/__generated";

type Props = GqlButton;
type UserAddress = AddressQuery["findUserAddress"][number];

const keyExtractor = (item: ISearchItem<any>, index: number) => {
  return `${item.addressPostCode}-${item.addressFirstLine}-${item.addressSecondLine}-${index}`;
};

export const ProductStepSearchPostcode = memo((props: Props) => {
  const { addressAnswerKeys, onLoadPlaceholder, onLoadUnsuccessfulText } = props;
  const { setDynamicData, setHeaderBottom } = useContext(ProductStepContext);
  const [addressList, setAddressList] = useState<ISearchItem<UserAddress>[]>([]);
  const [isSearchPostcodeDisplayed, setIsSearchPostcodeDisplayed] = useState(false);
  const [onLoad, setOnLoad] = useState(true);
  const [query, setQuery] = useState<string>(null);

  useEffect(() => {
    setHeaderBottom(isSearchPostcodeDisplayed ? 0 : null);
  }, [isSearchPostcodeDisplayed]);

  const [search, { loading, data, networkStatus, called, error }] = useDebouncedQuery(gql("AddressDocument"), {
    fetchPolicy: "cache-and-network",
  });
  const onChangeText = useCallback(
    (textSearch: string) => {
      setQuery(query);
      search({ postcode: formatPostCode(textSearch) });

      if (onLoad) {
        setOnLoad(false);
      }
    },
    [query, search, onLoad]
  );

  const onRefresh = useCallback(async () => {
    if (query) {
      search({ postcode: formatPostCode(query) });
    }
  }, [query, search]);

  const onAddressSelected = useCallback(
    (address: UserAddress) => {
      const mappedAddress = addressAnswerKeys.reduce(
        (acc, k) => ({ ...acc, [k.answerKey]: address[k.addressKey as keyof UserAddress] }),
        {} as Record<string, string>
      );
      setDynamicData((oldState) => Object.assign({}, oldState, mappedAddress));
    },
    [addressAnswerKeys, setDynamicData]
  );

  if (data?.findUserAddress.length >= 0 && data.findUserAddress.length !== addressList.length && called) {
    setAddressList(
      data.findUserAddress.map((address: UserAddress, index: number) => {
        const addressLine = address.addressSecondLine
          ? `${address.addressFirstLine}, ${address.addressSecondLine}`
          : address.addressFirstLine;
        return {
          ...address,
          onPress: () => {
            onAddressSelected(address);
            setIsSearchPostcodeDisplayed(false);
          },
          icon: <AddressIcon color={!index ? Colours.primary.p600 : null} />,
          text: [addressLine, `${address.addressCity}, ${address.addressPostCode} `],
        };
      })
    );
  }

  if (error && addressList.length !== 0) {
    setAddressList([]);
  }

  return (
    <ContentItemSearchPostcode
      emptyText={onLoad ? onLoadPlaceholder : onLoadUnsuccessfulText}
      addressList={addressList}
      networkStatus={networkStatus}
      loading={loading}
      query={query}
      onRefresh={onRefresh}
      onChangeText={onChangeText}
      keyExtractor={keyExtractor}
      isSearchPostcodeDisplayed={isSearchPostcodeDisplayed}
      setIsSearchPostcodeDisplayed={setIsSearchPostcodeDisplayed}
      {...props}
    />
  );
});
