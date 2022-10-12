import { gql } from "@apollo/client";

export const GQL_QUERY_GET_YUNIVERSITY_COURSE_MODULE_DETAILS = gql`
  query GetInAppYuniversityCourseModuleDetails($id: String!) {
    getInAppYuniversityCourseModuleDetails(id: $id) {
      image {
        id
        uri
      }
      title
      tags
      markdown
      chapters {
        id
        image {
          id
          uri
        }
        status {
          icon {
            id
            uri
          }
          text
        }
        tags
        title
        videoUri
      }
      moduleNotes {
        iconWidth
        iconHeight
        icon {
          id
          uri
        }
        title
        description
        ctaLabel
        ctaEnabled
      }
      moduleQuiz {
        iconWidth
        iconHeight
        icon {
          id
          uri
        }
        title
        description
        ctaLabel
        ctaEnabled
      }
      moduleCertificate {
        iconWidth
        iconHeight
        icon {
          id
          uri
        }
        title
        description
        ctaLabel
        ctaEnabled
      }
      completed
    }
  }
`;
