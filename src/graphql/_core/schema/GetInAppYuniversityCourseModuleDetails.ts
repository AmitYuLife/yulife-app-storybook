/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetInAppYuniversityCourseModuleDetails
// ====================================================

export interface GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_image {
  id: string;
  uri: string | null;
}

export interface GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_imageTags_image {
  id: string;
  uri: string | null;
}

export interface GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_imageTags {
  tag: string;
  image: GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_imageTags_image | null;
}

export interface GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_chapters_image {
  id: string;
  uri: string | null;
}

export interface GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_chapters_status_icon {
  id: string;
  uri: string | null;
}

export interface GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_chapters_status {
  icon: GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_chapters_status_icon;
  text: string;
}

export interface GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_chapters_videoMedia_media {
  id: string;
  uri: string | null;
}

export interface GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_chapters_videoMedia_cover {
  id: string;
  uri: string | null;
}

export interface GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_chapters_videoMedia_videoLogo {
  id: string;
  uri: string | null;
}

export interface GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_chapters_videoMedia_thumbnail {
  id: string;
  uri: string | null;
}

export interface GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_chapters_videoMedia {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  theme: string;
  duration: number | null;
  media: GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_chapters_videoMedia_media;
  cover: GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_chapters_videoMedia_cover;
  videoLogo: GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_chapters_videoMedia_videoLogo | null;
  thumbnail: GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_chapters_videoMedia_thumbnail;
  sourceType: string | null;
}

export interface GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_chapters {
  id: string;
  image: GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_chapters_image;
  status: GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_chapters_status | null;
  tags: string | null;
  title: string;
  videoMedia: GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_chapters_videoMedia;
}

export interface GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_moduleNotes_icon {
  id: string;
  uri: string | null;
}

export interface GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_moduleNotes {
  iconWidth: number;
  iconHeight: number;
  icon: GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_moduleNotes_icon;
  title: string;
  description: string | null;
  ctaLabel: string | null;
  ctaEnabled: boolean | null;
  uri: string | null;
}

export interface GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_moduleQuiz_icon {
  id: string;
  uri: string | null;
}

export interface GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_moduleQuiz {
  iconWidth: number;
  iconHeight: number;
  icon: GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_moduleQuiz_icon;
  yucoin: number | null;
  rewardDescription: string | null;
  title: string;
  description: string | null;
  ctaLabel: string | null;
  ctaEnabled: boolean | null;
}

export interface GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_moduleCertificate_icon {
  id: string;
  uri: string | null;
}

export interface GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_moduleCertificate {
  iconWidth: number;
  iconHeight: number;
  icon: GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_moduleCertificate_icon;
  title: string;
  description: string | null;
  ctaLabel: string | null;
  ctaEnabled: boolean | null;
}

export interface GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_moduleCertificateDetails_values {
  label: string;
  value: string;
}

export interface GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_moduleCertificateDetails_image {
  id: string;
  uri: string | null;
}

export interface GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_moduleCertificateDetails {
  title: string;
  subtitle: string;
  description: string;
  values: GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_moduleCertificateDetails_values[];
  image: GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_moduleCertificateDetails_image;
}

export interface GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails {
  id: string;
  image: GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_image;
  title: string;
  tags: string;
  imageTags: GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_imageTags[] | null;
  markdown: string;
  chapters: GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_chapters[];
  moduleNotes: GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_moduleNotes | null;
  moduleQuiz: GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_moduleQuiz | null;
  moduleCertificate: GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_moduleCertificate | null;
  moduleCertificateDetails: GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_moduleCertificateDetails | null;
  completed: boolean | null;
  quiz: string;
}

export interface GetInAppYuniversityCourseModuleDetails {
  getInAppYuniversityCourseModuleDetails: GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails;
}

export interface GetInAppYuniversityCourseModuleDetailsVariables {
  id: string;
}
