export default function createIteratorObject(report) {
  let allEmployees = [];

  if (report && report.allEmployees && typeof report.allEmployees === 'object') {
    for (const item of Object.values(report.allEmployees)) {
      if (Array.isArray(item)) {
        allEmployees = [...allEmployees, ...item];
      }
    }
  } else {
    throw new Error('Invalid report structure');
  }

  return allEmployees;
}
