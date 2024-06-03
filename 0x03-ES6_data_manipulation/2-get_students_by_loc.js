export default function getStudentsByLocation(arr, city) {
  return arr.filter((e) => e.location === city);
}
