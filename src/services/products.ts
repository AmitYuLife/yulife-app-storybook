export function getToolTipName(name: string) {
  const arr = name.split("of ");
  if (arr.length > 1) {
    return arr.join("of\n");
  }

  return name;
}
