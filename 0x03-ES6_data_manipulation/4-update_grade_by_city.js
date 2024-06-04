export default function updateStudentGradeByCity(arr, city, grades) {
  const gradeMap = new Map(grades.map((g) => [g.studentId, g.grade]));

  return arr
    .filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      grade: gradeMap.get(student.id) || 'N/A',
    }));
}
