import type { Meta, StoryObj } from "@storybook/react-webpack5";
import ResetPasswordScreen from "@screens/reset-password/reset-password.screen";
import { ROUTES } from "@navigation/constants";
import { createScreenMeta } from "../_utils/screen-meta";
import { logAction } from "../_utils/mock-actions";
import { mockCaptcha } from "../_utils/mock-captcha";

const meta = {
  title: "Screens/Auth/ResetPassword",
  ...createScreenMeta({
    title: "Auth/ResetPassword",
    description: [
      "Forgotten password flow — user enters their work email to receive a reset link.",
      "",
      "**When to use:** Opened from the 'Forgot password' link on `LoginPassword`.",
      "**Commonly used with:** `CentredScreen`, `TextInput`, `CaptchaInput`.",
    ].join("\n"),
    component: ResetPasswordScreen,
    route: ROUTES.resetPassword,
    screenPath: "src/components/screens/reset-password/reset-password.screen.tsx",
  }),
  argTypes: {
    email: { control: "text", description: "Email address to send the reset link to." },
    emailError: { control: "text", description: "Client-side email validation error." },
    error: { control: "text", description: "Server-side error message below the form." },
    disableSubmit: { control: "boolean", description: "Disables the submit button regardless of email validity." },
    isSubmitting: { control: "boolean", description: "Shows loading state on the submit button." },
    onCancelPress: { action: "cancel", description: "Returns to login." },
    onEmailChange: { action: "email-change", description: "Controlled email field update." },
    onSubmitPress: { action: "submit", description: "Submits the reset password request." },
    captcha: { control: false, description: "Captcha hook result. Use `mockCaptcha()` in stories." },
  },
} satisfies Meta<typeof ResetPasswordScreen>;

export default meta;
type Story = StoryObj<typeof ResetPasswordScreen>;

const baseArgs = {
  email: "alex.jones@acme.co.uk",
  emailError: "",
  error: "",
  disableSubmit: false,
  isSubmitting: false,
  onCancelPress: logAction("cancel"),
  onEmailChange: logAction("email-change"),
  onSubmitPress: logAction("submit"),
  captcha: mockCaptcha(),
};

export const Default: Story = { args: baseArgs };

export const EmailError: Story = {
  args: { ...baseArgs, email: "not-an-email", emailError: "Enter a valid email address" },
};

export const ServerError: Story = {
  args: { ...baseArgs, error: "We couldn't send a reset link. Try again in a few minutes." },
};

export const Submitting: Story = {
  args: { ...baseArgs, isSubmitting: true },
};

export const DisabledSubmit: Story = {
  args: { ...baseArgs, disableSubmit: true },
};

export const Playground: Story = { args: baseArgs };
