import { Feature, Scenario, Given, When, Then, FeatureOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as commonThen from "../_common/then";
import * as commonGiven from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";
import moment from "moment";
import { GENERIC_AUTH_PASSWORD } from "../../_utils/users/auth";

const MILESTTONE_DETAILS_ASSERTIONS = [
  {
    position: 1,
    titleAssertion: "Gym discounts",
    descriptionAssertions: ["Get discounted access to leading gym providers like Fitness First and Hussle.", "Stay active your way, with savings on memberships and premium facilities across the UK."],
  },
  {
    position: 2,
    titleAssertion: "Boots vouchers",
    descriptionAssertions: ["Boots makes it easy for you to stay healthy and feel your best.", "Find a wide selection of healthcare essentials, beauty brands, and prescription services."],
  },
  {
    position: 3,
    titleAssertion: "Free Ocushield online eye screening",
    descriptionAssertions: ["Spot early signs of eye strain, fatigue, or vision changes before they impact your daily life.", "Get personalised insights into your eye health — all from the comfort of home."],
  },
  {
    position: 4,
    titleAssertion: "20% off Oakley",
    descriptionAssertions: ["Enjoy advanced lens technology designed for clarity, comfort, and protection.", "Choose from iconic styles built for sport, adventure, and everyday wear."],
  },
  {
    position: 5,
    titleAssertion: "12% off sportsshoes.com",
    descriptionAssertions: ["Save on top brands like Nike, ASICS, Adidas, and more.", "Shop the latest in performance footwear, activewear, and gear for every sport and fitness level."],
  },
  {
    position: 6,
    titleAssertion: "Free at-home Thriva blood test kit",
    descriptionAssertions: ["Monitor key aspects of your wellbeing including your iron levels, cholesterol, diabetes risk, and more.", "Access detailed reports and expert advice from the comfort of your home."],
  },
  {
    position: 7,
    titleAssertion: "Alo Moves 30-day free trial + 25% off memberships",
    descriptionAssertions: ["Access unlimited yoga, fitness, and mindfulness classes led by world-class instructors.", "Stream anytime, anywhere — at home or on the go — with workouts tailored to every level and goal."],
  },
  {
    position: 8,
    titleAssertion: "Free Living DNA test kit",
    descriptionAssertions: ["Get insights into your family heritage, ethnic origins, and even health-related genetic traits.", "Make more informed decisions through wellness reports that give you information on how your genetics may influence aspects of your health."],
  },
  {
    position: 9,
    titleAssertion: "Choose one of the following:",
    descriptionAssertions: ["Free Garmin Forerunner 55 smartwatch", "Free Shokz OpenRun Pro 2 headset", "£100 GOSH donation"],
  },
  {
    position: 10,
    titleAssertion: "Choose one of the following:",
    descriptionAssertions: ["Free Uptime subscription", "Free Lifesum subscription"],
  },
  {
    position: 11,
    titleAssertion: "Free Bupa Be.Motivated health assessment",
    descriptionAssertions: ["Get ahead of your health with a comprehensive in-person health assessment.", "Receive expert advice and follow-ups that will empower you to set and achieve your health goals."],
  },
  {
    position: 12,
    titleAssertion: "Free home treadmill",
    descriptionAssertions: ["Stay active at home with a compact treadmill, perfect for home offices and small spaces.", "Walk your way to better health with app-connected tracking, remote control, and a smooth, quiet experience."],
  },
];

const BUSINESS_ACCOUNT_ID = data.BUSINESS_WELLBEING_PASS.business.data.businessAccountId;
const BATTLE_PASS_START_LOCAL_DATE = moment().subtract(1, "year").format("YYYY-MM-DD");
const BATTLE_PASS_END_LOCAL_DATE = moment().subtract(1, "year").add(24, "months").subtract(1, "day");
const BATTLE_PASS_REWARD_PASS_ID = "bupa-group-health-uk-v2";

Feature("Wellbeing pass", async () => {
  Scenario("I can check all the milestone details", scenario.start, async () => {
    Given("A 'business_product_created' event was emitted", commonGiven.triggerProductCreated(BUSINESS_ACCOUNT_ID, BUSINESS_ACCOUNT_ID, BATTLE_PASS_REWARD_PASS_ID, BATTLE_PASS_START_LOCAL_DATE), async () => {
      Given("I login and go to the rewards screen", commonGiven.logInAndGoToTab("rewards", data.CUSTOMER_WELLBEING_PASS_01.customer, GENERIC_AUTH_PASSWORD), async () => {
        When("I go to the reward pass screen", when.tapText("Wellbeing Pass"), async () => {
          for (const { position, titleAssertion, descriptionAssertions } of MILESTTONE_DETAILS_ASSERTIONS) {
            When(`I scroll until the milestone (position ${position})`, when.scrollUntilIdVisible(ids.BATTLE_PASS_LIST, ids.BATTLE_PASS_LIST_ITEM(position), "right"), async () => {
              When(`I press on it (position ${position})`, when.tapID(ids.BATTLE_PASS_LIST_ITEM(position)), async () => {
                Then(`I can see the reward title (position ${position})`, then.idVisible(ids.ITEM_DETAILS_HALF_MODAL_TITLE(titleAssertion)));

                When("I scroll to the bottom of the page", when.scrollFromID(ids.ITEM_DETAILS_HALF_MODAL_TITLE(titleAssertion), "up", "fast"), async () => {
                  Then(`I can see the reward descriptions (position ${position})`, commonThen.assertMultipleTextsVisible(descriptionAssertions));

                  When("I press the got it button", when.tapID(ids.HALF_MODAL_CTA), async () => {
                    Then("I'm back at the reward pass screen", then.textVisible("Wellbeing pass"));
                  });
                });
              });
            });
          }
        });
      });
    });
  });
});
