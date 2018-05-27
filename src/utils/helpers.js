export function capitalize(str) {
  if (str.length) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  } else {
    return "";
  }
}

export function createId() {
  return (
    Date.now().toString(36) +
    Math.random()
      .toString(36)
      .substr(2, 14)
  );
}
