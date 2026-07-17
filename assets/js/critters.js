/* ── Ambient critters — birds fly by, a cat strolls past ─────────
   Pure SVG + CSS. Pointer-events none, so nothing is ever blocked.
   Skipped entirely when the user prefers reduced motion. */
(function () {
  "use strict";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const layer = document.createElement("div");
  layer.id = "critter-layer";
  layer.setAttribute("aria-hidden", "true");
  document.body.appendChild(layer);

  const rand = (min, max) => min + Math.random() * (max - min);

  /* ── Bird ─────────────────────────────────────────────────── */
  const BIRD_SVG = `
    <svg viewBox="0 0 60 32" xmlns="http://www.w3.org/2000/svg">
      <g class="wing wing-l"><path d="M30 16 Q16 2 3 9 Q18 13 30 16 Z"/></g>
      <g class="wing wing-r"><path d="M30 16 Q44 2 57 9 Q42 13 30 16 Z"/></g>
      <ellipse cx="30" cy="17" rx="5.5" ry="3"/>
    </svg>`;

  function spawnBird() {
    const bird = document.createElement("div");
    bird.className = "critter bird";
    bird.innerHTML = BIRD_SVG;

    const ltr = Math.random() > 0.5;
    bird.style.top = rand(6, 38) + "vh";
    bird.style.setProperty("--size", rand(22, 38) + "px");
    bird.style.setProperty("--flap", rand(0.35, 0.6) + "s");
    bird.style.setProperty("--bob", rand(2.2, 3.4) + "s");
    bird.style.animationName = ltr ? "critter-ltr" : "critter-rtl";
    bird.style.animationDuration = rand(11, 22) + "s";
    if (!ltr) bird.classList.add("flip");

    bird.addEventListener("animationend", () => bird.remove());
    layer.appendChild(bird);
  }

  function birdLoop() {
    // Usually a small flock of 2-4, sometimes a lone bird
    const count = Math.random() < 0.25 ? 1 : Math.floor(rand(2, 5));
    for (let i = 0; i < count; i++) setTimeout(spawnBird, i * rand(300, 800));
    setTimeout(birdLoop, rand(8000, 18000));
  }

  /* ── Cat ──────────────────────────────────────────────────── */
  const CAT_SVG = `
    <svg viewBox="0 0 100 62" xmlns="http://www.w3.org/2000/svg">
      <path class="tail" d="M10 32 Q-2 22 6 8" stroke-width="5" fill="none" stroke-linecap="round"/>
      <rect class="leg leg-a" x="16" y="40" width="4.5" height="16" rx="2.2"/>
      <rect class="leg leg-b" x="28" y="40" width="4.5" height="16" rx="2.2"/>
      <rect class="leg leg-b" x="46" y="40" width="4.5" height="16" rx="2.2"/>
      <rect class="leg leg-a" x="58" y="40" width="4.5" height="16" rx="2.2"/>
      <g class="cat-body">
        <rect x="10" y="26" width="56" height="18" rx="9"/>
        <circle cx="72" cy="25" r="10.5"/>
        <path d="M64 18 L61.5 5 L70 13 Z"/>
        <path d="M80 18 L82.5 5 L74 13 Z"/>
      </g>
    </svg>`;

  function spawnCat() {
    const ltr = Math.random() > 0.5;
    const duration = rand(26, 38);

    const cat = document.createElement("div");
    cat.className = "critter cat";
    cat.innerHTML = '<div class="cwrap">' + CAT_SVG + "</div>";
    cat.style.animationName = ltr ? "critter-ltr" : "critter-rtl";
    cat.style.animationDuration = duration + "s";
    if (!ltr) cat.classList.add("flip");
    cat.addEventListener("animationend", () => cat.remove());
    layer.appendChild(cat);

    // A white kitten trots along behind, same path, slightly delayed
    const kitten = document.createElement("div");
    kitten.className = "critter cat kitten";
    kitten.innerHTML = '<div class="cwrap">' + CAT_SVG + "</div>";
    kitten.style.animationName = ltr ? "critter-ltr" : "critter-rtl";
    kitten.style.animationDuration = duration + "s";
    kitten.style.animationDelay = rand(0.9, 1.6) + "s";
    if (!ltr) kitten.classList.add("flip");
    kitten.addEventListener("animationend", () => kitten.remove());
    layer.appendChild(kitten);

    // Sometimes the cat spots the birds and tries its luck
    if (Math.random() < 0.6) {
      const huntAt = duration * rand(0.25, 0.55) * 1000;
      setTimeout(() => huntBirds(cat, kitten), huntAt);
    }
  }

  /* Cat pauses, looks up at the birds, pounces twice, gives up,
     and resumes its walk. The kitten stops and watches. */
  function huntBirds(cat, kitten) {
    if (!cat.isConnected) return;

    const pair = kitten.isConnected ? [cat, kitten] : [cat];
    pair.forEach((el) => {
      el.style.animationPlayState = "paused";
      el.classList.add("watching");
    });
    cat.classList.add("hunting");

    // Tempt it: a bird swoops past right then
    spawnBird();

    // Two pounces (CSS animation runs 2 iterations), then give up
    setTimeout(() => {
      cat.classList.remove("hunting");
      setTimeout(() => {
        pair.forEach((el) => {
          el.classList.remove("watching");
          el.style.animationPlayState = "running";
        });
      }, 600); // a short, defeated pause before walking on
    }, 2400);
  }

  function catLoop() {
    spawnCat();
    setTimeout(catLoop, rand(30000, 60000));
  }

  /* ── Mikasa — swings in on ODM gear and sits on the "u"
       of "Mithun" in the hero title, scarf in the wind ───────── */
  const MIKASA_SIT_SVG = `
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path class="scarf" d="M37 21 Q50 16 60 24 Q49 23 39 27 Z"/>
      <g class="figure">
        <circle cx="30" cy="13" r="7"/>
        <path d="M23 19 Q17 31 24 40 L40 40 Q46 31 39 19 Q31 15 23 19 Z"/>
        <rect class="dleg dl1" x="25" y="38" width="5" height="16" rx="2.5"/>
        <rect class="dleg dl2" x="34" y="38" width="5" height="16" rx="2.5"/>
      </g>
    </svg>`;

  function perchMikasa() {
    const perch = document.querySelector(".perch-u");
    if (!perch || perch.querySelector(".mikasa-perch")) return;
    const fig = document.createElement("div");
    fig.className = "mikasa-perch";
    fig.setAttribute("aria-hidden", "true");
    fig.innerHTML = MIKASA_SIT_SVG;
    perch.appendChild(fig);

    /* Real grapple cables, tracked every frame:
       phase 1 → hooked to the "Available for opportunities" badge
       phase 2 → hooked to the "u" she's about to land on */
    const anchor1 = document.querySelector(".hero-status");
    const cable = document.createElement("div");
    cable.className = "odm-cable";
    document.body.appendChild(cable);

    const T = 2200; // must match the mikasa-arrive duration
    const t0 = performance.now();

    function frame(now) {
      const t = (now - t0) / T;
      if (t >= 0.88 || !fig.isConnected) { cable.remove(); return; }

      const fr = fig.getBoundingClientRect();
      const fx = fr.left + fr.width / 2;
      const fy = fr.top + fr.height * 0.45;

      const target = t < 0.4 && anchor1
        ? anchor1.getBoundingClientRect()
        : perch.getBoundingClientRect();
      const tx = target.left + target.width / 2;
      const ty = target.top;

      const dx = tx - fx;
      const dy = ty - fy;
      cable.style.left = fx + "px";
      cable.style.top = fy + "px";
      cable.style.width = Math.hypot(dx, dy) + "px";
      cable.style.transform = "rotate(" + Math.atan2(dy, dx) + "rad)";
      // brief gap while she releases hook 1 and fires hook 2
      cable.style.opacity = t > 0.37 && t < 0.43 ? "0" : "0.8";

      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  /* ── Kickoff — first bird and cat arrive within seconds ───── */
  setTimeout(spawnBird, rand(1500, 3500));
  setTimeout(birdLoop, rand(8000, 14000));
  setTimeout(catLoop, rand(3000, 6000));
  setTimeout(perchMikasa, 1800); /* she arrives shortly after every load */
})();
