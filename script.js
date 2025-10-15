// Navegação suave entre seções
document.addEventListener('DOMContentLoaded', function() {
    // Selecionar todos os links de navegação
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    // Adicionar evento de clique para navegação suave
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remover classe active de todos os links
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            
            // Adicionar classe active ao link clicado
            this.classList.add('active');
            
            // Obter o ID da seção alvo
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            // Rolar suavemente para a seção
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Destacar seção ativa durante o scroll
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Funcionalidade do botão "Contact Me"
    const contactBtn = document.querySelector('.contact-btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function(e) {
            // O link já está configurado no HTML para navegar para contact.html
            // Não precisamos interceptar o comportamento padrão
        });
    }
    
    // Funcionalidade do botão "See My Works" (apenas se existir)
    const ctaBtn = document.querySelector('.cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function() {
            // Rolar para a seção de projetos
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    // Animação de entrada para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar seções para animação
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Mostrar seção home imediatamente
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.style.opacity = '1';
        homeSection.style.transform = 'translateY(0)';
    }
});

// Efeito de parallax suave no hero
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElement = document.querySelector('.phone-mockup');
    
    if (parallaxElement) {
        const speed = scrolled * 0.5;
        parallaxElement.style.transform = `rotate(-5deg) translateY(${speed}px)`;
    }
});

// Responsividade do menu mobile
function createMobileMenu() {
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav');
    
    // Criar botão de menu mobile
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.classList.add('mobile-menu-btn');
    mobileMenuBtn.innerHTML = '☰';
    mobileMenuBtn.style.display = 'none';
    mobileMenuBtn.style.background = 'none';
    mobileMenuBtn.style.border = 'none';
    mobileMenuBtn.style.fontSize = '1.5rem';
    mobileMenuBtn.style.cursor = 'pointer';
    
    header.querySelector('.container').insertBefore(mobileMenuBtn, nav);
    
    // Toggle do menu mobile
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('mobile-active');
    });
    
    // Mostrar/esconder botão baseado no tamanho da tela
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            mobileMenuBtn.style.display = 'block';
            nav.style.display = nav.classList.contains('mobile-active') ? 'block' : 'none';
        } else {
            mobileMenuBtn.style.display = 'none';
            nav.style.display = 'block';
            nav.classList.remove('mobile-active');
        }
    }
    
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
}

// Inicializar menu mobile
createMobileMenu();

