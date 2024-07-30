export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const cleanedValues = [];

  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      cleanedValues.push(value.slice(startString.length));
    }
  }
  return cleanedValues.join('-');
}
