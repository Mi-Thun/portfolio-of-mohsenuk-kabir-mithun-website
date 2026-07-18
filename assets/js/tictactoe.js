/* ── Hero tic-tac-toe: two bots play forever ─────────────────────
   Decorative, pointer-events none. Skipped on reduced motion. */
(function () {
  "use strict";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const boardEl = document.getElementById("hgBoard");
  const statusEl = document.getElementById("hgStatus");
  const scoreEl = document.getElementById("hgScore");
  if (!boardEl || !statusEl || !scoreEl) return;

  const LINES = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];

  const cells = [];
  for (let i = 0; i < 9; i++) {
    const c = document.createElement("div");
    c.className = "hg-cell";
    boardEl.appendChild(c);
    cells.push(c);
  }

  let board, turn;
  const score = { X: 0, O: 0, D: 0 };
  const rand = (min, max) => min + Math.random() * (max - min);
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  function winner(b) {
    for (const [a, m, z] of LINES) {
      if (b[a] && b[a] === b[m] && b[a] === b[z]) return { p: b[a], line: [a, m, z] };
    }
    return null;
  }

  function empties(b) {
    const out = [];
    for (let i = 0; i < 9; i++) if (!b[i]) out.push(i);
    return out;
  }

  /* Decent-but-fallible bot: win > block > center > corner > random,
     with a 25% chance of a lazy random move so games stay varied. */
  function chooseMove(p) {
    const open = empties(board);
    if (Math.random() < 0.25) return pick(open);
    const opp = p === "X" ? "O" : "X";
    for (const player of [p, opp]) {
      for (const i of open) {
        board[i] = player;
        const w = winner(board);
        board[i] = "";
        if (w) return i;
      }
    }
    if (!board[4]) return 4;
    const corners = [0, 2, 6, 8].filter((i) => !board[i]);
    if (corners.length) return pick(corners);
    return pick(open);
  }

  function renderScore() {
    scoreEl.textContent = "X " + score.X + " · O " + score.O + " · = " + score.D;
  }

  function newGame() {
    board = Array(9).fill("");
    turn = Math.random() > 0.5 ? "X" : "O";
    cells.forEach((c) => {
      c.textContent = "";
      c.className = "hg-cell";
    });
    statusEl.textContent = turn + " thinking…";
    setTimeout(step, rand(700, 1100));
  }

  function step() {
    const i = chooseMove(turn);
    board[i] = turn;
    cells[i].textContent = turn;
    cells[i].classList.add(turn === "X" ? "x" : "o", "pop");

    const w = winner(board);
    if (w) {
      score[w.p]++;
      renderScore();
      statusEl.textContent = w.p + " wins — rematch…";
      w.line.forEach((idx) => cells[idx].classList.add("win"));
      setTimeout(newGame, 2200);
      return;
    }
    if (empties(board).length === 0) {
      score.D++;
      renderScore();
      statusEl.textContent = "draw — again…";
      setTimeout(newGame, 1800);
      return;
    }

    turn = turn === "X" ? "O" : "X";
    statusEl.textContent = turn + " thinking…";
    setTimeout(step, rand(550, 1000));
  }

  renderScore();
  newGame();
})();
