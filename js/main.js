(() => {
  const D = window.PORTFOLIO, $ = s => document.querySelector(s);
  document.getElementById('yr').textContent = new Date().getFullYear();

  // Smooth scrolling
  if (window.Lenis && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const lenis = new Lenis({ lerp: 0.09 });
    const raf = t => { lenis.raf(t); requestAnimationFrame(raf); }; requestAnimationFrame(raf);
    document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
      const id = a.getAttribute('href'); if (id.length > 1 && $(id)) { e.preventDefault(); lenis.scrollTo(id, { offset: -60 }); }
    }));
  }

  // Folders
  const fwrap = $('#folders');
  D.folders.forEach((f, i) => {
    const el = document.createElement('button');
    el.className = 'folder reveal'; el.style.setProperty('--c', f.color);
    const thumbs = f.items.filter(x => x.type !== 'link').slice(0, 3).map(x =>
      `<span style="background-image:url('${x.type === 'video' ? `https://i.ytimg.com/vi/${x.id}/mqdefault.jpg` : x.src}')"></span>`).join('');
    el.innerHTML = `<div class="f-back"></div><div class="f-papers">${thumbs || '<span></span><span></span>'}</div>
      <div class="f-front"><small>${String(i + 1).padStart(2, '0')} · ${f.tag}</small><strong>${f.title}</strong><em>${f.items.length} item${f.items.length > 1 ? 's' : ''} →</em></div>`;
    el.addEventListener('click', () => openFolder(f));
    fwrap.appendChild(el);
  });

  // Modal
  const modal = $('#modal'), body = $('#modal-body');
  function openFolder(f) {
    $('#modal-tag').textContent = f.tag; $('#modal-title').textContent = f.title; $('#modal-desc').textContent = f.desc;
    modal.style.setProperty('--c', f.color);
    body.innerHTML = f.items.map(x => x.type === 'video'
      ? `<div class="g-item vid" data-id="${x.id}"><img loading="lazy" src="https://i.ytimg.com/vi/${x.id}/hqdefault.jpg" alt="Video thumbnail"><span class="play">▶</span></div>`
      : x.type === 'image' ? `<a class="g-item" href="${x.src}" target="_blank" rel="noopener"><img loading="lazy" src="${x.src}" alt="${x.cap}"></a>`
      : `<a class="g-item linkcard" href="${x.href}" target="_blank" rel="noopener">${x.label} ↗</a>`).join('');
    body.querySelectorAll('.vid').forEach(v => v.addEventListener('click', () => {
      v.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${v.dataset.id}?autoplay=1" allow="autoplay; encrypted-media; fullscreen" allowfullscreen title="Video"></iframe>`;
    }));
    modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden';
    anime({ targets: '.modal-inner', opacity: [0, 1], translateY: [60, 0], rotateX: [-12, 0], duration: 700, easing: 'easeOutExpo' });
    anime({ targets: '.g-item', opacity: [0, 1], scale: [0.85, 1], delay: anime.stagger(50, { start: 200 }), easing: 'easeOutBack' });
    $('#close').focus();
  }
  function close() { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); body.innerHTML = ''; document.body.style.overflow = ''; }
  $('#close').onclick = close; modal.onclick = e => { if (e.target === modal) close(); };
  addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  // Timeline + tools
  $('#timeline').innerHTML = D.experience.map(([d, r, o, t]) => `<li class="reveal"><time>${d}</time><h3>${r}</h3><p class="org">${o}</p><p>${t}</p></li>`).join('');
  const tl = D.tools.map(t => `<span>${t}</span>`).join(''); $('#tools').innerHTML = tl + tl;

  // Rotating role text
  let ri = 0; const role = $('#role');
  setInterval(() => {
    anime({ targets: role, opacity: [1, 0], translateY: [0, -14], duration: 300, easing: 'easeInQuad', complete: () => {
      role.textContent = D.roles[++ri % D.roles.length];
      anime({ targets: role, opacity: [0, 1], translateY: [14, 0], duration: 400, easing: 'easeOutQuad' });
    } });
  }, 2400);

  // Intro
  anime.timeline({ easing: 'easeOutExpo' })
    .add({ targets: '#loader span', scale: [0.6, 1], opacity: [0, 1], duration: 600 })
    .add({ targets: '#loader', opacity: 0, duration: 500, complete: () => $('#loader').remove() })
    .add({ targets: '.hero-title .line', translateY: ['110%', 0], opacity: [0, 1], delay: anime.stagger(120), duration: 1100 }, '-=200')
    .add({ targets: '.hero .eyebrow, .hero-roles, .hero-cta, .nav', opacity: [0, 1], translateY: [20, 0], delay: anime.stagger(80), duration: 800 }, '-=800');

  // Scroll reveal + counters
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; io.unobserve(e.target);
    anime({ targets: e.target, opacity: [0, 1], translateY: [50, 0], rotateX: [8, 0], duration: 1000, easing: 'easeOutExpo' });
    e.target.querySelectorAll('[data-count]').forEach(b => {
      const o = { v: 0 }; anime({ targets: o, v: +b.dataset.count, round: 1, duration: 2000, easing: 'easeOutExpo', update: () => b.textContent = o.v.toLocaleString() });
    });
  }), { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // 3D tilt on portrait and folders
  document.querySelectorAll('.tilt, .folder').forEach(el => {
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg)`;
    });
    el.addEventListener('pointerleave', () => anime({ targets: el, rotateX: 0, rotateY: 0, duration: 600, easing: 'easeOutElastic(1,.6)', complete: () => el.style.transform = '' }));
  });
})();
