import { gql } from "@apollo/client";

export const GQL_QUERY_GET_YUNIVERSITY_COURSE_MODULE_DETAILS = gql`
  query GetInAppYuniversityCourseModuleDetails($id: String!) {
    getInAppYuniversityCourseModuleDetails(id: $id) {
      id
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
        videoMedia {
          id
          title
          description
          shortDescription
          theme
          media {
            id
            uri
          }
          cover {
            id
            uri
          }
          videoLogo {
            id
            uri
          }
          thumbnail {
            id
            uri
          }
          sourceType
        }
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
        yucoin
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
