export function capitalize(str) {
  if (str.length) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  } else {
    return '';
  }
}
