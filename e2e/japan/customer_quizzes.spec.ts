import { Feature, Scenario, Given, When, Then, ScenarioOnly, WhenSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario";
import * as given from "../activity/_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "./_data";
import * as ids from "@ids";
import { oneHundredCharacters, oneThousandAndOneCharacters } from "../activity/FWQ/_resources/fixtures";

const locale = process.env.TARGET_LOCALE || "ja-JP";

Feature("Quizzes and questionnaires", async () => {
  Scenario("As a user that works at 1 company, I can traverse through the engagement survey until it is complete and I receive the correct amount of YuCoin.", scenario.start, async () => {
    Given("I run the worker to give access to the engagement survey", given.giveEngagementSurveyAccess([data.CUSTOMER_2_SMOKING.data.customerId, data.BUSINESS_ACCOUNT_1.data.business_account_id]), async () => {
      Given("I login as a user", given.loginAsUser(data.CUSTOMER_2_SMOKING, data.AUTH_2, true, "Japan", false), async () => {
        When("I should see the Let's go! button", when.tapID(ids.BUTTON_BASE("SIGN_UP_REWARD_SCREEN", false)), async () => {
          Then("I should see my YuCoin balance of 8200, before I finish the Engagement Survey", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(8200)));
        });
      });
    });
    When("I click on the engagement survey hero card", when.tapID("EVENT_HEADING_アンケートのお願い"), async () => {
      Then("I should see the intro screen for the engagement survey", then.idVisible("SDUI_BODY_SCROLL"));
      Then("I should see how much YuCoin will be rewarded", then.idVisible(ids.CONTENT_ITEM_INFO_CARD("**報酬**\n\n30 YuCoinを獲得できます。")));
    });
    When("I swipe to the bottom", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5), async () => {
      When("I click on the 'let's go!' button", when.tapID(ids.BUTTON_BASE("始める")), async () => {
        Then("I should be on the 'maintaining work-life balance' question", then.idVisible(ids.TEXT_TEMPLATE("ワークライフバランスはあなたにとって重要である。", "b2b")));
        Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxesJp);
      });
    });
    When("I cycle through all the checkbox options and end up on Strongly agree", when.cycleThroughEngagementSurveyAgreeCheckBoxesJp, async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("とてもそう思う", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("次のページ")), async () => {
      Then("I should be on the 'acceptable workload' question", then.idVisible(ids.TEXT_TEMPLATE("所定の勤務時間内における業務量は適切だと感じる。", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxesJp);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("とてもそう思う", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("とてもそう思う", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("次のページ")), async () => {
      Then("I should be on the 'supported by the company' question", then.idVisible(ids.TEXT_TEMPLATE("勤務先やマネージャーから有給休暇の取得についてサポートされていると感じる。", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxesJp);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("とてもそう思う", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("とてもそう思う", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("次のページ")), async () => {
      Then("I should be on the 'provides adequate resources' question", then.idVisible(ids.TEXT_TEMPLATE("勤務先はメンタルヘルスをサポートする十分なリソースを提供している (カウンセリングサービスやストレスチェックなど)。", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxesJp);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("とてもそう思う", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("とてもそう思う", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("次のページ")), async () => {
      Then("I should be on the 'feel stressed at work' question", then.idVisible(ids.TEXT_TEMPLATE("任された役割の責任について職場で頻繁にストレスを感じている。", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxesJp);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("とてもそう思う", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("とてもそう思う", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("次のページ")), async () => {
      Then("I should be on the 'access to a working environment' question", then.idVisible(ids.TEXT_TEMPLATE("自分の能力を最大限に発揮して効率的に作業を行える職場環境がある。", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxesJp);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("とてもそう思う", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("とてもそう思う", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("次のページ")), async () => {
      Then("I should be on the 'satisfied with your current role' question", then.idVisible(ids.TEXT_TEMPLATE("職場での現在の役職に満足している。", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxesJp);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("とてもそう思う", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("とてもそう思う", true)));
    });
    When("I exit the survey", when.tapID("SCREEN_CLOSE"), async () => {
      Then("I should be back on the main screen and see the intro screen for the engagement survey", then.idVisible("EVENT_HEADING_アンケートのお願い"));
    });
    When("I click on the engagement survey hero card", when.tapID("EVENT_HEADING_アンケートのお願い"), async () => {
      Then("I should be on the 'satisfied with your current role' question", then.idVisible(ids.TEXT_TEMPLATE("職場での現在の役職に満足している。", "b2b")));
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("とてもそう思う", false)), async () => {
      When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("次のページ")), async () => {
        Then("I should be on the 'satisfied with the level of reward' question", then.idVisible(ids.TEXT_TEMPLATE("自分の貢献から得られる報酬や感謝に満足している。", "b2b")));
        Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxesJp);
      });
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("とてもそう思う", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("とてもそう思う", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("次のページ")), async () => {
      Then("I should be on the 'heard and valued by your manager' question", then.idVisible(ids.TEXT_TEMPLATE("自分の意見はマネージャーによって聞き入れ、尊重されている。", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxesJp);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("とてもそう思う", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("とてもそう思う", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("次のページ")), async () => {
      Then("I should be on the 'level of collaboration and teamwork' question", then.idVisible(ids.TEXT_TEMPLATE("チームにおけるコラボレーションやチームワークの意識が高い。", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxesJp);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("とてもそう思う", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("とてもそう思う", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("次のページ")), async () => {
      Then("I should be on the 'level of collaboration and teamwork is high between teams", then.idVisible(ids.TEXT_TEMPLATE("異なるチーム間におけるコラボレーションやチームワークの意識が高い。", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxesJp);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("とてもそう思う", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("とてもそう思う", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("次のページ")), async () => {
      Then("I should be on the 'receive clear and timely communication' question", then.idVisible(ids.TEXT_TEMPLATE("重要な決定について、執行役員より明確かつタイムリーに連絡がある。", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxesJp);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("とてもそう思う", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("とてもそう思う", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("次のページ")), async () => {
      Then("I should be on the 'have trust in the senior leadership team' question", then.idVisible(ids.TEXT_TEMPLATE("執行役員チームを信頼している。", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxesJp);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("とてもそう思う", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("とてもそう思う", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("次のページ")), async () => {
      Then("I should be on the 'satisfied with the opportunities for professional growth' question", then.idVisible(ids.TEXT_TEMPLATE("現在の役職について、キャリアにおける今後の成長や勤務先でのスキルをさらに伸ばす機会に満足している。", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxesJp);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("とてもそう思う", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("とてもそう思う", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("次のページ")), async () => {
      Then("I should be on the 'constructive feedback and coaching from your manager' question", then.idVisible(ids.TEXT_TEMPLATE("自分の役職で成長するために、マネージャーから的確なフィードバックやコーチングを受けている。", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxesJp);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("とてもそう思う", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("とてもそう思う", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("次のページ")), async () => {
      Then("I should be on the 'see yourself continuing to work for the next 3+ years' question", then.idVisible(ids.TEXT_TEMPLATE("今後3年間以上、YU LIFE LTDでの勤務を続けると思いますか?", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxesJp);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("とてもそう思う", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("とてもそう思う", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("次のページ")), async () => {
      Then("I should be on the 'Your growth and development in the company is supported by:' question", then.idVisible(ids.TEXT_TEMPLATE("勤務先での成長機会は誰によってサポートされていますか？", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveySupportedByCheckBoxes);
    });
    When("I select first option", when.tapID("growth_development_supported_choice_my_manager"), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible("growth_development_supported_choice_my_manager"));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("次のページ")), async () => {
      Then("I should be on the 'believe there are equal opportunities for career advancement", then.idVisible(ids.TEXT_TEMPLATE("YU LIFE LTDにおけるキャリア開発の機会が平等にあると感じる。", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxesJp);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("とてもそう思う", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("とてもそう思う", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("次のページ")), async () => {
      Then("I should be on the 'Please elaborate on why you think this' question", then.idVisible(ids.TEXT_TEMPLATE("そう思う理由を簡単に\n説明してください。", "h2")));
    });
    When("I type in 1001 characters into the input", when.typeViaID(ids.ENGAGEMENT_SURVEY_EQUAL_OPPORTUNITIES_REASON, oneThousandAndOneCharacters), async () => {
      Then("I can see that the character counter only goes up to 1000, which means the input is correctly restricting the user from typing beyond that limit.", then.idVisible(ids.CONTENT_ITEM_INPUT_CHARACTER_COUNTER("equal_opportunities_reason_text-input", 1000)));
      Then("I swipe to the bottom", then.scrollFromID(ids.ENGAGEMENT_SURVEY_EQUAL_OPPORTUNITIES_REASON, "down", "fast", 0.5));
      Then("I swipe to the bottom", then.scrollFromID(ids.ENGAGEMENT_SURVEY_EQUAL_OPPORTUNITIES_REASON, "up", "fast", 0.5));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("次のページ")), async () => {
      Then("I should be on the 'You feel your role contributes meaningfully' question", then.idVisible(ids.TEXT_TEMPLATE("自分の役職は会社の成功に有意義に貢献していると感じる。", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxesJp);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("とてもそう思う", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("とてもそう思う", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("次のページ")), async () => {
      Then("I should be on the 'You believe in the company’s vision' question", then.idVisible(ids.TEXT_TEMPLATE("会社のビジョンややり方を信じている。", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxesJp);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("とてもそう思う", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("とてもそう思う", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("次のページ")), async () => {
      Then("I should be on the 'You are proud to work at your company' question", then.idVisible(ids.TEXT_TEMPLATE("YU LIFE LTDで勤務できて誇りに思う。", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxesJp);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("とてもそう思う", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("とてもそう思う", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("次のページ")), async () => {
      Then("I should be on the 'PWhat motivates you to do your best work' question", then.idVisible(ids.TEXT_TEMPLATE("能力を最大限に発揮するモチベーションとなるものは何ですか？", "h2")));
    });
    When("I type in 100 characters into the input", when.typeViaID(ids.ENGAGEMENT_SURVEY_WORK_MOTIVATION, oneHundredCharacters), async () => {
      Then("I should see the next button enabled", then.idVisible(ids.BUTTON_BASE("次のページ", false)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("次のページ")), async () => {
      Then("I should be on the 'What do you enjoy most about working at Biz' question", then.idVisible(ids.TEXT_TEMPLATE("YU LIFE LTDでの仕事について、何が一番楽しいですか?", "h2")));
    });
    When("I type in 100 characters into the input", when.typeViaID(ids.ENGAGEMENT_SURVEY_ENJOY_ABOUT_COMPANY, oneHundredCharacters), async () => {
      Then("I should see the next button enabled", then.idVisible(ids.BUTTON_BASE("次のページ", false)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("次のページ")), async () => {
      Then("I should be on the 'the one thing you would change about Biz' question", then.idVisible(ids.TEXT_TEMPLATE("YU LIFE LTDでの体験をより良くするために、あなたが変えたいことは何ですか?", "h2")));
    });
    When("I type in 100 characters into the input", when.typeViaID(ids.ENGAGEMENT_SURVEY_ONE_CHANGE_TO_IMPROVE_COMPANY, oneHundredCharacters), async () => {
      Then("I should see the next button enabled", then.idVisible(ids.BUTTON_BASE("次のページ", false)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("次のページ")), async () => {
      Then("I should be on the 'How likely are you to recommend Biz' question", then.idVisible(ids.TEXT_TEMPLATE("YU LIFE LTDを職場として勧める可能性はどのくらいありますか? (1: 全く思わない, 10: 非常にそう思う)", "b2b")));
    });
    When("I click on the back button symbol", when.tapID("LEFT_HEADIND_BUTTONnull"), async () => {
      Then("I should be on the 'the one thing you would change about Biz' question", then.idVisible(ids.TEXT_TEMPLATE("YU LIFE LTDでの体験をより良くするために、あなたが変えたいことは何ですか?", "h2")));
      Then("My last typed out answer should still be filled in", then.textVisible(`${oneHundredCharacters}`));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("次のページ")), async () => {
      Then("I should be on the 'How likely are you to recommend Biz' question", then.idVisible(ids.TEXT_TEMPLATE("YU LIFE LTDを職場として勧める可能性はどのくらいありますか? (1: 全く思わない, 10: 非常にそう思う)", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurvey1To10CheckBoxes);
    });
    When("I select choice 1", when.tapID(ids.WORKPLACE_CHOICE(1)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.WORKPLACE_CHOICE(1)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("次のページ")), async () => {
      When("I click on the 'Claim' button", when.tapID(ids.BUTTON_BASE("受け取る")), async () => {
        Then("I should see my YuCoin balance increase by 30 YuCoins for completing the survey to make a total of 8500 YuCoins", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(8230)));
      });
    });
  });

  Scenario("If no business is available, when I can traverse through the engagement survey I will see a fallback '勤務先は' instead of the business name.", scenario.start, async () => {
    Given("I run the worker to give access to the engagement survey", given.giveEngagementSurveyAccess([data.CUSTOMER_2_SMOKING.data.customerId]), async () => {
      Given("I login as a user", given.loginAsUser(data.CUSTOMER_2_SMOKING, data.AUTH_2, true, "Japan", false), async () => {
        When("I should see the Let's go! button", when.tapID(ids.BUTTON_BASE("SIGN_UP_REWARD_SCREEN", false)), async () => {
          When("I click on the engagement survey hero card", when.tapID("EVENT_HEADING_アンケートのお願い"), async () => {
            When("I start to fill out the survey", when.fillOutEngagementSurvey, async () => {
              Then("As a user who has no work business listed, I should see '勤務先は' provides adequate resources' ", then.idVisible(ids.TEXT_TEMPLATE("勤務先はメンタルヘルスをサポートする十分なリソースを提供している (カウンセリングサービスやストレスチェックなど)。", "b2b")));
            });
          });
        });
      });
    });
  });
});
