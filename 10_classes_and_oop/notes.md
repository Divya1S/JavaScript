# javascript and classes 
First, the truth — Classes are a lie (kind of)
JavaScript classes are syntactic sugar over prototypes. Under the hood, JS is still prototype-based. Classes just make it look familiar to people coming from Java/C++.


class Dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    return `${this.name} says woof!`;
  }
}

// What JS actually creates under the hood:
function Dog(name) {
  this.name = name;
}
Dog.prototype.bark = function() {
  return `${this.name} says woof!`;
};

// Both work identically:
const d1 = new Dog('Rex');
console.log(d1.bark()); // "Rex says woof!"

// Proof:
console.log(typeof Dog); // "function" — not a class!

1. Class Declaration vs Class Expression

// Declaration — hoisted but NOT initialized (unlike function declarations)
class Car {
  constructor(brand) {
    this.brand = brand;
  }
}

// Expression — can be named or anonymous
const Car = class {
  constructor(brand) { this.brand = brand; }
};

const Car = class CarClass {
  getName() { return CarClass.name; } // inner name only accessible inside
};

// Temporal Dead Zone — classes are NOT hoisted like functions
const c = new Vehicle(); // ReferenceError!
class Vehicle {}

2. The Constructor
One per class. Called automatically with new. If you skip it, JS adds an empty one.


class Person {
  constructor(name, age) {
    // 'this' = the new object being created
    this.name = name;
    this.age = age;
    // implicitly returns 'this' — don't manually return a primitive
  }
}

const p = new Person('Divya', 25);
console.log(p.name); // "Divya"

// What 'new' does step by step:
// 1. Creates a blank object: {}
// 2. Sets its __proto__ to Person.prototype
// 3. Runs constructor with 'this' = that object
// 4. Returns 'this' (unless you return an object manually)

3. Instance Methods
Defined on the prototype — shared across ALL instances (memory efficient).


class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    return this; // enables chaining
  }

  withdraw(amount) {
    if (amount > this.balance) throw new Error('Insufficient funds');
    this.balance -= amount;
    return this;
  }

  summary() {
    console.log(`${this.owner}: $${this.balance}`);
    return this;
  }
}

const acc = new BankAccount('Divya', 1000);
acc.deposit(500).withdraw(200).summary(); // "Divya: $1300"

// Methods live on the prototype, NOT the instance:
console.log(acc.hasOwnProperty('deposit'));  // false
console.log(acc.hasOwnProperty('balance'));  // true
Key insight: this inside a method refers to whoever calls it. This matters a lot — see gotchas at the end.

4. Static Methods & Properties
Belong to the class itself, not instances. Think utility/factory functions.


class MathHelper {
  static PI = 3.14159;

  static add(a, b) { return a + b; }
  static subtract(a, b) { return a - b; }

  // Factory pattern — static method that returns an instance
  static createZero() {
    return new MathHelper();
  }
}

MathHelper.add(2, 3);  // 5 — called on CLASS
MathHelper.PI;         // 3.14159

const m = new MathHelper();
m.add(2, 3);           // TypeError — not on instance!


// Real-world example: static factory methods
class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  static createAdmin(name) {
    return new User(name, 'admin');
  }

  static createGuest() {
    return new User('Guest', 'guest');
  }
}

const admin = User.createAdmin('Divya');
const guest = User.createGuest();

5. Getters & Setters
Look like properties, act like methods. Great for computed values and validation.


class Temperature {
  constructor(celsius) {
    this._celsius = celsius; // convention: _ = "internal"
  }

  get fahrenheit() {
    return this._celsius * 9/5 + 32; // computed on the fly
  }

  get celsius() {
    return this._celsius;
  }

  set celsius(value) {
    if (value < -273.15) throw new Error('Below absolute zero!');
    this._celsius = value;
  }
}

const temp = new Temperature(100);
console.log(temp.fahrenheit); // 212 — looks like a property, runs a function
temp.celsius = 200;           // calls setter
temp.celsius = -300;          // throws Error

6. Public & Private Fields
ES2022+ feature. # makes a field truly private — not just by convention.


class Counter {
  // Public field (with default)
  count = 0;
  label = 'default';

  // Private fields — ONLY accessible inside the class
  #secret = 42;
  #history = [];

  increment() {
    this.count++;
    this.#history.push(this.count);
    return this;
  }

  getHistory() {
    return [...this.#history]; // return copy, not reference
  }

  #internalReset() { // private method
    this.count = 0;
    this.#history = [];
  }

