import { Teacher } from "./teacher.js";
import { Students } from "./students.js";
import { Furniture } from "./furniture.js";
import { TechEquipment } from "./techEquip.js";
import { ConstructionEquipment } from "./constructEquip.js";
import { DecorElements } from "./decElements.js";
import { Room } from "./room.js";

// each entity is defined in its own module; main.js composes them into one Room
const teacher = new Teacher("Yury", "Tatsenka", 33);
const students = new Students(
  ["Maxim", "Alexandr", "Alex", "Alexey", "Tural", "Max", "Ilya", "Vladislav", "Eugeniy", "Oleg"],
  ["Kristina", "Tanya", "Olga"]
);
const furniture = new Furniture(20, 1, 20,
  { size: "middle", quantity: 20 },
  { seatMaterial: "fabric", frameMaterial: "plastic", height: "adjustable", quantity: 21 }
);
const tech = new TechEquipment(
  { monitors: 21, systemUnits: 21, keyboards: 21, mice: 21 },
  { working: true },
  { remoteControl: "lost", workingWell: true }
);
const construction = new ConstructionEquipment(
  { material: "wood", size: "standard" },
  { frameMaterial: "plastic", glassMaterial: "glass", size: "big" }
);
const decor = new DecorElements(
  { type: "roll", material: "fabric" },
  { style: "abstract", type: "painting" }
);

const room = new Room(57, teacher, students, furniture, tech, construction, decor);

const lines = [
  "Room 57 composed across ES modules",
  "",
  room.summary(),
  "",
  `teacher:   ${teacher.teach()} (${teacher.experience})`,
  `students:  ${students.total()} (${students.boys.length} boys, ${students.girls.length} girls)`,
  `schedule:  ${students.schedule()}`,
  `furniture: ${furniture.computerDesks} computer desks, ${furniture.seats()} seats total`,
  `tech:      ${tech.status()}`,
  `structure: ${construction.describe()}`,
  `decor:     ${decor.describe()}`,
];
console.log(lines.join("\n"));
