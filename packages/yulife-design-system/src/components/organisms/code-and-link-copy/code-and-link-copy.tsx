import { useState } from "react";
import { Box } from "../../box";
import { Text } from "../../text";
import { Button } from "../../button";
import { Colours } from "../../../tokens/colours";

export interface ICodeAndLinkCopyProps {
  title: string;
  code: string;
  buttonText: string;
  disclaimer?: string;
  onShare: () => Promise<void> | void;
}

export const CodeAndLinkCopy = ({ title, code, buttonText, disclaimer, onShare }: ICodeAndLinkCopyProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      // clipboard not available
    }
  };

  return (
    <Box flexDirection="column" gap={12} p={16} br={12} borderWidth={1} borderColor={Colours.neutral.n150}>
      <Text type="b2b" color={Colours.neutral.n900} align="center">
        {title}
      </Text>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        ph={16}
        pv={10}
        br={12}
        bg={Colours.neutral.n20}
        borderWidth={1}
        borderColor={Colours.neutral.n150}
      >
        <Text type="b1b" color={Colours.neutral.n900} style={{ letterSpacing: 4 }}>
          {code}
        </Text>
        <button
          onClick={handleCopy}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 4,
            color: isCopied ? Colours.status.su400 : Colours.primary.p600,
            fontWeight: 600,
            fontSize: 13,
          }}
        >
          {isCopied ? "✓ Copied" : "Copy"}
        </button>
      </Box>
      {disclaimer ? (
        <Text type="l1" color={Colours.neutral.n600} align="center">
          {disclaimer}
        </Text>
      ) : null}
      <Button label={buttonText} onClick={onShare as any} />
    </Box>
  );
};
