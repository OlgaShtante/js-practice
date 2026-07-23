// Room #57 assembled from constructor functions defined in nested scope.
// The constructors live inside buildRoom() and never leak to the outer scope.
// "show objects" renders a readable summary of the constructed graph into #out.

function buildRoom() {
  function Teacher(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  function Students(boys, girls) {
    this.boys = boys;
    this.girls = girls;
  }
  function Furniture(
    computerDesks,
    teacherDesk,
    chairs,
    studyDesks,
    rollingChairs,
  ) {
    this.computerDesks = computerDesks;
    this.teacherDesk = teacherDesk;
    this.chairs = chairs;
    this.studyDesks = studyDesks;
    this.rollingChairs = rollingChairs;
  }
  function TechEquipment(computers, projector, airConditioning) {
    this.computers = computers;
    this.projector = projector;
    this.airConditioning = airConditioning;
  }
  function Construction(door, window) {
    this.door = door;
    this.window = window;
  }
  function Decor(curtains, wall) {
    this.curtains = curtains;
    this.wall = wall;
  }
  function Room(teacher, students, furniture, tech, construction, decor) {
    this.teacher = teacher;
    this.students = students;
    this.furniture = furniture;
    this.tech = tech;
    this.construction = construction;
    this.decor = decor;
  }

  const teacher = new Teacher("Yury", "Tatsenka", 33);
  const students = new Students(
    [
      "Maxim",
      "Alexandr",
      "Alex",
      "Alexey",
      "Tural",
      "Max",
      "Ilya",
      "Vladislav",
      "Eugeniy",
      "Oleg",
    ],
    ["Kristina", "Tanya", "Olga"],
  );
  const furniture = new Furniture(
    20,
    1,
    20,
    { size: "middle", quantity: 20 },
    {
      seatMaterial: "fabric",
      frameMaterial: "plastic",
      height: "adjustable",
      quantity: 21,
    },
  );
  const tech = new TechEquipment(
    { monitors: 21, systemUnits: 21, keyboards: 21, mice: 21 },
    { working: true },
    { remoteControl: "lost", workingWell: true },
  );
  const construction = new Construction(
    { material: "wood", size: "standard" },
    { frameMaterial: "plastic", glassMaterial: "glass", size: "big" },
  );
  const decor = new Decor(
    { type: "roll", material: "fabric" },
    { style: "abstract", type: "painting" },
  );

  return new Room(teacher, students, furniture, tech, construction, decor);
}

function showObjects() {
  const room = buildRoom();
  const s = room.students;
  const f = room.furniture;
  const c = room.tech.computers;

  const lines = [
    "Room #57 built from constructors: Teacher, Students, Furniture, TechEquipment, Construction, Decor",
    "",
    "teacher:",
    `  ${room.teacher.firstName} ${room.teacher.lastName}, ${room.teacher.age}`,
    "",
    `students (${s.boys.length + s.girls.length}): ${s.boys.length} boys, ${s.girls.length} girls`,
    `  boys:  ${s.boys.join(", ")}`,
    `  girls: ${s.girls.join(", ")}`,
    "",
    "furniture:",
    `  computer desks: ${f.computerDesks}, study desks: ${f.studyDesks.quantity} (${f.studyDesks.size})`,
    `  chairs: ${f.chairs} + ${f.rollingChairs.quantity} rolling, teacher desk: ${f.teacherDesk}`,
    "",
    "tech:",
    `  ${c.monitors} monitors, ${c.systemUnits} system units, ${c.keyboards} keyboards, ${c.mice} mice`,
    `  projector: ${room.tech.projector.working ? "working" : "off"}, ` +
      `a/c: ${room.tech.airConditioning.workingWell ? "working" : "off"} (remote ${room.tech.airConditioning.remoteControl})`,
    "",
    "room:",
    `  door:     ${room.construction.door.material}, ${room.construction.door.size}`,
    `  window:   ${room.construction.window.size}, ${room.construction.window.frameMaterial} + ${room.construction.window.glassMaterial}`,
    `  curtains: ${room.decor.curtains.type} (${room.decor.curtains.material})`,
    `  wall:     ${room.decor.wall.style} ${room.decor.wall.type}`,
  ];

  const out = document.getElementById("out");
  out.textContent = lines.join("\n");
  out.hidden = false;
}

document.getElementById("show-objects").addEventListener("click", showObjects);
