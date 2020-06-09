/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetYulifer
// ====================================================

export interface GetYulifer_getYulifer_products_employer {
  policyNumber: string | null;
  earnRate: number | null;
  description: string | null;
  active: boolean | null;
  icon: string | null;
  name: string | null;
}

export interface GetYulifer_getYulifer_products_personal {
  policyNumber: string | null;
  earnRate: number | null;
  description: string | null;
  active: boolean | null;
  icon: string | null;
  name: string | null;
}

export interface GetYulifer_getYulifer_products_charms {
  policyNumber: string | null;
  earnRate: number | null;
  description: string | null;
  active: boolean | null;
  icon: string | null;
  name: string | null;
}

export interface GetYulifer_getYulifer_products {
  employer: (GetYulifer_getYulifer_products_employer | null)[] | null;
  personal: (GetYulifer_getYulifer_products_personal | null)[] | null;
  charms: (GetYulifer_getYulifer_products_charms | null)[] | null;
}

export interface GetYulifer_getYulifer_avatar_hair_part_elements_attributes {
  name: string;
  value: string;
}

export interface GetYulifer_getYulifer_avatar_hair_part_elements {
  name: string;
  attributes: (GetYulifer_getYulifer_avatar_hair_part_elements_attributes | null)[] | null;
}

export interface GetYulifer_getYulifer_avatar_hair_part {
  partId: string;
  elements: (GetYulifer_getYulifer_avatar_hair_part_elements | null)[] | null;
}

