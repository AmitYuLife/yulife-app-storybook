import type { Meta, StoryObj } from "@storybook/react-webpack5";
import LoginEmailScreen from "@screens/login/login-email/login-email.screen";
import { ROUTES } from "@navigation/constants";
import { createScreenMeta } from "../_utils/screen-meta";
import { logAction } from "../_utils/mock-actions";
import { mockCaptcha } from "../_utils/mock-captcha";

const meta = {
  title: "Screens/Auth/LoginEmail",
  ...createScreenMeta({
    title: "Auth/LoginEmail",
    description: [
      "Email entry step in the login flow before password or magic-link confirmation.",
      "",
      "**When to use:** Unauthenticated users entering their work email.",
      "**Commonly used with:** `LoginFormWrapper`, `TextInput`, optional `CaptchaInput`.",
    ].join("\n"),
    component: LoginEmailScreen,
    route: ROUTES.loginEmail,
    screenPath: "src/components/screens/login/login-email/login-email.screen.tsx",
  }),
  argTypes: {
    email: {
      control: "text",
      description: "Current email field value. Required to enable submit.",
    },
    emailError: {
      control: "text",
      description: "Validation message shown after submit when email is invalid.",
    },
    magicLinkError: {
      control: "text",
      description: "Server-side magic link error message below the CTA.",
    },
    isSubmitting: {
      control: "boolean",
      description: "Shows loading state on the primary button and disables input.",
    },
    onPressBack: {
      action: "back",
      description: "Return to the previous login step.",
    },
    onPressSubmit: {
      action: "submit",
      description: "Submit email for password or magic-link flow.",
    },
    onEmailChange: {
      action: "email-change",
      description: "Controlled email field update.",
    },
  },
} satisfies Meta<typeof LoginEmailScreen>;

export default meta;
type Story = StoryObj<typeof LoginEmailScreen>;

const baseArgs = {
  email: "alex.jones@acme.co.uk",
  emailError: "",
  magicLinkError: "",
  isSubmitting: false,
  onPressBack: logAction("back"),
  onPressSubmit: logAction("submit"),
  onEmailChange: logAction("email-change"),
  captcha: mockCaptcha(),
};

export const Default: Story = {
  args: baseArgs,
};

export const WithEmailError: Story = {
  args: {
    ...baseArgs,
    email: "not-an-email",
    emailError: "Enter a valid email address",
  },
};

export const Submitting: Story = {
  args: {
    ...baseArgs,
    isSubmitting: true,
  },
};

export const WithMagicLinkError: Story = {
  args: {
    ...baseArgs,
    magicLinkError: "We couldn't send a magic link. Try again or use your password.",
  },
};

export const Playground: Story = {
  args: baseArgs,
};
