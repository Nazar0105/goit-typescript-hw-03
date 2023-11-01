// Для виконання цього завдання, спершу я створив класи Key, Person, House, і MyHouse
// згідно з вимогами.

class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  private door: boolean = false;
  private key: Key;
  private tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log(`Welcome, ${person.getKey().getSignature()}!`);
    } else {
      console.log('The door is closed.');
    }
  }
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('The door is open.');
    } else {
      console.log('Wrong key. The door remains closed.');
    }
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

// У цьому коді я створюю клас Key з приватною властивістю signature, яка
// генерується при створенні об'єкта Key. Клас Person приймає ключ у конструкторі і
// має метод getKey(), щоб отримати ключ.

// Клас House має двері(по замовчуванню закриті), ключ і масив орендарів(клас
// Person).Цей клас має абстрактний метод openDoor, який нащадки повинні реалізувати.

// Клас MyHouse успадковує House і реалізує метод openDoor, який перевіряє ключ.
// Я створив об'єкти для кожного класу та відтворив сценарій, де людина приходить додому.


