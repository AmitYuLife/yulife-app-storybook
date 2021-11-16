import React, { memo, Dispatch, SetStateAction } from "react";
import { ContentItemSearchPostcode as TSearchPostcode } from "@graphql/_core/schema";
import { Image, SecondaryButton } from "@atoms";
import { Colours, Style } from "@styles";
import { SearchAddress, ISearchAddress } from "@molecules";
import { mapServerStyles } from "../_utils/mapServerStyles";

type Props = TSearchPostcode &
  Omit<ISearchAddress, "onClose"> & {
    isSearchPostcodeDisplayed: boolean;
    setIsSearchPostcodeDisplayed: Dispatch<SetStateAction<boolean>>;
  };

export const ContentItemSearchPostcode = memo((props: Props) => {
  const { label, styles, icon, searchInputStyles, isSearchPostcodeDisplayed, setIsSearchPostcodeDisplayed } = props;

  if (isSearchPostcodeDisplayed) {
    return (
      <SearchAddress
        {...props}
        searchInputStyles={mapServerStyles(searchInputStyles)}
        onClose={() => setIsSearchPostcodeDisplayed(false)}
      />
    );
  }

  return (
    <SecondaryButton
      leftIcon={
        icon && (
          <Image width={Style.adjust(16)} height={Style.adjust(16)} resizeMode="contain" source={{ uri: icon.uri }} />
        )
      }
      wrapperStyle={mapServerStyles(styles)}
      label={label}
      onPress={() => setIsSearchPostcodeDisplayed(true)}
      borderColor={Colours.neutral.black}
      textColor={Colours.neutral.black}
    />
  );
});
