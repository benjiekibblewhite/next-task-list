export function checkFilterBy(text: string, filterBy: string) {
  // filtering should be case insensitive
  return text.toLocaleLowerCase().includes(filterBy.toLocaleLowerCase());
}
