import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip, FeatureSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { AUTH_31, AUTH_32, AUTH_33, AUTH_34, AUTH_ALPHA, BUSINESS_ACCOUNT_3, BUSINESS_ACCOUNT_4, BUSINESS_EMPLOYEE_31, BUSINESS_EMPLOYEE_32, CGP_31, CGP_32_GCI, CGP_32_GIP, CGP_32_RGL, CUSTOMER_31, CUSTOMER_32, CUSTOMER_33, CUSTOMER_34, CUSTOMER_ALPHA } from "@data";
import { AVATAR_ITEM, PRODUCT_TOOL_TIP, BUTTON_CLOSE_HEADER, TEXT_TEMPLATE, BACK_BUTTON, ADD_BENEFICIARY, INPUT_BENEFICIARY_DETAIL, BENEFICIARY_CONTINUE, BENEFICIARY_DETAILS, BENEFICIARY_SHARE_INPUT, BENEFICIARIES_PERCENTAGE_ERROR, BENEFICIARY_DONE, BENEFICIARY_DEFAULT_MODAL, PRODUCT_DETAILS_SCROLL_VIEW } from "@ids";


Feature("I should be able to use the yuscreen v3", async()=>{
    Scenario("As a user with the v3 yuscreen enabled, I shoul be able to use it correctly", scenario.start, async()=>{
        Given("I login as a user with yuscreen v3", given.loginToYuScreen(true, CUSTOMER_31, AUTH_31), async()=>{
                Then("I should see the newly designed yuscreen", then.onYuscreenV3(CUSTOMER_31))
                Then("I shoul see the item provided by my employer", then.avatarItemVisible("compass_active", "active"))
            })
            When("I tap the active compass", when.tapAvatarItem("compass_active", "active"), async()=>{
                Then("I should be on the product screen", then.idVisible(TEXT_TEMPLATE("Instant Group Life")))
            })

            When("I tap Policy Details", when.tapText("Policy Details"), async()=>{
                Then("I should be on the certificate screen", then.onCertificate("Instant Group Life", CUSTOMER_31, CGP_31, BUSINESS_ACCOUNT_3, BUSINESS_EMPLOYEE_31 ))
            })
        })

        Scenario("As a user with 3 products, I should see these all in yuscreen v3", scenario.start, async()=>{
            Given("I login as a user with yuscreen v3", given.loginToYuScreen(true, CUSTOMER_32, AUTH_32), async () => {
                Then("I should see the newly designed yuscreen", then.onYuscreenV3(CUSTOMER_32))
                Then("I should see the unlock compass", then.avatarItemVisible("compass_active", "active"))
                Then("I should see the unlocked map", then.avatarItemVisible("map_active", "active"))
                Then("I should see the unlocked binoculars", then.avatarItemVisible("binoculars_active", "active"))
                })
            When("I tap the active compass", when.tapAvatarItem("compass_active", "active"), async()=>{
                Then("I should be on the product screen", then.idVisible(TEXT_TEMPLATE("Registered Group Life")))
                })
            When("I tap Policy Details", when.tapText("Policy Details"), async () => {
                Then("I should be on the certificate screen", then.onCertificate("Registered Group Life", CUSTOMER_32, CGP_32_RGL, BUSINESS_ACCOUNT_4, BUSINESS_EMPLOYEE_32))
                })
            When("I close this screen", when.tapID(BUTTON_CLOSE_HEADER("button_only")), async()=>{
                Then("I should be on the product details screen", then.idVisible(TEXT_TEMPLATE("Documents")))
                })
            When("I tap the back button", when.tapID(BACK_BUTTON), async()=>{
                Then("I should be back on the yuscreen and see the unlocked map", then.avatarItemVisible("map_active", "active"))
                })
            When("I tap the active map", when.tapAvatarItem("map_active", "active"), async () => {
                Then("I should be on the product screen", then.idVisible(TEXT_TEMPLATE("Group Income Protection")))
                }) 
            When("I tap Policy Details", when.tapText("Policy Details"), async () => {
                Then("I should be on the certificate screen", then.onCertificate("Group Income Protection", CUSTOMER_32, CGP_32_GIP, BUSINESS_ACCOUNT_4, BUSINESS_EMPLOYEE_32))
            })
            When("I close this screen", when.tapID(BUTTON_CLOSE_HEADER("button_only")), async () => {
                Then("I should be on the product details screen", then.idVisible(TEXT_TEMPLATE("Documents")))
            })
            When("I tap the back button", when.tapID(BACK_BUTTON), async () => {
                Then("I should be back on the yuscreen and see the unlocked map", then.avatarItemVisible("map_active", "active"))
            })
            When("I tap the active binoculars", when.tapAvatarItem("binoculars_active", "active"), async () => {
                Then("I should be on the product screen", then.idVisible(TEXT_TEMPLATE("Group Critical Illness")))
            })
            When("I tap Policy Details", when.tapText("Policy Details"), async () => {
                Then("I should be on the certificate screen", then.onCertificate("Group Critical Illness", CUSTOMER_32, CGP_32_GCI, BUSINESS_ACCOUNT_4, BUSINESS_EMPLOYEE_32))
            })
            When("I close this screen", when.tapID(BUTTON_CLOSE_HEADER("button_only")), async () => {
                Then("I should be on the product details screen", then.idVisible(TEXT_TEMPLATE("Documents")))
            })
            When("I tap the back button", when.tapID(BACK_BUTTON), async () => {
                Then("I should be back on the yuscreen and see the unlocked map", then.avatarItemVisible("map_active", "active"))
            })
        })

        Scenario("As an alpha user with v3 enabled, I should not see any products", scenario.start, async()=>{
            Given("I login to the yuscreen", given.loginToYuScreen(true, CUSTOMER_ALPHA, AUTH_ALPHA), async()=>{
                Then("I should be on yuscreen v3", then.onYuscreenV3(CUSTOMER_ALPHA))
                Then("I should not see any products", then.alphaProductsNotVisible)
            })
        })

        Scenario("As a user with the compass unlocked, I can add beneficiaries", scenario.start, async()=>{
            Given("I login as a user with yuscreen v3", given.loginToYuScreen(true, CUSTOMER_32, AUTH_32), async () => {
                When("I tap the active compass", when.tapAvatarItem("compass_active", "active"), async () => {
                    Then("I should be on the product screen", then.idVisible(TEXT_TEMPLATE("Registered Group Life")))
                })
                When("I scroll to the add beneficiary button", when.scrollUntilIdVisible(PRODUCT_DETAILS_SCROLL_VIEW, ADD_BENEFICIARY, "down"), async () => {
                    When("I tap Add a beneficiary", when.tapID(ADD_BENEFICIARY), async () => {
                        Then("I should see the add beneficiary modal", then.textVisible("Beneficiary Details"))
                    })
                })
                When("I enter the first name of my beneficiary", when.typeViaID(INPUT_BENEFICIARY_DETAIL("First name"), "Harry"), async () => {
                    Then("I should see that in the field", then.textVisible("Harry"))
                })
                When("I enter the last name of my beneficiary", when.typeViaID(INPUT_BENEFICIARY_DETAIL("Last name"), "Todd"), async () => {
                    Then("I should see that in the field", then.textVisible("Todd"))
                })
                When("I enter an incorrect phone number of my beneficiary", when.typeViaID(INPUT_BENEFICIARY_DETAIL("Phone number"), "0776969"), async () => {
                    Then("I should see that in the field", then.textVisible("0776969"))
                })
                When("I enter the first name of my beneficiary", when.typeViaID(INPUT_BENEFICIARY_DETAIL("Relation"), "Daddy"), async () => {
                    Then("I should see that in the field", then.textVisible("Daddy"))
                    Then("I should see the correct error message for the phone number", then.textVisible("Not a valid UK phone number"))
                })
                When("I correct the phone number of my beneficiary", when.typeViaID(INPUT_BENEFICIARY_DETAIL("Phone number"), "2500"), async () => {
                    Then("I should see that in the field", then.textVisible("07769692500"))
                })
                When("I tap continue", when.tapID(BENEFICIARY_CONTINUE), async () => {
                    Then("I should be on the Edit Beneficiaries page", then.textVisible("Edit Beneficiaries"))
                    Then("I should see the correct details of the first beneficiary", then.idVisible(BENEFICIARY_DETAILS(100, "Harry", "Todd", "Daddy")))
                })
                When("I clear the share input", when.clearFieldByID(BENEFICIARY_SHARE_INPUT), async () => {
                    When("I type 50 in the share input", when.typeViaID(BENEFICIARY_SHARE_INPUT, "50"), async () => {
                        Then("I should see that in the field", then.textVisible("50"))
                        Then("I should see the correct error", then.idVisible(BENEFICIARIES_PERCENTAGE_ERROR))
                    })
                })
                When("I clear the share input", when.clearFieldByID(BENEFICIARY_SHARE_INPUT), async () => {
                    When("I type 100 in the share input", when.typeViaID(BENEFICIARY_SHARE_INPUT, "100"), async () => {
                        Then("I should see that in the field", then.textVisible("100"))
                        Then("I should no longer see the error", then.idNotVisible(BENEFICIARIES_PERCENTAGE_ERROR))
                    })
                })
                When("I tap Done", when.tapID(BENEFICIARY_DONE), async () => {
                    Then("I should be on the default beneficiaries confirmation page", then.idVisible(BENEFICIARY_DEFAULT_MODAL))
                    When("I tap Yes", when.tapText("Yes"), async () => {
                        When("I scroll to the add beneficiary button", when.scrollUntilIdVisible(PRODUCT_DETAILS_SCROLL_VIEW, ADD_BENEFICIARY, "down"), async () => {
                            Then("I should see Harry Todd as a beneficiary", then.idVisible(BENEFICIARY_DETAILS(100, "Harry", "Todd", "Daddy")))
                        })
                    })
                })

                When("I tap add a beneficiary", when.tapID(ADD_BENEFICIARY), async () => {
                    When("I add a beneficiary", when.addBeneficiary("Lois", "Kent", "07123456789", "Wife"), async () => {
                        Then("I should see Harry Todd as a 50% beneficiary", then.idVisible(BENEFICIARY_DETAILS(50, "Harry", "Todd", "Daddy")))
                        Then("I should see Lois Kent as a 50% beneficiary", then.idVisible(BENEFICIARY_DETAILS(50, "Lois", "Kent", "Wife")))
                    })                    
                })
                
                When("I tap add a beneficiary", when.tapID(ADD_BENEFICIARY), async () => {
                    When("I add a beneficiary", when.addBeneficiary("Krypto", "Kent", "07123456789", "Good Boy"), async () => {
                        Then("I should see Harry Todd as a 33% beneficiary", then.idVisible(BENEFICIARY_DETAILS(33, "Harry", "Todd", "Daddy")))
                        Then("I should see Lois Kent as a 33% beneficiary", then.idVisible(BENEFICIARY_DETAILS(33, "Lois", "Kent", "Wife")))
                        Then("I should see Krypto Kent as a 34% beneficiary", then.idVisible(BENEFICIARY_DETAILS(34, "Krypto", "Kent", "Good Boy")))
                    })
                })
                When("I tap Done", when.tapID(BENEFICIARY_DONE), async () => {
                    Then("I should be on the default beneficiaries confirmation page", then.idVisible(BENEFICIARY_DEFAULT_MODAL))
                    When("I tap Yes", when.tapText("Yes"), async () => {
                        When("I scroll to the add beneficiary button", when.scrollUntilIdVisible(PRODUCT_DETAILS_SCROLL_VIEW, ADD_BENEFICIARY, "down"), async () => {
                            Then("I should see Harry Todd as a 33% beneficiary", then.idVisible(BENEFICIARY_DETAILS(33, "Harry", "Todd", "Daddy")))
                            Then("I should see Lois Kent as a 33% beneficiary", then.idVisible(BENEFICIARY_DETAILS(33, "Lois", "Kent", "Wife")))
                            Then("I should see Krypto Kent as a 34% beneficiary", then.idVisible(BENEFICIARY_DETAILS(34, "Krypto", "Kent", "Good Boy")))
                        })
                    })
                })
            })
        })

        Scenario("As a user with beneficiaries added, I can view them", scenario.start, async()=>{
            Given("I login as a user with yuscreen v3", given.loginToYuScreen(true, CUSTOMER_33, AUTH_33), async () => {
                When("I tap the active compass", when.tapAvatarItem("compass_active", "active"), async () => {
                    Then("I should be on the product screen", then.idVisible(TEXT_TEMPLATE("Registered Group Life")))
                    When("I scroll to the add beneficiary button", when.scrollUntilIdVisible(PRODUCT_DETAILS_SCROLL_VIEW, ADD_BENEFICIARY, "down"), async () => {
                        Then("I should see Alfred Pennyworth as a 100% beneficiary", then.idVisible(BENEFICIARY_DETAILS(100, "Alfred", "Pennyworth", "Butler")))
                    })
                })
            })
        })

        Scenario("As a user with beneficiaries toggled off, I should not see any", scenario.start, async()=>{
            Given("I login as a user with yuscreen v3", given.loginToYuScreen(true, CUSTOMER_34, AUTH_34), async () => {
                When("I tap the active compass", when.tapAvatarItem("compass_active", "active"), async () => {
                    Then("I should be on the product screen", then.idVisible(TEXT_TEMPLATE("Registered Group Life")))
                    Then("I should not see Beneficiaries section", then.textNotVisible("Beneficiaries"))
                    Then("I should not see Bruce Wayne as a 100% beneficiary", then.idNotVisible(BENEFICIARY_DETAILS(100, "Bruce", "Wayne", "Bossman")))
                })
            })
        })
        
})