  reset() {
    this.#internalReset(); // called from inside — ok
  }
}

const c = new Counter();
c.increment().increment().increment();
console.log(c.count);        // 3
console.log(c.getHistory()); // [1, 2, 3]
console.log(c.#secret);      // SyntaxError — truly private!
console.log(c.#history);     // SyntaxError
Private vs _ convention: _name is just a naming hint — anyone can still access it. #name is enforced by the engine.

7. Inheritance — extends & super

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    return `${this.name} says ${this.sound}`;
  }

  toString() {
    return `[Animal: ${this.name}]`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name, 'woof'); // MUST call super() before using 'this'
    this.breed = breed;
  }

  fetch(item) {
    return `${this.name} fetches the ${item}!`;
  }

  // Override parent method
  speak() {
    const parentSpeech = super.speak(); // call parent version
    return `${parentSpeech} (tail wagging)`;
  }
}

const dog = new Dog('Rex', 'Labrador');
console.log(dog.speak());       // "Rex says woof (tail wagging)"
console.log(dog.fetch('ball')); // "Rex fetches the ball!"
console.log(dog.name);          // "Rex" — inherited from Animal

// instanceof checks the prototype chain
console.log(dog instanceof Dog);    // true
console.log(dog instanceof Animal); // true
console.log(dog instanceof Object); // true — everything is!

8. The Prototype Chain — What's really happening

class A {
  hello() { return 'A'; }
}

class B extends A {
  world() { return 'B'; }
}

class C extends B {
  test() { return 'C'; }
}

const c = new C();

// When you call c.hello():
// 1. Look on c itself — not found
// 2. Look on C.prototype — not found
// 3. Look on B.prototype — not found
// 4. Look on A.prototype — FOUND!

// The chain:
// c → C.prototype → B.prototype → A.prototype → Object.prototype → null

Object.getPrototypeOf(c) === C.prototype;             // true
Object.getPrototypeOf(C.prototype) === B.prototype;   // true
Object.getPrototypeOf(B.prototype) === A.prototype;   // true

9. Mixins — Multiple inheritance workaround
JS only allows one extends. Mixins let you compose behaviors.


// Mixin = a function that takes a class and returns an extended class
const Serializable = (Base) => class extends Base {
  serialize() {
    return JSON.stringify(this);
  }

  static deserialize(json) {
    return Object.assign(new this(), JSON.parse(json));
  }
};

const Timestamped = (Base) => class extends Base {
  constructor(...args) {
    super(...args);
    this.createdAt = new Date();
  }
};

const Validatable = (Base) => class extends Base {
  validate() {
    return Object.keys(this).every(key => this[key] !== null);
  }
};

// Compose them all
class User extends Serializable(Timestamped(Validatable(class {}))) {
  constructor(name, email) {
    super();
    this.name = name;
    this.email = email;
  }
}

const user = new User('Divya', 'divya@example.com');
console.log(user.serialize());   // JSON string
console.log(user.validate());    // true
console.log(user.createdAt);     // Date object

10. Abstract Classes (simulated)
JS has no abstract keyword. You simulate it.


class Shape {
  constructor(color) {
    if (new.target === Shape) {
      throw new Error('Shape is abstract — cannot instantiate directly');
    }
    this.color = color;
  }

  // "Abstract" method — subclasses MUST override
  area() {
    throw new Error(`${this.constructor.name} must implement area()`);
  }

  // Concrete method — shared by all
  describe() {
    return `A ${this.color} shape with area ${this.area().toFixed(2)}`;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(color, w, h) {
    super(color);
    this.width = w;
    this.height = h;
  }

  area() {
    return this.width * this.height;
  }
}

new Shape('red');                      // Error: Shape is abstract
new Circle('blue', 5).describe();      // "A blue shape with area 78.54"
new Rectangle('green', 4, 6).describe(); // "A green shape with area 24.00"

11. The this Problem — Biggest class gotcha

class Timer {
  constructor() {
    this.seconds = 0;
  }

  // PROBLEM: 'this' is lost when passed as callback
  startBroken() {
    setInterval(function() {
      this.seconds++; // 'this' is undefined (strict) or window (sloppy)
      console.log(this.seconds);
    }, 1000);
  }

  // FIX 1: Arrow function (captures 'this' from surrounding scope)
  startArrow() {
    setInterval(() => {
      this.seconds++; // 'this' = Timer instance ✓
      console.log(this.seconds);
    }, 1000);
  }

