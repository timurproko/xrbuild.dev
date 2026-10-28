// The test checklist panel: what to try with each control, ticked off as it happens.
import * as THREE from 'three';
import { COLORS } from '@xr-build/ui-kit';

export interface CheckItem {
  id: string;
  text: string;
}

const ROW_PX = 46, PAD = 24, WIDTH_PX = 600;  // 0.13 m wide at the same text size as before (760 px at 0.165 m)

export class Checklist extends THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial> {
  readonly items: CheckItem[];
  private readonly done = new Set<string>();
  private readonly canvas: HTMLCanvasElement;
  private readonly texture: THREE.CanvasTexture;

  /** `width` in metres; the height follows from the number of rows */
  constructor(items: CheckItem[], width: number) {
    const canvas = document.createElement('canvas');
    canvas.width = WIDTH_PX;
    canvas.height = PAD * 2 + ROW_PX * (items.length + 1.4);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 4;
    super(new THREE.PlaneGeometry(width, (width * canvas.height) / canvas.width), new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false }));
    this.items = items;
    this.canvas = canvas;
    this.texture = texture;
    this.raycast = () => {};
    this.draw();
  }

  check(id: string): void {
    if (this.done.has(id) || !this.items.some((i) => i.id === id)) return;
    this.done.add(id);
    this.draw();
  }

  has(id: string): boolean {
    return this.done.has(id);
  }

  reset(): void {
    this.done.clear();
    this.draw();
  }

  private draw(): void {
    const ctx = this.canvas.getContext('2d')!;
    const { width, height } = this.canvas;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(255,255,255,0.04)';
    ctx.beginPath();
    ctx.roundRect(0, 0, width, height, 18);
    ctx.fill();
    ctx.textBaseline = 'middle';
    ctx.font = '700 30px "Segoe UI", system-ui, sans-serif';
    ctx.fillStyle = COLORS.text;
    ctx.fillText(`UI Kit checklist  ${this.done.size}/${this.items.length}`, PAD, PAD + ROW_PX * 0.5);
    ctx.font = '500 22px "Segoe UI", system-ui, sans-serif';
    ctx.fillStyle = COLORS.muted;
    ctx.textAlign = 'right';
    ctx.fillText('Tab = hide · R = reset', width - PAD, PAD + ROW_PX * 0.5);
    ctx.textAlign = 'left';
    this.items.forEach((item, i) => {
      const y = PAD + ROW_PX * (i + 1.4) + ROW_PX / 2;
      const done = this.done.has(item.id);
      ctx.strokeStyle = done ? COLORS.done : COLORS.muted;
      ctx.lineWidth = 3;
      ctx.strokeRect(PAD + 2, y - 11, 22, 22);
      if (done) {
        ctx.beginPath();
        ctx.moveTo(PAD + 7, y);
        ctx.lineTo(PAD + 12, y + 6);
        ctx.lineTo(PAD + 21, y - 6);
        ctx.stroke();
      }
      ctx.font = '500 25px "Segoe UI", system-ui, sans-serif';
      ctx.fillStyle = done ? COLORS.done : COLORS.text;
      ctx.fillText(item.text, PAD + 40, y);
    });
    this.texture.needsUpdate = true;
  }
}
