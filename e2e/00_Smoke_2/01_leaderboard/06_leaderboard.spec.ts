import { Feature, Scenario, Given, When, Then, FeatureOnly, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { NAV_BAR, LEADERBOARD_INFO_BUTTON, LEADERBOARD_INFO, BACK_BUTTON, PLUS_BUTTON, LEADERBOARD_EMAIL_INPUT, GROUP_NAME_INPUT, LEADERBOARD_STATUS, LEADERBOARD_SWITCH, BUTTON_CLOSE, DAILY_STEPS_SCREEN, LEADERBOARD_NAME, LEADERBOARD_TITLE } from "@ids";
import { CUSTOMER_16, AUTH_16, USER_16_LEADERBOARD, CUSTOMER_17, AUTH_17, CUSTOMER_18, USER_18_LEADERBOARD, CUSTOMER_19, AUTH_19, CUSTOMER_20, USER_20_LEADERBOARD, CUSTOMER_21, AUTH_21, AUTH_20, USER_19_LEADERBOARD_B } from "@data";

Feature("As a user I can see my achievements on the leaderboard", async () => {
    
    Scenario("I can consent to my company leaderboard", scenario.start, async () => {
        Given("I login", given.loginAsUser(CUSTOMER_16, AUTH_16), async () => {
            When("I go to the leaderboard screen", when.tapID(NAV_BAR("leaderboard")), async () => {
                Then("I should see the leaderboard consent screen", then.onLeaderboardConsent)
                When("I tap 'Yes'", when.tapText("Yes"), async () => {
                    Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE(USER_18_LEADERBOARD.data.name)))
                    Then("I should see the leaderboard", then.leaderboardVisible([CUSTOMER_18, CUSTOMER_17, CUSTOMER_19, CUSTOMER_21], [800, undefined, 50, 0]))
                    When("I tap the ? icon", when.tapID(LEADERBOARD_INFO_BUTTON), async () => {
                        Then("I should be on the about leaderboard page", then.idVisible(LEADERBOARD_INFO))
                        When("I tap the back button", when.tapID(BACK_BUTTON), async () => {
                            Then("I should be back on the leaderboard", then.leaderboardVisible([CUSTOMER_18, CUSTOMER_17, CUSTOMER_19, CUSTOMER_21]))
                        })
                    })
                })
            })
        })
    })

    Scenario("I can create a custom leaderboard, invite a user, and turn it on and off", scenario.start, async () => {
        Given("I login", given.loginAsUser(CUSTOMER_17, AUTH_17), async () => {
            When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE(USER_16_LEADERBOARD.data.name)))
                When("I tap the leaderboard drop down", when.tapID(LEADERBOARD_TITLE(USER_16_LEADERBOARD.data.name)), async () => {
                    Then("I should see create", then.idVisible(PLUS_BUTTON))
                    When("I tap create", when.tapID(PLUS_BUTTON), async () => {
                        Then("I should be on the create a leaderboard screen", then.textVisible("create a leaderboard"))
                        Then("I should see the leaderboard name and email inputs", then.multipleIDVisible([LEADERBOARD_EMAIL_INPUT, GROUP_NAME_INPUT]))
                        When("I enter a group name", when.replaceTextByID(GROUP_NAME_INPUT, "Group 1"), async () => {
                            Then("I should see the group name entered", then.textVisible("Group 1"))
                        })
                        When("I enter an email", when.replaceTextByID(LEADERBOARD_EMAIL_INPUT, CUSTOMER_16.data.email), async () => {
                            Then("I should see the email entered", then.textVisible(CUSTOMER_16.data.email))
                        })
                        When("I tap add", when.tapText("add"), async () => {
                            Then("I should see the email I just entered", then.textVisible(CUSTOMER_16.data.email))
                        })
                        When("I tap create", when.tapText("create"), async () => {
                            Then("I should be back on the leaderboards list page", then.idVisible(PLUS_BUTTON))
                            Then("I should see the group I just created", then.textVisible("Group 1"))
                            Then("The status of the group should be online", then.leaderboardStatus("Group 1", "active"))
                        })
                        When("I try to switch off the leaderboard", when.tapID(LEADERBOARD_SWITCH("Group 1")), async () => {
                            Then("I should be on the Turn it off screen", then.textVisible("Turn it off?"))
                            When("I tap Keep it on!", when.tapText("Keep it on!"), async () => {
                                Then("I should be back on the settings screen the group still visible", then.textVisible("Group 1"))
                                Then("The status of the group should be online", then.leaderboardStatus("Group 1", "active"))
                            })
                        })
                        When("I switch off the leaderboard", when.tapID(LEADERBOARD_SWITCH("Group 1")), async () => {
                            Then("I should be on the Turn it off screen", then.textVisible("Turn it off?"))
                            When("I tap Turn it off", when.tapText("Turn it off"), async () => {
                                Then("I should be on the leaderboard selection page with the leaderboard turned off", then.leaderboardStatus("Group 1", "inactive"))
                            })
                        })
                        When("I try to switch on the leaderboard", when.tapID(LEADERBOARD_SWITCH("Group 1")), async () => {
                            Then("I should be on the Join the Leaderboard screen", then.textVisible("Join the Leaderboard?"))
                            When("I tap 'no thanks'", when.tapText("No thanks"), async () => {
                                Then("I should be back on the leaderboard selection page and the leaderboard should be inactive", then.leaderboardStatus("Group 1", "inactive"))
                            })
                        })
                        When("I switch on the leaderboard", when.tapID(LEADERBOARD_SWITCH("Group 1")), async () => {
                            Then("I should be on the Join the Leaderboard screen", then.textVisible("Join the Leaderboard?"))
                            When("I tap Yes", when.tapText("Yes"), async () => {
                                Then("I should be back on the leaderboard selection page and the leaderboard should be active", then.leaderboardStatus("Group 1", "active"))
                            })
                        })
                    })
                })
            })
        })
    })

    Scenario("I can change consent to a leaderboard I belong to", scenario.start, async () => {
        Given("I login", given.loginAsUser(CUSTOMER_17, AUTH_17), async () => {
            When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE(USER_18_LEADERBOARD.data.name)))
                Then("I should see the leaderboard", then.leaderboardVisible([CUSTOMER_18, CUSTOMER_19, CUSTOMER_21], [800]))
                When("I tap the leaderboard drop down", when.tapID(LEADERBOARD_TITLE(USER_18_LEADERBOARD.data.name)), async () => {
                    Then("I should see my active leaderboard", then.leaderboardStatus(USER_18_LEADERBOARD.data.name, "active"))
                    When("I turn off this leaderboard", when.turnOffLeaderboard(LEADERBOARD_SWITCH(USER_18_LEADERBOARD.data.name)), async () => {
                        Then("I should be back on the leaderboard selection page and this leaderboard should be off", then.leaderboardStatus(USER_18_LEADERBOARD.data.name, "inactive"))
                        When("I close the leaderboard selection screen", when.tapID(BACK_BUTTON), async () => {
                            Then("I should be back on an empty leaderboard screen", then.onLeaderboardConsent)
                        })
                    })
                })
            })
        })
    })

    Scenario("I can check other leaderboards", scenario.start, async () => {
        Given("I login", given.loginAsUser(CUSTOMER_19, AUTH_19), async () => {
            When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE(USER_18_LEADERBOARD.data.name)))
                Then("I should see the leaderboard", then.leaderboardVisible([CUSTOMER_18, CUSTOMER_17, CUSTOMER_21], [800, 250]))
                When("I tap the leaderboard drop down", when.tapID(LEADERBOARD_TITLE(USER_18_LEADERBOARD.data.name)), async () => {
                    Then("I should be on the leaderboard selection screen", then.multipleTextVisible([USER_18_LEADERBOARD.data.name, USER_19_LEADERBOARD_B.data.name]))
                    When("I tap the second leaderboard, Lb2", when.tapText(USER_19_LEADERBOARD_B.data.name), async () => {
                        Then("I should be on the second leaderboard", then.leaderboardVisible([CUSTOMER_20]))
                    })
                })
            })
        })
    })

    // TODO: Fix issue where invite popup shows twice if fitkit is enabled:
    // https://yulife.atlassian.net/browse/ENG-1877?atlOrigin=eyJpIjoiZWViMTE5ZGIwZjVmNDZiNWIwOGMxYjc5NTVjMmFiMzMiLCJwIjoiaiJ9
    Scenario("I can join a new leaderboard", scenario.start, async () => {
        Given("I login", given.loginOnly(CUSTOMER_21, AUTH_21, false), async () => {
            Then("I should see a leaderboard invite screen", then.textVisible("join Angela's leaderboard", 2500))
            When("I accept", when.tapText("accept invite"), async () => {
                When("I skip fitkit", when.tapText("Skip this step"), async()=>{
                    Then("I should see the signup bonus screen", then.textVisible("Sign-up bounty\nunlocked!"))
                    When("I continue the login process", when.continueLogin, async () => {
                        Then("I should be on the yuscreen", then.idVisible(DAILY_STEPS_SCREEN))
                        When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                            Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE(USER_19_LEADERBOARD_B.data.name)))
                            Then("I should see the leaderboard", then.leaderboardVisible([CUSTOMER_19, CUSTOMER_20], [50]))
                            When("I tap the leaderboard drop down", when.tapID(LEADERBOARD_TITLE(USER_19_LEADERBOARD_B.data.name)), async () => {
                                Then("I should see both Lb1 and the new leaderboard I just joined", then.multipleTextVisible([USER_18_LEADERBOARD.data.name, USER_19_LEADERBOARD_B.data.name]))
                                When("I tap Lb1", when.tapText(USER_18_LEADERBOARD.data.name), async () => {
                                    Then("I should be on the Lb1 leaderboard", then.leaderboardVisible([CUSTOMER_18, CUSTOMER_17, CUSTOMER_19], [800,250,50]))
                                })
                            })
                        })
                    })
                })
            })
        })
    })

    // TODO: Fix issue where invite popup shows twice if fitkit is enabled: 
    // https://yulife.atlassian.net/browse/ENG-1877?atlOrigin=eyJpIjoiZWViMTE5ZGIwZjVmNDZiNWIwOGMxYjc5NTVjMmFiMzMiLCJwIjoiaiJ9
    Scenario("I can invite a user, and they can accept", scenario.start, async () => {
        Given("I login", given.loginAsUser(CUSTOMER_20, AUTH_20), async () => {
            When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE(USER_20_LEADERBOARD.data.name)))
                When("I tap the leaderboard drop down", when.tapID(LEADERBOARD_TITLE(USER_20_LEADERBOARD.data.name)), async () => {
                    Then("I should see create", then.idVisible(PLUS_BUTTON))
                    When("I tap create", when.tapID(PLUS_BUTTON), async () => {
                        Then("I should be on the create a leaderboard screen", then.textVisible("create a leaderboard"))
                        Then("I should see the leaderboard name and email inputs", then.multipleIDVisible([LEADERBOARD_EMAIL_INPUT, GROUP_NAME_INPUT]))
                        When("I enter a group name", when.replaceTextByID(GROUP_NAME_INPUT, "Lb3"), async () => {
                            Then("I should see the group name entered", then.textVisible("Lb3"))
                        })
                        When("I enter an email", when.replaceTextByID(LEADERBOARD_EMAIL_INPUT, CUSTOMER_19.data.email), async () => {
                            Then("I should see the email entered", then.textVisible(CUSTOMER_19.data.email))
                        })
                        When("I tap add", when.tapText("add"), async () => {
                            Then("I should see the email I just entered", then.textVisible(CUSTOMER_19.data.email))
                        })
                        When("I tap create", when.tapText("create"), async () => {
                            Then("I should see the group I just created", then.textVisible("Lb3"))
                            Then("The status of the group should be online", then.leaderboardStatus("Lb3", "active"))
                        })
                        When("I restart the app", when.restartWithData, async () => {
                            When("I login as the invited user", when.loginOnly(CUSTOMER_19, AUTH_19, false), async () => {
                                Then("I should see a leaderboard invite screen", then.textVisible("join Oscar's leaderboard", 2500))
                                When("I accept", when.tapText("accept invite"), async () => {
                                    When("I skip fitkit", when.tapText("Skip this step"), async () => {
                                        Then("I should see the signup bonus screen", then.textVisible("Sign-up bounty\nunlocked!"))
                                        When("I continue the login process", when.continueLogin, async () => {
                                        Then("I should be on the yuscreen", then.idVisible(DAILY_STEPS_SCREEN))
                                        When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                                            Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE("Lb3")))
                                            Then("I should be on the default leaderboard", then.leaderboardVisible([CUSTOMER_20]))
                                            When("I tap the leaderboard title", when.tapID(LEADERBOARD_TITLE("Lb3")), async () => {
                                                Then("I should see both Lb1 and the new leaderboard I just joined", then.multipleTextVisible([USER_18_LEADERBOARD.data.name, "Lb3"]))
                                                When("I tap Lb1", when.tapText("LB1"), async () => {
                                                    Then("I should see the leaderboard name Lb1", then.idVisible(LEADERBOARD_TITLE("LB1")))
                                                    Then("I should not see any of the other leaderboards", then.textNotVisible(USER_19_LEADERBOARD_B.data.name))
                                                    Then("I should be on the Lb1 leaderboard", then.leaderboardVisible([CUSTOMER_17, CUSTOMER_18, CUSTOMER_21], [800, 250]))
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })

})


