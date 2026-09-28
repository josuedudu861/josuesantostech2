const form = document.querySelector('#briefing');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const values = new FormData(form);
  const text = `BRIEFING — PROJETO COM IA\n\nNome / marca: ${values.get('name')}\nServiço: ${values.get('service')}\n\nIdeia e objetivo:\n${values.get('idea')}\n\nPara complementar:\n- Referências visuais\n- Canais e formatos\n- Prazo desejado\n- Materiais disponíveis\n`;
  const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'briefing-projeto-ia.txt';
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  document.querySelector('#status').textContent = 'Briefing preparado para download. Nenhum dado foi enviado.';
});

(() => {
  const scene = document.querySelector('.scroll-scene');
  const video = document.querySelector('.hero-video');
  const copy = document.querySelector('.hero-copy');
  const label = document.querySelector('.scroll-label');
  const fallbackDuration = 24.08;
  let enabled = false;
  let frame = 0;
  let desiredTime = 0;
  const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
  function seek() {
    if (!enabled || video.seeking || video.readyState < 1) return;
    if (Math.abs(video.currentTime - desiredTime) > 1 / 48) video.currentTime = desiredTime;
  }
  function render() {
    frame = 0;
    if (!enabled) return;
    const rect = scene.getBoundingClientRect();
    const distance = scene.offsetHeight - scene.querySelector('.hero').offsetHeight;
    const progress = clamp(-rect.top / Math.max(1, distance), 0, 1);
    const duration = Number.isFinite(video.duration) && video.duration > 0 ? video.duration : fallbackDuration;
    desiredTime = progress * Math.max(0, duration - 1 / 24);
    const fade = clamp(1 - progress / 0.24, 0, 1);
    scene.style.setProperty('--scroll-progress', progress);
    scene.style.setProperty('--copy-opacity', fade);
    scene.style.setProperty('--copy-offset', `${-30 * (1 - fade)}px`);
    scene.style.setProperty('--shade-opacity', 0.12 + fade * 0.88);
    scene.style.setProperty('--copy-events', fade < 0.05 ? 'none' : 'auto');
    copy.inert = fade < 0.05;
    seek();
  }
  function schedule() { if (!frame) frame = requestAnimationFrame(render); }
  function configure() {
    enabled = !video.error;
    document.documentElement.classList.toggle('scroll-enabled', enabled);
    if (enabled) {
      label.textContent = 'ROLE PARA ANIMAR ↓';
      video.muted = true;
      video.pause();
      schedule();
    }
    else { scene.removeAttribute('style'); copy.inert = false; label.textContent = 'EXPLORE OS SERVIÇOS ↓'; }
  }
  ['loadedmetadata', 'loadeddata', 'canplay', 'durationchange', 'progress'].forEach((eventName) => video.addEventListener(eventName, configure));
  video.addEventListener('seeked', seek);
  video.addEventListener('error', configure);
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  window.addEventListener('pageshow', schedule);
  video.load();
  configure();
})();
