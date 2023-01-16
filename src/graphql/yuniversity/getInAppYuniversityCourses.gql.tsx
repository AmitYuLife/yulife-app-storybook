import { gql } from "@apollo/client";

export const GQL_QUERY_GET_YUNIVERSITY_COURSES = gql`
  query GetInAppYuniversityCourses($category: String!) {
    getInAppYuniversityCourses(category: $category) {
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
      headerTitle
      headerLabel
      headerTextColour
      courses {
        id
        title
        description
        logoImageKey {
          id
          uri
        }
        modules {
          id
          slug
          tags
          title
          imageTags {
            tag
            image {
              id
              uri
            }
          }
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

export const COURSE_CATEGORY_CPD = "cpd";