// Sistema de Tradução
const translations = {
    pt: {
        // Header
        home: 'Início',
        about: 'Sobre',
        projects: 'Projetos',
        services: 'Serviços',
        contactMe: 'Contato',
        
        // Hero Section
        heroTitle: 'Carlos Eduardo',
        heroSubtitle: 'Analista de Desenvolvimento Jr.',
        heroDescription: 'Desenvolvedor apaixonado por criar soluções inovadoras e experiências digitais excepcionais.',
        
        // About Section
        aboutTitle: 'Sobre Mim',
        aboutText: 'Sou um desenvolvedor dedicado com experiência em tecnologias modernas...',
        
        // Projects Section
        projectsTitle: 'Projetos',
        projectsText: 'Alguns dos meus trabalhos mais recentes...',
        
        // Services Section
        servicesTitle: 'Serviços',
        servicesText: 'O que posso fazer por você...',
        uiDesignTitle: 'Design de Interface',
        uiDesignText: 'Crio interfaces visuais atraentes e fáceis de navegar. Desde wireframes até mockups finais, desenvolvo designs elaborados que garantem consistência e uma experiência excepcional do usuário em todos os dispositivos, refletindo a identidade da sua marca.',
        uxResearchTitle: 'Pesquisa UX',
        uxResearchText: 'Conduzo pesquisas UX aprofundadas (entrevistas, testes, análises) para entender as necessidades e comportamentos do seu público-alvo. Esta abordagem baseada em pesquisa garante que seu produto resolva problemas reais, levando a maior engajamento e satisfação do usuário.',
        graphicDesignTitle: 'Design Gráfico',
        graphicDesignText: 'Meus serviços de design gráfico criam visuais atraentes para sua marca, seja um logotipo, materiais de branding ou materiais de marketing. Produzo designs que capturam atenção e comunicam efetivamente sua mensagem, fortalecendo a presença da sua marca.',
        frontEndTitle: 'Desenvolvimento Front-End',
        frontEndText: 'Transformo designs UI/UX em código, construindo sites e aplicações web responsivos e de alta performance. Usando tecnologias web modernas, foco em criar interfaces intuitivas com atenção aos detalhes, garantindo que sejam acessíveis, escaláveis e ofereçam uma experiência de usuário perfeita.',
        
        // Footer
        footerCopyright: '© Copyright CaPheus Soluções Inovadoras em Tecnologia da Informação - Todos os Direitos Reservados',
        footerCredit: 'Desenvolvido por',
        
        // Contact Page
        contactTitle: 'Entre em Contato',
        contactDescription: 'Vamos conversar sobre seu próximo projeto! Entre em contato comigo através dos canais abaixo.',
        downloadCV: 'Baixar Meu CV',
        
        // Projects
        charlesSupportTitle: 'Charles SupportTech',
        charlesSupportDesc: 'Sistema de help desk para pequenas e médias empresas com gestão de tickets.',
        spotifyDemoTitle: 'Spotify Demo',
        spotifyDemoDesc: 'Clone do Spotify desenvolvido durante curso Alura Frontend.',
        consoleLINQTitle: 'Console LINQ',
        consoleLINQDesc: 'Primeiro projeto LINQ em C# com exemplos práticos.',
        cepheusWebsiteTitle: 'Cepheus Website',
        cepheusWebsiteDesc: 'Terceiro website ativo e online desenvolvido sem hospedagem tradicional.',
        databaseStoreTitle: 'Database Store',
        databaseStoreDesc: 'Segundo banco de dados desenvolvido em SQL Server.',
        bibliotecaBDTitle: 'Biblioteca BD',
        bibliotecaBDDesc: 'Primeiro banco de dados desenvolvido em SQL Server.',
        projetosConsoleTitle: 'Projetos Console C#',
        projetosConsoleDesc: 'Lista de exercícios em C# para desenvolvimento de lógica de programação e estruturas condicionais.',
        aspnetTitle: 'ASP.NET Project',
        aspnetDesc: 'Projeto desenvolvido em ASP.NET Framework.',
        charles2Title: 'Charles2 For You',
        charles2Desc: 'Projeto focado em carregamento de imagens em HTML5.',
        clockTimeTitle: 'Clock Time',
        clockTimeDesc: 'Badges personalizados para uso em perfis e projetos.',
        charlesTwoTitle: 'Charles Two',
        charlesTwoDesc: 'CRM para gestão de tickets - Help Desk do Projeto Integrador SENAC.',
        charlesTemplateTitle: 'Charles Template',
        charlesTemplateDesc: 'Template público para CRM de gestão de tickets e manutenção.',
        githubProfileTitle: 'GitHub Profile',
        githubProfileDesc: 'Veja todos os meus projetos no GitHub.'
    },
    en: {
        // Header
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        services: 'Services',
        contactMe: 'Contact Me',
        
        // Hero Section
        heroTitle: 'Carlos Eduardo',
        heroSubtitle: 'Jr. Development Analyst',
        heroDescription: 'Passionate developer creating innovative solutions and exceptional digital experiences.',
        
        // About Section
        aboutTitle: 'About Me',
        aboutText: 'I am a dedicated developer with experience in modern technologies...',
        
        // Projects Section
        projectsTitle: 'Projects',
        projectsText: 'Some of my most recent work...',
        
        // Services Section
        servicesTitle: 'Services',
        servicesText: 'What I can do for you...',
        uiDesignTitle: 'UI Design',
        uiDesignText: 'I design visually appealing and easy-to-navigate user interfaces. From wireframes to final mockups, I create crafted designs that ensure consistency and an exceptional user experience across all devices, reflecting your brand\'s identity.',
        uxResearchTitle: 'UX Research',
        uxResearchText: 'I conduct in-depth UX research (interviews, testing, analysis) to understand your target audience\'s needs and behaviors. This research-driven approach ensures your product solves real problems, leading to higher engagement and user satisfaction.',
        graphicDesignTitle: 'Graphic Design',
        graphicDesignText: 'My graphic design services create compelling visuals for your brand, whether it\'s a logo, branding materials, or marketing materials. I produce designs that capture attention and effectively communicate your message, strengthening your brand presence.',
        frontEndTitle: 'Front-End Development',
        frontEndText: 'I take UI/UX designs and bring them to life through code, building responsive and high-performing websites and web applications. Using modern web technologies, I focus on creating intuitive interfaces with close attention to detail, ensuring they are accessible, scalable, and deliver a seamless user experience.',
        
        // Footer
        footerCopyright: '© Copyright CaPheus Innovative Solutions in Information Technology - All Rights Reserved',
        footerCredit: 'Developed by',
        
        // Contact Page
        contactTitle: 'Get In Touch',
        contactDescription: 'Let\'s talk about your next project! Reach out to me through the channels below.',
        downloadCV: 'Download My CV',
        
        // Projects
        charlesSupportTitle: 'Charles SupportTech',
        charlesSupportDesc: 'Help desk system for small and medium enterprises with ticket management.',
        spotifyDemoTitle: 'Spotify Demo',
        spotifyDemoDesc: 'Spotify clone developed during Alura Frontend course.',
        consoleLINQTitle: 'Console LINQ',
        consoleLINQDesc: 'First LINQ project in C# with practical examples.',
        cepheusWebsiteTitle: 'Cepheus Website',
        cepheusWebsiteDesc: 'Third active and online website developed without traditional hosting.',
        databaseStoreTitle: 'Database Store',
        databaseStoreDesc: 'Second database developed in SQL Server.',
        bibliotecaBDTitle: 'Biblioteca BD',
        bibliotecaBDDesc: 'First database developed in SQL Server.',
        projetosConsoleTitle: 'Console C# Projects',
        projetosConsoleDesc: 'List of C# exercises for programming logic and conditional structures development.',
        aspnetTitle: 'ASP.NET Project',
        aspnetDesc: 'Project developed in ASP.NET Framework.',
        charles2Title: 'Charles2 For You',
        charles2Desc: 'Project focused on HTML5 image loading.',
        clockTimeTitle: 'Clock Time',
        clockTimeDesc: 'Custom badges for use in profiles and projects.',
        charlesTwoTitle: 'Charles Two',
        charlesTwoDesc: 'CRM for ticket management - Help Desk from SENAC Integrator Project.',
        charlesTemplateTitle: 'Charles Template',
        charlesTemplateDesc: 'Public template for ticket management and maintenance CRM.',
        githubProfileTitle: 'GitHub Profile',
        githubProfileDesc: 'See all my projects on GitHub.'
    },
    es: {
        // Header
        home: 'Inicio',
        about: 'Acerca',
        projects: 'Proyectos',
        services: 'Servicios',
        contactMe: 'Contáctame',
        
        // Hero Section
        heroTitle: 'Carlos Eduardo',
        heroSubtitle: 'Analista de Desarrollo Jr.',
        heroDescription: 'Desarrollador apasionado por crear soluciones innovadoras y experiencias digitales excepcionales.',
        
        // About Section
        aboutTitle: 'Sobre Mí',
        aboutText: 'Soy un desarrollador dedicado con experiencia en tecnologías modernas...',
        
        // Projects Section
        projectsTitle: 'Proyectos',
        projectsText: 'Algunos de mis trabajos más recientes...',
        
        // Services Section
        servicesTitle: 'Servicios',
        servicesText: 'Lo que puedo hacer por ti...',
        uiDesignTitle: 'Diseño UI',
        uiDesignText: 'Diseño interfaces de usuario visualmente atractivas y fáciles de navegar. Desde wireframes hasta mockups finales, creo diseños elaborados que garantizan consistencia y una experiencia excepcional del usuario en todos los dispositivos, reflejando la identidad de tu marca.',
        uxResearchTitle: 'Investigación UX',
        uxResearchText: 'Realizo investigación UX en profundidad (entrevistas, pruebas, análisis) para entender las necesidades y comportamientos de tu público objetivo. Este enfoque basado en investigación garantiza que tu producto resuelva problemas reales, llevando a mayor compromiso y satisfacción del usuario.',
        graphicDesignTitle: 'Diseño Gráfico',
        graphicDesignText: 'Mis servicios de diseño gráfico crean visuales atractivos para tu marca, ya sea un logotipo, materiales de branding o materiales de marketing. Produzco diseños que capturan atención y comunican efectivamente tu mensaje, fortaleciendo la presencia de tu marca.',
        frontEndTitle: 'Desarrollo Front-End',
        frontEndText: 'Transformo diseños UI/UX en código, construyendo sitios web y aplicaciones web responsivos y de alto rendimiento. Usando tecnologías web modernas, me enfoco en crear interfaces intuitivas con atención al detalle, garantizando que sean accesibles, escalables y ofrezcan una experiencia de usuario perfecta.',
        
        // Footer
        footerCopyright: '© Copyright CaPheus Soluciones Innovadoras en Tecnología de la Información - Todos los Derechos Reservados',
        footerCredit: 'Desarrollado por',
        
        // Contact Page
        contactTitle: 'Ponte en Contacto',
        contactDescription: '¡Hablemos sobre tu próximo proyecto! Contáctame a través de los canales a continuación.',
        downloadCV: 'Descargar Mi CV',
        
        // Projects
        charlesSupportTitle: 'Charles SupportTech',
        charlesSupportDesc: 'Sistema de help desk para pequeñas y medianas empresas con gestión de tickets.',
        spotifyDemoTitle: 'Spotify Demo',
        spotifyDemoDesc: 'Clon de Spotify desarrollado durante el curso Alura Frontend.',
        consoleLINQTitle: 'Console LINQ',
        consoleLINQDesc: 'Primer proyecto LINQ en C# con ejemplos prácticos.',
        cepheusWebsiteTitle: 'Cepheus Website',
        cepheusWebsiteDesc: 'Tercer sitio web activo y en línea desarrollado sin hosting tradicional.',
        databaseStoreTitle: 'Database Store',
        databaseStoreDesc: 'Segunda base de datos desarrollada en SQL Server.',
        bibliotecaBDTitle: 'Biblioteca BD',
        bibliotecaBDDesc: 'Primera base de datos desarrollada en SQL Server.',
        projetosConsoleTitle: 'Proyectos Console C#',
        projetosConsoleDesc: 'Lista de ejercicios en C# para desarrollo de lógica de programación y estructuras condicionales.',
        aspnetTitle: 'Proyecto ASP.NET',
        aspnetDesc: 'Proyecto desarrollado en ASP.NET Framework.',
        charles2Title: 'Charles2 For You',
        charles2Desc: 'Proyecto enfocado en carga de imágenes en HTML5.',
        clockTimeTitle: 'Clock Time',
        clockTimeDesc: 'Badges personalizados para uso en perfiles y proyectos.',
        charlesTwoTitle: 'Charles Two',
        charlesTwoDesc: 'CRM para gestión de tickets - Help Desk del Proyecto Integrador SENAC.',
        charlesTemplateTitle: 'Charles Template',
        charlesTemplateDesc: 'Template público para CRM de gestión de tickets y mantenimiento.',
        githubProfileTitle: 'Perfil GitHub',
        githubProfileDesc: 'Ve todos mis proyectos en GitHub.'
    },
    zh: {
        // Header
        home: '首页',
        about: '关于',
        projects: '项目',
        services: '服务',
        contactMe: '联系我',
        
        // Hero Section
        heroTitle: 'Carlos Eduardo',
        heroSubtitle: '初级开发分析师',
        heroDescription: '热衷于创造创新解决方案和卓越数字体验的开发者。',
        
        // About Section
        aboutTitle: '关于我',
        aboutText: '我是一名专注的开发者，拥有现代技术经验...',
        
        // Projects Section
        projectsTitle: '项目',
        projectsText: '我最近的一些作品...',
        
        // Services Section
        servicesTitle: '服务',
        servicesText: '我能为您做什么...',
        uiDesignTitle: 'UI设计',
        uiDesignText: '我设计视觉吸引力强且易于导航的用户界面。从线框图到最终模型，我创建精心制作的设计，确保在所有设备上的一致性和卓越的用户体验，体现您的品牌身份。',
        uxResearchTitle: 'UX研究',
        uxResearchText: '我进行深入的UX研究（访谈、测试、分析）以了解您目标受众的需求和行为。这种基于研究的方法确保您的产品解决真正的问题，从而提高用户参与度和满意度。',
        graphicDesignTitle: '平面设计',
        graphicDesignText: '我的平面设计服务为您的品牌创造引人注目的视觉效果，无论是标志、品牌材料还是营销材料。我制作能够吸引注意力并有效传达您信息的设计，加强您的品牌影响力。',
        frontEndTitle: '前端开发',
        frontEndText: '我将UI/UX设计转化为代码，构建响应式和高性能的网站和Web应用程序。使用现代Web技术，我专注于创建直观的界面，注重细节，确保它们易于访问、可扩展并提供无缝的用户体验。',
        
        // Footer
        footerCopyright: '© 版权所有 CaPheus 信息技术创新解决方案 - 保留所有权利',
        footerCredit: '开发者',
        
        // Contact Page
        contactTitle: '联系我',
        contactDescription: '让我们谈论您的下一个项目！通过以下渠道联系我。',
        downloadCV: '下载我的简历'
    }
};

