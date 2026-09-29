// Proof of work — the pinned WebGL stage behind src/components/ProofOfWork.astro.
// Loaded with a dynamic import only when the section nears the viewport, so
// three.js never touches the Hero's load. Each screenshot is drawn twice by
// one shader: a Sobel edge trace (the blueprint) and the real image, split by
// a scan line that follows scroll. Hovering the blueprint opens an x-ray lens.
import * as THREE from 'three';

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const lerp = (a, b, t) => a + (b - a) * t;
const pad = (n) => String(n).padStart(2, '0');

const VERT = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }';
const FRAG = `
  precision highp float;
  uniform sampler2D map; uniform vec2 texel; uniform float reveal, dim, hover, lens, refl, fade;
  uniform vec2 mouse;
  varying vec2 vUv;
  float lum(vec2 uv){ return dot(texture2D(map, uv).rgb, vec3(.299,.587,.114)); }
  void main(){
    vec2 uv = vUv;
    vec3 real = texture2D(map, uv).rgb;
    vec2 t = texel * 1.35;
    float tl=lum(uv+t*vec2(-1.,1.)), tc=lum(uv+t*vec2(0.,1.)), tr=lum(uv+t*vec2(1.,1.));
    float ml=lum(uv+t*vec2(-1.,0.)), mr=lum(uv+t*vec2(1.,0.));
    float bl=lum(uv+t*vec2(-1.,-1.)), bc=lum(uv+t*vec2(0.,-1.)), br=lum(uv+t*vec2(1.,-1.));
    float gx = -tl-2.*ml-bl+tr+2.*mr+br;
    float gy = -bl-2.*bc-br+tl+2.*tc+tr;
    float e = clamp(length(vec2(gx,gy))*1.7, 0., 1.);
    vec2 g = abs(fract(uv*vec2(56.,36.8)) - .5);
    float grid = (1. - smoothstep(.46,.5, max(g.x,g.y))) * .5;
    vec2 G2 = abs(fract(uv*vec2(14.,9.2)) - .5);
    float major = (1. - smoothstep(.482,.5, max(G2.x,G2.y)));
    vec3 bp = vec3(.018,.024,.03) + vec3(.05,.07,.09)*grid + vec3(.06,.08,.1)*major*.6;
    vec3 ink = mix(vec3(.62,.7,.78), vec3(1.,.45,.08), smoothstep(.45,.95,e));
    bp += ink * smoothstep(.07,.45,e);
    float edge = 1.06 - reveal*1.12;
    float m = smoothstep(edge-.012, edge+.012, uv.y);
    float d = distance(uv*vec2(1.52,1.), mouse*vec2(1.52,1.));
    float lm = hover * (1. - smoothstep(lens-.012, lens, d));
    m = max(m, lm);
    vec3 col = mix(bp, real, m);
    float live = step(.002, reveal) * step(reveal, .998);
    col += vec3(1.,.42,.08) * exp(-pow((uv.y-edge)*70., 2.)) * live * 1.4;
    col += vec3(1.,.42,.08) * exp(-pow((uv.y-edge)*14., 2.)) * live * .18;
    col += vec3(1.,.45,.1) * hover * exp(-pow((d-lens)*180., 2.)) * .9;
    float bx = min(min(uv.x, 1.-uv.x)*1.52, min(uv.y, 1.-uv.y));
    col = mix(vec3(.28,.31,.34), col, smoothstep(.0,.004,bx));
    col *= dim;
    float a = 1.;
    if (refl > .5) { a = fade * (1. - smoothstep(0., .5, uv.y)); col *= .6; }
    gl_FragColor = vec4(col, a);
  }`;

