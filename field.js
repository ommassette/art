(() => {
  const exhibition = document.getElementById('exhibition');
  const viewport = document.getElementById('fieldViewport');
  const stage = document.getElementById('fieldStage');
  const zoomLabel = document.getElementById('zoomLabel');
  const zoomInBtn = document.getElementById('zoomInBtn');
  const zoomOutBtn = document.getElementById('zoomOutBtn');
  const resetBtn = document.getElementById('resetFieldBtn');
  const pieces = Array.from(stage.querySelectorAll('.piece'));

  const STAGE_W = 3200;
  const STAGE_H = 2400;
  const MIN_SCALE = 0.35;
  const MAX_SCALE = 1.85;

  pieces.forEach((piece) => {
    const x = parseFloat(piece.dataset.x) || 0;
    const y = parseFloat(piece.dataset.y) || 0;
    const w = parseFloat(piece.dataset.w) || 280;
    piece.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    piece.style.width = `${w}px`;
  });

  let scale = 1;
  let panX = 0;
  let panY = 0;

  let isDragging = false;
  let hasDragged = false;
  let startX = 0;
  let startY = 0;
  let lastX = 0;
  let lastY = 0;
  let vx = 0;
  let vy = 0;
  let rafId = null;

  function clampPan() {
    const rect = viewport.getBoundingClientRect();
    const scaledW = STAGE_W * scale;
    const scaledH = STAGE_H * scale;
    const padX = rect.width * 0.35;
    const padY = rect.height * 0.35;

    const minX = rect.width - scaledW - padX;
    const maxX = padX;
    const minY = rect.height - scaledH - padY;
    const maxY = padY;

    panX = Math.min(maxX, Math.max(minX, panX));
    panY = Math.min(maxY, Math.max(minY, panY));
  }

  function render() {
    clampPan();
    stage.style.transform = `translate3d(${panX}px, ${panY}px, 0) scale(${scale})`;
    const gridSize = 28 * scale;
    exhibition.style.backgroundSize = `${gridSize}px ${gridSize}px`;
    exhibition.style.backgroundPosition = `${panX}px ${panY}px`;
    zoomLabel.textContent = `${Math.round(scale * 100)}%`;
  }

  function centerField(animated = false) {
    cancelAnimationFrame(rafId);
    const rect = viewport.getBoundingClientRect();
    scale = rect.width < 768 ? 0.45 : 0.65;
    panX = (rect.width - STAGE_W * scale) / 2;
    panY = (rect.height - STAGE_H * scale) / 2;

    if (animated) {
      stage.style.transition = 'transform 0.55s cubic-bezier(.22, 1, .36, 1)';
      render();
      setTimeout(() => {
        stage.style.transition = '';
      }, 560);
    } else {
      render();
    }
  }

  function zoomAt(nextScale, originX, originY) {
    const clamped = Math.min(MAX_SCALE, Math.max(MIN_SCALE, nextScale));
    const ratio = clamped / scale;
    panX = originX - (originX - panX) * ratio;
    panY = originY - (originY - panY) * ratio;
    scale = clamped;
    render();
  }

  function startMomentum() {
    cancelAnimationFrame(rafId);
    const step = () => {
      vx *= 0.92;
      vy *= 0.92;
      if (Math.abs(vx) < 0.15 && Math.abs(vy) < 0.15) return;
      panX += vx;
      panY += vy;
      render();
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
  }

  viewport.addEventListener('pointerdown', (e) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    cancelAnimationFrame(rafId);
    isDragging = true;
    hasDragged = false;
    startX = lastX = e.clientX;
    startY = lastY = e.clientY;
    vx = 0;
    vy = 0;
    viewport.classList.add('is-dragging');
  });

  window.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    if (Math.hypot(e.clientX - startX, e.clientY - startY) > 6) {
      hasDragged = true;
    }
    panX += dx;
    panY += dy;
    vx = dx;
    vy = dy;
    lastX = e.clientX;
    lastY = e.clientY;
    render();
  });

  function endDrag() {
    if (!isDragging) return;
    isDragging = false;
    viewport.classList.remove('is-dragging');
    startMomentum();
    setTimeout(() => {
      hasDragged = false;
    }, 0);
  }

  window.addEventListener('pointerup', endDrag);
  window.addEventListener('pointercancel', endDrag);

  stage.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;
    if (hasDragged) {
      e.preventDefault();
      return;
    }
    window.location.href = link.href;
  });

  viewport.addEventListener('wheel', (e) => {
    e.preventDefault();
    cancelAnimationFrame(rafId);
    const rect = viewport.getBoundingClientRect();
    const cursorX = e.clientX - rect.left;
    const cursorY = e.clientY - rect.top;

    if (e.ctrlKey || e.metaKey) {
      const factor = Math.exp(-e.deltaY * 0.004);
      zoomAt(scale * factor, cursorX, cursorY);
    } else {
      panX -= e.deltaX;
      panY -= e.deltaY;
      render();
    }
  }, { passive: false });

  zoomInBtn.addEventListener('click', () => {
    const rect = viewport.getBoundingClientRect();
    zoomAt(scale + 0.15, rect.width / 2, rect.height / 2);
  });

  zoomOutBtn.addEventListener('click', () => {
    const rect = viewport.getBoundingClientRect();
    zoomAt(scale - 0.15, rect.width / 2, rect.height / 2);
  });

  resetBtn.addEventListener('click', () => centerField(true));

  window.addEventListener('resize', render);
  centerField(false);
})();