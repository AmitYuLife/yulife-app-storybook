export default {
  format: {
    date_short: "MM/DD/YYYY",
    date_readable: "MMMM DD, YYYY",
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
        "Check your inbox! If ${email} matches our records, a password recovery email is on way." +
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
    noAccess: {
      heading: "Sorry!",
      subheading: "You are not able to use this app at the moment",
    },
    offline: {
      heading: "You're offline",
      subheading: "Check your internet connection.",
      ctaLabel: "Got it",
    },
    signupReward: {
      heading: "Sign-up bounty\nunlocked!",
      subheading: "Use your YuCoin for vouchers from Amazon, Lululemon, Target and many more!",
      ctaLabel: "Next",
    },
    permissions: {
      title: "Permission settings",
      description: "Status and management of account and system level permissions granted",
      switchToGoogleFit:
        "Samsung Health does not currently sync all the data we need in order to reward you for your activities. To sync mindful minutes, cycling & 3rd party apps, please switch to Google Fit.",
      heading: "Permissions",
      statusUnknown:
        "**Status: Unknown**\nWe can not determine the status of the permission. Probably all is in working order.",
      statusDisconnected:
        "**Status: Disconnected**\nTo reconnect check your phone settings. Please [visit our FAQ](https://faq.yulife.com/en/collections/728876-yulife-app-and-game) for additional help.",
      statusAskPermissions:
        "**Ask for permission**\nTo connect use the “Connect” button. Please [visit our FAQ](https://faq.yulife.com/en/collections/728876-yulife-app-and-game) for additional help.",
      systemSection: {
        header: "System Permission",
        secondaryButton: "System Settings",
      },
      healthSection: {
        iosHeader: "Apple Health permissions",
        androidHeader: "Google Fit permissions",
        samsungHeader: "Samsung Health permissions",
      },
    },
  },
  permissions: {
    android: {
      activityRecognition: {
        title: "Activity recognition",
        requirement: "Required for: Steps, Mindfulness & Cycling",
        description: "Needed by the yulife app to get activity data from your phone.",
      },
      location: {
        title: "Location",
        requirement: "Required for: Cycling",
        description: "Needed by the yulife app to get location data from your phone.",
      },
      fitnessActivityRead: {
        title: "Steps & Mindfulness tracking (Read)",
        requirement: "Requires: Activity recognition",
        description:
          "Needed by the yulife app to read steps & mindful minutes data tracked in your Google Fit account.",
      },
      distanceRead: {
        title: "Cycling tracking",
        requirement: "Requires: Activity recognition, Location",
        description: "Needed by the yulife app to get cycling/biking data tracked in your Google Fit account.",
      },
      samsungStepsCountTrend: {
        title: "Daily steps count trend",
        requirement: "Requires: Physical recognition",
        description: "Needed by the Yulife app to read steps data tracked in your Samsung Health account.",
      },
      samsungStepsCount: {
        title: "Step count",
        requirement: "Requires: Physical recognition",
        description: "Needed by the Yulife app to read steps data tracked in your Samsung Health account.",
      },
      samsungMindful: {
        title: "Mindful minutes (Unsupported)",
        description: "Mindful is not supported by Samsung Health. To get rewarded switch to Google Fit.",
      },
      samsungCycling: {
        title: "Cycling (Unsupported)",
        description: "Cycling is not supported by Samsung Health. To get rewarded switch to Google Fit.",
      },
    },
    ios: {
      motionAndFitness: {
        title: "Motion & Fitness",
        requirement: "Required for: Steps",
        description: "Needed by the yulife app to get activity data from your phone.",
      },
      stepsRead: {
        title: "Steps tracking",
        description: "Needed by the yulife app to read steps data tracked in your Apple Health account.",
      },
      mindfulnessRead: {
        title: "Mindfulness tracking (Read)",
        description: "Needed by the yulife app to read mindful minutes data tracked in your Apple Health account.",
      },
      cyclingRead: {
        title: "Cycling Distance",
        description: "Needed by the yulife app to get cycling/biking data tracked in your Apple Health account.",
      },
      workoutsRead: {
        title: "Workouts",
        description: "Needed by the Yulife app to get workout (e.g. Fiit) data tracked in your Apple Health account.",
      },
    },
  },
};
