import { gql, MutationTuple } from "@apollo/client";
import {
  CompleteInAppYuniversityModuleChapter,
  CompleteInAppYuniversityModuleChapterVariables,
} from "@graphql/_core/schema/CompleteInAppYuniversityModuleChapter";

export const GQL_MUTATION_COMPLETE_IN_APP_YUNIVERSITY_MODULE_CHAPTER = gql`
  mutation CompleteInAppYuniversityModuleChapter($moduleId: String!, $chapterId: String!) {
    completeInAppYuniversityModuleChapter(moduleId: $moduleId, chapterId: $chapterId)
  }
`;

export type CompleteYuniversityModuleChapterTuple = MutationTuple<
  CompleteInAppYuniversityModuleChapter,
  CompleteInAppYuniversityModuleChapterVariables
>;