let currentLanguage = 'pt';

// Função para traduzir a página
function translatePage(lang) {
    currentLanguage = lang;
    const translation = translations[lang];
    
    // Atualizar elementos com data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translation[key]) {
            element.textContent = translation[key];
        }
    });
    
    // Atualizar texto do botão de idioma
    const langText = document.querySelector('.lang-text');
    const langMap = { pt: 'PT', en: 'EN', es: 'ES', zh: '中文' };
    if (langText) {
        langText.textContent = langMap[lang];
    }
    
    // Salvar preferência no localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// Inicializar sistema de tradução
function initTranslation() {
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    
    // Carregar idioma salvo
    const savedLang = localStorage.getItem('preferredLanguage') || 'pt';
    translatePage(savedLang);
    
    // Toggle dropdown
    langBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown?.classList.toggle('show');
        langBtn.classList.toggle('active');
    });
    
    // Fechar dropdown ao clicar fora
    document.addEventListener('click', () => {
        langDropdown?.classList.remove('show');
        langBtn?.classList.remove('active');
    });
    
    // Selecionar idioma
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const selectedLang = option.getAttribute('data-lang');
            translatePage(selectedLang);
            
            // Atualizar opção ativa
            langOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            
            // Fechar dropdown
            langDropdown?.classList.remove('show');
            langBtn?.classList.remove('active');
        });
    });
}

