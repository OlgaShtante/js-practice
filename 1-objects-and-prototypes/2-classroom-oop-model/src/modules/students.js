// class schedule kept at module scope, shared by the Students methods
const CLASS_TIME = ["15:30", "18:30"];
const CLASS_DAYS = ["Wednesday", "Saturday"];

export function Students(boys, girls) {
  this.boys = boys;
  this.girls = girls;
  this.group = "M-FD2-54-19";
}

Students.prototype.total = function () {
  return this.boys.length + this.girls.length;
};

Students.prototype.schedule = function () {
  return `${this.group} studies at ${CLASS_TIME.join(" and ")} on ${CLASS_DAYS.join(" and ")}`;
};
