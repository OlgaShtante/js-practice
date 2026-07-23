export function DecorElements(curtains, wall) {
  this.curtains = curtains;
  this.wall = wall;
}

DecorElements.prototype.describe = function () {
  return (
    `${this.wall.style} ${this.wall.type} on the wall, ` +
    `${this.curtains.type} curtains (${this.curtains.material})`
  );
};
