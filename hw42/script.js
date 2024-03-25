class Employee {
  constructor(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }

  calculateSalary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(firstName, lastName, salary, departmentName, employeeNumber, hireDate, salaryBonus = 10) {
    super(firstName, lastName, salary);
    this.departmentName = departmentName;
    this.employeeNumber = employeeNumber;
    this.hireDate = hireDate;
    this.salaryBonus = salaryBonus;
  }

  calculateSalaryWithBonus() {
    const monthlyBonus = this.salary * (this.salaryBonus / 100);

    return (this.salary + monthlyBonus) * 12;
  }

  showInfo() {
    console.log('%cІнформація про співробітника', 'color: yellow; background-color: blue;');
    console.log(`Імʼя: ${this.firstName}`);
    console.log(`Прізвище: ${this.lastName}`);
    console.log(`Зарплата: ${this.salary}`);
    console.log(`Зарплата за рік: ${this.calculateSalary()}`);
    console.log(`Зарплата за рік з бонусом: ${this.calculateSalaryWithBonus()}`);
    console.log(`Відділ: ${this.departmentName}`);
    console.log(`Службовий номер: ${this.employeeNumber}`);
    console.log(`На посаді з: ${this.hireDate}`);
  }
}

const manager1 = new Manager("Кирило", "Буданов", 160000, "ГУР", "007/1", "05.08.2020");
manager1.showInfo();

const manager2 = new Manager("Валерій", "Залужний", 190000, "ЗСУ", "007/2", "08.02.2021", 15);
manager2.showInfo();