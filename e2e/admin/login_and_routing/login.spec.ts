import { Feature, Given, Scenario, Then, When, ScenarioOnly, FeatureOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as given from "./_steps/given";
import * as then from "./_steps/then";
import * as when from "./_steps/when";
import * as scenario from "../_common/scenario";
import * as data from "../_data";
import * as ids from "@ids";
import { getLocalisedString as t } from "@i18n";
import moment from "moment";

Feature("As a user I can get past the login screen", async () => {
  Scenario("A locked account unlocks after 30 minutes since the last attempt", scenario.start, async () => {
    When("I press `log in`", when.tapID(ids.FULL_SCREEN_HERO_BUTTON("Log in")), async () => {
      When("I input my email", when.typeViaID(ids.INPUT_LOGIN_EMAIL, data.CUSTOMER_11.data.email), async () => {
        When("I tap the text to lower the keyboard", when.tapID(ids.LOGIN_SCREEN_HEADER), async () => {
          When("I tap the button to go to the next screen", when.tapID(ids.BUTTON_LOGIN(false)), async () => {
            When("I tap pass on the captcha", when.tapText("PASS"), async () => {
              Then("I should see the option to login with a password instead", then.textVisible("Log in with password instead."));
            });
          });
        });
      });
    });
    When("I tap to login with password instead", when.tapID(ids.LOGIN_WITH_PASSWORD), async () => {
      When("I put in the wrong password", when.typeViaID(ids.INPUT_LOGIN_PASSWORD("Password"), "wrongpass"), async () => {
        When("I tap the text to lower the keyboard", when.tapID(ids.LOGIN_SCREEN_HEADER), async () => {
          When("I tap the button to login", when.tapID(ids.BUTTON_LOGIN(false)), async () => {
            Then("I should not see the account locked text as it shouldn't be locked anymore", then.textNotVisible(t("Account is locked. Try again later.")));
            Then("an error message should tell me that the combination does not exist", then.combinationErrorMessagePresent);
          });
        });
      });
    });
    When("I enter the correct password", when.replaceTextViaID(ids.INPUT_LOGIN_PASSWORD("Password"), data.AUTH_11.data.password), async () => {
      When("I tap the text to lower the keyboard", when.tapID(ids.LOGIN_SCREEN_HEADER), async () => {
        When("I tap the button to login", when.tapID(ids.BUTTON_LOGIN(false)), async () => {
          Then("I should see the sign up reward screen", then.rewardScreenVisible);
          Then("I should see a visual indicator to say i've been awarded 200 coins", then.given200coins);
        });
      });
    });
  });

  Scenario("I cannot login with the wrong password for my email address", scenario.start, async () => {
    When("I press `log in`", when.tapID(ids.FULL_SCREEN_HERO_BUTTON("Log in")), async () => {
      When("I input my email", when.typeViaID(ids.INPUT_LOGIN_EMAIL, data.CUSTOMER_11.data.email), async () => {
        When("I tap the text to lower the keyboard", when.tapID(ids.LOGIN_SCREEN_HEADER), async () => {
          When("I tap the button to go to the next screen", when.tapID(ids.BUTTON_LOGIN(false)), async () => {
            When("I tap pass on the captcha", when.tapText("PASS"), async () => {
              Then("I should see the option to login with a password instead", then.textVisible("Log in with password instead."));
            });
          });
        });
      });
    });
    When("I tap to login with password instead", when.tapID(ids.LOGIN_WITH_PASSWORD), async () => {
      When("I put in the wrong password", when.typeViaID(ids.INPUT_LOGIN_PASSWORD("Password"), "wrongpass"), async () => {
        When("I tap the text to lower the keyboard", when.tapID(ids.LOGIN_SCREEN_HEADER), async () => {
          When("I tap the button to login", when.tapID(ids.BUTTON_LOGIN(false)), async () => {
            Then("I should not see the account locked text as it shouldn't be locked anymore", then.textNotVisible(t("Account is locked. Try again later.")));
            Then("an error message should tell me that the combination does not exist", then.combinationErrorMessagePresent);
            Then("my password should be hidden", then.passwordHidden);
            Then("the login button should not be disabled", then.loginButtonIsActive);
          });
        });
      });
    });
  });

  Scenario("I can login with correct login detail and see the connection setup for daily activities", scenario.start, async () => {
    Given("I have entered a valid email address and valid password", given.loginOnly(data.CUSTOMER_2, data.AUTH_2, true), async () => {
      Then("I should not longer be on the login screen", then.notOnLoginScreen);
      Then("I should see the signup reward screen", then.signupRewardVisible);
    });
    When("I tap let's go", when.tapID(ids.BUTTON_BASE("SIGN_UP_REWARD_SCREEN")), async () => {
      Then("I should see a prompt to connect to the health app", then.connectionSetupScreenVisible);
    });
    When("I tap X to skip connection", when.tapID(ids.BUTTON_CLOSE), async () => {
      Then("I should see my total yucoin balance of 15200", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(15200)));
      Then("I can see the health sync component", then.healthDataSyncComponent);
    });
  });

  Scenario("I can login with correct login details and make it past the intro screens", scenario.start, async () => {
    Given("I have entered a valid email address and valid password", given.loginOnly(data.CUSTOMER_7, data.AUTH_7, true), async () => {
      Then("I should see a visual indicator to say i've been awarded 200 coins", then.given200coins);
      Then("I should see the sign up reward screen", then.rewardScreenVisible);
    });
    When("I tap 'Let's go'", when.tapLetsGo, async () => {
      When("I skip the health connection screen", when.skipHealthConnection, async () => {
        Then("I should see 200 coins in the top right hand corner", then.givenCoinsTopRight(200));
        Then("I should see 200 YuCoin today", then.textVisible(`200 ${t("YuCoin")} ${t("today")}`));
        Then("I should see the i icon near the Coin", then.idVisible(ids.YUCOIN_POWER_INFO));
      });
    });
    When("I tap the YuCoins", when.tapID(ids.DAILYSTEP_SCREEN_COIN), async () => {
      Then("I should see 200 YuCoin today", then.textVisible(`200 ${t("YuCoin")}`));
    });
    When("I close this screen", when.tapID(ids.BACK_BUTTON), async () => {
      Then("I should see 200 YuCoin today", then.textVisible(`200 ${t("YuCoin")} today`));
      Then("I should Not see InfoIcon anymore", then.idNotVisible(ids.YUCOIN_POWER_INFO));
    });
  });

  Scenario("I can login with correct login details and see the correct steps sent", scenario.start, async () => {
    Given("I login and go to the daily steps screen", given.logInAndGoToTab("yucoin", data.CUSTOMER_7, data.AUTH_7, true), async () => {
      When("I have already seen the onboarding screens", given.seenOnboardingScreens, async () => {
        Then("I should see 0 steps done so far today", then.idVisible(ids.STEPS_COUNT(0), 2000));
      });
    });
    When("I have done 20 steps", given.sendSteps(20), async () => {
      Then("I should see 20 steps", then.idVisible(ids.STEPS_COUNT(20)));
    });
    When("I have done 2000 steps", given.sendSteps(2000), async () => {
      Then("I should see 2000 steps", then.idVisible(ids.STEPS_COUNT(2000)));
    });
    When("I tap on YuCoin", when.tapID(ids.DAILYSTEP_SCREEN_COIN), async () => {
      Then("I should see 2000 steps, 0 mindful, 20 step coins", then.dailyCoreActivities(2000, 0, 20));
    });
  });

  // skipping as unsure if forgotten password flow exists in same way - Rogers investigating
  ScenarioSkip("I can view all unauthenticated screens", scenario.start, async () => {
    Given("I select region United Kingdom", given.selectRegionIfVisible("United Kingdom"), async () => {
      Given("I am on the login screen", given.onLoginScreen, async () => {
        When("I press forgot password", when.tapText(t("Need help logging in?")), async () => {
          Then("I should be on the forgot password screen", then.onPasswordHelp);
        });
        When("I enter an email", when.typeViaID(ids.INPUT_RESET_PASSWORD, "test@email.com"), async () => {
          When("I tap 'email me...' ", when.tapText(t("Email me a magic link"), 2000), async () => {
            Then("I should be on the email sent screen", then.textVisible(t("Email sent"), 2000));
          });
        });
        When("I press back", when.tapText(t("Back")), async () => {
          Then("I should be on the forgot password screen", then.onPasswordHelp);
        });
        When("I press back", when.tapText(t("Back")), async () => {
          Then("I should be on the login screen", given.onLoginScreen);
        });
      });
    });
  });

  Scenario("My account can be locked when I enter a password incorrectly 5 times", scenario.start, async () => {
    When("I press `log in`", when.tapID(ids.FULL_SCREEN_HERO_BUTTON("Log in")), async () => {
      When("I input my email", when.typeViaID(ids.INPUT_LOGIN_EMAIL, data.CUSTOMER_11.data.email), async () => {
        When("I tap the text to lower the keyboard", when.tapID(ids.LOGIN_SCREEN_HEADER), async () => {
          When("I tap the button to go to the next screen", when.tapID(ids.BUTTON_LOGIN(false)), async () => {
            When("I tap pass on the captcha", when.tapText("PASS"), async () => {
              Then("I should see the option to login with a password instead", then.textVisible("Log in with password instead."));
            });
          });
        });
      });
    });
    When("I tap to login with password instead", when.tapID(ids.LOGIN_WITH_PASSWORD), async () => {
      When("I put in the wrong password", when.typeViaID(ids.INPUT_LOGIN_PASSWORD("Password"), "wrongpass"), async () => {
        When("I tap the text to lower the keyboard", when.tapID(ids.LOGIN_SCREEN_HEADER), async () => {
          When("I tap the button to login", when.tapID(ids.BUTTON_LOGIN(false)), async () => {
            Then("I should not see the account locked text", then.textNotVisible(t("Account is locked. Try again later.")));
            Then("an error message should tell me that the combination does not exist", then.combinationErrorMessagePresent);
          });
        });
      });
    });
    When("I enter an incorrect password a second time", when.replaceTextViaID(ids.INPUT_LOGIN_PASSWORD("Password"), "wrongpass2"), async () => {
      When("I tap the text to lower the keyboard", when.tapID(ids.LOGIN_SCREEN_HEADER), async () => {
        When("I tap the button to login", when.tapID(ids.BUTTON_LOGIN(false)), async () => {
          Then("I should not see the account locked text", then.textNotVisible(t("Account is locked. Try again later.")));
          Then("an error message should tell me that the combination does not exist", then.combinationErrorMessagePresent);
        });
      });
    });
    When("I enter an incorrect password a third time", when.replaceTextViaID(ids.INPUT_LOGIN_PASSWORD("Password"), "wrongpass3"), async () => {
      When("I tap the text to lower the keyboard", when.tapID(ids.LOGIN_SCREEN_HEADER), async () => {
        When("I tap the button to login", when.tapID(ids.BUTTON_LOGIN(false)), async () => {
          Then("I should not see the account locked text", then.textNotVisible(t("Account is locked. Try again later.")));
          Then("an error message should tell me that the combination does not exist", then.combinationErrorMessagePresent);
        });
      });
    });
    When("I enter an incorrect password a fourth time", when.replaceTextViaID(ids.INPUT_LOGIN_PASSWORD("Password"), "wrongpass4"), async () => {
      When("I tap the text to lower the keyboard", when.tapID(ids.LOGIN_SCREEN_HEADER), async () => {
        When("I tap the button to login", when.tapID(ids.BUTTON_LOGIN(false)), async () => {
          Then("I should not see the account locked text", then.textNotVisible(t("Account is locked. Try again later.")));
          Then("an error message should tell me that the combination does not exist", then.combinationErrorMessagePresent);
        });
      });
    });
    When("I enter an incorrect password a fifth time", when.replaceTextViaID(ids.INPUT_LOGIN_PASSWORD("Password"), "wrongpass5"), async () => {
      When("I tap the text to lower the keyboard", when.tapID(ids.LOGIN_SCREEN_HEADER), async () => {
        When("I tap the button to login", when.tapID(ids.BUTTON_LOGIN(false)), async () => {
          Then("I should see an error message saying my account is locked", then.textVisible(t("Account is locked. Try again later.")));
        });
      });
    });
    When("I enter the correct password", when.replaceTextViaID(ids.INPUT_LOGIN_PASSWORD("Password"), data.AUTH_11.data.password), async () => {
      When("I tap the text to lower the keyboard", when.tapID(ids.LOGIN_SCREEN_HEADER), async () => {
        When("I tap the button to login", when.tapID(ids.BUTTON_LOGIN(false)), async () => {
          Then("I should see an error message saying my account is locked", then.textVisible(t("Account is locked. Try again later.")));
        });
      });
    });
    When("I reload the app", when.reloadOnly, async () => {
      When("I enter enter the correct details", when.loginOnly(data.CUSTOMER_11, data.AUTH_11), async () => {
        Then("I should still see the account locked message", then.textVisible(t("Account is locked. Try again later.")));
      });
    });
  });

  Scenario("As an archived user, I should not be able to login", scenario.start, async () => {
    Given("I login as an archived user", given.loginOnly(data.CUSTOMER_ARCHIVED, data.AUTH_ARCHIVED), async () => {
      When("I tap let's go", when.tapText("Let's go"), async () => {
        When("I tap skip this step", when.tapText("Skip this step"), async () => {
          Then("I should see 'Sorry'!", then.textVisible(t("Sorry!")));
          Then("I should see copy saying I can't use the app", then.textVisible(t("You are not able to use this app at the moment.")));
        });
      });
    });
  });

  Scenario("I can login with correct login details and see the correct data for every passive/active activity that a user has engaged with", scenario.start, async () => {
    Given("I have authorised fitkit and done 10 steps today", given.authoriseFitkit(), async () => {
      Given("I login and go to the daily steps screen", given.logInAndGoToTab("yucoin", data.CUSTOMER_1, data.AUTH_1), async () => {
        When("I have already seen the onboarding screens", given.seenOnboardingScreens, async () => {
          When("I skip the health connection screen", when.skipHealthConnection, async () => {
            When("I have done 20 steps", given.sendSteps(20), async () => {
              Then("I should see 20 steps", then.idVisible(ids.STEPS_COUNT(20), 2000));
            });
          });
          When("I have done 11.3 km cycling", given.addCyclingData(11345), async () => {
            When("I have done 13 min Mindfulness", given.sendMindfulnessData(800), async () => {
              When("I update the screen to see today activity", given.triggerAppUpdateState, async () => {
                Then("I should see 11.3 km done today", then.idVisible(ids.CYCLING_COUNT("11.3 km"), 2000));
                Then("I should see 13 min mindful done today", then.idVisible(ids.MINDFUL_COUNT("13 min")));
                Then("I should se§e the amount of yucoin I earned today", then.textVisible("320 YuCoin today", 2000));
                Then("I should see the i icon near the Coin", then.idVisible(ids.YUCOIN_POWER_INFO));
              });
            });
          });
          When("I tap on YuCoin", when.tapID(ids.DAILYSTEP_SCREEN_COIN), async () => {
            Then("I should see 360 YuCoin today", then.textVisible("320 YuCoin"));
          });
          When("I go back this screen", when.tapID(ids.BACK_BUTTON), async () => {
            Then("I should Not see InfoIcon anymore", then.idNotVisible(ids.YUCOIN_POWER_INFO));
            When("I tap on YuCoin today text", when.tapID(ids.DAILYSTEP_SCREEN_COIN), async () => {
              Then("I should see correct data 20 steps, 11.3 km, 13 min mindful", then.onTodaysYucoin(20, "11.3 / 9.6 km", 13));
            });
          });
          When("I go back this screen", when.tapID(ids.BACK_BUTTON), async () => {
            When("I tap the menu icon in the top left", when.tapID(ids.MENU_ICON, 5000), async () => {
              When("I tap settings", when.tapMenuItem(t("Settings")), async () => {
                Then("I should be on the settings tab", then.idVisible(ids.SETTINGS_SCREEN, 2500));
              });
            });
          });
          When("I scroll to the description if needed", when.scrollUntilTextVisible(ids.SETTINGS_SCREEN_SCROLL, "Fitness trackers", "down"), async () => {
            Then("I should see Measurement cycling title", then.idVisible(ids.TEXT_TEMPLATE("Measurement (Cycling)")));
            Then("I should see Measurement cycling description", then.idVisible(ids.TEXT_TEMPLATE("Change between the imperial (miles) and metric (kilometers) system.")));
            Then("I should see Measurement method used", then.idVisible(ids.TEXT_TEMPLATE("km")));
          });
          When("I tap the km measurement", when.tapID(ids.TEXT_TEMPLATE("km")), async () => {
            Then("I should see GAME_SETTINGS_SCREEN", then.idVisible(ids.GAME_SETTINGS_SCREEN));
            Then("I should see correct title for Miles", then.idVisible(ids.TEXT_TEMPLATE("Imperial system")));
            Then("I should see correct description for Miles", then.idVisible(ids.TEXT_TEMPLATE("Distance will be shown in miles ”mi”")));
            Then("I should see correct title for Metrics", then.idVisible(ids.TEXT_TEMPLATE("Metric system")));
            Then("I should see correct description for Metrics", then.idVisible(ids.TEXT_TEMPLATE("Distance will be shown in kilometers ”km”")));
          });
          When("I select miles as measurement", when.tapID(ids.SETTINGS_NAME("mi")), async () => {
            When("I go close the settings screen", when.tapID(ids.BUTTON_CLOSE_HEADER("Settings")), async () => {
              Then("I should see 7.0 mi done today", then.idVisible(ids.CYCLING_COUNT("7.0 mi")));
              Then("I should Not see InfoIcon anymore", then.idNotVisible(ids.YUCOIN_POWER_INFO));
            });
          });
          When("I tap on YuCoin coin", when.tapID(ids.CYCLING_COUNT("7.0 mi")), async () => {
            Then("I should see correct data 20 steps, 7 mi, 13 min mindful", then.onTodaysYucoin(20, "7.0 / 6.0 mi", 13));
          });
          When("I tap on the 'i' activity feed info tooltip", when.tapID(ids.ACTIVITY_FEED, 1500), async () => {
            Then("I should see 20 YuCoin for 1.0 mi cycling", then.textVisible("20 YuCoin for 1.0 mi cycling"));
          });
        });
      });
    });
  });

  Scenario("As a user belonging to a company with bonus onboarding, I should be able to see the bonus YuCoin in app", scenario.start, async () => {
    Given("I have entered a valid email address and valid password", given.logInAndGoToTab("yucoin", data.CUSTOMER_3, data.AUTH_3), async () => {
      Then("I should be on the daily steps screen", then.dailyStepsScreenVisible);
      Then("I should see I have 420 YuCoin", then.givenCoinsTopRight(420));
    });
  });

  // @update -- Temp skip from nightly runs, test should be checked locally:
  // to get this to work locally you will need members running on port 3006
  // need to find a way to get this to happen on the runners but pushing to be checked locally for now
  ScenarioSkip("A user can onboard through the app", scenario.start, async () => {
    When("I press `log in`", when.tapID(ids.FULL_SCREEN_HERO_BUTTON("Log in")), async () => {
      When("I input my email", when.typeViaID(ids.INPUT_LOGIN_EMAIL, data.BUSINESS_EMPLOYEE_INFO_17.data.employment_email), async () => {
        When("I tap the text to lower the keyboard", when.tapID(ids.LOGIN_SCREEN_HEADER), async () => {
          When("I tap the button to go to the next screen", when.tapID(ids.BUTTON_LOGIN(false)), async () => {
            When("I tap pass on the captcha", when.tapText("PASS"), async () => {
              Then("I should have received the correct email", then.hasReceivedOnboardingLinkEmail(data.BUSINESS_EMPLOYEE_INFO_17.data.employment_email));
            });
          });
        });
      });
    });
    When("I terminate the app", when.terminateApp, async () => {
      When("I follow the email link", when.followEmailLink(data.BUSINESS_EMPLOYEE_INFO_17.data.employment_email), async () => {
        When("I wait 15 seconds", when.wait(15000), async () => {
          Then("Then I can see the cards to select if I am a new user or not", then.newAccountCardVisible);
        });
      });
    });
    When("I wait", when.wait(2000), async () => {
      When("When I navigate through the onboarding flow as far as the password screen", when.navigateAppOnboardingFlow, async () => {
        Then("I should see the password set screen", then.onboardingPasswordScreenVisible);
      });
    });
  });
});
