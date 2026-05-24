import type { Meta, StoryObj } from "@storybook/react-webpack5";
import LoginConfirmScreen from "@screens/login/login-confirm/login-confirm.screen";
import { ROUTES } from "@navigation/constants";
import { createScreenMeta } from "../_utils/screen-meta";
import { logAction } from "../_utils/mock-actions";
import { mockCaptcha } from "../_utils/mock-captcha";

const meta = {
  title: "Screens/Auth/LoginConfirm",
  ...createScreenMeta({
    title: "Auth/LoginConfirm",
    description: [
      "Magic-link or OTP confirmation step after email submission. User checks their inbox or enters a short code.",
      "",
      "**When to use:** After `LoginEmail` when magic-link login is enabled.",
      "**Commonly used with:** `LoginFormWrapper`, `ShortCodeInput`, `CaptchaInput`.",
    ].join("\n"),
    component: LoginConfirmScreen,
    route: ROUTES.loginConfirm,
    screenPath: "src/components/screens/login/login-confirm/login-confirm.screen.tsx",
  }),
  argTypes: {
    email: { control: "text", description: "Email address shown in the confirmation copy." },
    showLoginWithPassword: {
      control: "boolean",
      description: "When true, shows a link to switch to password login.",
    },
    isResending: { control: "boolean", description: "Loading state on the resend magic link button." },
    isRedeemingOtp: { control: "boolean", description: "Loading state while redeeming an OTP from a deep link." },
    isSubmittingShortCode: { control: "boolean", description: "Loading state on short-code submit." },
    shortCodeLength: {
      control: "number",
      description: "Number of OTP digits. Null hides the short-code input (magic-link-only flow).",
    },
    shortCode: { control: "text", description: "Current short-code field value." },
    onChangeShortCode: { action: "short-code-change", description: "Controlled short-code update." },
    onPressBack: { action: "back", description: "Returns to email entry." },
    onPressLoginWithPassword: { action: "login-with-password", description: "Navigates to password login." },
    onPressResend: { action: "resend", description: "Resends the magic link email." },
    onSubmitShortCode: { action: "submit-short-code", description: "Submits the entered OTP." },
    captcha: { control: false, description: "Captcha hook result from `useCaptcha`. Use `mockCaptcha()` in stories." },
    setHasOpenedEmailApp: { action: "opened-email-app", description: "Called when user taps open email app." },
  },
} satisfies Meta<typeof LoginConfirmScreen>;

export default meta;
type Story = StoryObj<typeof LoginConfirmScreen>;

const baseArgs = {
  email: "alex.jones@acme.co.uk",
  showLoginWithPassword: true,
  isResending: false,
  isRedeemingOtp: false,
  isSubmittingShortCode: false,
  shortCodeLength: null as number | null,
  shortCode: "",
  onChangeShortCode: logAction("short-code-change"),
  onPressBack: logAction("back"),
  onPressLoginWithPassword: logAction("login-with-password"),
  onPressResend: logAction("resend"),
  onSubmitShortCode: logAction("submit-short-code"),
  captcha: mockCaptcha(),
  setHasOpenedEmailApp: logAction("opened-email-app"),
};

export const MagicLink: Story = { args: baseArgs };

export const ShortCode: Story = {
  args: { ...baseArgs, shortCodeLength: 6, shortCode: "123" },
};

export const ShortCodeSubmitting: Story = {
  args: { ...baseArgs, shortCodeLength: 6, shortCode: "123456", isSubmittingShortCode: true },
};

export const ResendCooldown: Story = {
  args: { ...baseArgs, isResending: true },
};

export const RedeemingOtp: Story = {
  args: { ...baseArgs, isRedeemingOtp: true },
};

export const WithLoginWithPassword: Story = {
  args: { ...baseArgs, showLoginWithPassword: true },
};

export const Playground: Story = { args: baseArgs };
