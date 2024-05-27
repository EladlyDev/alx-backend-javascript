export default function createIteratorObject(report) {
  const employeesIter = Object.values(report.allEmployees).flat();
  return employeesIter;
}
