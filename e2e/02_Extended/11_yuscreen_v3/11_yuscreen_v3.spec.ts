import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip, FeatureSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { AUTH_31, AUTH_32, AUTH_ALPHA, BUSINESS_ACCOUNT_3, BUSINESS_ACCOUNT_4, BUSINESS_EMPLOYEE_31, BUSINESS_EMPLOYEE_32, CGP_31, CGP_32_GCI, CGP_32_GIP, CGP_32_RGL, CUSTOMER_31, CUSTOMER_32, CUSTOMER_ALPHA } from "@data";
import { AVATAR_ITEM, PRODUCT_TOOL_TIP, BUTTON_CLOSE_HEADER, TEXT_TEMPLATE, BACK_BUTTON} from "@ids";


Feature("I should be able to use the yuscreen v3", async()=>{
    Scenario("As a user with the v3 yuscreen enabled, I shoul be able to use it correctly", scenario.start, async()=>{
        Given("I login as a user with yuscreen v3", given.loginToYuScreen(true, CUSTOMER_31, AUTH_31), async()=>{
                Then("I should see the newly designed yuscreen", then.onYuscreenV3(CUSTOMER_31))
                Then("I shoul see the item provided by my employer", then.idVisible(AVATAR_ITEM("compass", "active")))
            })
            When("I tap the active compass", when.tapID(AVATAR_ITEM("compass", "active")), async()=>{
                Then("I should see the product modal", then.idVisible(PRODUCT_TOOL_TIP("common", "Instant group life", "6", 10)))
                Then("I should see the inspect CTA", then.textVisible("Inspect"))
            })
            When("I tap inspect", when.tapText("Inspect"), async()=>{
                Then("I should be on the product details screen", then.onProductDetails("Common", "Instant Group Life", "6", 10))
            })
            When("I tap Policy Details", when.tapText("Policy Details"), async()=>{
                Then("I should be on the certificate screen", then.onCertificate("Instant Group Life", "6", CUSTOMER_31, CGP_31, BUSINESS_ACCOUNT_3, BUSINESS_EMPLOYEE_31 ))
            })
        })

        Scenario("As a user with 3 products, I should see these all in yuscreen v3", scenario.start, async()=>{
            Given("I login as a user with yuscreen v3", given.loginToYuScreen(true, CUSTOMER_32, AUTH_32), async () => {
                Then("I should see the newly designed yuscreen", then.onYuscreenV3(CUSTOMER_32))
                Then("I should see the unlock compass", then.idVisible(AVATAR_ITEM("compass", "active")))
                Then("I should see the unlocked map", then.idVisible(AVATAR_ITEM("map", "active")))
                Then("I should see the unlocked binoculars", then.idVisible(AVATAR_ITEM("binoculars", "active")))
                })
            When("I tap the active compass", when.tapID(AVATAR_ITEM("compass", "active")), async () => {
                Then("I should see the product modal", then.idVisible(PRODUCT_TOOL_TIP("epic", "Registered group life", "9", 10)))
                Then("I should see the inspect CTA", then.textVisible("Inspect"))
                })
            When("I tap inspect", when.tapText("Inspect"), async () => {
                Then("I should be on the product details screen", then.onProductDetails("Epic", "Registered Group Life", "9", 10))
                })
            When("I tap Policy Details", when.tapText("Policy Details"), async () => {
                Then("I should be on the certificate screen", then.onCertificate("Registered Group Life", "9", CUSTOMER_32, CGP_32_RGL, BUSINESS_ACCOUNT_4, BUSINESS_EMPLOYEE_32))
                })
            When("I close this screen", when.tapID(BUTTON_CLOSE_HEADER("button_only")), async()=>{
                Then("I should be on the product details screen", then.idVisible(TEXT_TEMPLATE("Documents")))
                })
            When("I tap the back button", when.tapID(BACK_BUTTON), async()=>{
                Then("I should be back on the yuscreen and see the unlocked map", then.idVisible(AVATAR_ITEM("map", "active")))
                })
            When("I tap the active map", when.tapID(AVATAR_ITEM("map", "active")), async () => {
                Then("I should see the product modal", then.idVisible(PRODUCT_TOOL_TIP("epic", "Group income protection", "9", 10)))
                Then("I should see the inspect CTA", then.textVisible("Inspect"))
                }) 
            When("I tap inspect", when.tapText("Inspect"), async () => {
                Then("I should be on the product details screen", then.onProductDetails("Epic", "Group Income Protection", "9", 10))
            })
            When("I tap Policy Details", when.tapText("Policy Details"), async () => {
                Then("I should be on the certificate screen", then.onCertificate("Group Income Protection", "9", CUSTOMER_32, CGP_32_GIP, BUSINESS_ACCOUNT_4, BUSINESS_EMPLOYEE_32))
            })
            When("I close this screen", when.tapID(BUTTON_CLOSE_HEADER("button_only")), async () => {
                Then("I should be on the product details screen", then.idVisible(TEXT_TEMPLATE("Documents")))
            })
            When("I tap the back button", when.tapID(BACK_BUTTON), async () => {
                Then("I should be back on the yuscreen and see the unlocked map", then.idVisible(AVATAR_ITEM("map", "active")))
            })
            When("I tap the active binoculars", when.tapID(AVATAR_ITEM("binoculars", "active")), async () => {
                Then("I should see the product modal", then.idVisible(PRODUCT_TOOL_TIP("epic", "Group critical illness", "9", 10)))
                Then("I should see the inspect CTA", then.textVisible("Inspect"))
            })
            When("I tap inspect", when.tapText("Inspect"), async () => {
                Then("I should be on the product details screen", then.onProductDetails("Epic", "Group Critical Illness", "9", 10))
            })
            When("I tap Policy Details", when.tapText("Policy Details"), async () => {
                Then("I should be on the certificate screen", then.onCertificate("Group Critical Illness", "9", CUSTOMER_32, CGP_32_GCI, BUSINESS_ACCOUNT_4, BUSINESS_EMPLOYEE_32))
            })
            When("I close this screen", when.tapID(BUTTON_CLOSE_HEADER("button_only")), async () => {
                Then("I should be on the product details screen", then.idVisible(TEXT_TEMPLATE("Documents")))
            })
            When("I tap the back button", when.tapID(BACK_BUTTON), async () => {
                Then("I should be back on the yuscreen and see the unlocked map", then.idVisible(AVATAR_ITEM("map", "active")))
            })
        })

        Scenario("As an alpha user with v3 enabled, I should not see any products", scenario.start, async()=>{
            Given("I login to the yuscreen", given.loginToYuScreen(true, CUSTOMER_ALPHA, AUTH_ALPHA), async()=>{
                Then("I should be on yuscreen v3", then.onYuscreenV3(CUSTOMER_ALPHA))
                Then("I should not see any products", then.alphaProductsNotVisible)
            })
        })
        
    })
