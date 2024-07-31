interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
}

const student2: Student = {
	firstName: 'Jane',
	lastName: 'Smith',
	age: 22,
	location: 'Los Angeles',
}

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tableHeader = table.createTHead();
const headerRow = tableHeader.insertRow();

const headerCell1 = document.createElement('th');
headerCell1.textContent = 'First Name';
headerRow.appendChild(headerCell1);

const headerCell2 = document.createElement('th');
headerCell2.textContent = 'Location';
headerRow.appendChild(headerCell2);

const tableBody = table.createTBody();

studentsList.forEach((student) => {
  const row = tableBody.insertRow();
  const cell1 = row.insertCell();
  cell1.textContent = student.firstName;

  const cell2 = row.insertCell();
  cell2.textContent = student.location;
});

document.body.appendChild(table);
