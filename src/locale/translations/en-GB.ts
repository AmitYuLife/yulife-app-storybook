export default {
  format: {
    date_short: "DD/MM/YYYY",
  },
  validator: {
    email: "Please enter a valid email address.",
    password: "Please enter a password.",
  },
  screens: {
    login: {
      heading: "Welcome!",
      ctaLabel: "Log in",
      help: "Need help logging in?",
      serverLocation: {
        short: "Company location",
        long: "Please select your company's location",
      },
    },
    resetPasswordSubmitted: {
      heading: "Email sent",
      subheading:
        "Check your inbox! If %{email} matches our records, a password recovery email is on way." +
        " If you do not receive an email, please contact support@yulife.com.",
      ctaLabel: "Return to login",
      ctaLabelSecondary: "Back",
    },
    resetPassword: {
      heading: "Need help?",
      subheading:
        "No problem! Enter your account email and we will send a magic link" +
        " straight to your inbox, no password necessary!",
      ctaLabel: "Email me a magic link",
      ctaLabelSecondary: "Back",
      submitting: "Submitting ...",
    },
  },
};