// Sistema de Tema
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.querySelector('.theme-icon');
    
    // Carregar tema salvo
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        if (themeIcon) themeIcon.textContent = '☀️';
    }
    
    // Toggle tema
    themeToggle?.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        
        // Atualizar ícone
        if (themeIcon) {
            themeIcon.textContent = isLight ? '☀️' : '🌙';
        }
        
        // Salvar preferência
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
}

// Inicializar funcionalidades
initTranslation();
initThemeToggle();
initGames();
initMusic();

// Sistema de Jogos
function initGames() {
    const gamesBtn = document.getElementById('gamesBtn');
    const gamesDropdown = document.getElementById('gamesDropdown');
    const gameOptions = document.querySelectorAll('.game-option');

    // Toggle dropdown
    gamesBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        gamesDropdown.classList.toggle('show');
        gamesBtn.classList.toggle('active');
    });

    // Fechar dropdown ao clicar fora
    document.addEventListener('click', function() {
        gamesDropdown.classList.remove('show');
        gamesBtn.classList.remove('active');
    });

    // Selecionar jogo
    gameOptions.forEach(option => {
        option.addEventListener('click', function() {
            const game = this.getAttribute('data-game');
            openGame(game);
            gamesDropdown.classList.remove('show');
            gamesBtn.classList.remove('active');
        });
    });
}

