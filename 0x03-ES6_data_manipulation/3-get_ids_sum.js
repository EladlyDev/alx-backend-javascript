export default function getStudentIdsSum(arr) {
  const initial = 0;
  return arr.reduce((acc, obj) => acc + obj.id, initial);
}
