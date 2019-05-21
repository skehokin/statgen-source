const capitalise = string => {
  if (string) {
    return string === "and"
      ? string
      : string[0].toUpperCase() + string.substring(1);
  }
  return "Nameless";
};

function titleCase(string) {
  return string
    ? string
        .split(" ")
        .map(capitalise)
        .join(" ")
    : "Nameless";
}
export { titleCase, capitalise };
