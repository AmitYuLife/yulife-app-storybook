// url=https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=10972-3700
// source=src/components/card/Card.tsx
// component=Card

import figma from "figma";

const instance = figma.selectedInstance;

const elevation = instance.getEnum("Elevation", {
  Off: "Off",
  On: "On",
});

const showOverline = instance.getBoolean("Overline");
let overlineText: string | null = null;
if (showOverline) {
  const headingText = instance.findText("Heading");
  if (headingText && headingText.type === "TEXT") {
    overlineText = headingText.textContent;
  }
}

const contentLayout = instance.findInstance("ContentLayout");
let contentCode;
if (contentLayout && contentLayout.type === "INSTANCE" && contentLayout.hasCodeConnect()) {
  contentCode = contentLayout.executeTemplate().example;
}

export default {
  example: figma.code`
    <Card
      ${elevation !== "Off" ? figma.code`elevation="${elevation}"` : ""}
      ${overlineText ? figma.code`overline="${overlineText}"` : ""}
    >
      ${contentCode}
    </Card>
  `,
  imports: ['import { Card } from "@/components/card"'],
  id: "card",
  metadata: { nestable: true },
};
