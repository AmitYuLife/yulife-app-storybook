/**
 * Figma Code Connect — NavigationHeader
 *
 * Maps the NavigationHeader Figma component variants to the React component.
 * File: https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook
 *
 * To publish:
 *   FIGMA_ACCESS_TOKEN=<token> npx figma connect publish
 *
 * To unpublish:
 *   FIGMA_ACCESS_TOKEN=<token> npx figma connect unpublish
 */

import React from "react";
import figma from "@figma/code-connect";
import { NavigationHeader } from "./navigation-header";
import { Icon } from "../../icons/icon";
import type { FC, SVGProps } from "react";
import { HamburgerIcon } from "../../icons/figma-stubs";
import { colors } from "../../tokens";
import { YuCoinValue } from "../yu-coin-value";

type SvgStub = FC<SVGProps<SVGSVGElement>>;

// ─── Shared slot examples ─────────────────────────────────────────────────────

const hamburgerSlot = (
  <Icon svg={HamburgerIcon as SvgStub} size={24} color={colors.textPrimary} accessibilityLabel="Open menu" />
);

const yuCoinBalanceSlot = <YuCoinValue value="123,131" />;

// ─── Variant: Background=Off, Shadow=Off (default / transparent) ──────────────

figma.connect(
  NavigationHeader,
  "https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=10298-936",
  {
    imports: [
      'import { NavigationHeader, YuCoinValue } from "@/components"',
      'import { Icon, HamburgerIcon } from "@/icons"',
      'import { colors } from "@/tokens"',
    ],
    example: () => <NavigationHeader leftSlot={hamburgerSlot} rightSlot={yuCoinBalanceSlot} />,
  }
);

// ─── Variant: Background=On, Shadow=Off ───────────────────────────────────────

figma.connect(
  NavigationHeader,
  "https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=10326-1245",
  {
    imports: [
      'import { NavigationHeader, YuCoinValue } from "@/components"',
      'import { Icon, HamburgerIcon } from "@/icons"',
      'import { colors } from "@/tokens"',
    ],
    example: () => <NavigationHeader background={true} leftSlot={hamburgerSlot} rightSlot={yuCoinBalanceSlot} />,
  }
);

// ─── Variant: Background=On, Shadow=On ────────────────────────────────────────

figma.connect(
  NavigationHeader,
  "https://www.figma.com/design/ERkTigxQV1eQ7jooI8pgQp/YuLife-App-Storybook?node-id=10326-1626",
  {
    imports: [
      'import { NavigationHeader, YuCoinValue } from "@/components"',
      'import { Icon, HamburgerIcon } from "@/icons"',
      'import { colors } from "@/tokens"',
    ],
    example: () => (
      <NavigationHeader background={true} shadow={true} leftSlot={hamburgerSlot} rightSlot={yuCoinBalanceSlot} />
    ),
  }
);
