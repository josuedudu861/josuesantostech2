const form = document.querySelector('#briefing');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const values = new FormData(form);
  const isEnglish = document.documentElement.lang === 'en';
  const text = isEnglish
    ? `AI PROJECT BRIEF\n\nName / brand: ${values.get('name')}\nService: ${values.get('service')}\n\nIdea and objective:\n${values.get('idea')}`
    : `BRIEFING — PROJETO COM IA\n\nNome / marca: ${values.get('name')}\nServiço: ${values.get('service')}\n\nIdeia e objetivo:\n${values.get('idea')}`;
  const whatsappUrl = `https://wa.me/5561982116291?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, '_blank', 'noopener');
  document.querySelector('#status').textContent = isEnglish
    ? 'WhatsApp opened with your project brief.'
    : 'O WhatsApp foi aberto com o briefing do projeto.';
});

(() => {
  const scene = document.querySelector('.scroll-scene');
  const video = document.querySelector('.hero-video');
  const introImage = document.querySelector('.hero-intro-image');
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
    const introEnd = 0.1;
    const videoProgress = clamp((progress - introEnd) / (1 - introEnd), 0, 1);
    desiredTime = videoProgress * Math.max(0, duration - 1 / 24);
    const introOpacity = clamp(1 - progress / introEnd, 0, 1);
    const fade = clamp(1 - progress / 0.24, 0, 1);
    scene.style.setProperty('--scroll-progress', progress);
    scene.style.setProperty('--intro-opacity', introOpacity);
    scene.style.setProperty('--copy-opacity', fade);
    scene.style.setProperty('--copy-offset', `${-30 * (1 - fade)}px`);
    scene.style.setProperty('--shade-opacity', 0.12 + fade * 0.88);
    scene.style.setProperty('--copy-events', fade < 0.05 ? 'none' : 'auto');
    copy.inert = fade < 0.05;
    introImage.setAttribute('aria-hidden', introOpacity < 0.05 ? 'true' : 'false');
    seek();
  }
  function schedule() { if (!frame) frame = requestAnimationFrame(render); }
  function configure() {
    enabled = !video.error;
    document.documentElement.classList.toggle('scroll-enabled', enabled);
    if (enabled) {
      label.textContent = document.documentElement.lang === 'en' ? 'SCROLL TO ANIMATE ↓' : 'ROLE PARA ANIMAR ↓';
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
