import React from "react";
import { SvgXml } from "react-native-svg";
import { Style } from "@styles";
import { MENU_ICON } from "@ids";

const xml = (color = "#5A5A5C") => `
  <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.5 7H0.5C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223857 8 0.5 8H21.5C21.7761 8 22 7.77614 22 7.5C22 7.22386 21.7761 7 21.5 7Z" fill="${color}"/>
    <path d="M21.5 0H0.5C0.223858 0 0 0.223858 0 0.5C0 0.776142 0.223857 1 0.5 1H21.5C21.7761 1 22 0.776142 22 0.5C22 0.223858 21.7761 0 21.5 0Z" fill="${color}"/>
    <path d="M21.5 14H0.5C0.223858 14 0 14.2239 0 14.5C0 14.7761 0.223857 15 0.5 15H21.5C21.7761 15 22 14.7761 22 14.5C22 14.2239 21.7761 14 21.5 14Z" fill="${color}"/>
  </svg>
`;

export default function Hamburger(props: { color: string }) {
  const height = String(Style.adjust(24));
  const width = String(Style.adjust(24));
  return <SvgXml xml={xml(props.color)} width={width} height={height} testID={MENU_ICON} />;
}
