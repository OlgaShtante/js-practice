// Canvas practice: a drifting starfield with a rocket that follows the mouse.
// Move the mouse to fly the rocket through the stars; it points where it flies
// and leaves an exhaust trail behind it.

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();

// the rocket rides the cursor; angle is its heading (starts pointing up-right)
const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let angle = -Math.PI / 4;

window.addEventListener("mousemove", (event) => {
  const dx = event.clientX - mouse.x;
  const dy = event.clientY - mouse.y;
  if (dx * dx + dy * dy > 4) {
    angle = Math.atan2(dy, dx);
    spawnExhaust(mouse.x, mouse.y, angle);
  }
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

// ---- starfield ----
let stars = [];
function buildStars() {
  stars = [];
  const count = Math.round((canvas.width * canvas.height) / 4000);
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.4 + 0.2,
      drift: Math.random() * 0.3 + 0.05,
      twinkle: Math.random() * Math.PI * 2,
    });
  }
}
buildStars();

function drawStars() {
  for (const star of stars) {
    star.y += star.drift; // slow downward drift
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
    star.twinkle += 0.05;
    const alpha = 0.5 + 0.5 * Math.sin(star.twinkle);
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(230, 240, 255, ${alpha})`;
    ctx.fill();
  }
}

// ---- rocket exhaust ----
let exhaust = [];
function spawnExhaust(x, y, heading) {
  const back = heading + Math.PI; // emit behind the rocket
  for (let i = 0; i < 3; i++) {
    const spread = (Math.random() - 0.5) * 0.6;
    const speed = Math.random() * 1.5 + 0.5;
    exhaust.push({
      x,
      y,
      vx: Math.cos(back + spread) * speed,
      vy: Math.sin(back + spread) * speed,
      radius: Math.random() * 2 + 1,
      life: 1,
    });
  }
}

function drawExhaust() {
  for (const p of exhaust) {
    p.x += p.vx;
    p.y += p.vy;
    p.life -= 0.03;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, ${Math.round(120 + 90 * p.life)}, 60, ${Math.max(p.life, 0)})`;
    ctx.fill();
  }
  exhaust = exhaust.filter((p) => p.life > 0);
}

// ---- rocket ----
function drawRocket() {
  ctx.save();
  ctx.translate(mouse.x, mouse.y);
  ctx.rotate(angle + Math.PI / 4); // the 🚀 glyph points up-right by default
  ctx.font = "34px serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("🚀", 0, 0);
  ctx.restore();
}

function animate() {
  requestAnimationFrame(animate);
  // translucent fill keeps the dark sky and leaves faint motion trails
  ctx.fillStyle = "rgba(13, 17, 23, 0.35)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawStars();
  drawExhaust();
  drawRocket();
}
animate();

window.addEventListener("resize", () => {
  resize();
  buildStars();
});
