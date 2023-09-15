// Задание 1: ""Управление персоналом компании""
// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).

class Employee {
  name;

  constructor(name) {
    this.name = name;
  }

  displayInfo() {
    return `Имя - ${this.name}`;
  }
}
const employee = new Employee("John Smith");
console.log(employee.displayInfo());

class Manager {
  __name__ = Employee;
  department;

  constructor(__name__, department) {
    this.name = __name__;
    this.department = department;
  }

  displayInfo() {
    return `Имя сотрудника - ${this.name}, Отдел - ${this.department}`;
  }
}

const manager = new Manager("Jane Doe", "Sales");
console.log(manager.displayInfo());

// Задание 2: ""Управление списком заказов""
// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

class Order {
  constructor(orderNumber) {
    this.orderNumber = orderNumber;
  }
}

class Product extends Order{
  constructor(orderNumber, nameProd, price) {
    super(orderNumber)
    this.nameProd = nameProd;
    this.price = price;
  }

  displayInfoProd() {
    return console.log(`Номер заказа - ${this.orderNumber}, Продукт - ${this.nameProd}, Цена - ${this.price}`);
  }

  getTotalPrice() {
    const arr = [this.price];
    const sum = [...arr].reduce((partialSum, a) => partialSum + a, 0);
    return console.log(sum);
  }
}

const prodTest = new Product(12323, "Car", 1000);

prodTest.displayInfoProd();
prodTest.getTotalPrice();
