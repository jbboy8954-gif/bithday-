// PERSONALIZE THIS DATE if you use the site in a different year.
const birthdayMonth = 9; // October: JavaScript months start at 0
const birthdayDay = 21;

const countdownTitle = document.getElementById("countdown-title");
const countdownEls = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds")
};

function getNextBirthday() {
  const now = new Date();
  let year = now.getFullYear();
  // Use local time on the visitor's device.
  let target = new Date(year, birthdayMonth, birthdayDay, 0, 0, 0);
  if (now >= target) target = new Date(year + 1, birthdayMonth, birthdayDay, 0, 0, 0);
  return target;
}

let birthdayTarget = getNextBirthday();

function updateCountdown() {
  const now = new Date();
  let difference = birthdayTarget.getTime() - now.getTime();

  if (difference <= 0) {
    countdownTitle.textContent = "It's your special day! Happy birthday! 🎂";
    birthdayTarget = getNextBirthday();
    difference = birthdayTarget.getTime() - now.getTime();
  } else {
    countdownTitle.textContent = "Counting down to your special day";
  }

  const days = Math.floor(difference / 86400000);
  const hours = Math.floor((difference % 86400000) / 3600000);
  const minutes = Math.floor((difference % 3600000) / 60000);
  const seconds = Math.floor((difference % 60000) / 1000);

  countdownEls.days.textContent = String(days).padStart(2, "0");
  countdownEls.hours.textContent = String(hours).padStart(2, "0");
  countdownEls.minutes.textContent = String(minutes).padStart(2, "0");
  countdownEls.seconds.textContent = String(seconds).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Floating hearts, kept lightweight.
const heartLayer = document.getElementById("floating-hearts");
const heartSymbols = ["♡", "♥", "✧", "♡", "♥"];

function addFloatingHeart() {
  const heart = document.createElement("span");
  heart.className = "float-heart";
  heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = (12 + Math.random() * 19) + "px";
  heart.style.animationDuration = (8 + Math.random() * 7) + "s";
  heartLayer.appendChild(heart);
  window.setTimeout(() => heart.remove(), 16000);
}
for (let i = 0; i < 12; i++) {
  window.setTimeout(addFloatingHeart, i * 350);
}
setInterval(addFloatingHeart, 1100);

// Birthday cake: put out the candle flames and launch confetti.
const cakeStage = document.querySelector(".cake-stage");
const blowButton = document.getElementById("blow-button");
const wishMessage = document.getElementById("wish-message");
let candlesBlown = false;

blowButton.addEventListener("click", () => {
  if (candlesBlown) {
    cakeStage.classList.remove("blown");
    candlesBlown = false;
    blowButton.textContent = "Blow out the candles ✨";
    wishMessage.textContent = "Make another wish, birthday girl. 💫";
    return;
  }
  cakeStage.classList.add("blown");
  candlesBlown = true;
  blowButton.textContent = "Light the candles again ♡";
  wishMessage.textContent = "Wish made! May all your beautiful dreams come true. 🎉💗";
  launchConfetti();
});

// Small canvas confetti animation; no external library required.
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
let particles = [];
let animationFrame = null;

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function launchConfetti() {
  const colors = ["#e65f92", "#ffc6d9", "#d7b7ff", "#f5c86a", "#ffffff"];
  for (let i = 0; i < 150; i++) {
    particles.push({
      x: window.innerWidth / 2 + (Math.random() - 0.5) * 140,
      y: window.innerHeight * 0.46,
      vx: (Math.random() - 0.5) * 9,
      vy: -Math.random() * 9 - 2,
      gravity: 0.16 + Math.random() * 0.1,
      size: 3 + Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 6,
      spin: (Math.random() - 0.5) * 0.2,
      life: 100 + Math.random() * 45
    });
  }
  if (!animationFrame) animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  particles = particles.filter(p => p.life > 0 && p.y < window.innerHeight + 30);
  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += p.gravity;
    p.rotation += p.spin;
    p.life -= 1;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.6);
    ctx.restore();
  }
  if (particles.length) {
    animationFrame = requestAnimationFrame(animateConfetti);
  } else {
    cancelAnimationFrame(animationFrame);
    animationFrame = null;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }
}

// Love letter's extra hidden message.
const secretButton = document.getElementById("secret-button");
const secretMessage = document.getElementById("secret-message");
secretButton.addEventListener("click", () => {
  const isHidden = secretMessage.hidden;
  secretMessage.hidden = !isHidden;
  secretButton.innerHTML = isHidden
    ? 'Hide my little secret <span>♡</span>'
    : "P.S. there's one more thing… <span>♡</span>";
});

// Music requires a user click because browsers block autoplay with sound.
const music = document.getElementById("birthday-song");
const musicToggle = document.getElementById("music-toggle");
musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicToggle.innerHTML = '<span aria-hidden="true">Ⅱ</span> Pause our song';
      musicToggle.setAttribute("aria-pressed", "true");
    } catch (error) {
      musicToggle.textContent = "Add music/our-song.mp3 first";
    }
  } else {
    music.pause();
    musicToggle.innerHTML = '<span aria-hidden="true">♫</span> Play our song';
    musicToggle.setAttribute("aria-pressed", "false");
  }
});
