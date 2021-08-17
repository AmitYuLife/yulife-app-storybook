import React from "react";
import { Platform, View } from "react-native";
import {
  GetRewardItemDetails_getRewardItemDetails_content as ItemContent,
  GetRewardItemDetails_getRewardItemDetails_content_ContentItemForm_elements_ContentItemFormSubmitButton as ContentItemFormSubmitButton,
} from "@graphql/_core/schema";
import { Image, TertiaryButton } from "@atoms";
import { ContentItemForm, HeadingAndCopy } from "@molecules";
import styles from "../reward-details.screen.styles";
import { TapToCopy } from "@organisms";
import { MORE_INFO_BUTTON } from "@ids";
import { BUTTON_ICON } from "@atoms/button/tertiary-button/tertiary-button.helpers";
import { Style } from "@styles";
import { IElement } from "@components/molecules/content-item-form/content-item-form";

enum Programmes {
  aerLingus = "aerclub",
  vueling = "vueling club",
  meridiana = "meridiana club",
  britishAirways = "the british airways executive club",
}

type ICustomValidation = Record<string, Record<string, string>>;

const IMAGE_WIDTH = Style.DEVICE_WIDTH - 2 * Style.adjust(24);
export const getItemContent = (
  itemContent: ItemContent,
  onSubmit: (form: any) => void,
  onContentItemButtonPress: (item: any) => void,
  isLoading: boolean
) => {
  const customValidation = ({ loyaltyProgramme, accountNumber, button, initialValidation }: ICustomValidation) => {
    const programme = (loyaltyProgramme?.value || "").toLowerCase();
    const accountNumberValue = accountNumber?.value?.replace(/\s+/g, "") || "";
    const aerclubStartNumber = "308147";
    const isNumber = /^\d+$/.test(accountNumberValue);

    if (button.value === "Not enough YuCoin") {
      return { button: { error: button.value } };
    }

    if (programme === Programmes.aerLingus || programme === Programmes.vueling) {
      if (!accountNumberValue.startsWith(aerclubStartNumber) || accountNumberValue.length !== 16 || !isNumber) {
        return {
          accountNumber: {
            value: accountNumberValue,
            error: "Please enter a valid account number",
          },
        };
      }
    }

    if (programme === Programmes.britishAirways || programme === Programmes.meridiana) {
      if (accountNumberValue.length !== 8 || !isNumber) {
        return {
          accountNumber: {
            value: accountNumberValue,
            error: "Please enter a valid account number",
          },
        };
      }
    }

    if (!programme && !initialValidation) {
      return { accountNumber: { error: "You must select a loyalty programme", value: accountNumberValue } };
    }
  };

  switch (itemContent.__typename) {
    case "ContentItemImage":
      return (
        <View style={styles.image}>
          <Image width={IMAGE_WIDTH} source={itemContent?.image} />
        </View>
      );
    case "ContentItemMarkdown":
      return <HeadingAndCopy title={itemContent?.title} markdown={itemContent?.parsedMarkdown} />;
    case "ContentItemBox":
      return (
        <>
          {!itemContent.parsedMarkdown ? null : (
            <TapToCopy
              markdown={true}
              heading={itemContent?.title}
              text={itemContent?.parsedMarkdown}
              canCopy={itemContent?.canCopy}
              markdownStyle={markdownStyle}
            />
          )}
        </>
      );
    case "ContentItemButton": {
      return (
        <View style={styles.contentItemButtonWrapper} testID={MORE_INFO_BUTTON(itemContent?.label)}>
          <TertiaryButton
            size={"Fill"}
            label={itemContent?.label}
            onPress={() => onContentItemButtonPress(itemContent)}
            height={Style.adjust(60)}
            iconUri={itemContent?.icon?.uri}
            rightIcon={BUTTON_ICON.ARROW_RIGHT}
          />
        </View>
      );
    }

    case "ContentItemForm": {
      const submitButton = itemContent.elements.filter(
        (element) => element.__typename === "ContentItemFormSubmitButton"
      )[0] as ContentItemFormSubmitButton;

      return (
        <View style={styles.form}>
          <ContentItemForm
            elements={itemContent.elements as IElement[]}
            onSubmit={onSubmit}
            isLoading={isLoading}
            customValidation={(props: ICustomValidation) =>
              customValidation({ ...props, button: { value: submitButton.label } })
            }
          />
        </View>
      );
    }
  }
};

const markdownStyle = {
  imageWrapper: {
    alignItems: "flex-end",
    width: Style.adjust(40),
    height: Style.adjust(6),
  },
  image: {
    width: Style.adjust(24),
    height: Style.adjust(24),
    position: "absolute",
    bottom: Platform.select({
      ios: Style.adjust(-18),
      android: Style.adjust(-7),
    }),
  },
};