export function startProof(root, projects) {
  const N = projects.length, MAXP = N + 0.62;
  const auto = root.dataset.mode === 'auto';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const touch = matchMedia('(hover: none)').matches;
  const stage = root.querySelector('[data-stage]');
  const canvas = root.querySelector('canvas');
  const articles = [...root.querySelectorAll('[data-article]')];
  const stamps = articles.map((a) => a.querySelector('[data-stamp]'));
  const idxBtns = [...root.querySelectorAll('[data-go]')];
  const countEl = root.querySelector('[data-count]');
  const hint = root.querySelector('[data-hint]');
  const cue = root.querySelector('[data-cue]');
  const cueTxt = root.querySelector('[data-cue-text]');
  const cueBar = root.querySelector('[data-cue-bar]');
  const xcur = root.querySelector('[data-xcur]');

  const pinTop = () => parseFloat(getComputedStyle(stage).top) || 0;
  const pinLength = () => root.offsetHeight - stage.offsetHeight;
  const scrollP = () => clamp((pinTop() - root.getBoundingClientRect().top) / pinLength(), 0, 1) * MAXP;
  const scrollToP = (target) => {
    const y = root.getBoundingClientRect().top + scrollY - pinTop() + (target / MAXP) * pinLength();
    scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
  };
  // ---- auto mode: a slide clock instead of scroll -------------------------
  // Each project: blueprint (brief) → scan builds it → hold → glide to next.
  // Pauses on hover, keyboard focus, the pause button, or when off screen.
  const PERIOD = 7000;
  let slide = 0, slideT = reduce ? PERIOD * 0.6 : 0, userPaused = reduce, hoverPaused = false, focusPaused = false;
  const pauseBtn = root.querySelector('[data-pause]');
  const setPauseLabel = () => { if (pauseBtn) { pauseBtn.textContent = userPaused ? '▶' : '❚❚'; pauseBtn.setAttribute('aria-label', userPaused ? 'Play' : 'Pause'); } };
  const autoP = () => {
    const u = slideT / PERIOD;
    let f;
    if (u < 0.08) f = 0.1;
    else if (u < 0.5) f = 0.12 + ((u - 0.08) / 0.42) * 0.5;
    else if (u < 0.86 || slide === N - 1) f = 0.7;
    else f = 0.78 + ((u - 0.86) / 0.14) * 0.22;
    return slide + f;
  };
  const jump = (k) => { slide = ((k % N) + N) % N; slideT = reduce ? PERIOD * 0.6 : PERIOD * 0.08; };
  if (auto) {
    root.querySelector('[data-prev]')?.addEventListener('click', () => jump(slide - 1));
    root.querySelector('[data-next]')?.addEventListener('click', () => jump(slide + 1));
    pauseBtn?.addEventListener('click', () => { userPaused = !userPaused; setPauseLabel(); });
    stage.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') hoverPaused = true; });
    stage.addEventListener('pointerleave', () => { hoverPaused = false; });
    stage.addEventListener('focusin', () => { focusPaused = true; });
    stage.addEventListener('focusout', () => { focusPaused = false; });
    setPauseLabel();
  }

  window.goProject = (k) => {
    if (auto) { jump(k); stage.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' }); }
    else scrollToP(k + 0.7);
  };
  idxBtns.forEach((b) => b.addEventListener('click', () => {
    const k = +b.dataset.go;
    if (auto) jump(k);
    else scrollToP(k === N ? MAXP : k + 0.7);
  }));

  let cur = -1, lastCue = null;
  function hud(p, reveals) {
    const i = auto ? slide : p > N - 0.12 ? N : clamp(Math.floor(p), 0, N - 1);
    if (i !== cur) {
      cur = i;
      articles.forEach((a, k) => a.classList.toggle('on', k === i));
      idxBtns.forEach((b, k) => { if (k === i) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current'); });
      countEl.textContent = i === N ? 'Your turn' : pad(i + 1) + ' / ' + pad(N);
    }
    stamps.forEach((s, k) => s && s.classList.toggle('in', reveals[k] > 0.97));
    const ar = i < N ? reveals[i] : 1;
    if (auto) {
      const paused = userPaused || hoverPaused || focusPaused;
      const text = `Project ${i + 1} of ${N}${paused && !reduce ? ' · paused' : ''}`;
      if (text !== lastCue) { lastCue = text; cueTxt.textContent = text; }
      cueBar.style.width = ((slideT / PERIOD) * 100).toFixed(1) + '%';
      return { i, ar };
    }
    const text = i >= N ? '' : (ar < 0.97 ? (touch ? 'Swipe up to build' : 'Scroll to build') : (touch ? 'Swipe up for the next one' : 'Scroll for the next one'));
    if (text !== lastCue) { lastCue = text; cueTxt.textContent = text; cue.classList.toggle('off', !text); }
    cueBar.style.width = (ar * 100).toFixed(1) + '%';
    return { i, ar };
  }
  const revealsAt = (p) => projects.map((_, k) => smooth(k + 0.12, k + 0.62, p));

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  } catch (e) {
    root.classList.add('no-gl');
    hint.hidden = true;
    const loop = () => { const q = auto ? autoP() : scrollP(); hud(q, revealsAt(q)); requestAnimationFrame(loop); };
    loop();
    return;
  }
  root.classList.add('gl-ready');
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 1);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  camera.position.set(0, 0.5, 10.5);
  camera.lookAt(0, 0.1, 0);

  const TW = 1400, TH = 920, CH = 46;
  const SW = 4.8, SH = (SW * TH) / TW;
  const FLOOR = -SH / 2 - 0.12;

  function makeTexture(p) {
    const c = document.createElement('canvas'); c.width = TW; c.height = TH;
    const x = c.getContext('2d');
    const paint = (img) => {
      x.fillStyle = '#121416'; x.fillRect(0, 0, TW, TH);
      if (img) {
        const s = Math.max(TW / img.width, (TH - CH) / img.height);
        const w = img.width * s, h = img.height * s;
        x.drawImage(img, (TW - w) / 2, CH, w, h);
      }
      x.fillStyle = '#1e2124'; x.fillRect(0, 0, TW, CH);
      x.fillStyle = '#2c3034'; x.fillRect(0, CH - 1, TW, 1);
      ['#ff5f57', '#febc2e', '#28c840'].forEach((col, k) => { x.fillStyle = col; x.beginPath(); x.arc(26 + k * 22, CH / 2, 7, 0, Math.PI * 2); x.fill(); });
      const ux = 440, uw = 520;
      x.fillStyle = '#0e1012';
      x.beginPath(); x.moveTo(ux + 14, 9); x.arcTo(ux + uw, 9, ux + uw, CH - 9, 14); x.arcTo(ux + uw, CH - 9, ux, CH - 9, 14); x.arcTo(ux, CH - 9, ux, 9, 14); x.arcTo(ux, 9, ux + uw, 9, 14); x.fill();
      x.fillStyle = '#9aa3ad'; x.font = '500 17px "JetBrains Mono", monospace'; x.textAlign = 'center'; x.textBaseline = 'middle';
      x.fillText(p.url, ux + uw / 2, CH / 2 + 1);
    };
    paint(null);
    const tex = new THREE.CanvasTexture(c);
    tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    const img = new Image();
    img.decoding = 'async';
    img.onload = () => { paint(img); tex.needsUpdate = true; };
    img.src = p.img;
    return tex;
  }

  const screens = projects.map((p) => {
    const tex = makeTexture(p);
    const uni = () => ({
      map: { value: tex }, texel: { value: new THREE.Vector2(1 / TW, 1 / TH) }, reveal: { value: 0 }, dim: { value: 1 },
      hover: { value: 0 }, lens: { value: 0.16 }, mouse: { value: new THREE.Vector2(0.5, 0.5) }, refl: { value: 0 }, fade: { value: 0.22 },
    });
    const geo = new THREE.PlaneGeometry(SW, SH);
    const mat = new THREE.ShaderMaterial({ uniforms: uni(), vertexShader: VERT, fragmentShader: FRAG });
    const rm = new THREE.ShaderMaterial({ uniforms: uni(), vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false });
    rm.uniforms.refl.value = 1;
    const mesh = new THREE.Mesh(geo, mat);
    const refl = new THREE.Mesh(geo, rm);
    refl.scale.y = -1;
    const holder = new THREE.Group();
    holder.add(mesh, refl);
    scene.add(holder);
    return { holder, mesh, refl, mats: [mat, rm], hover: 0 };
  });

  const grid = new THREE.GridHelper(80, 160, 0x22272c, 0x101316);
  grid.position.y = FLOOR;
  scene.add(grid);

  let wide = true;
  function resize() {
    const W = stage.clientWidth, H = stage.clientHeight;
    renderer.setSize(W, H, false);
    camera.aspect = W / H; camera.updateProjectionMatrix();
    wide = camera.aspect > 1.05;
  }
  addEventListener('resize', resize);
  resize();

  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(-9, -9);
  let pointerIn = false, hitMode = null, px = 0, py = 0;
  stage.addEventListener('pointermove', (e) => {
    const r = stage.getBoundingClientRect();
    px = e.clientX - r.left; py = e.clientY - r.top;
    ndc.set((px / r.width) * 2 - 1, -(py / r.height) * 2 + 1);
    pointerIn = e.pointerType === 'mouse';
  });
  stage.addEventListener('pointerleave', () => { pointerIn = false; });
  stage.addEventListener('click', (e) => {
    if (hitMode !== 'open' || e.target.closest('a,button')) return;
    const a = articles[cur] && articles[cur].querySelector('[data-open]');
    if (a) a.click();
  });

  let running = false, rafId = 0;
  new IntersectionObserver(([en]) => {
    running = en.isIntersecting;
    if (running && !rafId) { lastT = performance.now(); rafId = requestAnimationFrame(frame); }
  }).observe(root);

  let p = auto ? autoP() : scrollP(), lastT = performance.now();
  function frame(now) {
    rafId = 0;
    if (!running) return;
    const dt = Math.min(64, (now || performance.now()) - lastT);
    lastT = now || performance.now();
    if (auto && !(userPaused || hoverPaused || focusPaused || document.hidden)) {
      slideT += dt;
      if (slideT >= PERIOD) { slideT = 0; slide = (slide + 1) % N; }
    }
    const target = auto ? autoP() : scrollP();
    p = reduce ? target : lerp(p, target, 0.085);
    const reveals = revealsAt(p);
    const { i: active, ar } = hud(p, reveals);
    const k0 = Math.floor(clamp(p, 0, N - 1)), f = clamp(p, 0, N - 1) - k0;
    const c = clamp(k0 + smooth(0.78, 1.0, f), 0, N - 1);
    const wallT = auto ? 0 : smooth(N - 0.2, N + 0.45, p), we = wallT * wallT * (3 - 2 * wallT);

    const baseX = wide ? 2.05 : 0, baseY = wide ? 0.15 : 1.35, baseS = wide ? 1 : 0.62;
    const wallX = wide ? 1.8 : 0, wallY = wide ? 0.25 : 1.7, wallS = wide ? 0.28 : 0.145;

    ray.setFromCamera(ndc, camera);
    let onScreen = null;
    screens.forEach((s, k) => {
      const d = k - c, ad = Math.abs(d), sg = Math.sign(d);
      const cx = sg * (ad < 1 ? ad * 3.7 : 3.7 + (ad - 1) * 1.5);
      const cz = -Math.min(ad, 1) * 2.4 - Math.max(ad - 1, 0) * 0.7;
      const cr = -sg * Math.min(ad, 1) * 0.78;
      const row = k < 4 ? 0 : 1, col = row ? k - 4 : k;
      const gx = (row ? col - 1 : col - 1.5) * (SW + 0.35), gy = row ? -(SH + 0.3) / 2 : (SH + 0.3) / 2;
      const h = s.holder;
      h.position.set(lerp(baseX + cx * baseS, wallX + gx * wallS, we), lerp(baseY, wallY + gy * wallS, we), lerp(cz * baseS, 0, we));
      h.rotation.y = lerp(cr, 0, we);
      h.scale.setScalar(lerp(baseS, wallS, we));
      h.visible = ad < 3.6 || we > 0.01;
      s.refl.visible = we < 0.5;
      s.refl.position.y = (2 * (FLOOR - h.position.y)) / h.scale.y;

      let dim = 1 - Math.min(ad, 2.2) * 0.3;
      if (d < 0) dim *= 0.75;
      dim = lerp(dim, 1, we);
      const reveal = lerp(reveals[k], 1, we);
      let hoverTarget = 0;
      if (pointerIn && k === active && we < 0.05) {
        const hit = ray.intersectObject(s.mesh)[0];
        if (hit) {
          onScreen = reveal < 0.97 ? 'xray' : 'open';
          if (reveal < 0.97) { hoverTarget = 1; s.mats[0].uniforms.mouse.value.copy(hit.uv); }
        }
      }
      s.hover = lerp(s.hover, hoverTarget, 0.14);
      s.mats.forEach((m) => {
        m.uniforms.reveal.value = reveal;
        m.uniforms.dim.value = dim;
        m.uniforms.hover.value = m === s.mats[0] ? s.hover : 0;
      });
    });

    hitMode = onScreen;
    hint.style.opacity = ar < 0.95 && wide && !onScreen ? '1' : '0';
    xcur.classList.toggle('on', !!onScreen);
    if (onScreen) {
      xcur.textContent = onScreen === 'xray' ? 'X-ray' : 'Open ↗';
      xcur.style.transform = `translate(${px}px, ${py}px) translate(-50%, -64px)`;
    }
    stage.style.cursor = onScreen === 'xray' ? 'none' : onScreen === 'open' ? 'pointer' : '';

    camera.position.x = lerp(camera.position.x, pointerIn ? ndc.x * 0.35 : 0, 0.05);
    camera.position.y = lerp(camera.position.y, 0.5 + (pointerIn ? ndc.y * 0.2 : 0), 0.05);
    camera.lookAt(0, 0.1, 0);
    renderer.render(scene, camera);
    rafId = requestAnimationFrame(frame);
  }
  rafId = requestAnimationFrame(frame);
}