// Sistema de Música
function initMusic() {
    const musicBtn = document.getElementById('musicBtn');
    const musicDropdown = document.getElementById('musicDropdown');

    // Toggle dropdown
    musicBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        musicDropdown.classList.toggle('show');
        musicBtn.classList.toggle('active');
    });

    // Fechar dropdown ao clicar fora
    document.addEventListener('click', function(e) {
        if (!musicDropdown.contains(e.target) && !musicBtn.contains(e.target)) {
            musicDropdown.classList.remove('show');
            musicBtn.classList.remove('active');
        }
    });

    // Prevenir fechamento ao clicar no iframe
    musicDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

function openGame(gameType) {
    const modal = document.getElementById(gameType + 'Modal');
    modal.classList.add('show');
    
    if (gameType === 'pacman') {
        startPacman();
    } else if (gameType === 'snake') {
        startSnake();
    }
}

// Fechar jogo
function closeGame(gameType) {
    const modal = document.getElementById(gameType + 'Modal');
    modal.classList.remove('show');
    
    // Parar o jogo
    if (gameType === 'pacman' && window.pacmanGame) {
        window.pacmanGame.stop();
    } else if (gameType === 'snake' && window.snakeGame) {
        window.snakeGame.stop();
    }
}

// Jogo PAC MAN
function startPacman() {
    const canvas = document.getElementById('pacmanCanvas');
    const ctx = canvas.getContext('2d');
    const scoreElement = document.getElementById('pacmanScore');
    
    let score = 0;
    let pacman = { x: 200, y: 200, size: 15, direction: 'right' };
    let dots = [];
    let gameRunning = true;
    
    // Criar dots
    for (let x = 30; x < canvas.width; x += 40) {
        for (let y = 30; y < canvas.height; y += 40) {
            if (Math.abs(x - pacman.x) > 20 || Math.abs(y - pacman.y) > 20) {
                dots.push({ x: x, y: y, eaten: false });
            }
        }
    }
    
    function drawPacman() {
        ctx.fillStyle = '#ffff00';
        ctx.beginPath();
        ctx.arc(pacman.x, pacman.y, pacman.size, 0.2 * Math.PI, 1.8 * Math.PI);
        ctx.lineTo(pacman.x, pacman.y);
        ctx.fill();
    }
    
    function drawDots() {
        ctx.fillStyle = '#ffffff';
        dots.forEach(dot => {
            if (!dot.eaten) {
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, 3, 0, 2 * Math.PI);
                ctx.fill();
            }
        });
    }
    
    function checkCollisions() {
        dots.forEach(dot => {
            if (!dot.eaten) {
                const distance = Math.sqrt(
                    Math.pow(pacman.x - dot.x, 2) + Math.pow(pacman.y - dot.y, 2)
                );
                if (distance < pacman.size) {
                    dot.eaten = true;
                    score += 10;
                    scoreElement.textContent = `Score: ${score}`;
                }
            }
        });
    }
    
    function gameLoop() {
        if (!gameRunning) return;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        drawDots();
        drawPacman();
        checkCollisions();
        
        requestAnimationFrame(gameLoop);
    }
    
    // Controles
    document.addEventListener('keydown', function(e) {
        if (!gameRunning) return;
        
        switch(e.key) {
            case 'ArrowUp':
                if (pacman.y > pacman.size) pacman.y -= 20;
                break;
            case 'ArrowDown':
                if (pacman.y < canvas.height - pacman.size) pacman.y += 20;
                break;
            case 'ArrowLeft':
                if (pacman.x > pacman.size) pacman.x -= 20;
                break;
            case 'ArrowRight':
                if (pacman.x < canvas.width - pacman.size) pacman.x += 20;
                break;
        }
    });
    
    window.pacmanGame = {
        stop: function() {
            gameRunning = false;
        }
    };
    
    gameLoop();
}

