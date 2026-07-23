// SUBJECT is module-scoped: visible only inside teacher.js
const SUBJECT = "JS";

export function Teacher(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.experience = "about 10 years in development";
}

Teacher.prototype.teach = function () {
  return `${this.firstName} ${this.lastName} teaches ${SUBJECT}`;
};
