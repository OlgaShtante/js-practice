const studentParam = "smart";

function Students(boys, girls){
  this.boys = boys;
  this.girls = girls;
  this.group = "M-FD2-54-19";
  this.boys = studentParam;


const askQuestion = function(studentParam){
  alert(`students ${studentParam} ask questions`);
} 
askQuestion('often');

  this.doHomework = function(){
  this.group = "evening group";
  console.log(`${this.group} starts clases at 18:30 on Wednesday`)
  }
}

Students.prototype.study = function(){
  this.boys = 10;
  this.girls = 3; 
  const studyProcess = "students are studying!";
  this.group = this.boys + this.girls;
  console.log(`${this.group} ${studyProcess}`);
}

export { Students };

