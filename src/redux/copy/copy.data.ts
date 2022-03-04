/* tslint:disable:max-line-length */
export default {
  login: {
    heading: "Welcome!",
    subheading: "Let's begin the journey of making you the best of yu!",
    ctaLabel: "log in",
    ctaLabelSecondary: "sign up",
  },
  offline: {
    heading: "you're offline",
    subheading: "Check your internet connection.",
    ctaLabel: "try again",
  },
  noAccess: {
    heading: "sorry!",
    subheading: "You are not able to use this app at the moment.",
  },
  resetPassword: {
    // should be deleted after it will be removed from server-side(required for 1.9 compatibility)
    heading: "reset password",
    ctaLabel: "back",
  },
  needHelpLoggingIn: {
    heading: "need help?",
    subheading:
      "No problem! Enter your account email and we will send a magic link" +
      " straight to your inbox, no password necessary!",
    ctaLabel: "email me a magic link",
    ctaLabelSecondary: "back",
  },
  emailSent: {
    heading: "email sent",
    subheading:
      "Check your inbox! If ${email} matches our records, a password recovery email is on way." +
      " If you do not receive an email, please contact support@yulife.com",
    ctaLabel: "return to login",
    ctaLabelSecondary: "back",
  },
  signupReward: {
    heading: "sign up bonus",
    subheading:
      "Here’s 200 extra yucoin just for being you (and for signing up to yulife!). You can exchange your yucoin for air miles and gift cards from Amazon, ASOS, Nike and more!",
    ctaLabel: "next",
  },
  leaderboards: {
    heading: "company leaderboard",
    subheading: "last 30 days",
    noLeaderBoard: {
      heading: "no leaderboards!",
      subheading: "Sorry. There are no leaderboards you belong to.",
      ctaLabel: "back",
    },
    turnBoardOn: {
      heading: "join this leaderboard?",
      subheading:
        "This will let us share details about your activity with other members on this leaderboard. If you change your mind, you can opt out at any point in settings. Ready to compete?",
      ctaLabel: "yes please!",
      ctaLabelSecondary: "no thanks",
    },
    turnBoardOff: {
      ctaLabel: "keep it on!",
      ctaLabelSecondary: "turn it off",
      heading: "turn it off?",
      subheading: "This means you won’t be able to access this leaderboard.",
    },
    invite: {
      headingBeforeName: "join",
      headingAfterName: "leaderboard",
      subheadingBeforeName: "by accepting the invite you will share your steps and yucoin with other members of",
      subheadingAfterName: "leaderboard and be able to see their progress too.",
      ctaLabel: "accept invite",
      ctaLabelSecondary: "decline invite",
    },
  },
  activityHistoryLevels: {
    headerLeft: "date",
    headerLevel: "level",
    headerMid: "activity & progress",
    headerRight: "yucoin",
    heading: "activity history",
  },
  welcomeScreen: {
    blurb: "Let's begin the journey of making you the best of yu!",
    heading: "welcome!",
    logInCta: "log in",
    signUpCta: "sign up",
  },
  dailyStepsFitKitAuthorise: {
    permission:
      "We’d like to collect your health and personal data to track your activity, give you rewards and a personalised experience. You'll be able to adjust what data we receive in settings.",
    permissionCta: "yes, let’s connect",
  },
  purchases: {
    empty: {
      heading: "It’s empty!",
      subheading: "Buy a voucher and it will appear here",
      ctaLabel: "check rewards",
    },
    lockedReward: {
      ctaLabel: "back to rewards",
      heading: "update in progress",
      subheading: "we are updating your ${rewardName} rewards experience, check back soon!",
    },
    voucherNotAvailable: {
      ctaLabel: "check other rewards",
      heading: "the voucher is not currently available",
      subheading: "Please come back later.",
    },
    offline: {
      ctaLabel: "got it",
      heading: "you're offline",
      subheading: "check your internet connection",
    },
    notEnoughCoins: {
      ctaLabel: "got it",
      heading: "not enough coin",
      subheading: "Earn more and come back later!",
    },
    aviosConfirmed: {
      title: "AVIOS Sent",
      message:
        "Your ${amount} AVIOS points will appear on your account within a few days. We will email you as soon as they are there.",
      cancelButtonText: "OK, got it",
    },
    newLockedReward: {
      ctaLabel: "back to rewards",
      heading: "update in progress",
      subheading: "We are updating your ${rewardName} rewards experience, check back soon!",
    },
  },
  fitkitConnect: {
    blurb:
      "We’d like to collect your health and personal data to track your activity, give you rewards and a personalised experience. You'll be able to adjust what data we receive in settings.",
    heading: "connect to health app",
    linkButtonLabel: "Privacy notice",
    primaryButtonConnecting: "connecting ...",
    primaryButtonLabel: "yes let’s connect",
    secondaryButtonLabel: "skip",
    unavailableAndroid: "your device requires Google Play Services in order to use this app.",
    unavailableHeading: "device not supported",
    unavailableIOS: "your device requires Apple Healthkit in order to use this app.",
  },
  challenges: {
    failed: {
      ctaLabel: "okay, got it",
      footer: "so close! why not try again?",
      heading: "you didn’t make it",
    },
    completed: {
      ctaLabel: "see result",
      heading: "time’s up!",
    },
    exitChallenge: {
      heading: "Call it quits?",
      subheading: "Your current progress will be lost but you can retry any time.",
      ctaLabel: "Cancel",
      ctaLabelSecondary: "Exit challenge",
    },
    showChestModal: {
      ctaLabelIsNext: "let's do it",
      ctaLabelIsNotNext: "got it",
      headingIsNext: "take a challenge to unlock the chest",
      headingIsNotNext: "unlock at level",
    },
    success: {
      ctaLabel: "collect",
      footer: "Well done!",
    },
    newExitChallenge: {
      heading: "settings",
      subheading:
        "Complete a meditation session with Calm, Headspace or any other meditation app that integrates with apple health, within the next hour. Results will be shown here.",
      ctaLabel: "exit challenge",
      ctaLabelSecondary: "set up tutorial",
    },
  },
  pushNotification: {
    toSettings: {
      ctaLabel: "go to settings",
      ctaLabelSecondary: "skip",
      heading: "notification",
      subheading: "To get notifications, you need to go to the system settings and turn it on.",
    },
    fromChallenge: {
      ctaLabel: "of course",
      ctaLabelSecondary: "maybe later",
      heading: "don't miss out",
      subheading: "Do you want us to give you a shout when you finish a challenge?",
    },
    turnNotificationOn: {
      ctaLabel: "allow",
      ctaLabelSecondary: "skip",
      heading: "notification",
      subheading: "Turn the notification on so we can notify you when there’s a response to your message.",
    },
  },
  popUp: {
    surgeHeading: "x2 yucoin surge!",
    surgeSubheading: "you're getting twice as many yucoin for daily steps and meditation minutes",
    leaderboardHeading: "new leaderboard",
    leaderboardSubheading: "leaderboard is now part of nav bar",
  },
  settingsInfo: {
    heading: "Your yulife app will capture step data from both your phone’s health app and your ${connection} device.",
    subheading:
      "If you look at your activity history, you will be able to see the steps count from both. yucoin will be awarded for whichever step count is higher, and that is what steps will be displayed on the app home screen as well.",
    ctaLabel: "okay, got it",
  },
  intro: {
    welcome: {
      heading: "Welcome to the yuniverse",
      descriptionOne: "Welcome to the yuniverse",
      descriptionTwo: "Here, you are rewarded for every step you take, and every meditation break.",
      descriptionThree: "Let us show you around the forest...",
      ctaLabel: "let’s begin",
    },
    yucoin: {
      heading: "Here’s your yucoin bank!",
      subheading: "Every time you open the app, we'll sync your steps and reward you in yucoin.",
      ctaLabel: "Got it",
    },
    yucoinWithMeditation: {
      heading: "Here’s your yucoin bank!",
      subheading:
        "Every time you open the app, we'll sync your steps and mindfulness minutes, and reward you in yucoin.",
      ctaLabel: "Got it",
    },
    dailyStepsCTA: {
      heading: "Today’s steps and yucoin",
      subheading: "For every 2000 steps, you earn 1 yucoin.",
      ctaLabel: "Got it",
    },
    dailyStepsWithMeditationCTA: {
      heading: "Today’s steps and yucoin",
      subheading: "For every 2000 steps, or 5 mindfulness minutes, you earn 1 yucoin.",
      ctaLabel: "Got it",
    },
    questsNav: {
      heading: "Earn bonus yucoin!",
      subheading: "Complete a daily challenge by tapping here.",
      ctaLabel: "Got it",
    },
    todaysYucoin: {
      heading: "Check out your daily progress",
      subheading: "Tap here to see all the activities you have earned yucoin for today.",
      ctaLabel: "Got it",
    },
    leaderboardsNav: {
      heading: "You're moving on up!",
      subheading: "See where you rank for the last 30 days of steps, mindfulness minutes, and yucoin.",
      ctaLabel: "Got it",
    },
    streaks: {
      heading: "You're on a streak!",
      subheading: "Keep it going: Complete challenges for 5 consecutive days, and earn a bonus 40 yucoin.",
      ctaLabel: "Got it",
    },
    rewardsNav: {
      heading: "Your rewards are waiting!",
      subheading: "Redeem your yucoin for rewards, or claim discounts just for being a member of yulife.",
      ctaLabel: "Got it",
    },
    surge: {
      heading: "It’s surge time!",
      subheading: "Your daily ${surgeActivity} are earning ${multiplier} yucoin right now.",
      ctaLabel: "Got it",
    },
  },
  rewardsDetails: {
    notEnoughCoinsAlert: {
      title: "Not enough YuCoin",
      body: "Earn more and come back later!",
      btnLabel: "Got it",
    },
  },
};
