// Room #57 modelled with object literals and method shorthand.
// "show the room" renders a readable summary of the object graph into #out.

function buildRoom() {
  const teacher = {
    firstName: "Yury",
    lastName: "Tatsenka",
    age: 33,
    teaches: {
      subject: "JS",
      // method shorthand
      remind() {
        return "submit clean code, please";
      },
    },
  };

  const students = {
    names: [
      "Maxim",
      "Alexandr",
      "Alex",
      "Alexey",
      "Tural",
      "Maxim",
      "Ilya",
      "Tanya",
      "Vladislav",
      "Eugeniy",
      "Oleg",
      "Kristina",
      "Olga",
    ],
    callToAttention() {
      return "answer my questions, please";
    },
  };

  const furniture = {
    computerDesks: 20,
    teacherDesk: 1,
    chairs: 20,
    studyDesks: { size: "middle", quantity: 20 },
    rollingChairs: {
      seatMaterial: "fabric",
      frameMaterial: "plastic",
      height: "adjustable",
      quantity: 21,
    },
  };

  const techEquipment = {
    computers: {
      quantity: 21,
      monitors: 21,
      systemUnits: 21,
      keyboards: 21,
      mice: 21,
      turnOn() {
        return "computers on";
      },
    },
    projector: { working: true },
    airConditioning: { remoteControl: "lost", workingWell: true },
  };

  const construction = {
    door: { material: "wood", size: "standard" },
    window: { frameMaterial: "plastic", glassMaterial: "glass", size: "big" },
  };

  const decor = {
    curtains: { type: "roll", material: "fabric" },
    wall: { type: "painting", style: "abstract" },
  };

  return { teacher, students, furniture, techEquipment, construction, decor };
}

function describeRoom() {
  const { teacher, students, furniture, techEquipment, construction, decor } =
    buildRoom();

  const lines = [
    "Room #57: group M_FD2-54-19, classes every Saturday",
    "",
    "teacher:",
    `  ${teacher.firstName} ${teacher.lastName}, ${teacher.age}, teaches ${teacher.teaches.subject}`,
    `  reminder: "${teacher.teaches.remind()}"`,
    "",
    `students (${students.names.length}):`,
    `  ${students.names.join(", ")}`,
    "",
    "furniture:",
    `  computer desks: ${furniture.computerDesks}`,
    `  study desks:    ${furniture.studyDesks.quantity} (${furniture.studyDesks.size})`,
    `  chairs:         ${furniture.chairs} + ${furniture.rollingChairs.quantity} rolling ` +
      `(${furniture.rollingChairs.seatMaterial} seat, ${furniture.rollingChairs.frameMaterial} frame)`,
    `  teacher desk:   ${furniture.teacherDesk}`,
    "",
    "tech:",
    `  ${techEquipment.computers.quantity} computers (monitor, system unit, keyboard, mouse each)`,
    `  projector:        ${techEquipment.projector.working ? "working" : "off"}`,
    `  air conditioning: ${techEquipment.airConditioning.workingWell ? "working" : "off"} ` +
      `(remote ${techEquipment.airConditioning.remoteControl})`,
    "",
    "room:",
    `  door:     ${construction.door.material}, ${construction.door.size}`,
    `  window:   ${construction.window.size}, ${construction.window.frameMaterial} frame + ${construction.window.glassMaterial}`,
    `  curtains: ${decor.curtains.type}, ${decor.curtains.material}`,
    `  wall:     ${decor.wall.style} ${decor.wall.type}`,
  ];

  const out = document.getElementById("out");
  out.textContent = lines.join("\n");
  out.hidden = false;
}

document.getElementById("show-room").addEventListener("click", describeRoom);
