import { Feature, Scenario, Given, When, Then, FeatureOnly, ScenarioOnly } from "@bdd";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { NAV_BAR, LEADERBOARD_INFO_BUTTON, LEADERBOARD_INFO, BACK_BUTTON, LEADERBOARD_TOP_SCREEN, MENU_ICON, MENU_ITEM, SETTINGS_SCREEN, LEADERBOARD_EMAIL_INPUT, GROUP_NAME_INPUT, LEADERBOARD_STATUS, BUTTON_CLOSE, DAILY_STEPS_SCREEN } from "@ids";
import { CUSTOMER_16, AUTH_16, CUSTOMER_17, AUTH_17, CUSTOMER_18, USER_18_LEADERBOARD, CUSTOMER_19, AUTH_19, CUSTOMER_20, CUSTOMER_21, AUTH_21, AUTH_20, USER_19_LEADERBOARD_B } from "_utils/data/stubs";

Feature("As a user I can see my achievements on the leaderboard", async () => {

    Scenario("I can consent to my company leaderboard", scenario.start, async () => {
        Given("I login", given.loginAsUser(CUSTOMER_16, AUTH_16), async () => {
            When("I go to the leaderboard screen", when.tapID(NAV_BAR("leaderboard")), async () => {
                Then("I should see the leaderboard consent screen", then.onLeaderboardConsent)
                When("I tap 'Yes'", when.tapText("Yes"), async () => {
                    Then("I should see the leaderboard title", then.textVisible(USER_18_LEADERBOARD.data.name))
                    Then("I should see the leaderboard", then.leaderboardVisible([CUSTOMER_18, CUSTOMER_17, CUSTOMER_19, CUSTOMER_21], [800, 250]))
                    When("I tap the ? icon", when.tapID(LEADERBOARD_INFO_BUTTON), async () => {
                        Then("I should be on the about leaderboard page", then.idVisible(LEADERBOARD_INFO))
                        When("I tap the back button", when.tapID(BACK_BUTTON), async () => {
                            Then("I should be back on the leaderboard", then.idVisible(LEADERBOARD_TOP_SCREEN))
                        })
                    })
                })
            })
        })
    })

    Scenario("I can create a custom leaderboard, invite a user, and turn it on and off", scenario.start, async () => {
        Given("I login", given.loginAsUser(CUSTOMER_17, AUTH_17), async () => {
            When("I go to the menu", when.tapID(MENU_ICON), async () => {
                Then("I should see the settings CTA", then.idVisible(MENU_ITEM("settings")))
                When("I tap settings", when.tapID(MENU_ITEM("settings")), async () => {
                    Then("I should be on settings", then.idVisible(SETTINGS_SCREEN))
                    Then("I should see create", then.textVisible("create"))
                    When("I tap create", when.tapText("create"), async () => {
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
                            Then("I should be back on the settings page", then.idVisible(SETTINGS_SCREEN))
                            Then("I should see the group I just created", then.textVisible("Group 1"))
                            Then("The status of the group should be online", then.leaderboardStatus("Group 1", "active"))
                        })
                        When("I tap the leaderboard in settings", when.tapText("Group 1"), async () => {
                            Then("I should be on the turn it off screen", then.textVisible("turn it off?"))
                            When("I tap keep it on!", when.tapText("keep it on!"), async () => {
                                Then("I should be back on the settings screen the group still visible", then.textVisible("Group 1"))
                                Then("The status of the group should be online", then.leaderboardStatus("Group 1", "active"))
                            })
                        })
                        When("I tap the leaderboard in settings", when.tapText("Group 1"), async () => {
                            Then("I should be on the turn it off screen", then.textVisible("turn it off?"))
                            When("I tap turn it off", when.tapText("turn it off"), async () => {
                                Then("I should be on the settings page with the leaderboard turned off", then.leaderboardStatus("Group 1", "inactive"))
                            })
                        })
                        When("I tap the leaderboard", when.tapID(LEADERBOARD_STATUS("Group 1", "inactive")), async () => {
                            Then("I should be on the Turn on Leaderboard screen", then.textVisible("Turn on Leaderboard?"))
                            When("I tap 'no thanks'", when.tapText("no thanks"), async () => {
                                Then("I should be back on the settings page and the leaderboard should be inactive", then.leaderboardStatus("Group 1", "inactive"))
                            })
                        })
                        When("I tap the leaderboard", when.tapID(LEADERBOARD_STATUS("Group 1", "inactive")), async () => {
                            Then("I should be on the Turn on Leaderboard screen", then.textVisible("Turn on Leaderboard?"))
                            When("I tap Yes", when.tapText("Yes"), async () => {
                                Then("I should be back on the settings page and the leaderboard should be active", then.leaderboardStatus("Group 1", "active"))
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
                Then("I should see the leaderboard title", then.textVisible(USER_18_LEADERBOARD.data.name))
                Then("I should see the leaderboard", then.leaderboardVisible([CUSTOMER_18, CUSTOMER_19, CUSTOMER_21], [800]))
                When("I go to the menu", when.tapID(MENU_ICON), async () => {
                    Then("I should see the settings CTA", then.idVisible(MENU_ITEM("settings")))
                    When("I tap settings", when.tapID(MENU_ITEM("settings")), async () => {
                        Then("I should be on settings", then.idVisible(SETTINGS_SCREEN))
                        Then("I should see my active leaderboard", then.leaderboardStatus(USER_18_LEADERBOARD.data.name, "active"))
                        When("I turn off this leaderboard", when.turnOffLeaderboard(LEADERBOARD_STATUS(USER_18_LEADERBOARD.data.name, "active")), async () => {
                            Then("I should be back on the settings page and this leaderboard should be off", then.leaderboardStatus(USER_18_LEADERBOARD.data.name, "inactive"))
                            When("I close the setting menu", when.tapID(BUTTON_CLOSE), async () => {
                                Then("I should be back on an empty leaderboard screen", then.onLeaderboardConsent)
                            })
                        })
                    })
                })
            })
        })
    })

    Scenario("I can check other leaderboards", scenario.start, async () => {
        Given("I login", given.loginAsUser(CUSTOMER_19, AUTH_19), async () => {
            When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                Then("I should see the leaderboard title", then.textVisible(USER_18_LEADERBOARD.data.name))
                Then("I should see the leaderboard", then.leaderboardVisible([CUSTOMER_18, CUSTOMER_17, CUSTOMER_21], [800, 250]))
                When("I tap the the drop down", when.tapText(USER_18_LEADERBOARD.data.name), async () => {
                    Then("I should be on the leaderboard selection screen", then.multipleTextVisible([USER_18_LEADERBOARD.data.name, USER_19_LEADERBOARD_B.data.name]))
                    When("I tap the second leaderboard, Lb2", when.tapText(USER_19_LEADERBOARD_B.data.name), async () => {
                        Then("I should be on the second leaderboard", then.leaderboardVisible([CUSTOMER_20]))
                    })
                })
            })
        })
    })

    Scenario("I can join a new leaderboard", scenario.start, async () => {
        Given("I login", given.loginOnly(CUSTOMER_21, AUTH_21, true), async () => {
            Then("I should see a leaderboard invite screen", then.textVisible("join Boris' leaderboard"))
            When("I accept", when.tapText("accept invite"), async () => {
                When("I continue the login process", when.continueLogin, async () => {
                    Then("I should be on the yuscreen", then.idVisible(DAILY_STEPS_SCREEN))
                    When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                        Then("I should see the leaderboard title", then.textVisible(USER_18_LEADERBOARD.data.name))
                        Then("I should see the leaderboard", then.leaderboardVisible([CUSTOMER_18, CUSTOMER_17, CUSTOMER_19], [800, 250]))
                        When("I tap the leaderboard drop down", when.tapText(USER_18_LEADERBOARD.data.name), async () => {
                            Then("I should see both Lb1 and the new leaderboard I just joined", then.multipleTextVisible([USER_18_LEADERBOARD.data.name, USER_19_LEADERBOARD_B.data.name]))
                            When("I tap Lb2", when.tapText(USER_19_LEADERBOARD_B.data.name), async () => {
                                Then("I should be on the Lb2 leaderboard", then.leaderboardVisible([CUSTOMER_19, CUSTOMER_20]))
                            })
                        })
                    })
                })
            })
        })
    })

    Scenario("I can invite a user, and they can accept", scenario.start, async () => {
        Given("I login", given.loginAsUser(CUSTOMER_20, AUTH_20), async () => {
            When("I go to the menu", when.tapID(MENU_ICON), async () => {
                Then("I should see the settings CTA", then.idVisible(MENU_ITEM("settings")))
                When("I tap settings", when.tapID(MENU_ITEM("settings")), async () => {
                    Then("I should be on settings", then.idVisible(SETTINGS_SCREEN))
                    Then("I should see create", then.textVisible("create"))
                    When("I tap create", when.tapText("create"), async () => {
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
                            Then("I should be back on the settings page", then.idVisible(SETTINGS_SCREEN))
                            Then("I should see the group I just created", then.textVisible("Lb3"))
                            Then("The status of the group should be online", then.leaderboardStatus("Lb3", "active"))
                        })
                        When("I restart the app", when.restartWithData, async () => {
                            When("I login as the invited user", when.loginOnly(CUSTOMER_19, AUTH_19, true), async () => {
                                Then("I should see the invite screen", then.textVisible("join Oscar's leaderboard"))
                                When("I accept", when.tapText("accept invite"), async () => {
                                    When("I continue the login process", when.continueLogin, async () => {
                                        Then("I should be on the yuscreen", then.idVisible(DAILY_STEPS_SCREEN))
                                        When("I go to the leaderboard", when.tapID(NAV_BAR("leaderboard")), async () => {
                                            Then("I should see the leaderboard title", then.textVisible(USER_18_LEADERBOARD.data.name))
                                            Then("I should be on the default leaderboard", then.leaderboardVisible([CUSTOMER_17, CUSTOMER_18, CUSTOMER_21], [800, 250]))
                                            When("I tap the leaderboard drop down", when.tapText(USER_18_LEADERBOARD.data.name), async () => {
                                                Then("I should see both Lb1 and the new leaderboard I just joined", then.multipleTextVisible([USER_18_LEADERBOARD.data.name, "Lb3"]))
                                                When("I tap Lb3", when.tapText("Lb3"), async () => {
                                                    Then("I should see the leaderboard name Lb3", then.textVisible("Lb3"))
                                                    Then("I should not see any of the other leaderboards", then.textNotVisible(USER_19_LEADERBOARD_B.data.name))
                                                    Then("I should be on the Lb3 leaderboard", then.leaderboardVisible([CUSTOMER_20]))
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