  // FIX 2: .bind()
  startBound() {
    setInterval(function() {
      this.seconds++;
    }.bind(this), 1000);
  }
}

// The same problem with event handlers:
class Button {
  constructor(label) {
    this.label = label;
    this.handleClick = this.handleClick.bind(this); // bind in constructor
  }

  handleClick() {
    console.log(`${this.label} clicked`); // 'this' is safe now
  }
}

12. Checking & Inspecting Classes

class Animal {}
class Dog extends Animal {}

const d = new Dog();

// Type checks
console.log(d instanceof Dog);                      // true
console.log(d instanceof Animal);                   // true
console.log(d.constructor === Dog);                 // true
console.log(d.constructor.name);                    // "Dog"

// Prototype checks
console.log(Object.getPrototypeOf(d) === Dog.prototype);    // true
console.log(Dog.prototype.isPrototypeOf(d));                // true
console.log(Animal.prototype.isPrototypeOf(d));             // true

// Own vs inherited properties
d.name = 'Rex';
console.log(d.hasOwnProperty('name'));        // true  — own
console.log(d.hasOwnProperty('constructor')); // false — inherited

## OOP

The 4 Pillars — What they actually mean in JS
Pillar 1 — Encapsulation
Bundle data + behavior together. Hide what doesn't need to be exposed.

The point isn't just grouping — it's controlling access.


// BAD — data is naked, anyone can corrupt it
const user = {
  balance: 1000,
  role: 'user'
};
user.balance = -99999; // nothing stops this
user.role = 'admin';   // nothing stops this either

// GOOD — encapsulation via factory function + closure
function createBankAccount(initialBalance) {
  let balance = initialBalance;    // truly private — closure variable
  const transactions = [];

  return {
    deposit(amount) {
      if (amount <= 0) throw new Error('Must be positive');
      balance += amount;
      transactions.push({ type: 'deposit', amount });
    },
    withdraw(amount) {
      if (amount > balance) throw new Error('Insufficient funds');
      balance -= amount;
      transactions.push({ type: 'withdraw', amount });
    },
    getBalance() { return balance; },         // read-only access
    getHistory() { return [...transactions]; } // copy, not reference
    // 'balance' and 'transactions' are IMPOSSIBLE to access directly
  };
}

const acc = createBankAccount(500);
acc.deposit(200);
console.log(acc.getBalance()); // 700
console.log(acc.balance);      // undefined — fully hidden
Closure-based privacy existed before # private fields. Interviews love asking about both approaches.

Pillar 2 — Abstraction
Hide complexity. Show only what the user needs.

Abstraction = the what, not the how.


// Without abstraction — caller has to know everything
fetch('/api/users')
  .then(res => { if (!res.ok) throw new Error(res.status); return res.json(); })
  .then(data => data.filter(u => u.active))
  .then(data => data.map(u => ({ id: u.id, name: u.name })));

// With abstraction — hide the how, expose the what
class UserService {
  async getActiveUsers() {
    return this.#fetchUsers()
      .then(users => users.filter(u => u.active))
      .then(users => users.map(this.#toDTO));
  }

  async #fetchUsers() { // hidden implementation detail
    const res = await fetch('/api/users');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  #toDTO(user) { // hidden transformation detail
    return { id: user.id, name: user.name };
  }
}

// Caller only sees:
const service = new UserService();
const users = await service.getActiveUsers(); // clean, simple
Rule of thumb: If changing the implementation forces callers to change their code — your abstraction is leaking.

Pillar 3 — Inheritance
Already covered class-based inheritance. Here's what actually matters conceptually:

Prototype chain is JS's native inheritance mechanism.


// Object.create() — raw prototypal inheritance, no class needed
const animal = {
  breathe() { return `${this.name} is breathing`; },
  eat(food) { return `${this.name} eats ${food}`; }
};

const dog = Object.create(animal); // dog's prototype IS animal
dog.name = 'Rex';
dog.bark = function() { return `${this.name} says woof`; };

console.log(dog.breathe()); // "Rex is breathing" — found via prototype
console.log(dog.eat('bone')); // "Rex eats bone"
console.log(Object.getPrototypeOf(dog) === animal); // true

// Multi-level
const labrador = Object.create(dog);
labrador.name = 'Buddy';
labrador.fetch = function() { return `${this.name} fetches!`; };

labrador.breathe(); // walks up: labrador → dog → animal ✓
labrador.bark();    // walks up: labrador → dog ✓
labrador.fetch();   // found on labrador itself ✓
Pillar 4 — Polymorphism
Same interface, different behavior. One function works with many types.


class Shape {
  area() { throw new Error('Not implemented'); }
  toString() { return `${this.constructor.name} with area ${this.area().toFixed(2)}`; }
}

class Circle extends Shape {
  constructor(r) { super(); this.r = r; }
  area() { return Math.PI * this.r ** 2; }
}

class Rectangle extends Shape {
  constructor(w, h) { super(); this.w = w; this.h = h; }
  area() { return this.w * this.h; }
}

class Triangle extends Shape {
  constructor(b, h) { super(); this.b = b; this.h = h; }
  area() { return 0.5 * this.b * this.h; }
}

// THIS is polymorphism — one function, works for all types
function totalArea(shapes) {
  return shapes.reduce((sum, shape) => sum + shape.area(), 0);
}

const shapes = [new Circle(5), new Rectangle(4, 6), new Triangle(3, 8)];
console.log(totalArea(shapes)); // 126.54 — doesn't care which type

// Duck typing — JS polymorphism doesn't need inheritance
function makeNoise(animal) {
  return animal.speak(); // just needs a .speak() method — that's it
}

makeNoise({ speak: () => 'Woof' });
makeNoise({ speak: () => 'Meow' });
makeNoise({ speak: () => 'Moo' });
// No shared parent required — just the same interface
Composition Over Inheritance — The most important OOP lesson
Prefer composing small behaviors over building deep inheritance trees.

Deep inheritance = fragile. Composition = flexible.


// THE PROBLEM with deep inheritance
class Animal {}
class FlyingAnimal extends Animal { fly() {} }
class SwimmingAnimal extends Animal { swim() {} }

// Now what? A duck can both fly AND swim
// class Duck extends ??? — JS only allows one extends!

// COMPOSITION SOLUTION — build from pieces
const canFly = {
  fly() { return `${this.name} is flying`; }
};

const canSwim = {
  swim() { return `${this.name} is swimming`; }
};

const canRun = {
  run() { return `${this.name} is running`; }
};

const canBark = {
  bark() { return `${this.name} says woof!`; }
};

// Compose exactly what you need
function createDuck(name) {
  return Object.assign({ name }, canFly, canSwim);
}

function createDog(name) {
  return Object.assign({ name }, canRun, canBark);
}

function createSuperDog(name) {
  return Object.assign({ name }, canFly, canRun, canSwim, canBark);
}

const duck = createDuck('Donald');
duck.fly();   // "Donald is flying"
duck.swim();  // "Donald is swimming"

const superDog = createSuperDog('Krypto');
superDog.fly();  // "Krypto is flying"
superDog.bark(); // "Krypto says woof!"
Object Creation Patterns — All 4 Ways

// 1. Object literal — one-off objects
const point = { x: 10, y: 20 };

// 2. Factory function — no 'new', just returns an object
function createUser(name, role) {
  return {
    name,
    role,
    canAccess(resource) {
      return this.role === 'admin' || resource === 'public';
    }
  };
}
const u = createUser('Divya', 'admin');

// 3. Constructor function — old school, pre-class
function Product(name, price) {
  this.name = name;
  this.price = price;
}
Product.prototype.discount = function(pct) {
  return this.price * (1 - pct / 100);
};
const p = new Product('Laptop', 1000);

// 4. Object.create() — direct prototype control
const vehicleProto = {
  describe() { return `${this.make} ${this.model}`; }
};
const car = Object.create(vehicleProto);
car.make = 'Toyota';
car.model = 'Corolla';
SOLID Principles in JS
S — Single Responsibility
One class/function = one reason to change.


// BAD — does too many things
class User {
  constructor(name, email) { this.name = name; this.email = email; }
  saveToDatabase() { /* DB logic */ }    // knows about DB
  sendWelcomeEmail() { /* email logic */ } // knows about email
  generateReport() { /* report logic */ } // knows about reports
}

// GOOD — each class has one job
class User {
  constructor(name, email) { this.name = name; this.email = email; }
}

class UserRepository {
  save(user) { /* DB logic */ }
  findById(id) { /* DB logic */ }
}

class EmailService {
  sendWelcome(user) { /* email logic */ }
}
O — Open/Closed
Open for extension, closed for modification.


// BAD — adding a new discount type means editing this function
function calculateDiscount(order, type) {
  if (type === 'seasonal') return order.total * 0.1;
  if (type === 'loyalty')  return order.total * 0.2;
  if (type === 'flash')    return order.total * 0.5;
  // adding new type = edit this function = risky
}

// GOOD — add new behavior without changing existing code
class SeasonalDiscount { apply(total) { return total * 0.1; } }
class LoyaltyDiscount  { apply(total) { return total * 0.2; } }
class FlashDiscount    { apply(total) { return total * 0.5; } }
class NoDiscount       { apply(total) { return 0; } }

function calculateDiscount(order, discountStrategy) {
  return discountStrategy.apply(order.total);
}

// New discount? Just add a new class. Touch nothing else.
class NewYearDiscount  { apply(total) { return total * 0.3; } }
calculateDiscount(order, new NewYearDiscount());
L — Liskov Substitution
Subclasses must be usable wherever the parent is used — without breaking things.


// VIOLATION — Square breaks Rectangle's contract
class Rectangle {
  setWidth(w)  { this.width = w; }
  setHeight(h) { this.height = h; }
  area() { return this.width * this.height; }
}

class Square extends Rectangle {
  setWidth(w)  { this.width = w; this.height = w; }  // side effect!
  setHeight(h) { this.width = h; this.height = h; }  // side effect!
}

function testRectangle(rect) {
  rect.setWidth(4);
  rect.setHeight(5);
  console.log(rect.area()); // expects 20
}

testRectangle(new Rectangle()); // 20 ✓
testRectangle(new Square());    // 16 ✗ — substitution failed!

// FIX — don't force Square into Rectangle's hierarchy
class Shape { area() {} }
class Rectangle extends Shape {
  constructor(w, h) { super(); this.w = w; this.h = h; }
  area() { return this.w * this.h; }
}
class Square extends Shape {
  constructor(s) { super(); this.s = s; }
  area() { return this.s ** 2; }
}
I — Interface Segregation
Don't force classes to implement methods they don't need.


// BAD — not every worker eats lunch or needs benefits
class Worker {
  work() {}
  eat() {}       // robots don't eat
  payTax() {}    // contractors don't get benefits
}

// GOOD — separate concerns
const Workable   = (Base) => class extends Base { work() {} };
const Eatable    = (Base) => class extends Base { eat() {} };
const Taxable    = (Base) => class extends Base { payTax() {} };

class HumanWorker extends Taxable(Eatable(Workable(class {}))) {}
class RobotWorker extends Workable(class {}) {} // only what it needs
D — Dependency Inversion
Depend on abstractions, not concrete implementations.


// BAD — high-level module hardcoded to low-level detail
class OrderService {
  constructor() {
    this.db = new MySQLDatabase(); // tightly coupled to MySQL
  }
  saveOrder(order) { this.db.save(order); }
}

// BAD — impossible to swap DB, impossible to test

// GOOD — inject the dependency
class OrderService {
  constructor(database) { // accepts ANY database
    this.db = database;
  }
  saveOrder(order) { this.db.save(order); }
}

// Now easily swap implementations
const prod    = new OrderService(new MySQLDatabase());
const staging = new OrderService(new PostgresDatabase());
const test    = new OrderService({ save: jest.fn() }); // mock in tests!
Object.assign vs Spread vs Object.create

const base = { greet() { return `Hi, I'm ${this.name}`; } };

// Object.assign — mutates target
const obj1 = Object.assign({}, base, { name: 'Divya' });

// Spread — same result, cleaner syntax
const obj2 = { ...base, name: 'Divya' };

// Object.create — sets prototype (methods inherited, not copied)
const obj3 = Object.create(base);
obj3.name = 'Divya';

// Key difference:
obj1.hasOwnProperty('greet'); // true  — greet was COPIED
obj3.hasOwnProperty('greet'); // false — greet is INHERITED
Quick Mental Model

Classical OOP (Java/C++)     Prototypal OOP (JS)
─────────────────────────    ──────────────────────────
Classes are blueprints       Objects link to objects
Instances copy from class    Instances delegate to prototype
new creates from template    new creates + wires prototype
Rigid hierarchy              Flexible chain

## Object
collection of properties and methods 
-toLowerCase

## Why use OOP?

## What is the concept of Spaghetti Code:
Object literal

- Constructor function
- Prototype
- Classes
- Instances

## 4 pillars
Abstraction 
Encapsulation
Inheritance
Polymorphism

This are the four pillars of JS
