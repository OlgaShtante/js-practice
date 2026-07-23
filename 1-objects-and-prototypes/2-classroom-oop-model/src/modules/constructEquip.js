export function ConstructionEquipment(door, window) {
  this.door = door;
  this.window = window;
  this.walls = 4;
}

ConstructionEquipment.prototype.describe = function () {
  return (
    `door: ${this.door.material} (${this.door.size}), ` +
    `window: ${this.window.size}, ${this.window.frameMaterial} frame + ${this.window.glassMaterial}`
  );
};
