// Modifier par  SAID LAMGHARI
// 11-createEmployeesObject.js
export default function createEmployeesObject(departmentName, employees) {
  const employeesObject = {
    [departmentName]: employees,
  };

  return employeesObject;
}
