(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const canvas = document.createElement('canvas');
  canvas.id = 'paintTrailCanvas';
  Object.assign(canvas.style, {
    position: 'fixed',
    inset: '0',
    width: '100vw',
    height: '100vh',
    pointerEvents: 'none',
    zIndex: '9999'
  });
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let width = 0;
  let height = 0;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  resize();
  window.addEventListener('resize', resize);

  const points = [];
  const MAX_AGE = 550;

  function recordPoint(x, y, isBreak = false) {
    const prev = points[points.length - 1];
    if (!isBreak && prev && !prev.break && Math.hypot(x - prev.x, y - prev.y) < 2) {
      return;
    }
    points.push({
      x,
      y,
      t: performance.now(),
      break: isBreak
    });
  }

  window.addEventListener('pointerenter', (e) => {
    recordPoint(e.clientX, e.clientY, true);
  });

  window.addEventListener('pointermove', (e) => {
    recordPoint(e.clientX, e.clientY, false);
  });

  window.addEventListener('pointerleave', () => {
    const last = points[points.length - 1];
    if (last) last.break = true;
  });

  function render(now) {
    ctx.clearRect(0, 0, width, height);

    while (points.length && now - points[0].t > MAX_AGE) {
      points.shift();
    }

    if (points.length > 1) {
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      for (let i = 1; i < points.length; i++) {
        const p0 = points[i - 1];
        const p1 = points[i];
        if (p1.break) continue;

        const life = 1 - (now - p1.t) / MAX_AGE;
        if (life <= 0) continue;

        const dist = Math.hypot(p1.x - p0.x, p1.y - p0.y);
        const speedFactor = Math.max(0.45, Math.min(1.25, 14 / (dist + 4)));
        const brushWidth = 9 * life * speedFactor;

        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.strokeStyle = `rgba(255, 77, 46, ${(life * 0.85).toFixed(3)})`;
        ctx.lineWidth = brushWidth;
        ctx.stroke();
      }
    }

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
})();