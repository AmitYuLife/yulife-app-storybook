export default {
  format: {
    date_short: "DD/MM/YYYY",
    date_readable_short: "DD MMM",
    date_readable: "DD MMM YYYY",
  },
  validator: {
    email: "Please enter a valid email address.",
    password: "Please enter a password.",
  },
  meditation: "Meditation",
  button: {
    close: "Close",
    dismiss: "Dismiss",
    claim: "Claim",
  },
  createChallengeError: "Sorry, there was a problem starting your challenge. \n Please try again!",
  screens: {
    weekly_quests: {
      title: "Weekly quests",
      time_remaining: "Time remaining",
    },
    login: {
      heading: "Welcome!",
      ctaLabel: "Log in",
      help: "Need help logging in?",
      server_location: {
        short: "Company location",
        long: "Please select your company's location",
        heading: "Select your company location",
        description: "Your reward store items will depend on the location where your company is located",
      },
      accessibility: {
        hideKeyboard: "Hide keyboard",
        alertErrorTitle: "Login failed",
        alertErrorDefaultMessage: "Something wrong",
      },
    },
    daily: {
      todayYuCoin: {
        accessibilityLabel: "Today's yucoin",
      },
      streak: {
        accessibilityLabel: "Streak %{currentStreak} out of %{maxStreak} days",
      },
      surge: {
        accessibilityLabel: "%{multiplier} times surge %{time} remaining",
      },
      challengeButton: {
        takeChallenge: {
          accessibilityLabel: "Take a challenge (%{challenges} left today)",
        },
        backToChallenge: {
          accessibilityLabel: "Back to challenge",
        },
      },
      dailyPassive: {
        coins: {
          accessibilityLabel: "%{coins} yucoin earned today",
        },
        steps: {
          accessibilityLabel: "%{steps} steps",
        },
        mindfulness: {
          accessibilityLabel: ", %{mindfulness} mindful minutes",
        },
        cycling: {
          accessibilityLabel: ", %{cycling} cycled",
        },
      },
      panel: {
        title: "Stay tuned!",
        description: "The next event will start soon.",
      },
    },
    inspect: {
      duel: {
        challengeDuel: "Challenge to duel",
        challengeSomebody: "Challenge somebody",
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
    noAccess: {
      heading: "Sorry!",
      subheading: "You are not able to use this app at the moment.",
    },
    offline: {
      heading: "You're offline",
      subheading: "Check your internet connection.",
      ctaLabel: "Got it",
    },
    signupReward: {
      heading: "Sign-up bounty\nunlocked!",
      subheading: "Use your YuCoin for vouchers from Amazon, Asos, M&S, and many more!",
      ctaLabel: "Next",
      ctaAccessibility: "Get started with Yulife",
      subheadingAccessibility: "Use your yucoin for vouchers from Amazon, Asos, M&S, and many more!",
    },
    settings: {
      fitnessTrackers: {
        title:
          "Connect your fitness tracker to get rewarded for additional daily steps. Don’t forget to still keep your phone with you during challenges!",
      },
    },
    infoModal: {
      otherWearables: {
        heading:
          "As long as your wearable connects up to %{platform} we will sync up at the end of each day to reward you for all your steps.",
        ctaLabel: "Got it",
        item: "Other wearables",
      },
    },
    permissions: {
      title: "Activity permissions",
      description: "Status and management of account and system level permissions.",
      infoMessage: "Manage your permissions to get fully rewarded with YuCoin for your activities.",
      switchToGoogleFit:
        "Samsung Health does not currently sync all the data we need in order to reward you for your activities. To sync mindful minutes, cycling & 3rd party apps, please switch to Google Fit.",
      heading: "Permissions",
      statusUnknown:
        "**Status: Unknown**\nWe can not determine the status of the permission. Probably all is in working order.",
      statusDisconnected:
        "**Status: Disconnected**\nTo reconnect check your phone settings. Please [visit our FAQ](https://faq.yulife.com/en/collections/728876-yulife-app-and-game) for additional help.",
      statusAskPermissions:
        "**Permission not connected**\nTo connect use the “Connect” button. Please [visit our FAQ](https://faq.yulife.com/en/collections/728876-yulife-app-and-game) for additional help.",
      systemSection: {
        header: "System Permissions",
        secondaryButton: "System Settings",
      },
      healthSection: {
        iosHeader: "Apple Health Permissions",
        androidHeader: "Google Fit Permissions",
        samsungHeader: "Samsung Health Permissions",
      },
    },
    eventFail: {
      title: "%{event} event has ended",
      multipleEventsTitle: "A couple of your events have ended",
      description: "Hurry up to catch a spot for the next one and win big prizes.",
      cta: "OK",
    },
    eventCompleted: {
      title: "%{event} event finished",
      multipleEventsTitle: "A couple of your events have finished",
      descriptionTitle: "Great job!",
      description: "You collected all milestone rewards. Good job! \n This event will be closed.",
      cta: "Great!",
    },
    collectRewardModal: {
      title: "%{event} event",
      descriptionTitle: "Great job!",
      description: "You have reached the event milestone!\nCongratulations. Claim your rewards",
      cta: "Claim",
    },
    mediaList: {
      differentAppCtaLabel: "Use a different app",
      differentAppSectionLabel: "Or use an app",
      videoDurationRewardLabel: "%{formattedDuration} min • Earn %{reward}",
    },
    challengeProgress: {
      howMeditateWithOtherAppsLabel: "How do I meditate with other apps",
    },
    yumoji_builder: {
      create: {
        button: "Continue",
        title: "Create your Yumoji to step into the Yuniverse",
        link: "I'll do this later",
      },
      edit: {
        title: "Pick a body type",
      },
    },
    eotwChest: {
      title: "You have earned",
      spaceTravelText: "You’re exactly where you’ve been, floating above your world, but it’s not longer alone.",
      travelButton: "Travel",
      beginningButton: "A new beginning",
      claimButton: "Claim rewards",
      openChestButton: "Open the chest",
    },
  },
  permissions: {
    android: {
      activityRecognition: {
        title: "Physical Recognition",
        requirement: "Required for: Steps, Mindfulness & Cycling",
        description: "Needed by the YuLife app to get activity data from your phone.",
      },
      activityRecognitionSamsungHealth: {
        title: "Physical Recognition",
        requirement: "Required for: Steps",
        description: "Needed by the YuLife app to get activity data from your phone.",
      },
      location: {
        title: "Location",
        requirement: "Required for: Cycling",
        description: "Needed by the YuLife app to get activity data from your phone.",
      },
      fitnessActivityRead: {
        title: "Steps",
        requirement: "Requires: Physical Recognition",
        description: "Needed by the YuLife app to read steps data tracked in your Google Fit account.",
      },
      mindfulnessRead: {
        title: "Mindful Minutes",
        requirement: "Requires: Physical Recognition",
        description:
          "Needed by the YuLife app to sync mindful minutes from your meditation sessions to your Google Fit account.",
      },
      distanceRead: {
        title: "Cycling Distance",
        requirement: "Requires: Physical Recognition, Location",
        description: "Needed by the YuLife app to get cycling/biking data tracked in your Google Fit account.",
      },
      workoutsRead: {
        title: "Workouts",
        requirement: "Requires: Physical Recognition",
        description: "Needed by the YuLife app to get workout (e.g. Fiit) data tracked in your Google Fit account.",
      },
      samsungStepsCountTrend: {
        title: "Daily steps count trend",
        requirement: "Requires: Physical recognition",
        description: "Needed by the YuLife app to read steps data tracked in your Samsung Health account.",
      },
      samsungStepsCount: {
        title: "Step count",
        requirement: "Requires: Physical recognition",
        description: "Needed by the YuLife app to read steps data tracked in your Samsung Health account.",
      },
      samsungMindful: {
        title: "Mindful minutes (Unsupported)",
        description: "Meditation is not supported by Samsung Health. To get rewarded switch to Google Fit.",
      },
      samsungCycling: {
        title: "Cycling (Unsupported)",
        description: "Cycling is not supported by Samsung Health. To get rewarded switch to Google Fit.",
      },
    },
    ios: {
      motionAndFitness: {
        title: "Motion & Fitness",
        description: "Required for the YuLife app to reward you for your daily activities.",
      },
      stepsRead: {
        title: "Steps",
        description: "Needed by the YuLife app to read steps data tracked in your Apple Health account.",
      },
      mindfulnessRead: {
        title: "Mindful Minutes",
        description:
          "Needed by the YuLife app to sync mindful minutes from your meditation sessions to your Apple Health account.",
      },
      cyclingRead: {
        title: "Cycling Distance",
        description: "Needed by the YuLife app to get cycling/biking data tracked in your Apple Health account.",
      },
      workoutsRead: {
        title: "Workouts",
        description: "Needed by the YuLife app to get workout (e.g. Fiit) data tracked in your Apple Health account.",
      },
    },
  },
  modals: {
    genericModal: {
      cancelChallenge: {
        heading: "Call it quits?",
        subheading: "Your current progress will be lost but you can retry any time",
        ctaLabel: "Exit challenge",
        ctaLabelSecondary: "Cancel",
      },
      onMeditopiaError: {
        heading: "Uh oh, something’s not quite right.",
        subheading:
          "We couldn’t load the media. Please check your connection and try again. If you continue to see this message reach out to us via chat.",
        ctaLabel: "Retry",
        ctaLabelSecondary: "Quest menu",
      },
      yumoji_builder: {
        heading: "Yu look great!",
        subheading: "Do you want to save these changes?",
        cta_label: "Save changes",
        cta_label_secondary: "Back",
      },
    },
  },
  molecules: {
    coinConfetti: {
      accessibilityLabel: "Plus %{coins} yucoin",
    },
  },
  atoms: {
    textInputPassword: {
      hide: {
        accessibilityLabel: "Hide",
      },
      show: {
        accessibilityLabel: "Show",
      },
    },
  },
  topBar: {
    menu: {
      icon: {
        accessibilityLabel: "Menu",
      },
    },
    totalBank: {
      icon: {
        accessibilityLabel: "%{coins} yucoin to spend",
      },
    },
  },
  navbar: {
    yucoin: {
      accessibilityLabel: "Open yucoin",
      accessibilityTextValue: "1 out of 5",
    },
    quest: {
      accessibilityLabel: "Open quest",
      accessibilityTextValue: "2 out of 5",
    },
    yu: {
      accessibilityLabel: "Open yu screen",
      accessibilityTextValue: "3 out of 5",
    },
    leaderboard: {
      accessibilityLabel: "Open leaderboard",
      accessibilityTextValue: "4 out of 5",
    },
    rewards: {
      accessibilityLabel: "Open rewards",
      accessibilityTextValue: "5 out of 5",
    },
  },
  timeUnits: {
    days: "days",
    day: "day",
    hours: "hours",
    hour: "hour",
    minutes: "minutes",
    minute: "minute",
    seconds: "seconds",
    second: "second",
  },
};
