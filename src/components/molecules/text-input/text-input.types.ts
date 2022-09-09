export enum TEXT_INPUT_TYPES {
  BOARD = "Board",
  EMAIL = "Email",
  PASSWORD = "Password",
  PASSWORD_REVEAL = "PasswordReveal",
  TEXT = "Text",
  CARD = "Card",
}

export type TextInputTypes =
  | "Email"
  | "Password"
  | "PasswordReveal"
  | "Text"
  | "Card"
  | "Board"
  | "text"
  | "number"
  | "email";
