(() => {
  const q = (selector, root = document) => root.querySelector(selector);
  const qa = (selector, root = document) => [...root.querySelectorAll(selector)];
  const setText = (selector, value, root = document) => { const el = q(selector, root); if (el) el.textContent = value; };
  const setHtml = (selector, value, root = document) => { const el = q(selector, root); if (el) el.innerHTML = value; };
  const setLabel = (label, value) => {
    const textNode = [...label.childNodes].find((node) => node.nodeType === Node.TEXT_NODE);
    if (textNode) textNode.nodeValue = value;
  };
  const setSummary = (detail, value) => {
    const summary = q('summary', detail);
    if (summary) summary.innerHTML = `${value}<span>+</span>`;
  };

  const copy = {
    pt: {
      title: 'Criação com IA — Vídeos, imagens e experiências',
      description: 'Produção criativa com inteligência artificial: vídeos publicitários, imagens, avatares e experiências digitais.',
      nav: ['Serviços', 'Processo', 'Dúvidas'], cta: 'Seu projeto ↗',
      heroEyebrow: 'ESTÚDIO CRIATIVO · INTELIGÊNCIA ARTIFICIAL',
      heroTitle: 'O próximo nível<br>da sua marca<br><em>começa aqui.</em>',
      heroIntro: 'Vídeos, imagens e experiências digitais.<br>Da primeira ideia ao último frame, com IA<br class="desktop"> e direção criativa.',
      heroButton: 'Explore os serviços <span>↓</span>', heroBottom: 'IDEIAS HUMANAS. POSSIBILIDADES EXPANDIDAS.', scroll: 'ROLE PARA ANIMAR ↓',
      servicesEyebrow: '01 / O QUE PODEMOS CRIAR', servicesTitle: 'Sua ideia.<br><span>Em outra dimensão.</span>',
      servicesIntro: 'Conteúdo pensado para o seu negócio.<br>Escolha o formato. A criação começa<br>com o que sua marca precisa comunicar.',
      serviceLabels: ['01 / VÍDEO', '02 / SOCIAL', '03 / IMAGEM', '04 / PERSONAGENS', '05 / MOVIMENTO', '06 / DIGITAL'],
      serviceTitles: ['Filmes & campanhas<br>com IA', 'Conteúdo que<br>acompanha o feed', 'Imagens que<br>valorizam sua marca', 'Avatares &<br>apresentadores digitais', 'Animação &<br>pós-produção', 'Sites & experiências<br>para sua marca'],
      serviceDescriptions: [
        'Transforme uma mensagem em uma narrativa visual. Filmes de marca, lançamentos e anúncios com linguagem cinematográfica.',
        'Vídeos curtos para apresentar sua marca, explicar uma oferta e dar movimento à presença digital.',
        'Direção de arte e composições para produtos, campanhas e conteúdo editorial, a partir das suas referências.',
        'Uma presença visual para explicar serviços, apresentar produtos e dar personalidade às suas histórias.',
        'Fotos ganham movimento. Vídeos ganham ritmo. E sua identidade visual se transforma em uma experiência.',
        'Páginas para apresentar serviços e campanhas, com conteúdo, identidade visual e navegação que funcionam juntos.'
      ],
      serviceTags: [['Publicitários','Institucionais','Produtos'],['Reels','Shorts','TikTok'],['Produtos','Campanhas','Key visuals'],['Avatares','Apresentações','Tutoriais'],['Foto para vídeo','Motion','Edição'],['Landing pages','Portfólios','Sites']],
      detailLabel: 'O que inclui',
      serviceDetails: [
        'Conceito, roteiro, planejamento de cenas, geração visual, montagem e finalização. Duração, locução, trilha e formatos são definidos no escopo.',
        'Roteiros curtos, edição vertical, legendas e adaptações por canal. Possibilidade de variações para diferentes campanhas.',
        'Definição de estilo, cenários, geração e tratamento de imagens. Revisão de proporções, embalagens e elementos da marca.',
        'Criação do personagem, estilo visual e roteiro de apresentação. O uso de imagem ou voz real depende de autorização.',
        'Animação de imagens e elementos de marca, edição, transições, tratamento de cor e composição sonora.',
        'Estrutura de conteúdo, textos, design e versão para celular. Integrações e hospedagem são combinadas conforme a necessidade.'
      ],
      processEyebrow: '02 / DA IDEIA À ENTREGA', processTitle: 'Tecnologia no processo.<br><span>Intenção em cada detalhe.</span>', processIntro: 'Você participa das decisões criativas.<br>Cada etapa tem um objetivo claro.',
      stepLabels: ['01 — ENTENDER','02 — DIRECIONAR','03 — CRIAR','04 — FINALIZAR'], stepTitles: ['Briefing & objetivo','Conceito & roteiro','Produção & curadoria','Ajustes & entrega'],
      stepDescriptions: ['Definimos público, mensagem, referências e onde o conteúdo será publicado.','Organizamos a narrativa e o estilo visual para sua aprovação antes da produção.','Geramos, selecionamos e editamos os elementos que melhor traduzem a ideia.','Revisamos o material e preparamos os arquivos nos formatos combinados.'],
      formats: ['9:16 · VERTICAL','16:9 · HORIZONTAL','1:1 · QUADRADO','FORMATO DEFINIDO PELO SEU CANAL'],
      faqEyebrow: '03 / ANTES DE COMEÇAR', faqTitle: 'Da curiosidade<br><span>à próxima ideia.</span>',
      faqQuestions: ['Preciso chegar com um roteiro pronto?','Posso usar minhas fotos e meus vídeos?','Quanto custa e quanto tempo leva?','O conteúdo mantém a identidade da marca?','Como funcionam ajustes e direitos de uso?'],
      faqAnswers: ['Não. Uma descrição do seu negócio, público e objetivo já é um ponto de partida. O roteiro pode fazer parte do projeto.','Sim. Seus materiais podem ser combinados com cenas e elementos gerados por IA.','Depende da duração, complexidade, formatos e revisões. O orçamento é definido após entendermos o projeto.','Sim. Logotipo, paleta, linguagem e referências orientam toda a criação.','Revisões, canais de divulgação, uso comercial e licenças são definidos na proposta.'],
      projectEyebrow: '04 / SEU PRÓXIMO PROJETO', projectTitle: 'O que você<br><span>quer criar?</span>', projectIntro: 'Organize sua ideia em um briefing: serviço, objetivo e referências. Um bom começo ajuda a definir o formato certo.',
      formLabels: ['Seu nome ou marca','Serviço de interesse','Conte sua ideia'], placeholders: ['Como podemos identificar seu projeto?','O que você quer comunicar? Para quem? Em quais canais?'],
      options: ['Filmes e campanhas com IA','Conteúdo para redes sociais','Imagens para marcas e produtos','Avatares e apresentadores digitais','Animação e pós-produção','Sites e experiências digitais','Quero combinar serviços'],
      formButton: 'Enviar pelo WhatsApp <span>↗</span>', formNote: 'Ao continuar, seu briefing será aberto no WhatsApp para você revisar e enviar.', socialTitle: 'ACOMPANHE NAS REDES', footer: 'Inteligência artificial. Direção humana.', back: 'Voltar ao início'
    },
    en: {
      title: 'AI Creative Studio — Video, images and experiences',
      description: 'Creative production with artificial intelligence: advertising videos, images, avatars and digital experiences.',
      nav: ['Services', 'Process', 'Questions'], cta: 'Your project ↗',
      heroEyebrow: 'CREATIVE STUDIO · ARTIFICIAL INTELLIGENCE', heroTitle: 'The next level<br>of your brand<br><em>starts here.</em>',
      heroIntro: 'Videos, images and digital experiences.<br>From the first idea to the final frame, with AI<br class="desktop"> and creative direction.',
      heroButton: 'Explore our services <span>↓</span>', heroBottom: 'HUMAN IDEAS. EXPANDED POSSIBILITIES.', scroll: 'SCROLL TO ANIMATE ↓',
      servicesEyebrow: '01 / WHAT WE CREATE', servicesTitle: 'Your idea.<br><span>In another dimension.</span>', servicesIntro: 'Content designed for your business.<br>Choose the format. Creation begins<br>with what your brand needs to say.',
      serviceLabels: ['01 / VIDEO','02 / SOCIAL','03 / IMAGES','04 / CHARACTERS','05 / MOTION','06 / DIGITAL'],
      serviceTitles: ['AI films &<br>campaigns','Content made<br>for the feed','Images that<br>elevate your brand','Digital avatars &<br>presenters','Animation &<br>post-production','Websites & experiences<br>for your brand'],
      serviceDescriptions: ['Turn a message into a visual narrative. Brand films, launches and ads with cinematic language.','Short videos to introduce your brand, explain an offer and bring movement to your digital presence.','Art direction and compositions for products, campaigns and editorial content, guided by your references.','A visual presence to explain services, showcase products and give personality to your stories.','Photos gain movement. Videos gain rhythm. Your visual identity becomes an experience.','Pages that present services and campaigns with content, identity and navigation working together.'],
      serviceTags: [['Advertising','Corporate','Products'],['Reels','Shorts','TikTok'],['Products','Campaigns','Key visuals'],['Avatars','Presentations','Tutorials'],['Image to video','Motion','Editing'],['Landing pages','Portfolios','Websites']],
      detailLabel: 'What is included',
      serviceDetails: ['Concept, script, scene planning, visual generation, editing and final delivery. Duration, voice, music and formats are set in the scope.','Short scripts, vertical editing, captions and platform adaptations, with variations for different campaigns.','Style definition, environments, image generation and retouching, with review of packaging and brand elements.','Character creation, visual style and presentation script. Use of a real person’s image or voice requires authorization.','Animation of images and brand elements, editing, transitions, color treatment and sound composition.','Content structure, copy, design and mobile version. Integrations and hosting are defined as needed.'],
      processEyebrow: '02 / FROM IDEA TO DELIVERY', processTitle: 'Technology in the process.<br><span>Purpose in every detail.</span>', processIntro: 'You take part in the creative decisions.<br>Every stage has a clear goal.',
      stepLabels: ['01 — UNDERSTAND','02 — DIRECT','03 — CREATE','04 — FINISH'], stepTitles: ['Brief & objective','Concept & script','Production & curation','Revisions & delivery'],
      stepDescriptions: ['We define the audience, message, references and publishing channels.','We organize the narrative and visual language for your approval before production.','We generate, select and edit the elements that best translate the idea.','We review the material and prepare the agreed delivery formats.'],
      formats: ['9:16 · VERTICAL','16:9 · LANDSCAPE','1:1 · SQUARE','FORMATS DESIGNED FOR YOUR CHANNEL'],
      faqEyebrow: '03 / BEFORE WE START', faqTitle: 'From curiosity<br><span>to the next idea.</span>',
      faqQuestions: ['Do I need a finished script?','Can I use my own photos and videos?','How much does it cost and how long does it take?','Will the content preserve my brand identity?','How do revisions and usage rights work?'],
      faqAnswers: ['No. A description of your business, audience and goal is enough to begin. Scriptwriting can be part of the project.','Yes. Your materials can be combined with AI-generated scenes and elements.','It depends on duration, complexity, formats and revisions. We quote after understanding the project.','Yes. Your logo, palette, language and references guide the entire production.','Revision rounds, publishing channels, commercial use and licenses are defined in the proposal.'],
      projectEyebrow: '04 / YOUR NEXT PROJECT', projectTitle: 'What do you<br><span>want to create?</span>', projectIntro: 'Organize your idea into a brief: service, objective and references. A strong start helps define the right format.',
      formLabels: ['Your name or brand','Service of interest','Tell us your idea'], placeholders: ['How should we identify your project?','What do you want to communicate? To whom? On which channels?'],
      options: ['AI films and campaigns','Social media content','Images for brands and products','Digital avatars and presenters','Animation and post-production','Websites and digital experiences','I want to combine services'],
      formButton: 'Send via WhatsApp <span>↗</span>', formNote: 'Your brief will open in WhatsApp for you to review and send.', socialTitle: 'FOLLOW ON SOCIAL MEDIA', footer: 'Artificial intelligence. Human direction.', back: 'Back to top'
    }
  };

  const switcher = document.createElement('div');
  switcher.className = 'lang-switch';
  switcher.setAttribute('aria-label', 'Language / Idioma');
  switcher.innerHTML = '<button type="button" data-lang="pt">PT</button><span>/</span><button type="button" data-lang="en">EN</button>';
  q('nav').insertBefore(switcher, q('.nav-cta'));

  function applyLanguage(language) {
    const lang = copy[language] ? language : 'pt';
    const t = copy[lang];
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.title = t.title;
    q('meta[name="description"]').content = t.description;
    qa('nav > div:not(.lang-switch) a').forEach((el, index) => { el.textContent = t.nav[index]; });
    setText('.nav-cta', t.cta); setText('.hero-copy .eyebrow', t.heroEyebrow); setHtml('.hero-copy h1', t.heroTitle); setHtml('.hero-copy .intro', t.heroIntro); setHtml('.hero-copy .button', t.heroButton); setText('.hero-bottom > span:first-child', t.heroBottom); setText('.scroll-label', t.scroll);
    const services = q('#servicos'); setText('.section-head .eyebrow', t.servicesEyebrow, services); setHtml('.section-head h2', t.servicesTitle, services); setHtml('.section-head > p', t.servicesIntro, services);
    qa('.service', services).forEach((service, index) => { setText('.number', t.serviceLabels[index], service); setHtml('h3', t.serviceTitles[index], service); setText(':scope > p', t.serviceDescriptions[index], service); qa('.tags span', service).forEach((tag, tagIndex) => { tag.textContent = t.serviceTags[index][tagIndex]; }); const detail = q('details', service); setSummary(detail, t.detailLabel); setText('p', t.serviceDetails[index], detail); });
    const process = q('#processo'); setText('.section-head .eyebrow', t.processEyebrow, process); setHtml('.section-head h2', t.processTitle, process); setHtml('.section-head > p', t.processIntro, process); qa('.steps article', process).forEach((step, index) => { setText('b', t.stepLabels[index], step); setText('h3', t.stepTitles[index], step); setText('p', t.stepDescriptions[index], step); }); qa('.formats span', process).forEach((el, index) => { el.textContent = t.formats[index]; });
    const faq = q('#duvidas'); setText(':scope > div:first-child .eyebrow', t.faqEyebrow, faq); setHtml(':scope > div:first-child h2', t.faqTitle, faq); qa('details', faq).forEach((detail, index) => { setSummary(detail, t.faqQuestions[index]); setText('p', t.faqAnswers[index], detail); });
    const project = q('#projeto'); setText(':scope > div .eyebrow', t.projectEyebrow, project); setHtml(':scope > div h2', t.projectTitle, project); setText(':scope > div > p:last-child', t.projectIntro, project);
    const labels = qa('form label', project); labels.forEach((label, index) => setLabel(label, t.formLabels[index])); q('input[name="name"]', project).placeholder = t.placeholders[0]; q('textarea[name="idea"]', project).placeholder = t.placeholders[1]; qa('select option', project).forEach((option, index) => { option.textContent = t.options[index]; option.value = t.options[index]; }); setHtml('form .button', t.formButton, project); setText('.form-note', t.formNote, project); setText('#status', '', project);
    setText('#social-title', t.socialTitle); setText('footer p', t.footer); q('footer > a:last-child').setAttribute('aria-label', t.back);
    qa('.lang-switch button').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
    try { localStorage.setItem('site-language', lang); } catch (_) {}
  }

  switcher.addEventListener('click', (event) => { const button = event.target.closest('button[data-lang]'); if (button) applyLanguage(button.dataset.lang); });
  let initialLanguage = 'pt';
  try { initialLanguage = localStorage.getItem('site-language') || 'pt'; } catch (_) {}
  applyLanguage(initialLanguage);
})();
