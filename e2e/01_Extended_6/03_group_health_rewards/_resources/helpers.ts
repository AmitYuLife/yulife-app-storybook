import { When, Then } from "@yu-life/yulife-bdd-framework";
import * as when from "../_steps/when"
import * as then from "../_steps/then"
import { TEXT_TEMPLATE } from "@ids";


export const carouselScroll = (contents: string[]) => async () => {

    for(let i = 0; i < contents.length -1; i++){
        When("I scroll to the left", when.scrollFromID(TEXT_TEMPLATE(contents[i], "b2b"), "left", "slow", 0.3), async () => {
            Then(`I should see ${contents[i + 1]}`, then.idVisible(TEXT_TEMPLATE(contents[i+1], "b2b")));
          });
    }
}