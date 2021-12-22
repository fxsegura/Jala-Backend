import Employee from "./Employee.mjs";
import { isTextFile } from "./file-tools.mjs";

console.log(isTextFile('app.js'));

const employee = new Employee('Name test', 'Title test');
console.log(employee.describe());