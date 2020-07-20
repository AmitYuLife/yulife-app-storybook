/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoverType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetLifeInsuranceTopUps
// ====================================================

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_hair_part_elements_attributes {
  name: string;
  value: string;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_hair_part_elements {
  name: string;
  attributes: (GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_hair_part_elements_attributes | null)[] | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_hair_part {
  partId: string;
  elements: (GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_hair_part_elements | null)[] | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_hair_color_colorScheme {
  main: string;
  shadow: string | null;
  light: string | null;
  base: string | null;
  eyebrows: string | null;
  leftEar: string | null;
  rightEar: string | null;
  lips: string | null;
  tongue: string | null;
  nose: string | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_hair_color {
  colorSchemeId: string;
  colorScheme: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_hair_color_colorScheme | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_hair {
  part: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_hair_part | null;
  color: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_hair_color | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_facialHair_part_elements_attributes {
  name: string;
  value: string;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_facialHair_part_elements {
  name: string;
  attributes:
    | (GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_facialHair_part_elements_attributes | null)[]
    | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_facialHair_part {
  partId: string;
  elements: (GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_facialHair_part_elements | null)[] | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_facialHair_color_colorScheme {
  main: string;
  shadow: string | null;
  light: string | null;
  base: string | null;
  eyebrows: string | null;
  leftEar: string | null;
  rightEar: string | null;
  lips: string | null;
  tongue: string | null;
  nose: string | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_facialHair_color {
  colorSchemeId: string;
  colorScheme: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_facialHair_color_colorScheme | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_facialHair {
  part: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_facialHair_part | null;
  color: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_facialHair_color | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_head_part_elements_attributes {
  name: string;
  value: string;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_head_part_elements {
  name: string;
  attributes: (GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_head_part_elements_attributes | null)[] | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_head_part {
  partId: string;
  elements: (GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_head_part_elements | null)[] | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_head_color_colorScheme {
  main: string;
  shadow: string | null;
  light: string | null;
  base: string | null;
  eyebrows: string | null;
  leftEar: string | null;
  rightEar: string | null;
  lips: string | null;
  tongue: string | null;
  nose: string | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_head_color {
  colorSchemeId: string;
  colorScheme: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_head_color_colorScheme | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_head {
  part: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_head_part | null;
  color: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_head_color | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_eyes_part_elements_attributes {
  name: string;
  value: string;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_eyes_part_elements {
  name: string;
  attributes: (GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_eyes_part_elements_attributes | null)[] | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_eyes_part {
  partId: string;
  elements: (GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_eyes_part_elements | null)[] | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_eyes_color_colorScheme {
  main: string;
  shadow: string | null;
  light: string | null;
  base: string | null;
  eyebrows: string | null;
  leftEar: string | null;
  rightEar: string | null;
  lips: string | null;
  tongue: string | null;
  nose: string | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_eyes_color {
  colorSchemeId: string;
  colorScheme: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_eyes_color_colorScheme | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_eyes {
  part: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_eyes_part | null;
  color: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_eyes_color | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_body_part_elements_attributes {
  name: string;
  value: string;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_body_part_elements {
  name: string;
  attributes: (GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_body_part_elements_attributes | null)[] | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_body_part {
  partId: string;
  elements: (GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_body_part_elements | null)[] | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_body_color_colorScheme {
  main: string;
  shadow: string | null;
  light: string | null;
  base: string | null;
  eyebrows: string | null;
  leftEar: string | null;
  rightEar: string | null;
  lips: string | null;
  tongue: string | null;
  nose: string | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_body_color {
  colorSchemeId: string;
  colorScheme: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_body_color_colorScheme | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_body {
  part: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_body_part | null;
  color: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_body_color | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_pants_part_elements_attributes {
  name: string;
  value: string;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_pants_part_elements {
  name: string;
  attributes: (GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_pants_part_elements_attributes | null)[] | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_pants_part {
  partId: string;
  elements: (GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_pants_part_elements | null)[] | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_pants_color_colorScheme {
  main: string;
  shadow: string | null;
  light: string | null;
  base: string | null;
  eyebrows: string | null;
  leftEar: string | null;
  rightEar: string | null;
  lips: string | null;
  tongue: string | null;
  nose: string | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_pants_color {
  colorSchemeId: string;
  colorScheme: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_pants_color_colorScheme | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_pants {
  part: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_pants_part | null;
  color: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_pants_color | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_chest_part_elements_attributes {
  name: string;
  value: string;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_chest_part_elements {
  name: string;
  attributes: (GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_chest_part_elements_attributes | null)[] | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_chest_part {
  partId: string;
  elements: (GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_chest_part_elements | null)[] | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_chest_color_colorScheme {
  main: string;
  shadow: string | null;
  light: string | null;
  base: string | null;
  eyebrows: string | null;
  leftEar: string | null;
  rightEar: string | null;
  lips: string | null;
  tongue: string | null;
  nose: string | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_chest_color {
  colorSchemeId: string;
  colorScheme: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_chest_color_colorScheme | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_chest {
  part: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_chest_part | null;
  color: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_chest_color | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_gloves_part_elements_attributes {
  name: string;
  value: string;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_gloves_part_elements {
  name: string;
  attributes: (GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_gloves_part_elements_attributes | null)[] | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_gloves_part {
  partId: string;
  elements: (GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_gloves_part_elements | null)[] | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_gloves_color_colorScheme {
  main: string;
  shadow: string | null;
  light: string | null;
  base: string | null;
  eyebrows: string | null;
  leftEar: string | null;
  rightEar: string | null;
  lips: string | null;
  tongue: string | null;
  nose: string | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_gloves_color {
  colorSchemeId: string;
  colorScheme: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_gloves_color_colorScheme | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_gloves {
  part: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_gloves_part | null;
  color: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_gloves_color | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_boots_part_elements_attributes {
  name: string;
  value: string;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_boots_part_elements {
  name: string;
  attributes: (GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_boots_part_elements_attributes | null)[] | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_boots_part {
  partId: string;
  elements: (GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_boots_part_elements | null)[] | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_boots_color_colorScheme {
  main: string;
  shadow: string | null;
  light: string | null;
  base: string | null;
  eyebrows: string | null;
  leftEar: string | null;
  rightEar: string | null;
  lips: string | null;
  tongue: string | null;
  nose: string | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_boots_color {
  colorSchemeId: string;
  colorScheme: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_boots_color_colorScheme | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_boots {
  part: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_boots_part | null;
  color: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_boots_color | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_glasses_part_elements_attributes {
  name: string;
  value: string;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_glasses_part_elements {
  name: string;
  attributes: (GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_glasses_part_elements_attributes | null)[] | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_glasses_part {
  partId: string;
  elements: (GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_glasses_part_elements | null)[] | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_glasses_color_colorScheme {
  main: string;
  shadow: string | null;
  light: string | null;
  base: string | null;
  eyebrows: string | null;
  leftEar: string | null;
  rightEar: string | null;
  lips: string | null;
  tongue: string | null;
  nose: string | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_glasses_color {
  colorSchemeId: string;
  colorScheme: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_glasses_color_colorScheme | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_glasses {
  part: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_glasses_part | null;
  color: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_glasses_color | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar {
  id: string | null;
  hair: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_hair | null;
  facialHair: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_facialHair | null;
  head: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_head | null;
  eyes: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_eyes | null;
  body: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_body | null;
  pants: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_pants | null;
  chest: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_chest | null;
  gloves: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_gloves | null;
  boots: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_boots | null;
  glasses: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar_glasses | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps {
  estimatedCost: number | null;
  payoutAmount: number | null;
  avatar: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatar | null;
  earnRate: number | null;
  salaryPercentageCovered: number | null;
  newEarnRate: number | null;
  descriptionHeading: string | null;
}

export interface GetLifeInsuranceTopUps {
  getLifeInsuranceTopUps: GetLifeInsuranceTopUps_getLifeInsuranceTopUps | null;
}

export interface GetLifeInsuranceTopUpsVariables {
  grossSalary?: number | null;
  deceaseAgeYear?: number | null;
  deceaseAgeMonth?: number | null;
  coverType?: CoverType | null;
  customCoverPercentage?: number | null;
}
