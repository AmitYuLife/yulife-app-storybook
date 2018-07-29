// import * as React from "react";
// import { storiesOf } from "@storybook/react-native";
// import ActiveChallenge from "./challenge-details";
// import { action } from "@storybook/addon-actions";

// storiesOf("Modals - ActiveChallenge", module)
//     .add("brisk walk", () => {
//         return (
//             <ActiveChallenge
//                 milestones={[
//                     {
//                         target: 700,
//                         reward: 1,
//                     },
//                     {
//                         target: 1000,
//                         reward: 2,
//                     },
//                     {
//                         target: 1200,
//                         reward: 3,
//                     },
//                 ]}
//                 unit="steps"
//                 activity="brisk walk"
//                 timeLimit="10 mins"
//                 onPressCta={action("pressed cta")}
//                 onPressClose={action("pressed close")}
//             />
//         );
//     })
//     .add("short stroll", () => {
//         return (
//             <ActiveChallenge
//                 milestones={[
//                     {
//                         target: 100,
//                         reward: 1,
//                     },
//                 ]}
//                 unit="steps"
//                 activity="short stroll"
//                 timeLimit="10 mins"
//                 onPressCta={action("pressed cta")}
//                 onPressClose={action("pressed close")}
//             />
//         );
//     })
//     .add("long walk", () => {
//         return (
//             <ActiveChallenge
//                 milestones={[
//                     {
//                         target: 2000,
//                         reward: 2,
//                     },
//                     {
//                         target: 3000,
//                         reward: 4,
//                     },
//                     {
//                         target: 3600,
//                         reward: 6,
//                     },
//                 ]}
//                 unit="steps"
//                 activity="long walk"
//                 timeLimit="30 mins"
//                 onPressCta={action("pressed cta")}
//                 onPressClose={action("pressed close")}
//             />
//         );
//     })
//     .add("meditation", () => {
//         return (
//             <ActiveChallenge
//                 milestones={[
//                     {
//                         target: 3,
//                         reward: 1,
//                     },
//                     {
//                         target: 6,
//                         reward: 2,
//                     },
//                     {
//                         target: 10,
//                         reward: 3,
//                     },
//                 ]}
//                 unit="minutes"
//                 activity="meditation"
//                 timeLimit="10 mins"
//                 onPressCta={action("pressed cta")}
//                 onPressClose={action("pressed close")}
//                 onPressSetUp={action("pressed set up")}
//             />
//         );
//     });
