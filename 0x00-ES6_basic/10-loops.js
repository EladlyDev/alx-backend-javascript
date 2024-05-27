export default function appendToEachArrayValue(array, appendString) {
  const out = [];
  for (const value of array) {
    out.push(appendString + value);
  }

  return out;
}
