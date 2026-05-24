import type { Meta, StoryObj } from "@storybook/react-webpack5";
import EmailSentScreen from "@screens/reset-password/email-sent.screen";
import { ROUTES } from "@navigation/constants";
import { createScreenMeta } from "../_utils/screen-meta";
import { logAction } from "../_utils/mock-actions";

const meta = {
  title: "Screens/Auth/EmailSent",
  ...createScreenMeta({
    title: "Auth/EmailSent",
    description: [
      "Confirmation screen shown after a password reset email is sent successfully.",
      "",
      "**When to use:** Navigated to after `ResetPassword` submission succeeds.",
      "**Commonly used with:** `CentredScreen`, primary CTA to open email app.",
    ].join("\n"),
    component: EmailSentScreen,
    route: ROUTES.emailSent,
    screenPath: "src/components/screens/reset-password/email-sent.screen.tsx",
  }),
  argTypes: {
    email: { control: "text", description: "Email address shown in the confirmation copy." },
    onCtaPress: { action: "cta", description: "Primary CTA — typically opens the email app." },
    onSecondaryCtaPress: { action: "back", description: "Secondary link — returns to login." },
  },
} satisfies Meta<typeof EmailSentScreen>;

export default meta;
type Story = StoryObj<typeof EmailSentScreen>;

const baseArgs = {
  email: "alex.jones@acme.co.uk",
  onCtaPress: logAction("cta"),
  onSecondaryCtaPress: logAction("back"),
};

export const Default: Story = { args: baseArgs };

export const Playground: Story = { args: baseArgs };
