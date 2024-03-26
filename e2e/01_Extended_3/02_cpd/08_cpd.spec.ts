import { Given, When, Then, Feature, Scenario, FeatureOnly, ScenarioOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import * as data from "@data"
import * as ids from "@ids"
import { cpdModule1Copy, module1Quiz, module1QuizAnswers, twoDaysAgoDate } from "./_resources/constants";
import { shuffleAnswers } from "./_resources/helpers";

Feature("CPD/Yuniversity", async () => {
    Scenario("As a user with access to the Yuniversity, I should be able to see the various modules and chapters", scenario.start, () => {
        Given("I login", given.logInAndGoToTab("yucoin", data.CUSTOMER_20, data.AUTH_20), async () => {
            Then("I should see 220 YuCoin in the top right hand corner", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(220)))
            Then("I should see '200 YuCoin today'", then.textVisible("200 YuCoin today"))
            When("I go to settings", when.tapID(ids.MENU_ICON), async () => {
                Then("I should see Wellbeing Hub", then.idVisible(ids.MENU_ITEM("Wellbeing Hub")))
            })
        })
        When("I tap Wellbeing Hub", when.tapID(ids.MENU_ITEM("Wellbeing Hub")), async () => {
            Then("I should be on the Wellbeing Hub screen", then.idVisible(ids.WELLBEING_HUB_SCREEN))
        })
        When("I scroll down", when.scrollFromID(ids.WELLBEING_HUB_SCREEN, "up", "slow", 0.2), async () => {
            Then("I can see Yuniversity in the wellbeing hub", then.canSeeYuniversityWellbeingHub)
        })
        When("I tap on Yuniversity", when.tapText("Yuniversity", 2000), async () => {
            Then("I should be able to see the CPD Courses screen", then.idVisible(ids.CPD_COURSES_SCREEN))
            Then("I should see the details for Course 1", then.canSeeCourseDetails(data.YUNIVERSITY_COURSE_1))
            Then("I should see should be able to see the thumbnail for module 1 with the correct details", then.canSeeModuleThumbnail(data.YUNIVERSITY_COURSE_MODULE_1, 0))
            Then("I should see should be able to see the thumbnail for module 2 with the correct details", then.canSeeModuleThumbnail(data.YUNIVERSITY_COURSE_MODULE_1, 1))
        })
        When("I click to leave the CPD page", when.tapID(ids.BACK_BUTTON), async () => {
            Then("I should be back on the Wellbeing Hub screen", then.idVisible(ids.WELLBEING_HUB_SCREEN))
        })
        When("I tap on Yuniversity", when.tapText("Yuniversity", 2000), async () => {
            Then("I should be able to see the CPD Courses screen", then.idVisible(ids.CPD_COURSES_SCREEN))
        })
        When("I tap on Module One", when.tapModule(data.YUNIVERSITY_COURSE_MODULE_1), async () => {
            Then("I'm on the course detail screen", then.idVisible(ids.CPD_COURSE_DETAIL_SCREEN))
            Then("I can see the details for Module 1", then.canSeeModuleDetails(data.YUNIVERSITY_COURSE_MODULE_1, cpdModule1Copy))
        })
        When("I scroll down the screen to see the chapters", when.scrollToChapter(data.YUNIVERSITY_COURSE_MODULE_1, 3, "down"), async () => {
            Then("I can see the thumbnail for Chapter 1", then.canSeeChapterThumbnail(data.YUNIVERSITY_COURSE_MODULE_1, 1))
            Then("I can see the thumbnail for Chapter 2", then.canSeeChapterThumbnail(data.YUNIVERSITY_COURSE_MODULE_1, 2))
            Then("I can see the thumbnail for Chapter 3", then.canSeeChapterThumbnail(data.YUNIVERSITY_COURSE_MODULE_1, 3))
        })
        When("I swipe down the screen", when.scrollUntilTextVisible(ids.CPD_COURSE_SCROLL_VIEW, "Certificate", "down"), async () => {
            Then("I can see 'Module notes' section", then.canSeeModuleNotesSection)
            Then("I can see the 'Module quiz' section", then.canSeeModuleQuizSection)
            When("I swipe to the bottom of the page", then.swipeFromText("Certificate", "up", "slow"), async () => {
                Then("I can see the 'Certificate' section", then.canSeeCerificateSection)
            })
        })
        When("I tap on 'Take the quiz'", when.tapText("Take the quiz", 2000), async () => {
            Then("The button is disabled - I stay on the page", then.canSeeModuleQuizSection)
        })
        When("I tap to view the certificate'", when.tapTextAtIndex("View", 1, 2000), async () => {
            Then("The button is disabled - I stay on the page", then.canSeeCerificateSection)
        })
        When("I swipe up the screen to see the chapters", when.scrollToChapter(data.YUNIVERSITY_COURSE_MODULE_1, 1, "up"), async () => {
            Then("I can see the thumbnail for Chapter 1", then.canSeeChapterThumbnail(data.YUNIVERSITY_COURSE_MODULE_1, 1))
        })
        When("I tap on Chapter 1", when.tapChapter(data.YUNIVERSITY_COURSE_MODULE_1, 1), async () => {
            Then("I wait until the 15 second test video has played", then.wait(20000))
            Then("I can see that chapter has been marked 'Completed'", then.chapterComplete(1))
        })
        When("I tap on Chapter 2", when.tapChapter(data.YUNIVERSITY_COURSE_MODULE_1, 2), async () => {
            Then("I wait until the 15 second test video has played", then.wait(20000))
            Then("I can see that chapter has been marked 'Completed'", then.chapterComplete(2))
        })
        When("I tap on Chapter 3", when.tapChapter(data.YUNIVERSITY_COURSE_MODULE_1, 3), async () => {
            Then("I wait until the 15 second test video has played", then.wait(20000))
            Then("I can see that chapter has been marked 'Completed'", then.chapterComplete(3))
        })
        When("I swipe down the screen to the bottom", when.swipeFromText("Module notes", "up", "slow", 0.4), async () => {
            When("I tap on 'Take the quiz'", when.tapText("Take the quiz", 2000), async () => {
                Then("I should be on the 'Take the quiz' page", then.canSeeQuizPage(data.YUNIVERSITY_COURSE_MODULE_1))
            })
        })
        When("I tap 'Let's go' to begin the quiz", when.beginQuiz, async () => {
            When("I progress through the quiz, getting every question wrong", when.completeQuiz(module1Quiz, shuffleAnswers(module1QuizAnswers)), async () => {
                Then("I can see I have failed the quiz", then.quizComplete(0))
            })
        })
        When("I retake the quiz", when.retakeQuiz, async () => {
            When("I progress through the quiz, getting every question correct", when.completeQuiz(module1Quiz, module1QuizAnswers), async () => {
                Then("I can see I have successfully completed the quiz", then.quizComplete(6))
            })
        })
        When("I tap 'Done'", when.tapText("Done", 2000), async () => {
            Then("I should be back on the course detail screen", then.idVisible(ids.CPD_COURSE_DETAIL_SCREEN))
            Then("I should see that I have successfully completed the quiz", then.textVisible("Module quiz completed"))
        })
        When("I scroll to the bottom of the screen", when.swipeFromText("Take the quiz", "up", "slow"), async () => {
            When("I tap to view the certificate'", when.tapTextAtIndex("View", 1, 2000), async () => {
                Then("I should be be able to see the certificate", then.idVisible(ids.CPD_CERTIFICATE))
                Then("I can see the details on the certificate are correct", then.canSeeCertificateDetails(data.YUNIVERSITY_COURSE_MODULE_1, data.CUSTOMER_20, data.BUSINESS_ACCOUNT_2))
            })
        })
        When("I swipe down", when.swipeFromText("CPD Module Certificate", "up", "slow"), async () => {
            Then("I should be able to see the 'Save as image' button", then.idVisible(ids.CPD_SAVE_BUTTON))
        })
        When("I tap the close button", when.closeScreen("button_only"), async () => {
            When("I tap the close button", when.closeScreen("yulife"), async () => {
                When("tap the back button", when.tapID(ids.BACK_BUTTON), async () => {
                    When("I go to settings", when.tapID(ids.MENU_ICON), async () => {
                        When("I tap on 'Activity History'", when.tapID(ids.MENU_ITEM("Activity History")), async () => {
                            Then("I should be on the Activity history screen", then.idVisible(ids.ACTIVITY_HISTORY_SCREEN))
                        })
                    })
                })
            })
        })
        When("I pull down the activity history page to refresh", when.swipeFromText(twoDaysAgoDate, "down", "fast"), async () => {
            When("I tap the close button", when.closeScreen("Activity history"), async () => {
                Then("I should now have 420 YuCoin in the top right hand corner", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(420)))
                Then("I should see '400 YuCoin today'", then.textVisible("400 YuCoin today"))
            })
        })
    })
})