export interface GetYulifer_getYulifer_avatar_hair_color_colorScheme {
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

export interface GetYulifer_getYulifer_avatar_hair_color {
  colorSchemeId: string;
  colorScheme: GetYulifer_getYulifer_avatar_hair_color_colorScheme | null;
}

export interface GetYulifer_getYulifer_avatar_hair {
  part: GetYulifer_getYulifer_avatar_hair_part | null;
  color: GetYulifer_getYulifer_avatar_hair_color | null;
}

export interface GetYulifer_getYulifer_avatar_facialHair_part_elements_attributes {
  name: string;
  value: string;
}

export interface GetYulifer_getYulifer_avatar_facialHair_part_elements {
  name: string;
  attributes: (GetYulifer_getYulifer_avatar_facialHair_part_elements_attributes | null)[] | null;
}

export interface GetYulifer_getYulifer_avatar_facialHair_part {
  partId: string;
  elements: (GetYulifer_getYulifer_avatar_facialHair_part_elements | null)[] | null;
}

export interface GetYulifer_getYulifer_avatar_facialHair_color_colorScheme {
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

export interface GetYulifer_getYulifer_avatar_facialHair_color {
  colorSchemeId: string;
  colorScheme: GetYulifer_getYulifer_avatar_facialHair_color_colorScheme | null;
}

export interface GetYulifer_getYulifer_avatar_facialHair {
  part: GetYulifer_getYulifer_avatar_facialHair_part | null;
  color: GetYulifer_getYulifer_avatar_facialHair_color | null;
}

export interface GetYulifer_getYulifer_avatar_head_part_elements_attributes {
  name: string;
  value: string;
}

export interface GetYulifer_getYulifer_avatar_head_part_elements {
  name: string;
  attributes: (GetYulifer_getYulifer_avatar_head_part_elements_attributes | null)[] | null;
}

export interface GetYulifer_getYulifer_avatar_head_part {
  partId: string;
  elements: (GetYulifer_getYulifer_avatar_head_part_elements | null)[] | null;
}

export interface GetYulifer_getYulifer_avatar_head_color_colorScheme {
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

export interface GetYulifer_getYulifer_avatar_head_color {
  colorSchemeId: string;
  colorScheme: GetYulifer_getYulifer_avatar_head_color_colorScheme | null;
}

export interface GetYulifer_getYulifer_avatar_head {
  part: GetYulifer_getYulifer_avatar_head_part | null;
  color: GetYulifer_getYulifer_avatar_head_color | null;
}

export interface GetYulifer_getYulifer_avatar_eyes_part_elements_attributes {
  name: string;
  value: string;
}

export interface GetYulifer_getYulifer_avatar_eyes_part_elements {
  name: string;
  attributes: (GetYulifer_getYulifer_avatar_eyes_part_elements_attributes | null)[] | null;
}

export interface GetYulifer_getYulifer_avatar_eyes_part {
  partId: string;
  elements: (GetYulifer_getYulifer_avatar_eyes_part_elements | null)[] | null;
}

export interface GetYulifer_getYulifer_avatar_eyes_color_colorScheme {
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

export interface GetYulifer_getYulifer_avatar_eyes_color {
  colorSchemeId: string;
  colorScheme: GetYulifer_getYulifer_avatar_eyes_color_colorScheme | null;
}

export interface GetYulifer_getYulifer_avatar_eyes {
  part: GetYulifer_getYulifer_avatar_eyes_part | null;
  color: GetYulifer_getYulifer_avatar_eyes_color | null;
}

export interface GetYulifer_getYulifer_avatar_body_part_elements_attributes {
  name: string;
  value: string;
}

export interface GetYulifer_getYulifer_avatar_body_part_elements {
  name: string;
  attributes: (GetYulifer_getYulifer_avatar_body_part_elements_attributes | null)[] | null;
}

export interface GetYulifer_getYulifer_avatar_body_part {
  partId: string;
  elements: (GetYulifer_getYulifer_avatar_body_part_elements | null)[] | null;
}

export interface GetYulifer_getYulifer_avatar_body_color_colorScheme {
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

export interface GetYulifer_getYulifer_avatar_body_color {
  colorSchemeId: string;
  colorScheme: GetYulifer_getYulifer_avatar_body_color_colorScheme | null;
}

export interface GetYulifer_getYulifer_avatar_body {
  part: GetYulifer_getYulifer_avatar_body_part | null;
  color: GetYulifer_getYulifer_avatar_body_color | null;
}

export interface GetYulifer_getYulifer_avatar_pants_part_elements_attributes {
  name: string;
  value: string;
}

export interface GetYulifer_getYulifer_avatar_pants_part_elements {
  name: string;
  attributes: (GetYulifer_getYulifer_avatar_pants_part_elements_attributes | null)[] | null;
}

export interface GetYulifer_getYulifer_avatar_pants_part {
  partId: string;
  elements: (GetYulifer_getYulifer_avatar_pants_part_elements | null)[] | null;
}

export interface GetYulifer_getYulifer_avatar_pants_color_colorScheme {
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

export interface GetYulifer_getYulifer_avatar_pants_color {
  colorSchemeId: string;
  colorScheme: GetYulifer_getYulifer_avatar_pants_color_colorScheme | null;
}

export interface GetYulifer_getYulifer_avatar_pants {
  part: GetYulifer_getYulifer_avatar_pants_part | null;
  color: GetYulifer_getYulifer_avatar_pants_color | null;
}

export interface GetYulifer_getYulifer_avatar_chest_part_elements_attributes {
  name: string;
  value: string;
}

export interface GetYulifer_getYulifer_avatar_chest_part_elements {
  name: string;
  attributes: (GetYulifer_getYulifer_avatar_chest_part_elements_attributes | null)[] | null;
}

export interface GetYulifer_getYulifer_avatar_chest_part {
  partId: string;
  elements: (GetYulifer_getYulifer_avatar_chest_part_elements | null)[] | null;
}

export interface GetYulifer_getYulifer_avatar_chest_color_colorScheme {
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

export interface GetYulifer_getYulifer_avatar_chest_color {
  colorSchemeId: string;
  colorScheme: GetYulifer_getYulifer_avatar_chest_color_colorScheme | null;
}

export interface GetYulifer_getYulifer_avatar_chest {
  part: GetYulifer_getYulifer_avatar_chest_part | null;
  color: GetYulifer_getYulifer_avatar_chest_color | null;
}

export interface GetYulifer_getYulifer_avatar_gloves_part_elements_attributes {
  name: string;
  value: string;
}

export interface GetYulifer_getYulifer_avatar_gloves_part_elements {
  name: string;
  attributes: (GetYulifer_getYulifer_avatar_gloves_part_elements_attributes | null)[] | null;
}

export interface GetYulifer_getYulifer_avatar_gloves_part {
  partId: string;
  elements: (GetYulifer_getYulifer_avatar_gloves_part_elements | null)[] | null;
}

export interface GetYulifer_getYulifer_avatar_gloves_color_colorScheme {
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

export interface GetYulifer_getYulifer_avatar_gloves_color {
  colorSchemeId: string;
  colorScheme: GetYulifer_getYulifer_avatar_gloves_color_colorScheme | null;
}

export interface GetYulifer_getYulifer_avatar_gloves {
  part: GetYulifer_getYulifer_avatar_gloves_part | null;
  color: GetYulifer_getYulifer_avatar_gloves_color | null;
}

export interface GetYulifer_getYulifer_avatar_boots_part_elements_attributes {
  name: string;
  value: string;
}

export interface GetYulifer_getYulifer_avatar_boots_part_elements {
  name: string;
  attributes: (GetYulifer_getYulifer_avatar_boots_part_elements_attributes | null)[] | null;
}

export interface GetYulifer_getYulifer_avatar_boots_part {
  partId: string;
  elements: (GetYulifer_getYulifer_avatar_boots_part_elements | null)[] | null;
}

export interface GetYulifer_getYulifer_avatar_boots_color_colorScheme {
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

export interface GetYulifer_getYulifer_avatar_boots_color {
  colorSchemeId: string;
  colorScheme: GetYulifer_getYulifer_avatar_boots_color_colorScheme | null;
}

export interface GetYulifer_getYulifer_avatar_boots {
  part: GetYulifer_getYulifer_avatar_boots_part | null;
  color: GetYulifer_getYulifer_avatar_boots_color | null;
}

export interface GetYulifer_getYulifer_avatar_glasses_part_elements_attributes {
  name: string;
  value: string;
}

export interface GetYulifer_getYulifer_avatar_glasses_part_elements {
  name: string;
  attributes: (GetYulifer_getYulifer_avatar_glasses_part_elements_attributes | null)[] | null;
}

export interface GetYulifer_getYulifer_avatar_glasses_part {
  partId: string;
  elements: (GetYulifer_getYulifer_avatar_glasses_part_elements | null)[] | null;
}

export interface GetYulifer_getYulifer_avatar_glasses_color_colorScheme {
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

export interface GetYulifer_getYulifer_avatar_glasses_color {
  colorSchemeId: string;
  colorScheme: GetYulifer_getYulifer_avatar_glasses_color_colorScheme | null;
}

export interface GetYulifer_getYulifer_avatar_glasses {
  part: GetYulifer_getYulifer_avatar_glasses_part | null;
  color: GetYulifer_getYulifer_avatar_glasses_color | null;
}

export interface GetYulifer_getYulifer_avatar {
  hair: GetYulifer_getYulifer_avatar_hair | null;
  facialHair: GetYulifer_getYulifer_avatar_facialHair | null;
  head: GetYulifer_getYulifer_avatar_head | null;
  eyes: GetYulifer_getYulifer_avatar_eyes | null;
  body: GetYulifer_getYulifer_avatar_body | null;
  pants: GetYulifer_getYulifer_avatar_pants | null;
  chest: GetYulifer_getYulifer_avatar_chest | null;
  gloves: GetYulifer_getYulifer_avatar_gloves | null;
  boots: GetYulifer_getYulifer_avatar_boots | null;
  glasses: GetYulifer_getYulifer_avatar_glasses | null;
}

export interface GetYulifer_getYulifer {
  userId: string | null;
  earnRate: number | null;
  isAvatarCreated: boolean | null;
  products: GetYulifer_getYulifer_products | null;
  avatar: GetYulifer_getYulifer_avatar | null;
}

export interface GetYulifer {
  getYulifer: GetYulifer_getYulifer | null;
}
