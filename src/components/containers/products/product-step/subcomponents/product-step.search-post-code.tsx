import React, { memo, useCallback, useContext, useRef, useState } from "react";
import {
  Address,
  AddressVariables,
  Address_findUserAddress,
  ContentItemSearchPostcode as GqlButton,
} from "@graphql/_core/schema";
import { ProductStepContext } from "@components/containers/products/product-step/product-step.context";
import { ContentItemSearchPostcode } from "@components/sdui";
import { useDebouncedQuery } from "@services/hooks/useDebouncedQuery";
import { GQL_QUERY_GET_ADDRESS_BY_POSTCODE } from "@graphql/yuscreen/getAdress.gql";
import { ISearchItem } from "@atoms/search/search-item";
import { formatPostCode } from "@utils";
import { AddressIcon } from "@atoms";
import { Colours } from "@styles";

type Props = GqlButton;

const keyExtractor = (item: ISearchItem<any>, index: number) => {
  return `${item.addressPostCode}-${item.addressFirstLine}-${item.addressSecondLine}-${index}`;
};

export const ProductStepSearchPostcode = memo((props: Props) => {
  const { addressAnswerKeys, onLoadPlaceholder, onLoadUnsuccessfulText } = props;
  const { setDynamicData } = useContext(ProductStepContext);
  const [addressList, setAddressList] = useState<ISearchItem<Address_findUserAddress>[]>([]);
  const [onLoad, setOnLoad] = useState(true);
  const [query, setQuery] = useState<string>(null);
  const ref: React.MutableRefObject<{ onClose: () => void }> = useRef();

  const [search, { loading, data, networkStatus, called, error }] = useDebouncedQuery<Address, AddressVariables>(
    GQL_QUERY_GET_ADDRESS_BY_POSTCODE,
    { fetchPolicy: "cache-and-network" }
  );
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
    (address: Address_findUserAddress) => {
      const mappedAddress = addressAnswerKeys.reduce(
        (acc, k) => ({ ...acc, [k.answerKey]: address[k.addressKey as keyof Address_findUserAddress] }),
        {} as Record<string, string>
      );
      setDynamicData((oldState) => Object.assign({}, oldState, mappedAddress));
    },
    [addressAnswerKeys, setDynamicData]
  );

  if (data?.findUserAddress.length >= 0 && data.findUserAddress.length !== addressList.length && called) {
    setAddressList(
      data.findUserAddress.map((address: Address_findUserAddress, index: number) => {
        const addressLine = address.addressSecondLine
          ? `${address.addressFirstLine}, ${address.addressSecondLine}`
          : address.addressFirstLine;
        return {
          ...address,
          onPress: () => {
            onAddressSelected(address);
            ref?.current?.onClose();
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
      ref={ref}
      {...props}
    />
  );
});
