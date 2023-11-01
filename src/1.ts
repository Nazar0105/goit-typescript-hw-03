
// Для скороченої ініціалізації я можу використовувати модифікатори доступу у
// конструкторі для автоматичної ініціалізації властивостей класу.Ось як це можна зробити:

class Student {
  constructor(public name: string, public age: number, public grade: string) {}
}

// Приклад використання:
const student = new Student('John', 20, 'A');
console.log(student.name); // "John"
console.log(student.age);  // 20
console.log(student.grade);  // "A"

// У цьому коді я використовую модифікатор public в конструкторі для автоматичної 
// ініціалізації властивостей name, age та grade класу Student.При створенні 
// об'єкта student властивості будуть ініціалізовані з переданими значеннями.


