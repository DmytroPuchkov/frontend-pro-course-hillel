const mySuper = (parentConstr, instance, ...args) => {
  parentConstr.apply(instance, args);
};

function Employee(firtsName, lastName, salary) {
  this.firtsName = firtsName;
  this.lastName = lastName;
  this.salary = salary;
};

Employee.prototype.calculateSalary = function() {
  return this.salary * 12;
};

function Manager(firstName, lastName, salary, departmentName, employeeNumber, hireDate) {
  // Employee.call(this, firstName, lastName, salary);
  mySuper(Employee, this, firstName, lastName, salary);
  
  this.departmentName = departmentName;
  this.employeeNumber = employeeNumber;
  this.hireDate = hireDate;
};

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.showInfo = function() {
  console.log('%cІнформація про співробітника','color: yellow; background-color: blue;');
  console.log(`Імʼя: ${this.firtsName}`);
  console.log(`Прізвище: ${this.lastName}`);
  console.log(`Зарплата: ${this.salary}`);
  console.log(`Зарплата за рік: ${this.calculateSalary()}`);
  console.log(`Відділ: ${this.departmentName}`);
  console.log(`Службовий номер: ${this.employeeNumber}`);
  console.log(`На посаді з: ${this.hireDate}`);
};

const manager = new Manager("Кирило", "Буданов", 160000, "ГУР", "007/1", "05.08.2020");

manager.showInfo();