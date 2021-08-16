const fs = require("fs");
const employees = [];

const emp1 = {
  name: "Ilgsson",
  salary: "1000",
  id: 1001,
};

employees.push(emp1);

const emp2 = {
  name: "Ilgsson",
  salary: "1000",
  id: 1001,
};

employees.push(emp2);

const emp3 = {
  name: "Ilgsson",
  salary: "1000",
  id: 1001,
};

employees.push(emp3);

fs.writeFileSync("data.json", JSON.stringify(employees));

console.log(JSON.stringify(employees));
