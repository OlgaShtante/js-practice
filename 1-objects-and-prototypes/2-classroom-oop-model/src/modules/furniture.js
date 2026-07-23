export function Furniture(computerDesks, teacherDesk, chairs, studyDesks, rollingChairs) {
  this.computerDesks = computerDesks;
  this.teacherDesk = teacherDesk;
  this.chairs = chairs;
  this.studyDesks = studyDesks;
  this.rollingChairs = rollingChairs;
}

Furniture.prototype.seats = function () {
  return this.chairs + this.rollingChairs.quantity;
};
