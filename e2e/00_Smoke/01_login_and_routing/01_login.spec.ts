import { Feature, Given, Scenario, Then, When, ScenarioOnly, FeatureOnly } from "@bdd";

import * as given from "./_steps/given";
import * as then from "./_steps/then";
import * as when from "./_steps/when";
import * as scenario from "./_steps/scenario";
import { INPUT_LOGIN_EMAIL, INPUT_RESET_PASSWORD } from "@ids";
import { CUSTOMER_4, AUTH_4, CUSTOMER_ARCHIVED, AUTH_ARCHIVED } from "_utils/data/stubs";

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
                        Then("I land on the daily steps screen", then.dailyStepsScreenVisible);
                        Then("I should see the welcome modal", then.welcomeModalVisible)
                        When("I tap the let's begin button", when.tapText("let’s begin"), async () => {
                            Then("I should see a pop up showing me my yucoin bank", then.textVisible("Here’s your yucoin bank!"))
                            Then("I should see the 'Got it' cta", then.textVisible("Got it"))
                        })

                        When("I tap the 'Got it' CTA", when.tapText("Got it"), async () => {
                            Then("I should see the yucoin today pop up", then.textVisible("Today’s steps and yucoin"))
                            Then("I should see the 'Got it' CTA", then.textVisible("Got it"))
                        })

                        When("I tap 'Got it'", when.tapText("Got it"), async () => {
                            Then("I should see the earn a bonus pop up", then.textVisible("Earn bonus yucoin!"))
                            Then("I should see the 'Got it' CTA", then.textVisible("Got it"))
                        })

                        When("I tap 'Got it'", when.tapText("Got it"), async () => {
                            Then("I should see the daily progress pop up", then.textVisible("Check out your daily progress"))
                            Then("I should see the 'Got it' CTA", then.textVisible("Got it"))
                        })
                        When("I tap 'Got it'", when.tapText("Got it"), async () => {
                            Then("I should see the You're moving on up! pop up", then.textVisible("You're moving on up!"))
                            Then("I should see the 'Got it' CTA", then.textVisible("Got it"))
                        })
                        When("I tap 'Got it'", when.tapText("Got it"), async () => {
                            Then("I should see the You're on a streak pop up", then.textVisible("You're on a streak!"))
                            Then("I should see the 'Got it' CTA", then.textVisible("Got it"))
                        })
                        When("I tap 'Got it'", when.tapText("Got it"), async () => {
                            Then("I should see the Your rewards are waiting pop up", then.textVisible("Your rewards are waiting!"))
                            Then("I should see the 'Got it' CTA", then.textVisible("Got it"))
                        })
                        When("I tap 'Got it'", when.tapText("Got it"), async () => {
                            Then("I should see 200 coins in the top right hand corner", then.givenCoinsTopRight(200));
                        })
                    })
                })
            })
        });
    });

    Scenario("I can login with correct login details and see the correct steps sent", scenario.start, async () => {
        Given("I have authorised fitkit and done 10 steps today", given.authoriseFitkit(), async () => {
            Given("I login and go to the daily steps screen", given.loginToDailySteps, async () => {
                When("I have already seen the onboarding screens", given.seenOnboardingScreens, async () => {
                    When("I have done 10 steps", given.sendSteps(10), async () => {
                        Then("I should see 10 steps", then.textVisible("10 steps"));
                    })
                    When("I have done 60 steps", given.sendSteps(60), async () => {
                        Then("I should see 60 steps", then.textVisible("60 steps"));
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
})
