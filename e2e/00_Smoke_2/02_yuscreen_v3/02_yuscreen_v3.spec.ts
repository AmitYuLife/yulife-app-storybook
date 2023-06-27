import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, FeatureSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { AUTH_31, AUTH_32, AUTH_33, AUTH_34, AUTH_74, AUTH_ALPHA, BUSINESS_ACCOUNT_3, BUSINESS_ACCOUNT_4, BUSINESS_EMPLOYEE_31, BUSINESS_EMPLOYEE_32, CGP_31, CGP_32_GCI, CGP_32_GIP, CGP_32_RGL, CGP_74, CUSTOMER_31, CUSTOMER_32, CUSTOMER_33, CUSTOMER_34, CUSTOMER_74, CUSTOMER_ALPHA } from "@data";
import * as ids from "@ids";

// Skipping as v3 yuscreen has been purged. Will purge at a later date
FeatureSkip("I should be able to use the yuscreen v3", async()=>{
    Scenario("As a user with the yuscreen v3 enabled, I should be able to use it correctly", scenario.start, async()=>{
        Given("I login as a user with yuscreen", given.loginToYuScreen(false, CUSTOMER_74, AUTH_74), async()=>{
                Then("I should see the newly designed yuscreen", then.onYuscreenV3(CUSTOMER_74))
                Then("I shoul see the item provided by my employer", then.avatarItemVisible("compass_active", "active"))
            })
            When("I tap the active compass", when.tapAvatarItem("compass_active", "active"), async()=>{
                Then("I should be on the product screen", then.idVisible(ids.TEXT_TEMPLATE("Life Insurance")))
            })
            When("I tap Policy Details", when.tapText("Policy details"), async()=>{
                Then("I should be on the certificate screen", then.onCertificate("Instant Group Life", CUSTOMER_74, CGP_74, BUSINESS_ACCOUNT_3, CGP_74 ))
            })
        })

        Scenario("As a user with 3 products, I should see these all in yuscreen", scenario.start, async()=>{
            Given("I login as a user with yuscreen", given.loginToYuScreen(false, CUSTOMER_32, AUTH_32), async () => {
                Then("I should see the newly designed yuscreen", then.onYuscreenV3(CUSTOMER_32))
                Then("I should see the unlocked compass", then.avatarItemVisible("compass_active", "active"))
                Then("I should see the unlocked map", then.avatarItemVisible("map_active", "active"))
                Then("I should see the unlocked binoculars", then.avatarItemVisible("binoculars_active", "active"))
                })
            When("I tap the active compass", when.tapAvatarItem("compass_active", "active"), async()=>{
                Then("I should be on the product screen", then.idVisible(ids.TEXT_TEMPLATE("Life Insurance")))
                })
            When("I tap Policy details", when.tapText("Policy details"), async () => {
                Then("I should be on the certificate screen", then.onCertificate("Registered Group Life", CUSTOMER_32, CGP_32_RGL, BUSINESS_ACCOUNT_4, CGP_32_RGL))
                })
            When("I close this screen", when.tapID(ids.BUTTON_CLOSE_HEADER("button_only")), async()=>{
                Then("I should be on the product details screen", then.idVisible(ids.TEXT_TEMPLATE("Policy documents")))
                })
            When("I tap the back button", when.tapID(ids.BUTTON_CLOSE_HEADER("button_only")), async()=>{
                Then("I should be back on the yuscreen and see the unlocked map", then.avatarItemVisible("map_active", "active"))
                })
            When("I tap the active map", when.tapAvatarItem("map_active", "active"), async () => {
                Then("I should be on the product screen", then.idVisible(ids.TEXT_TEMPLATE("Income Protection")))
                }) 
            When("I tap Policy Details", when.tapText("Policy details"), async () => {
                Then("I should be on the certificate screen", then.onCertificate("Group Income Protection", CUSTOMER_32, CGP_32_GIP, BUSINESS_ACCOUNT_4, CGP_32_GIP))
            })
            When("I close this screen", when.tapID(ids.BUTTON_CLOSE_HEADER("button_only")), async () => {
                Then("I should be on the product details screen", then.idVisible(ids.TEXT_TEMPLATE("Policy documents")))
            })
            When("I tap the back button", when.tapID(ids.BUTTON_CLOSE_HEADER("button_only")), async () => {
                Then("I should be back on the yuscreen and see the unlocked map", then.avatarItemVisible("map_active", "active"))
            })
            When("I tap the active binoculars", when.tapAvatarItem("binoculars_active", "active"), async () => {
                Then("I should be on the product screen", then.idVisible(ids.TEXT_TEMPLATE("Critical Illness")))
            })
            When("I tap Policy Details", when.tapText("Policy details"), async () => {
                Then("I should be on the certificate screen", then.onCertificate("Group Critical Illness", CUSTOMER_32, CGP_32_GCI, BUSINESS_ACCOUNT_4, CGP_32_GCI))
            })
            When("I close this screen", when.tapID(ids.BUTTON_CLOSE_HEADER("button_only")), async () => {
                Then("I should be on the product details screen", then.idVisible(ids.TEXT_TEMPLATE("Policy documents")))
            })
            When("I tap the back button", when.tapID(ids.BUTTON_CLOSE_HEADER("button_only")), async () => {
                Then("I should be back on the yuscreen and see the unlocked map", then.avatarItemVisible("map_active", "active"))
            })
        })

        Scenario("As an alpha user with enabled, I should not see any products", scenario.start, async()=>{
            Given("I login to the yuscreen", given.loginToYuScreen(false, CUSTOMER_ALPHA, AUTH_ALPHA), async()=>{
                Then("I should be on yuscreen", then.onYuscreenV3(CUSTOMER_ALPHA))
                Then("I should not see any products", then.alphaProductsNotVisible)
            })
        })

        Scenario("As a user with the compass unlocked, I can add beneficiaries", scenario.start, async()=>{
            Given("I login as a user with yuscreen", given.loginToYuScreen(false, CUSTOMER_32, AUTH_32), async () => {
                When("I tap the active compass", when.tapAvatarItem("compass_active", "active"), async () => {
                    Then("I should be on the product screen", then.idVisible(ids.TEXT_TEMPLATE("Life Insurance")))
                })
                When("I scroll to the add beneficiary button", when.swipeFromText("Policy documents", "up", "fast"), async () => {
                    When("I tap Add a beneficiary", when.tapID(ids.ADD_BENEFICIARY), async () => {
                        Then("I should see the add beneficiary modal", then.textVisible("Beneficiary Details"))
                    })
                })
                When("I enter the first name of my beneficiary", when.typeViaID(ids.INPUT_BENEFICIARY_DETAIL("First name"), "Harry"), async () => {
                    Then("I should see that in the field", then.textVisible("Harry"))
                })
                When("I enter the last name of my beneficiary", when.typeViaID(ids.INPUT_BENEFICIARY_DETAIL("Last name"), "Todd"), async () => {
                    Then("I should see that in the field", then.textVisible("Todd"))
                })
                When("I enter a correct phone number of my beneficiary", when.typeViaID(ids.INPUT_BENEFICIARY_DETAIL("Phone number"), "07769692500"), async () => {
                    Then("I should see that in the field", then.textVisible("07769692500"))
                })
                When("I enter the first name of my beneficiary", when.typeViaID(ids.INPUT_BENEFICIARY_DETAIL("Relation"), "Daddy"), async () => {
                    Then("I should see that in the field", then.textVisible("Daddy"))
                })
                When("I tap continue", when.tapID(ids.BENEFICIARY_CONTINUE), async () => {
                    Then("I should be on the Edit Beneficiaries page", then.textVisible("Edit Beneficiaries"))
                    Then("I should see the correct details of the first beneficiary", then.idVisible(ids.BENEFICIARY_DETAILS(100, "Harry", "Todd", "Daddy")))
                })
                When("I clear the share input", when.clearFieldByID(ids.BENEFICIARY_SHARE_INPUT), async () => {
                    When("I type 50 in the share input", when.typeViaID(ids.BENEFICIARY_SHARE_INPUT, "50"), async () => {
                        Then("I should see that in the field", then.textVisible("50"))
                        Then("I should see the correct error", then.idVisible(ids.BENEFICIARIES_PERCENTAGE_ERROR))
                    })
                })
                When("I clear the share input", when.clearFieldByID(ids.BENEFICIARY_SHARE_INPUT), async () => {
                    When("I type 100 in the share input", when.typeViaID(ids.BENEFICIARY_SHARE_INPUT, "100"), async () => {
                        Then("I should see that in the field", then.textVisible("100"))
                        Then("I should no longer see the error", then.idNotVisible(ids.BENEFICIARIES_PERCENTAGE_ERROR))
                    })
                })
                When("I tap Done", when.tapID(ids.BENEFICIARY_DONE), async () => {
                    Then("I should be on the default beneficiaries confirmation page", then.idVisible(ids.BENEFICIARY_DEFAULT_MODAL))
                    When("I tap Yes", when.tapText("Yes"), async () => {
                        When("I scroll to the add beneficiary button", when.scrollFromID(ids.ADD_BENEFICIARY, "up", "slow"), async () => {
                            Then("I should see Harry Todd as a beneficiary", then.idVisible(ids.BENEFICIARY_DETAILS(100, "Harry", "Todd", "Daddy")))
                        })
                    })
                })

                When("I tap add a beneficiary", when.tryTapText("Add a beneficiary"), async () => {
                    When("I add a beneficiary", when.addBeneficiary("Lois", "Kent", "07123456789", "Wife"), async () => {
                        Then("I should see Harry Todd as a 50% beneficiary", then.idVisible(ids.BENEFICIARY_DETAILS(50, "Harry", "Todd", "Daddy")))
                        Then("I should see Lois Kent as a 50% beneficiary", then.idVisible(ids.BENEFICIARY_DETAILS(50, "Lois", "Kent", "Wife")))
                    })                    
                })
                
                When("I tap add a beneficiary", when.tapID(ids.ADD_BENEFICIARY), async () => {
                    When("I add a beneficiary", when.addBeneficiary("Krypto", "Kent", "07123456789", "Good Boy"), async () => {
                        Then("I should see Harry Todd as a 33% beneficiary", then.idVisible(ids.BENEFICIARY_DETAILS(33, "Harry", "Todd", "Daddy")))
                        Then("I should see Lois Kent as a 33% beneficiary", then.idVisible(ids.BENEFICIARY_DETAILS(33, "Lois", "Kent", "Wife")))
                        Then("I should see Krypto Kent as a 34% beneficiary", then.idVisible(ids.BENEFICIARY_DETAILS(34, "Krypto", "Kent", "Good Boy")))
                    })
                })
                When("I tap Done", when.tapID(ids.BENEFICIARY_DONE), async () => {
                    Then("I should be on the default beneficiaries confirmation page", then.idVisible(ids.BENEFICIARY_DEFAULT_MODAL))
                    When("I tap Yes", when.tapText("Yes"), async () => {
                        When("I scroll to the add beneficiary button", when.scrollFromID(ids.ADD_BENEFICIARY, "up", "slow"), async () => {
                            Then("I should see Harry Todd as a 33% beneficiary", then.idVisible(ids.BENEFICIARY_DETAILS(33, "Harry", "Todd", "Daddy")))
                            Then("I should see Lois Kent as a 33% beneficiary", then.idVisible(ids.BENEFICIARY_DETAILS(33, "Lois", "Kent", "Wife")))
                            Then("I should see Krypto Kent as a 34% beneficiary", then.idVisible(ids.BENEFICIARY_DETAILS(34, "Krypto", "Kent", "Good Boy")))
                        })
                    })
                })
            })
        })

        Scenario("As a user with beneficiaries added, I can view them", scenario.start, async()=>{
            Given("I login as a user with yuscreen", given.loginToYuScreen(false, CUSTOMER_33, AUTH_33), async () => {
                When("I tap the active compass", when.tapAvatarItem("compass_active", "active"), async () => {
                    Then("I should be on the product screen", then.idVisible(ids.TEXT_TEMPLATE("Life Insurance")))
                    When("I scroll to the add beneficiary button", when.swipeFromText("Policy documents", "up", "fast"), async () => {
                        Then("I should see Alfred Pennyworth as a 100% beneficiary", then.idVisible(ids.BENEFICIARY_DETAILS(100, "Alfred", "Pennyworth", "Butler")))
                    })
                })
            })
        })

        Scenario("As a user with beneficiaries toggled off, I should not see any", scenario.start, async()=>{
            Given("I login as a user with yuscreen", given.loginToYuScreen(false, CUSTOMER_74, AUTH_74), async () => {
                When("I tap the active compass", when.tapAvatarItem("compass_active", "active"), async () => {
                    Then("I should be on the product screen", then.idVisible(ids.TEXT_TEMPLATE("Life Insurance")))
                    Then("I should not see Beneficiaries section", then.textNotVisible("Beneficiaries"))
                    Then("I should not see Bruce Wayne as a 100% beneficiary", then.idNotVisible(ids.BENEFICIARY_DETAILS(100, "Bruce", "Wayne", "Bossman")))
                })
            })
        })
        
})
