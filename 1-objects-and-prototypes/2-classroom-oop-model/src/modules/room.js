export function Room(number, teacher, students, furniture, tech, construction, decor) {
  this.number = number;
  this.teacher = teacher;
  this.students = students;
  this.furniture = furniture;
  this.tech = tech;
  this.construction = construction;
  this.decor = decor;
  this.purpose = "studying";
}

Room.prototype.summary = function () {
  return `room ${this.number} for ${this.purpose}: ${this.teacher.teach()}, ${this.students.total()} students`;
};
