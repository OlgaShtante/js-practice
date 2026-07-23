export function TechEquipment(computers, projector, airConditioning) {
  this.computers = computers;
  this.projector = projector;
  this.airConditioning = airConditioning;
  this.lighting = "on";
}

TechEquipment.prototype.status = function () {
  return (
    `projector ${this.projector.working ? "working" : "off"}, ` +
    `a/c ${this.airConditioning.workingWell ? "working" : "off"} ` +
    `(remote ${this.airConditioning.remoteControl})`
  );
};
