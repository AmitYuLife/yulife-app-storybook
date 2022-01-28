import React, { memo } from "react";

import { IProgressStepsProps, ProgressSteps } from "@components/molecules/progress-steps/progress-steps";

export const ContentItemProgressSteps = memo((props: IProgressStepsProps) => <ProgressSteps {...props} />);
