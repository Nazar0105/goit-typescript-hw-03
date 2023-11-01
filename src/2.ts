// Я спробував таку ралізацію

class Employee {
  name: string;
  private department: string;
  protected salary: number;

  constructor(name: string, department: string, salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary + 10000);
  }
}

// Приклад використання:
const employee = new Employee('John Doe', 'HR', 50000);
const manager = new Manager('Jane Smith', 'Finance', 60000);

console.log(employee.getEmployeeDetails()); // Name: John Doe, Department: HR, Salary: 50000
console.log(manager.getEmployeeDetails());  // Name: Jane Smith, Department: Finance, Salary: 70000


export { };


// У цьому коді властивість name з доступом "public" буде доступна всім.Властивість
// department з доступом "private" буде доступна лише всередині класу Employee.
// Властивість salary з доступом "protected" буде доступна в класі Employee та його
// підкласах.Конструктор класу Manager викликає конструктор суперкласу і збільшує
// salary на 10000.