// Jogo SNAKE
function startSnake() {
    const canvas = document.getElementById('snakeCanvas');
    const ctx = canvas.getContext('2d');
    const scoreElement = document.getElementById('snakeScore');
    
    const gridSize = 20;
    let snake = [{ x: 200, y: 200 }];
    let direction = { x: gridSize, y: 0 };
    let food = { x: 100, y: 100 };
    let score = 0;
    let gameRunning = true;
    
    function generateFood() {
        food = {
            x: Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize,
            y: Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize
        };
    }
    
    function drawSnake() {
        ctx.fillStyle = '#00ff00';
        snake.forEach(segment => {
            ctx.fillRect(segment.x, segment.y, gridSize - 2, gridSize - 2);
        });
    }
    
    function drawFood() {
        ctx.fillStyle = '#ff0000';
        ctx.fillRect(food.x, food.y, gridSize - 2, gridSize - 2);
    }
    
    function moveSnake() {
        const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
        
        // Verificar colisão com paredes
        if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
            gameRunning = false;
            alert('Game Over! Score: ' + score);
            return;
        }
        
        // Verificar colisão com o próprio corpo
        if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
            gameRunning = false;
            alert('Game Over! Score: ' + score);
            return;
        }
        
        snake.unshift(head);
        
        // Verificar se comeu a comida
        if (head.x === food.x && head.y === food.y) {
            score += 10;
            scoreElement.textContent = `Score: ${score}`;
            generateFood();
        } else {
            snake.pop();
        }
    }
    
    function gameLoop() {
        if (!gameRunning) return;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        moveSnake();
        drawSnake();
        drawFood();
        
        setTimeout(() => requestAnimationFrame(gameLoop), 150);
    }
    
    // Controles
    document.addEventListener('keydown', function(e) {
        if (!gameRunning) return;
        
        switch(e.key) {
            case 'ArrowUp':
                if (direction.y === 0) direction = { x: 0, y: -gridSize };
                break;
            case 'ArrowDown':
                if (direction.y === 0) direction = { x: 0, y: gridSize };
                break;
            case 'ArrowLeft':
                if (direction.x === 0) direction = { x: -gridSize, y: 0 };
                break;
            case 'ArrowRight':
                if (direction.x === 0) direction = { x: gridSize, y: 0 };
                break;
        }
    });
    
    window.snakeGame = {
        stop: function() {
            gameRunning = false;
        }
    };
    
    generateFood();
    gameLoop();
}

