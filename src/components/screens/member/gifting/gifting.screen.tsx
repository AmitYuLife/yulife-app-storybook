import React, { memo, useCallback, useState } from "react";
import { GenericHeadingPad, TopBarAbsolute } from "@organisms";
import { Colours, Style } from "@styles";
import { ScrollView, StyleSheet, View } from "react-native";
import { Box, Image, RawImage, TextTemplate } from "@atoms";
import { Button, CheckBox, Yumoji } from "@components/molecules";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { t } from "@locale";
import { FadeOut, FadeIn, BounceIn } from "react-native-reanimated";
import { addCommasToNumber } from "@utils";

export interface GiftingProps {
  isSubmitting: boolean;
  description: string;
  onClose: () => void;
  yuCoinOptions: number[];
  messages: { id: string; label: string }[];
  yumoji: string;
  onSubmit: (amount: number, messageCode: string) => Promise<void>;
  sendsRemainingToday: number;
}

const AVATAR_WIDTH = Style.adjust(160) * 0.95;
const AVATAR_HEIGHT = Style.adjust(328) * 0.95;
const EMPTY_AVATAR_WIDTH = Style.adjust(111);
const EMPTY_AVATAR_HEIGHT = Style.adjust(298);

const GiftingScreen = ({
  onClose,
  onSubmit,
  description,
  yuCoinOptions,
  messages,
  yumoji,
  isSubmitting,
  sendsRemainingToday,
}: GiftingProps) => {
  const [isFirstStep, setIsFirstStep] = useState(true);
  const [amount, setAmount] = useState<number>(null);
  const [messageCode, setMessageCode] = useState<string>(null);

  const handleLeftIconPress = useCallback(() => {
    if (!isFirstStep) {
      return setIsFirstStep(true);
    }

    onClose();
  }, [isFirstStep, setIsFirstStep, onClose]);

  const handleSubmit = useCallback(() => {
    if (isFirstStep) {
      return setIsFirstStep(false);
    }

    onSubmit(amount, messageCode);
  }, [isFirstStep, amount, messageCode, setIsFirstStep, onSubmit]);

  return (
    <Box flex={1}>
      <View style={StyleSheet.absoluteFill}>
        <Image
          resizeMode="contain"
          source={require("@assets/duels/background.png")}
          style={styles.backgroundImage}
          width={Style.DEVICE_WIDTH}
          height={Style.DEVICE_HEIGHT}
        />
      </View>
      <GenericHeadingPad />
      <Box p={16} flex={1}>
        <Box center={true} flexDirection="row" mb={16} entering={BounceIn.delay(200).duration(300)}>
          <Box
            br={1000}
            alignItems="center"
            width={Style.adjust(160)}
            height={Style.adjust(160)}
            overflow="hidden"
            bg="#dea4e5"
          >
            <Yumoji
              width={AVATAR_WIDTH}
              height={AVATAR_HEIGHT}
              emptyWidth={EMPTY_AVATAR_WIDTH}
              emptyHeight={EMPTY_AVATAR_HEIGHT}
              uri={yumoji}
            />
            <RawImage source={require("@assets/duels/yucoin.png")} style={styles.coinFrame} />
          </Box>
        </Box>
        <Box center={true}>
          <TextTemplate type="h2">{description}</TextTemplate>
        </Box>

        {sendsRemainingToday > 0 ? (
          <Box mt={24} flex={1}>
            <Box mb={16}>
              <TextTemplate type="b2" textAlign="center">
                {t(isFirstStep ? "screens.gifting.how_much_yucoin" : "screens.gifting.what_message")}
              </TextTemplate>
            </Box>
            <ScrollView showsVerticalScrollIndicator={false}>
              {isFirstStep
                ? yuCoinOptions.map((item) => (
                    <GiftingCheckBox
                      key={item}
                      checked={amount === item}
                      value={item.toString()}
                      label={t("yu_coin.amount", { amount: addCommasToNumber(item) })}
                      onChange={() => setAmount(item)}
                    />
                  ))
                : messages.map(({ id, label }) => (
                    <GiftingCheckBox
                      key={id}
                      checked={id === messageCode}
                      value={id}
                      label={label}
                      onChange={() => setMessageCode(id)}
                    />
                  ))}
            </ScrollView>
          </Box>
        ) : (
          <Box mb={16}>
            <TextTemplate type="b2" textAlign="center">
              {t(isFirstStep ? "screens.gifting.how_much_yucoin" : "screens.gifting.what_message")}
            </TextTemplate>
          </Box>
        )}

        <Box mb={Style.adjust(66)} />
      </Box>

      <Box position="absolute" bottom={32} width="100%">
        <Button
          isLoading={isSubmitting}
          disabled={isSubmitting || (isFirstStep ? !amount : !messageCode)}
          size="Fill"
          translationKey={isFirstStep ? "labels.cta.next" : "labels.cta.submit"}
          wrapperStyle={styles.padding}
          onPress={handleSubmit}
        />
      </Box>
      <TopBarAbsolute leftIcon={LeftIcon.BACK} onPressLeftIcon={handleLeftIconPress} rightIcon="Coins" />
    </Box>
  );
};

export default memo(GiftingScreen);

const styles = StyleSheet.create({
  coinFrame: {
    width: Style.adjust(160),
    height: Style.adjust(160),
    position: "absolute",
    top: 0,
    overflow: "hidden",
  },
  padding: {
    paddingHorizontal: Style.adjust(16),
  },
  radioChoice: {
    paddingRight: Style.adjust(24),
  },
  backgroundImage: {
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
  },
});

type GiftingCheckBoxProps = {
  checked: boolean;
  label: string;
  value: string;
  onChange: () => void;
};

const GiftingCheckBox = ({ value, checked, label, onChange }: GiftingCheckBoxProps) => {
  return (
    <Box
      bg={Colours.neutral.white}
      p={8}
      br={8}
      my={8}
      entering={FadeIn.delay(200).duration(300)}
      exiting={FadeOut.duration(300)}
    >
      <CheckBox checked={checked} value={value} label={label} onChange={onChange} textStyles={styles.radioChoice} />
    </Box>
  );
};
