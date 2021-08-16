const Schema = require("./employees_pb");
const fs = require("fs");

const emp1 = new Schema.Employee();

emp1.setId(1001);
emp1.setName("Ilgsson");
emp1.setSalary(1000);

const emp2 = new Schema.Employee();

emp2.setId(1001);
emp2.setName("Ilgsson");
emp2.setSalary(1000);

const emp3 = new Schema.Employee();

emp3.setId(1001);
emp3.setName("Ilgsson");
emp3.setSalary(1000);

const employees = new Schema.Employess();
employees.addEmployees(emp1);
employees.addEmployees(emp2);
employees.addEmployees(emp3);

const bytes = employees.serializeBinary();

fs.writeFileSync("data", bytes);

console.log(bytes);
