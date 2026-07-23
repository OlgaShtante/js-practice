// Room #57 where every behaviour lives on a Constructor.prototype.
// On load the demo calls those inherited methods and shows that the methods
// sit on the prototype, not on the instances (JSON.stringify would hide them).

function Teacher(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
Teacher.prototype.teach = function () {
  return `${this.firstName} ${this.lastName} teaches JS`;
};

function Students(boys, girls) {
  this.boys = boys;
  this.girls = girls;
}
Students.prototype.study = function () {
  return `${this.boys.length + this.girls.length} students study JS`;
};

function Furniture(desks, chairs) {
  this.desks = desks;
  this.chairs = chairs;
}
Furniture.prototype.arrange = function () {
  return `arranging ${this.desks} desks and ${this.chairs} chairs`;
};

function Room(number, teacher, students, furniture) {
  this.number = number;
  this.teacher = teacher;
  this.students = students;
  this.furniture = furniture;
}
Room.prototype.describe = function () {
  return `room ${this.number}: ${this.teacher.teach()}; ${this.students.study()}`;
};

function render() {
  const teacher = new Teacher("Yury", "Tatsenka", 33);
  const students = new Students(
    ["Maxim", "Alexandr", "Alex", "Alexey", "Tural", "Max", "Ilya", "Vladislav", "Eugeniy", "Oleg"],
    ["Kristina", "Tanya", "Olga"]
  );
  const furniture = new Furniture(20, 41);
  const room = new Room(57, teacher, students, furniture);

  const lines = [
    "behaviour called from each Constructor.prototype:",
    `  teacher.teach():     ${teacher.teach()}`,
    `  students.study():    ${students.study()}`,
    `  furniture.arrange(): ${furniture.arrange()}`,
    `  room.describe():     ${room.describe()}`,
    "",
    "the methods live on the prototype, not on the instance:",
    `  teacher.hasOwnProperty("teach"):                      ${teacher.hasOwnProperty("teach")}`,
    `  Teacher.prototype.hasOwnProperty("teach"):            ${Teacher.prototype.hasOwnProperty("teach")}`,
    `  Object.getPrototypeOf(teacher) === Teacher.prototype: ${Object.getPrototypeOf(teacher) === Teacher.prototype}`,
    `  teacher instanceof Teacher:                           ${teacher instanceof Teacher}`,
  ];

  document.getElementById("out").textContent = lines.join("\n");
}

window.addEventListener("load", render);