// Efeitos dinâmicos para as letras do nome
function initLetterEffects() {
    const letters = document.querySelectorAll('.letter');
    
    // Animação de entrada sequencial
    letters.forEach((letter, index) => {
        letter.style.opacity = '0';
        letter.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            letter.style.transition = 'all 0.6s ease';
            letter.style.opacity = '1';
            letter.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Efeito de clique nas letras
    letters.forEach(letter => {
        letter.addEventListener('click', function() {
            // Criar efeito de explosão de partículas
            createParticleExplosion(this);
            
            // Efeito de shake temporário
            this.style.animation = 'letterShake 0.5s ease-in-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
        
        // Efeito de som (opcional - pode ser adicionado depois)
        letter.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.3)';
        });
        
        letter.addEventListener('mouseleave', function() {
            this.style.filter = 'brightness(1)';
        });
    });
}

// Criar efeito de partículas
function createParticleExplosion(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.backgroundColor = '#4ecdc4';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.boxShadow = '0 0 6px #4ecdc4';
        
        document.body.appendChild(particle);
        
        const angle = (i / 12) * Math.PI * 2;
        const velocity = 100 + Math.random() * 50;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let x = 0;
        let y = 0;
        let opacity = 1;
        
        const animate = () => {
            x += vx * 0.016;
            y += vy * 0.016 + 50 * 0.016; // gravidade
            opacity -= 0.02;
            
            particle.style.transform = `translate(${x}px, ${y}px)`;
            particle.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                document.body.removeChild(particle);
            }
        };
        
        requestAnimationFrame(animate);
    }
}

// Adicionar keyframe para shake
const shakeKeyframes = `
@keyframes letterShake {
    0%, 100% { transform: translateX(0); }
    10% { transform: translateX(-3px) rotate(-1deg); }
    20% { transform: translateX(3px) rotate(1deg); }
    30% { transform: translateX(-3px) rotate(-1deg); }
    40% { transform: translateX(3px) rotate(1deg); }
    50% { transform: translateX(-2px) rotate(-0.5deg); }
    60% { transform: translateX(2px) rotate(0.5deg); }
    70% { transform: translateX(-1px) rotate(-0.25deg); }
    80% { transform: translateX(1px) rotate(0.25deg); }
    90% { transform: translateX(-0.5px); }
}
`;

// Adicionar os keyframes ao CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = shakeKeyframes;
document.head.appendChild(styleSheet);

// Inicializar efeito typewriter
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initTypewriter, 500);
});

// Efeito Typewriter
function initTypewriter() {
    const typewriterElement = document.getElementById('typewriterText');
    const cursorElement = document.getElementById('cursor');
    
    if (!typewriterElement) return;
    
    const text = 'Carlos Eduardo';
    let currentCharIndex = 0;
    
    function typeWriter() {
        if (currentCharIndex < text.length) {
            typewriterElement.textContent = text.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            setTimeout(typeWriter, 100);
        }
    }
    
    typeWriter();
}