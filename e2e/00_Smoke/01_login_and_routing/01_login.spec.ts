import { Feature, Given, Scenario, Then, When, ScenarioOnly, FeatureOnly } from "@yu-life/yulife-bdd-framework";

import * as given from "./_steps/given";
import * as then from "./_steps/then";
import * as when from "./_steps/when";
import * as scenario from "./_steps/scenario";
import { INPUT_LOGIN_EMAIL, INPUT_RESET_PASSWORD, STEPS_COUNT, CYCLING_COUNT, MINDFUL_COUNT, YUCOIN, BACK_BUTTON, MENU_ICON, SETTINGS_SCREEN, TEXT_TEMPLATE, GAME_SETTINGS_SCREEN, SETTINGS_NAME, BUTTON_CLOSE_HEADER, ACTIVITY_FEED, YUCOIN_POWER, BUTTON_CLOSE, YUCOIN_POWER_INFO } from "@ids";
import { CUSTOMER_2,CUSTOMER_4, AUTH_2, AUTH_4, CUSTOMER_ARCHIVED, AUTH_ARCHIVED } from "@data";

Feature("As a user I can get past the login screen", async () => {

    Scenario("I cannot login with the wrong password for my email address", scenario.start, async () => {
        Given("I have entered a valid email address but an invalid password", given.enterInvalidCredentials, async () => {
            When("I press `log in`", when.tapOnLogin, async () => {
                Then("my email address should remain unchanged in the email field", then.emailUnchanged);
                Then("my password should be hidden", then.passwordHidden);
                Then("an error message should tell me that the combination does not exist", then.combinationErrorMessagePresent);
                Then("the login button should not be disabled", then.loginButtonIsActive);
            });
        });
    });

    Scenario("I can login with correct login details and be prompted with a health screen", scenario.start, async () => {
        Given("I have entered a valid email address and valid password", given.enterValidCredentials(), async () => {
            When("I press `log in`", when.tapOnLogin, async () => {
                Then("I should not longer be on the login screen", then.notOnLoginScreen);
                Then("I should see a prompt to connect to the health app", then.healthAppPromptVisible);
                Then("I should see a link to the privacy notice", then.privacyLinkVisible);
            });
        });
    });

    Scenario("I can login with correct login details and make it past the intro screens", scenario.start, async () => {
        Given("I have authorised fitkit on my device", given.authoriseFitkit(), async () => {
            Given("I have entered a valid email address and valid password", given.enterValidCredentials(), async () => {
                When("I press `log in`", when.tapOnLogin, async () => {
                    Then("I should see a visual indicator to say i've been awarded 200 coins", then.given200coins);
                    Then("I should see the sign up reward screen", then.rewardScreenVisible);
                    When("I press 'next'", when.tapNext, async () => {
                        Then("I should see 200 coins in the top right hand corner", then.givenCoinsTopRight(200));
                        Then("I should see 0 YuCoin today", then.textVisible("0 YuCoin today"))
                    })
                })
            })
        });
    });

    Scenario("I can login with correct login details and see the correct steps sent", scenario.start, async () => {
        Given("I have authorised fitkit and done 10 steps today", given.authoriseFitkit(), async () => {
            Given("I login and go to the daily steps screen", given.loginToDailySteps, async () => {
                When("I have already seen the onboarding screens", given.seenOnboardingScreens, async () => {
                    Then("I should Not see any steps done today", then.idNotVisible(STEPS_COUNT(20)));
                    When("I have done 20 steps", given.sendSteps(20), async () => {
                        Then("I should see 20 steps", then.idVisible(STEPS_COUNT(20)));
                    })
                    When("I have done 60 steps", given.sendSteps(60), async () => {
                        Then("I should see 60 steps", then.idVisible(STEPS_COUNT(60)));
                        Then("I should Not see km done today", then.idNotVisible(CYCLING_COUNT("km")));
                        Then("I should Not see min mindful done today", then.idNotVisible(MINDFUL_COUNT("min")));
                    })
                })
            });
        });
    });

    Scenario("I can view all unauthenticated screens", scenario.start, async () => {
        Given("I am on the login screen", given.onLoginScreen, async () => {
            When("I press forgot password", when.tapText("need help logging in?"), async () => {
                Then("I should be on the forgot password screen", then.onPasswordHelp)
            })
            When("I enter an email", when.typeViaID(INPUT_RESET_PASSWORD, "test@email.com"), async () => {
                When("I tap 'email me...' ", when.tapText("email me a magic link"), async () => {
                    Then("I should be on the email sent screen", then.textVisible("email sent"))
                    When("I press back", when.tapText("back"), async () => {
                        Then("I should be on the forgot password screen", then.onPasswordHelp)
                    })
                    When("I press back", when.tapText("back"), async () => {
                        Then("I should be on the login screen", given.onLoginScreen)
                    })
                })
            })
        })
    })

    Scenario("My account can be locked when I enter a password incorrectly 5 times", scenario.start, async () => {
        Given("I enter an incorrect password one time", given.enterPasswordIncorrectly(1), async () => {
            Then("I should not see the account locked text", then.textNotVisible("Account is locked. Try again later."))
            Then("an error message should tell me that the combination does not exist", then.combinationErrorMessagePresent);
            Given("I enter an incorrect password five times", given.enterPasswordIncorrectly(5), () => {
                Then("I should see an error message saying my account is locked", then.textVisible("Account is locked. Try again later."))
                When("I enter the correct password and login", when.loginOnly(CUSTOMER_4, AUTH_4), async () => {
                    Then("I should still be on the login screen", then.idVisible(INPUT_LOGIN_EMAIL))
                    Then("I should still see an error message saying my account is locked", then.textVisible("Account is locked. Try again later."))
                    When("I reload the app", when.reloadOnly, async () => {
                        When("I enter enter the correct details", when.loginOnly(CUSTOMER_4, AUTH_4), async () => {
                            Then("I should still see the account locked message", then.textVisible("Account is locked. Try again later."))
                        })
                    })
                })
            })
        })
    })

    Scenario("As an archived user, I should not be able to login", scenario.start, async () => {
        Given("I login as an archived user", given.loginOnly(CUSTOMER_ARCHIVED, AUTH_ARCHIVED), async () => {
            Then("I should see 'Sorry'!", then.textVisible("Sorry!"))
            Then("I should see copy saying I can't use the app", then.textVisible("You are not able to use this app at the moment"))
        })
    })

    Scenario("I can login with correct login details and see the correct data for every passive/active activity that a user has engaged with", scenario.start, async () => {
        Given("I have authorised fitkit and done 10 steps today", given.authoriseFitkit(), async () => {
            Given("I login and go to the daily steps screen", given.logInAndGoToTab("yucoin", CUSTOMER_2, AUTH_2), async () => {
                When("I have already seen the onboarding screens", given.seenOnboardingScreens, async () => {
                    When("I have done 20 steps", given.sendSteps(20), async () => {
                        Then("I should see 20 steps", then.idVisible(STEPS_COUNT(20), 2000));
                    })
                    When("I have done 11.3 km cycling", given.addCyclingData(11345), async () => {
                        When("I have done 13 min Mindfulness", given.sendMindfulnessData(800), async () => {
                            When("I update the screen to see today activity", given.triggerAppUpdateState, async () => {
                                Then("I should see 11.3 km done today", then.idVisible(CYCLING_COUNT("11.3 km"), 2000));
                                Then("I should see 13 min mindful done today", then.idVisible(MINDFUL_COUNT("13 min")));
                                Then("I should see the amount of yucoin I earned today", then.textVisible("160 YuCoin today"))
                            })
                        })
                    })
                    When("I tap on YuCoin coin", when.tapID(YUCOIN), async () => {
                        Then("I should see correct data 20 steps, 11.3 km, 13 min mindful", then.onTodaysYucoin(20, 11.3, 13))
                    })
                    When("I tap the earn rate", when.tapID(YUCOIN_POWER_INFO), async () => {
                        Then("I should see 1.6 km cycling", then.textVisible("1.6 km cycling"))
                    })
                    When("I tap on YuCoin coin", when.tapID(BUTTON_CLOSE), async () => {
                        When("I close this screen", when.tapID(BACK_BUTTON), async () => {
                            Then("I should see the daily steps screen", then.onDailySteps())
                        })
                    })
                    When("I tap the menu icon in the top left", when.tapID(MENU_ICON, 1500), async () => {
                        When("I tap settings", when.tapMenuItem("Settings"), async () => {
                            Then("I should be on the settings tab", then.idVisible(SETTINGS_SCREEN, 2500))
                            Then("I should see Measurment cycling title", then.idVisible(TEXT_TEMPLATE("Measurement (Cycling)")))
                            Then("I should see Measurment cycling description", then.idVisible(TEXT_TEMPLATE("Change between the imperial (miles) and metric (kilometers) system.")))
                            Then("I should see Measurment method used", then.idVisible(TEXT_TEMPLATE("km")))
                        })
                    })
                    When("I tap the km measurement", when.tapID(TEXT_TEMPLATE("km")), async () => {
                        Then("I should see GAME_SETTINGS_SCREEN", then.idVisible(GAME_SETTINGS_SCREEN))
                        Then("I should see correct title for Miles", then.idVisible(TEXT_TEMPLATE("Imperial system")))
                        Then("I should see correct description for Miles", then.idVisible(TEXT_TEMPLATE("Distance will be shown in miles ”mi”")))
                        Then("I should see correct title for Metrics", then.idVisible(TEXT_TEMPLATE("Metric system")))
                        Then("I should see correct description for Metrics", then.idVisible(TEXT_TEMPLATE("Distance will be shown in kilometers ”km”")))
                        When("I select miles as measurment", when.tapID(SETTINGS_NAME("mi")), async () => {
                            When("I go back", when.tapID(BUTTON_CLOSE_HEADER("Settings")), async () => {
                                Then("I should see 7.0 mi done today", then.idVisible(CYCLING_COUNT("7.0 mi")));
                            })
                        })
                    })
                    When("I tap on YuCoin coin", when.tapID(YUCOIN), async () => {
                        Then("I should see correct data 7.0 mi on todays earnings", then.cyclingMeasured("7.0"))
                    })
                    When("I tap the earn rate", when.tapID(YUCOIN_POWER_INFO), async () => {
                        Then("I should see 1.0 mi cycling", then.textVisible("1.0 mi cycling"))
                    })
                    When("I tap on YuCoin coin", when.tapID(BUTTON_CLOSE), async () => {
                        When("I tap on I for activity feed info", when.tapID(ACTIVITY_FEED), async () => {
                            Then("I should see 20 YuCoin for 1.0 mi cycling", then.textVisible("20 YuCoin for 1.0 mi cycling"))
                        })
                    })
                })
            });
        });
    });
})
