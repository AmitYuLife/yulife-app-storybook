/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetInAppYuniversityCourses
// ====================================================

export interface GetInAppYuniversityCourses_getInAppYuniversityCourses_headerImage {
  id: string;
  uri: string | null;
}

export interface GetInAppYuniversityCourses_getInAppYuniversityCourses_categoryImage {
  id: string;
  uri: string | null;
}

export interface GetInAppYuniversityCourses_getInAppYuniversityCourses_courses_modules_image {
  id: string;
  uri: string | null;
}

export interface GetInAppYuniversityCourses_getInAppYuniversityCourses_courses_modules_status_icon {
  id: string;
  uri: string | null;
}

export interface GetInAppYuniversityCourses_getInAppYuniversityCourses_courses_modules_status {
  icon: GetInAppYuniversityCourses_getInAppYuniversityCourses_courses_modules_status_icon;
  text: string;
}

export interface GetInAppYuniversityCourses_getInAppYuniversityCourses_courses_modules {
  id: string;
  slug: string;
  tags: string;
  title: string;
  image: GetInAppYuniversityCourses_getInAppYuniversityCourses_courses_modules_image;
  status: GetInAppYuniversityCourses_getInAppYuniversityCourses_courses_modules_status | null;
}

export interface GetInAppYuniversityCourses_getInAppYuniversityCourses_courses {
  id: string;
  title: string;
  description: string;
  modules: (GetInAppYuniversityCourses_getInAppYuniversityCourses_courses_modules | null)[] | null;
}

export interface GetInAppYuniversityCourses_getInAppYuniversityCourses {
  id: string;
  title: string;
  headerImage: GetInAppYuniversityCourses_getInAppYuniversityCourses_headerImage;
  categoryImage: GetInAppYuniversityCourses_getInAppYuniversityCourses_categoryImage | null;
  headerColour: string;
  courses: (GetInAppYuniversityCourses_getInAppYuniversityCourses_courses | null)[] | null;
}

export interface GetInAppYuniversityCourses {
  getInAppYuniversityCourses: GetInAppYuniversityCourses_getInAppYuniversityCourses;
}

export interface GetInAppYuniversityCoursesVariables {
  category: string;
}
