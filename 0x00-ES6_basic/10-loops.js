// Modifier par SAID LAMGHARI
// 10-loops.js
export default function appendToEachArrayValue(array, appendString) {
  const nwArr = [];
  for (const vle of array) {
    nwArr.push(appendString + vle);
  }

  return nwArr;
}
