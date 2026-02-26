import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemWrapper } from "./contentItemWrapper";

type Story = StoryObj<typeof ContentItemWrapper>;

const meta: Meta<typeof ContentItemWrapper> = {
  component: ContentItemWrapper,
  title: "Design System/SDUI/ContentItemWrapper",
  tags: ["autodocs"],
  parameters: {},
  args: {
    absolute: null,
    children:
      '[{"__typename":"ContentItemImage","id":"image-2","wrapperStyles":[{"property":"maxWidth","value":"18"}],"styles":[{"property":"width","value":"18"},{"property":"height","value":"14"},{"property":"marginTop","value":"5"}],"image":{"id":"https://yulife-develop.imgix.net/app-system/icons/default/pink-check.svg?ixlib=js-3.2.1&fm=png&w=54&s=8c17ac8d7a3595055edcd35f7daba1ab"}},{"__typename":"ContentItemText","id":"what-you-get-text-2","textAlign":"left","text":"Get instant 250 Bonus YuCoin","textType":"b2b","colour":"#FFFFFF","styles":[{"property":"marginLeft","value":"11"},{"property":"width","value":"260"}]}]',
    dynamicStyleKey: null,
    localDispatchActions: null,
    localDispatchActionsOnMount: null,
    onPress: null,
    pointerEvents: null,
    scrollViewProps: null,
    styles: [
      { property: "flexDirection", value: "row" },
      { property: "marginBottom", value: "14" },
      { property: "alignSelf", value: "center" },
    ],
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
