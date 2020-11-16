/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetYuliferWithAvatar
// ====================================================

export interface GetYuliferWithAvatar_getYulifer_avatarRemoteFiles {
  __typename: "AvatarRemoteFiles";
  svgFull: string | null;
  pngFull: string | null;
  pngMini: string | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_hair_part_elements_attributes {
  name: string;
  value: string;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_hair_part_elements {
  name: string;
  attributes: (GetYuliferWithAvatar_getYulifer_avatar_hair_part_elements_attributes | null)[] | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_hair_part {
  partId: string;
  elements: (GetYuliferWithAvatar_getYulifer_avatar_hair_part_elements | null)[] | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_hair_color_colorScheme {
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

export interface GetYuliferWithAvatar_getYulifer_avatar_hair_color {
  colorSchemeId: string;
  colorScheme: GetYuliferWithAvatar_getYulifer_avatar_hair_color_colorScheme | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_hair {
  part: GetYuliferWithAvatar_getYulifer_avatar_hair_part | null;
  color: GetYuliferWithAvatar_getYulifer_avatar_hair_color | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_facialHair_part_elements_attributes {
  name: string;
  value: string;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_facialHair_part_elements {
  name: string;
  attributes: (GetYuliferWithAvatar_getYulifer_avatar_facialHair_part_elements_attributes | null)[] | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_facialHair_part {
  partId: string;
  elements: (GetYuliferWithAvatar_getYulifer_avatar_facialHair_part_elements | null)[] | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_facialHair_color_colorScheme {
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

export interface GetYuliferWithAvatar_getYulifer_avatar_facialHair_color {
  colorSchemeId: string;
  colorScheme: GetYuliferWithAvatar_getYulifer_avatar_facialHair_color_colorScheme | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_facialHair {
  part: GetYuliferWithAvatar_getYulifer_avatar_facialHair_part | null;
  color: GetYuliferWithAvatar_getYulifer_avatar_facialHair_color | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_head_part_elements_attributes {
  name: string;
  value: string;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_head_part_elements {
  name: string;
  attributes: (GetYuliferWithAvatar_getYulifer_avatar_head_part_elements_attributes | null)[] | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_head_part {
  partId: string;
  elements: (GetYuliferWithAvatar_getYulifer_avatar_head_part_elements | null)[] | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_head_color_colorScheme {
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

export interface GetYuliferWithAvatar_getYulifer_avatar_head_color {
  colorSchemeId: string;
  colorScheme: GetYuliferWithAvatar_getYulifer_avatar_head_color_colorScheme | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_head {
  part: GetYuliferWithAvatar_getYulifer_avatar_head_part | null;
  color: GetYuliferWithAvatar_getYulifer_avatar_head_color | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_eyes_part_elements_attributes {
  name: string;
  value: string;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_eyes_part_elements {
  name: string;
  attributes: (GetYuliferWithAvatar_getYulifer_avatar_eyes_part_elements_attributes | null)[] | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_eyes_part {
  partId: string;
  elements: (GetYuliferWithAvatar_getYulifer_avatar_eyes_part_elements | null)[] | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_eyes_color_colorScheme {
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

export interface GetYuliferWithAvatar_getYulifer_avatar_eyes_color {
  colorSchemeId: string;
  colorScheme: GetYuliferWithAvatar_getYulifer_avatar_eyes_color_colorScheme | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_eyes {
  part: GetYuliferWithAvatar_getYulifer_avatar_eyes_part | null;
  color: GetYuliferWithAvatar_getYulifer_avatar_eyes_color | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_body_part_elements_attributes {
  name: string;
  value: string;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_body_part_elements {
  name: string;
  attributes: (GetYuliferWithAvatar_getYulifer_avatar_body_part_elements_attributes | null)[] | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_body_part {
  partId: string;
  elements: (GetYuliferWithAvatar_getYulifer_avatar_body_part_elements | null)[] | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_body_color_colorScheme {
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

export interface GetYuliferWithAvatar_getYulifer_avatar_body_color {
  colorSchemeId: string;
  colorScheme: GetYuliferWithAvatar_getYulifer_avatar_body_color_colorScheme | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_body {
  part: GetYuliferWithAvatar_getYulifer_avatar_body_part | null;
  color: GetYuliferWithAvatar_getYulifer_avatar_body_color | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_pants_part_elements_attributes {
  name: string;
  value: string;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_pants_part_elements {
  name: string;
  attributes: (GetYuliferWithAvatar_getYulifer_avatar_pants_part_elements_attributes | null)[] | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_pants_part {
  partId: string;
  elements: (GetYuliferWithAvatar_getYulifer_avatar_pants_part_elements | null)[] | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_pants_color_colorScheme {
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

export interface GetYuliferWithAvatar_getYulifer_avatar_pants_color {
  colorSchemeId: string;
  colorScheme: GetYuliferWithAvatar_getYulifer_avatar_pants_color_colorScheme | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_pants {
  part: GetYuliferWithAvatar_getYulifer_avatar_pants_part | null;
  color: GetYuliferWithAvatar_getYulifer_avatar_pants_color | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_chest_part_elements_attributes {
  name: string;
  value: string;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_chest_part_elements {
  name: string;
  attributes: (GetYuliferWithAvatar_getYulifer_avatar_chest_part_elements_attributes | null)[] | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_chest_part {
  partId: string;
  elements: (GetYuliferWithAvatar_getYulifer_avatar_chest_part_elements | null)[] | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_chest_color_colorScheme {
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

export interface GetYuliferWithAvatar_getYulifer_avatar_chest_color {
  colorSchemeId: string;
  colorScheme: GetYuliferWithAvatar_getYulifer_avatar_chest_color_colorScheme | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_chest {
  part: GetYuliferWithAvatar_getYulifer_avatar_chest_part | null;
  color: GetYuliferWithAvatar_getYulifer_avatar_chest_color | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_gloves_part_elements_attributes {
  name: string;
  value: string;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_gloves_part_elements {
  name: string;
  attributes: (GetYuliferWithAvatar_getYulifer_avatar_gloves_part_elements_attributes | null)[] | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_gloves_part {
  partId: string;
  elements: (GetYuliferWithAvatar_getYulifer_avatar_gloves_part_elements | null)[] | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_gloves_color_colorScheme {
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

export interface GetYuliferWithAvatar_getYulifer_avatar_gloves_color {
  colorSchemeId: string;
  colorScheme: GetYuliferWithAvatar_getYulifer_avatar_gloves_color_colorScheme | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_gloves {
  part: GetYuliferWithAvatar_getYulifer_avatar_gloves_part | null;
  color: GetYuliferWithAvatar_getYulifer_avatar_gloves_color | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_boots_part_elements_attributes {
  name: string;
  value: string;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_boots_part_elements {
  name: string;
  attributes: (GetYuliferWithAvatar_getYulifer_avatar_boots_part_elements_attributes | null)[] | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_boots_part {
  partId: string;
  elements: (GetYuliferWithAvatar_getYulifer_avatar_boots_part_elements | null)[] | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_boots_color_colorScheme {
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

export interface GetYuliferWithAvatar_getYulifer_avatar_boots_color {
  colorSchemeId: string;
  colorScheme: GetYuliferWithAvatar_getYulifer_avatar_boots_color_colorScheme | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_boots {
  part: GetYuliferWithAvatar_getYulifer_avatar_boots_part | null;
  color: GetYuliferWithAvatar_getYulifer_avatar_boots_color | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_glasses_part_elements_attributes {
  name: string;
  value: string;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_glasses_part_elements {
  name: string;
  attributes: (GetYuliferWithAvatar_getYulifer_avatar_glasses_part_elements_attributes | null)[] | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_glasses_part {
  partId: string;
  elements: (GetYuliferWithAvatar_getYulifer_avatar_glasses_part_elements | null)[] | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_glasses_color_colorScheme {
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

export interface GetYuliferWithAvatar_getYulifer_avatar_glasses_color {
  colorSchemeId: string;
  colorScheme: GetYuliferWithAvatar_getYulifer_avatar_glasses_color_colorScheme | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar_glasses {
  part: GetYuliferWithAvatar_getYulifer_avatar_glasses_part | null;
  color: GetYuliferWithAvatar_getYulifer_avatar_glasses_color | null;
}

export interface GetYuliferWithAvatar_getYulifer_avatar {
  id: string | null;
  hair: GetYuliferWithAvatar_getYulifer_avatar_hair | null;
  facialHair: GetYuliferWithAvatar_getYulifer_avatar_facialHair | null;
  head: GetYuliferWithAvatar_getYulifer_avatar_head | null;
  eyes: GetYuliferWithAvatar_getYulifer_avatar_eyes | null;
  body: GetYuliferWithAvatar_getYulifer_avatar_body | null;
  pants: GetYuliferWithAvatar_getYulifer_avatar_pants | null;
  chest: GetYuliferWithAvatar_getYulifer_avatar_chest | null;
  gloves: GetYuliferWithAvatar_getYulifer_avatar_gloves | null;
  boots: GetYuliferWithAvatar_getYulifer_avatar_boots | null;
  glasses: GetYuliferWithAvatar_getYulifer_avatar_glasses | null;
}

export interface GetYuliferWithAvatar_getYulifer_products_employer {
  productId: string | null;
  policyNumber: string | null;
  earnRate: number | null;
  description: string | null;
  active: boolean | null;
  icon: string | null;
  name: string | null;
  itemSlot: string | null;
  status: string | null;
}

export interface GetYuliferWithAvatar_getYulifer_products_personal {
  productId: string | null;
  policyNumber: string | null;
  earnRate: number | null;
  description: string | null;
  active: boolean | null;
  icon: string | null;
  name: string | null;
  itemSlot: string | null;
  status: string | null;
}

export interface GetYuliferWithAvatar_getYulifer_products_charms {
  productId: string | null;
  policyNumber: string | null;
  earnRate: number | null;
  description: string | null;
  active: boolean | null;
  icon: string | null;
  name: string | null;
  itemSlot: string | null;
  status: string | null;
}

export interface GetYuliferWithAvatar_getYulifer_products {
  employer: (GetYuliferWithAvatar_getYulifer_products_employer | null)[] | null;
  personal: (GetYuliferWithAvatar_getYulifer_products_personal | null)[] | null;
  charms: (GetYuliferWithAvatar_getYulifer_products_charms | null)[] | null;
}

export interface GetYuliferWithAvatar_getYulifer {
  userId: string | null;
  earnRate: number | null;
  isAvatarCreated: boolean | null;
  avatarRemoteFiles: GetYuliferWithAvatar_getYulifer_avatarRemoteFiles | null;
  avatar: GetYuliferWithAvatar_getYulifer_avatar | null;
  products: GetYuliferWithAvatar_getYulifer_products | null;
}

export interface GetYuliferWithAvatar {
  getYulifer: GetYuliferWithAvatar_getYulifer | null;
}
