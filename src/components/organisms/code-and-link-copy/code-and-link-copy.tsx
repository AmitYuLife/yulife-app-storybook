import { memo, useEffect, useState } from "react";
import { Vibration } from "react-native";
import Clipboard from "@react-native-clipboard/clipboard";
import { Box, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { CopyIcon } from "@atoms/icon/copy-icon";
import { PaperclipIcon } from "@atoms/icon/paperclip-icon";
import { Pressable } from "@molecules";
import { Button } from "@molecules/button";
import Logger from "@services/logging/logger";
import { MixpanelEvent } from "@services/logging/types";
import { REFERRALS_CODE, REFERRALS_CODE_TITLE, REFERRALS_SHARE_CODE_BUTTON } from "@ids";

interface IProps {
  code: string;
  onShare: () => Promise<void>;
  title: string;
  disclaimer?: string;
  buttonText: string;
  analyticsEvent?: {
    name: MixpanelEvent;
    location: string;
  };
}

const CodeAndLinkCopy = ({ code, onShare, title, disclaimer, analyticsEvent, buttonText }: IProps) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) {
      return;
    }

    // Once the code is copied, reset the icon state after 2 seconds
    const timeoutId = setTimeout(() => {
      setIsCopied(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [isCopied]);

  const handleCopy = () => {
    Clipboard.setString(code);
    Vibration.vibrate(100);
    setIsCopied(true);
    if (analyticsEvent) {
      Logger.logMixpanelEvent(analyticsEvent.name, { location: analyticsEvent.location });
    }
  };

  const handleShare = async () => {
    try {
      await onShare();
    } catch (e) {
      Logger.error(e, { location: "CodeAndLinkCopy.handleShare" });
    }
  };

  const copyColor = isCopied ? Colours.event.claimedColor : Colours.inkStrong;

  return (
    <Box
      w="100%"
      py={22}
      ph={20}
      borderWidth={1}
      br={8}
      borderColor={Colours.neutral.n100}
      bg={Colours.neutral.white}
      mt={24}
    >
      <Box mb={18}>
        <TextTemplate type="b1b" textAlign="center" testID={REFERRALS_CODE_TITLE(title)}>
          {title}
        </TextTemplate>
      </Box>
      <Box flexDirection="row" alignItems="center" mb={8} h={36} bg={Colours.neutral.n20} br={30}>
        <Pressable
          enableAnimation={true}
          pressedTranslation={1}
          delay={1000}
          onPress={handleCopy}
          minWidth={0}
          flex={1}
        >
          <Box flexDirection="row" alignItems="center" w="100%" ph={38}>
            <Box flex={1}>
              <TextTemplate
                type="l2b"
                numberOfLines={1}
                color={Colours.inkStrong}
                textAlign="center"
                testID={REFERRALS_CODE(code)}
              >
                {code}
              </TextTemplate>
            </Box>
            <CopyIcon color={copyColor} height={Style.adjust(16)} width={Style.adjust(16)} />
          </Box>
        </Pressable>
        <Box w={130} flexShrink={0} alignSelf="stretch">
          <Button
            onPress={handleShare}
            leftIcon={
              <PaperclipIcon color={Colours.neutral.white} width={Style.adjust(16)} height={Style.adjust(16)} />
            }
            translatedLabel={buttonText}
            testID={REFERRALS_SHARE_CODE_BUTTON}
            size="Fill"
            backgroundColor={Colours.primary.p600}
            textColor={Colours.neutral.white}
            height={Style.adjust(40)}
          />
        </Box>
      </Box>
      {disclaimer ? (
        <Box mt={4}>
          <TextTemplate type="l3" textAlign="center" color={Colours.inkSubtle}>
            {disclaimer}
          </TextTemplate>
        </Box>
      ) : null}
    </Box>
  );
};

export default memo(CodeAndLinkCopy);
