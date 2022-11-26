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
        modules {
          id
          slug
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

export const COURSE_CATEGORY_CPD = "cpd";
