// url=https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=10970-1088
// source=src/components/card/card-info-content.tsx
// component=CardInfoContent

import figma from "figma";

const instance = figma.selectedInstance;

const leftAsset = instance.getEnum("LeftAsset", {
  ColourIcon: "ColourIcon",
  SmallIllo: "SmallIllo",
  LargeAsset: "LargeAsset",
});

const titleText = instance.findText("Title");
const title = titleText && titleText.type === "TEXT" ? titleText.textContent : "Your title here";

const descriptionText = instance.findText("Subheading Copy");
const description = descriptionText && descriptionText.type === "TEXT" ? descriptionText.textContent : undefined;

const showLeftCol = instance.getBoolean("LeftCol");
const leftAssetInstance = showLeftCol ? instance.findInstance("LeftAsset") : null;
let leftSlotCode;
if (leftAssetInstance && leftAssetInstance.type === "INSTANCE" && leftAssetInstance.hasCodeConnect()) {
  leftSlotCode = leftAssetInstance.executeTemplate().example;
}

const showTitleIcon = instance.getBoolean("TitleIcon");
const titleIconInstance = showTitleIcon ? instance.findInstance("Icon") : null;
let titleIconCode;
if (titleIconInstance && titleIconInstance.type === "INSTANCE" && titleIconInstance.hasCodeConnect()) {
  titleIconCode = titleIconInstance.executeTemplate().example;
}

const showRightCol = instance.getBoolean("RightCol");
const trailingIconInstance = showRightCol ? instance.findInstance("Trailing Icon") : null;
let trailingIconCode;
if (trailingIconInstance && trailingIconInstance.type === "INSTANCE" && trailingIconInstance.hasCodeConnect()) {
  trailingIconCode = trailingIconInstance.executeTemplate().example;
}

export default {
  example: figma.code`
    <CardInfoContent
      leftAsset="${leftAsset}"
      ${leftSlotCode ? figma.code`leftSlot={${leftSlotCode}}` : ""}
      title="${title}"
      ${description ? figma.code`description="${description}"` : ""}
      ${titleIconCode ? figma.code`titleIcon={${titleIconCode}}` : ""}
      ${trailingIconCode ? figma.code`rightSlot={${trailingIconCode}}` : ""}
    />
  `,
  imports: ['import { CardInfoContent } from "@/components/card"'],
  id: "card-info-content",
  metadata: { nestable: true },
};
