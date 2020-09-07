import { IReduxState } from "@redux/_core/reducers";
import { IFeedbackStore } from "./feedback.reducer";

export const getFeedback = (state: IReduxState): IFeedbackStore => state.feedback;
