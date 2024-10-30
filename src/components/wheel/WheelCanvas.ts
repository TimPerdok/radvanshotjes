import type { Sector } from "../../forms/Sector.ts";

export default class WheelCanvas {
  arc: number;
  radius: number;
  sectors: Sector[];

  constructor(private context: CanvasRenderingContext2D, sectors: Sector[]) {
    const diameter = this.context.canvas.width
    this.radius = diameter / 2
    this.arc = Math.PI * 2 / sectors.length;
    this.sectors = sectors;
    this.draw();
  }

  public draw() {
    this.sectors.forEach(this.drawSector.bind(this))
  }

  private drawSector(sector: Sector, i: number) {
    const context = this.context;
    const { radius, arc } = this;
    const angle = arc * i

    context.save()
    // COLOR
    context.beginPath()
    context.fillStyle = sector.color
    context.moveTo(radius, radius)
    context.arc(radius, radius, radius, angle, angle + arc)
    context.lineTo(radius, radius)
    context.fill()
    // TEXT
    context.translate(radius, radius)
    context.rotate(angle + arc / 2)
    context.textAlign = 'right'
    context.fillStyle = '#fff'
    context.font = 'bold 30px sans-serif'
    context.fillText(sector.label, radius - 10, 10)

    context.restore()
  }

  public rotate(angle: number) {
    this.context.canvas.style.transform = `rotate(${angle - Math.PI / 2}rad)`
  }
}