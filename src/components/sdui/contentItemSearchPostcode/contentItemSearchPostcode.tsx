import React, { forwardRef, useState, useImperativeHandle } from "react";
import { ContentItemSearchPostcode as TSearchPostcode } from "@graphql/_core/schema";
import { Image, SecondaryButton } from "@atoms";
import { Colours, Style } from "@styles";
import { SearchAddress, ISearchAddress } from "@molecules";
import { mapServerStyles } from "../_utils/mapServerStyles";

type Props = TSearchPostcode & Omit<ISearchAddress, "onClose">;

export const ContentItemSearchPostcode = forwardRef((props: Props, ref) => {
  const { label, styles, icon, searchInputStyles } = props;
  const [isSearchPostcodeDisplayed, setIsSearchPostcodeDisplayed] = useState<boolean>(false);
  useImperativeHandle(ref, () => ({
    onClose: () => setIsSearchPostcodeDisplayed(false),
  }));

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
