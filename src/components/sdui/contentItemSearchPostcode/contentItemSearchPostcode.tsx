import React, { memo, Dispatch, SetStateAction } from "react";
import { ContentItemSearchPostcodeFragment as TSearchPostcode } from "@graphql/__generated";
import { Image } from "@atoms";
import { SecondaryButton } from "@molecules";
import { Colours, Style } from "@styles";
import { SearchAddress, ISearchAddress } from "@molecules";
import { mapServerStyles } from "../_utils/mapServerStyles";

type Props = TSearchPostcode &
  Omit<ISearchAddress, "onClose"> & {
    isSearchPostcodeDisplayed: boolean;
    setIsSearchPostcodeDisplayed: Dispatch<SetStateAction<boolean>>;
  };

export const ContentItemSearchPostcode = memo((props: Props) => {
  const { id, label, styles, icon, searchInputStyles, isSearchPostcodeDisplayed, setIsSearchPostcodeDisplayed } = props;

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
        icon ? (
          <Image width={Style.adjust(16)} height={Style.adjust(16)} resizeMode="contain" source={{ uri: icon.uri }} />
        ) : null
      }
      wrapperStyle={mapServerStyles(styles)}
      testID={id}
      translatedLabel={label}
      onPress={() => setIsSearchPostcodeDisplayed(true)}
      borderColor={Colours.neutral.black}
      textColor={Colours.neutral.black}
    />
  );
});
