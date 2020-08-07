import React, { memo } from "react";
import { FibLocalNavigation } from "../fib.types";
import { FibUnderwritingJourneyScreen } from "../../../../screens/products/fib/underwriting-journey/fib.underwriting-journey.screen";

interface IFibUnderwritingJourneyContainer {
  navigation: FibLocalNavigation;
}

const data = [
  {
    heading: "About You",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19.5 20.25H4.5C3.675 20.25 3 19.4661 3 18.5081V8.49194C3 7.53387 3.675 6.75 4.5 6.75H19.5C20.325 6.75 21 7.53387 21 8.49194V18.5081C21 19.4661 20.325 20.25 19.5 20.25Z" stroke="#828285" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13 3H10.75V9H13V3Z" fill="#828285" stroke="#828285" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.501 14.251H18.251" stroke="#828285" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.5 16.5H18.25" stroke="#828285" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 14.125C9.00102 14.125 9.8125 13.3135 9.8125 12.3125C9.8125 11.3115 9.00102 10.5 8 10.5C6.99898 10.5 6.1875 11.3115 6.1875 12.3125C6.1875 13.3135 6.99898 14.125 8 14.125Z" stroke="#828285" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.75 17H5.375V16.8125C5.375 15.325 6.575 14.125 8.0625 14.125C9.55 14.125 10.75 15.325 10.75 16.8125V17Z" stroke="#828285" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `,
    title: "Name",
    question:
      "Are you a member of the armed forces, territorial army or reservists or employed in any of the following hazardous occupations",
    firstButtonLabel: "No",
    secondButtonLabel: "Yes",
  },
];

const FibUnderwritingJourneyContainer = memo(function (props: IFibUnderwritingJourneyContainer) {
  const { navigation } = props;
  const onFirstbuttonPressed = () => {
    return;
  };

  const onSecondbuttonPressed = () => {
    return;
  };

  return (
    <FibUnderwritingJourneyScreen
      onNavigateBack={() => navigation.pop()}
      data={data[0]}
      onFirstButtonPressed={onFirstbuttonPressed}
      onSecondButtonPressed={onSecondbuttonPressed}
    />
  );
});

export default FibUnderwritingJourneyContainer;
