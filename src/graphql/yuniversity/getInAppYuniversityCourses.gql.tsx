import { gql } from "@apollo/client";

export const GQL_QUERY_GET_YUNIVERSITY_COURSES = gql`
  query GetInAppYuniversityCourses {
    getInAppYuniversityCourses {
      id
      title
      headerImage {
        id
        uri
      }
      categoryImage {
        id
        uri
      }
      headerColour
      courses {
        id
        title
        modules {
          id
          tags
          title
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
        }
      }
    }
  }
`;
