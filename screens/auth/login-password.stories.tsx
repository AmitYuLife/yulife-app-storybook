import type { Meta, StoryObj } from "@storybook/react-webpack5";
import LoginPasswordScreen from "@screens/login/login-password/login-password.screen";
import { ROUTES } from "@navigation/constants";
import { REGION } from "@locale";
import { createScreenMeta } from "../_utils/screen-meta";
import { logAction } from "../_utils/mock-actions";

const meta = {
  title: "Screens/Auth/LoginPassword",
  ...createScreenMeta({
    title: "Auth/LoginPassword",
    description: [
      "Password entry step after the user submits their email. Also handles multi-region server selection when login returns multiple regions.",
      "",
      "**When to use:** User chose password login from `LoginEmail` or `LoginConfirm`.",
      "**Commonly used with:** `LoginFormWrapper`, `TextInputPassword`, `ServerList`.",
    ].join("\n"),
    component: LoginPasswordScreen,
    route: ROUTES.loginPassword,
    screenPath: "src/components/screens/login/login-password/login-password.screen.tsx",
  }),
  argTypes: {
    password: { control: "text", description: "Current password field value." },
    validationError: { control: "text", description: "Client-side validation error shown below the field." },
    loginError: { control: "text", description: "Server-side login failure message." },
    isSubmitting: { control: "boolean", description: "Disables input and shows loading on the submit button." },
    onPressBack: { action: "back", description: "Returns to the previous login step." },
    onPressSubmit: { action: "submit", description: "Submits the password for authentication." },
    onPasswordChange: { action: "password-change", description: "Controlled password field update." },
    regionSelect: {
      control: false,
      description:
        "When truthy, replaces the password form with `ServerList` for region selection. Omit (undefined) for the normal password flow.",
    },
  },
} satisfies Meta<typeof LoginPasswordScreen>;

export default meta;
type Story = StoryObj<typeof LoginPasswordScreen>;

const baseArgs = {
  password: "",
  validationError: "",
  loginError: "",
  isSubmitting: false,
  onPressBack: logAction("back"),
  onPressSubmit: logAction("submit"),
  onPasswordChange: logAction("password-change"),

  regionSelect: undefined as any,
};

export const Default: Story = { args: baseArgs };

export const WithPassword: Story = {
  args: { ...baseArgs, password: "••••••••" },
};

export const ValidationError: Story = {
  args: { ...baseArgs, password: "short", validationError: "Password must be at least 8 characters" },
};

export const LoginError: Story = {
  args: { ...baseArgs, password: "wrong-password", loginError: "Incorrect email or password. Try again." },
};

export const Submitting: Story = {
  args: { ...baseArgs, password: "correct-password", isSubmitting: true },
};

export const RegionSelect: Story = {
  args: {
    ...baseArgs,
    regionSelect: {
      restrictTo: ["UK", "US"] as REGION[],
      onSelect: logAction("select-region"),
    },
  },
};

export const Playground: Story = { args: baseArgs };
