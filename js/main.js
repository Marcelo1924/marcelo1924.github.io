// Portafolio · Marcelo Blanco — menú móvil, filtros y estado de la barra
(() => {
  const nav = document.querySelector('.nav');
  const btn = document.querySelector('.menu-btn');
  const menu = document.getElementById('menu');

  const setMenu = (open) => {
    btn.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
    document.body.classList.toggle('menu-open', open);
    btn.textContent = open ? (document.documentElement.lang === 'en' ? 'Close' : 'Cerrar')
                           : (document.documentElement.lang === 'en' ? 'Menu' : 'Menú');
    if (open) menu.querySelector('a')?.focus();
  };
  btn?.addEventListener('click', () => setMenu(menu.hidden));
  menu?.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu && !menu.hidden) { setMenu(false); btn.focus(); }
  });
  matchMedia('(min-width: 768px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

  const onScroll = () => nav?.classList.toggle('scrolled', scrollY > 8);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // filtros de proyectos
  const chips = document.querySelectorAll('.chip[data-filter]');
  const cards = document.querySelectorAll('.card[data-type]');
  chips.forEach((chip) => chip.addEventListener('click', () => {
    const f = chip.dataset.filter;
    chips.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
    cards.forEach((card) => { card.hidden = !(f === 'all' || card.dataset.type === f); });
    // la tarjeta destacada ocupa todo el ancho solo en "Todos"
    cards.forEach((card) => card.classList.toggle('feat', f === 'all' && card === cards[0]));
  }));
})();
