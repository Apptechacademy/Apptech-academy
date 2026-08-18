const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
const overlay = document.getElementById('overlay');

function toggleMenu() {
    if (!menuBtn || !navMenu || !overlay) return;
    menuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
}

if (menuBtn) menuBtn.addEventListener('click', toggleMenu);
if (overlay) overlay.addEventListener('click', toggleMenu);
document.querySelectorAll('.nav-menu a').forEach(link => {
    if (link.textContent.trim().toLowerCase().includes('why choose us')) link.closest('li')?.remove();
});
document.querySelectorAll('.nav-menu a').forEach(link => link.addEventListener('click', () => {
    if (navMenu && navMenu.classList.contains('active')) toggleMenu();
}));

const courseMenuItems = [
    ['Graphic Design', 'graphic-design'],
    ['Web Design', 'web-design'],
    ['Web Development', 'web-development'],
    ['Programming', 'programming'],
    ['Computer Networking', 'networking'],
    ['Cloud Networking', 'cloud-networking'],
    ['Cybersecurity', 'cybersecurity'],
    ['Data Analysis', 'data-analysis']
];
document.querySelectorAll('.nav-menu > ul > li > a[href^="course.html"]').forEach(link => {
    const item = link.closest('li');
    if (item.classList.contains('nav-group')) return;
    item.classList.add('nav-group');
    item.innerHTML = '<button class="nav-group-toggle" aria-expanded="false"><span><i data-lucide="book-open"></i> Courses</span><i data-lucide="chevron-down"></i></button><ul class="nav-submenu">' + courseMenuItems.map(([label, key]) => `<li><a href="course.html?course=${key}">${label}</a></li>`).join('') + '</ul>';
});

document.querySelectorAll('.nav-group-toggle').forEach(toggle => toggle.addEventListener('click', () => {
    const group = toggle.closest('.nav-group');
    const isOpen = group.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
}));

const navSearch = document.getElementById('navSearch');
const siteSearch = document.getElementById('siteSearch');
const searchIndex = [
    { terms: ['home', 'main'], url: 'index.html' },
    { terms: ['graphic design'], url: 'course.html?course=graphic-design' },
    { terms: ['web design'], url: 'course.html?course=web-design' },
    { terms: ['web development', 'website development', 'programming web'], url: 'course.html?course=web-development' },
    { terms: ['programming', 'software'], url: 'course.html?course=programming' },
    { terms: ['networking', 'computer network'], url: 'course.html?course=networking' },
    { terms: ['cloud', 'cloud networking'], url: 'course.html?course=cloud-networking' },
    { terms: ['cybersecurity', 'cyber security', 'ethical hacking'], url: 'course.html?course=cybersecurity' },
    { terms: ['data', 'data analysis', 'analytics'], url: 'course.html?course=data-analysis' },
    { terms: ['course', 'courses', 'design'], url: 'course.html?course=web-development' },
    { terms: ['about', 'about us'], url: 'about.html' },
    { terms: ['study', 'studies', 'methodology', 'abroad', 'degree', 'university'], url: 'studies.html' },
    { terms: ['contact', 'enquiry', 'enquire', 'advisor'], url: 'contact.html' }
];

if (navSearch && siteSearch) navSearch.addEventListener('submit', event => {
    event.preventDefault();
    const query = siteSearch.value.trim().toLowerCase();
    siteSearch.setCustomValidity('');
    if (!query) {
        siteSearch.setCustomValidity('Enter a course or page name to search.');
        siteSearch.reportValidity();
        return;
    }

    const match = searchIndex.find(item => item.terms.some(term => term.includes(query) || query.includes(term)));
    if (match) window.location.href = match.url;
    else {
        siteSearch.setCustomValidity('No matching course or page found. Try “web development”, “about”, or “contact”.');
        siteSearch.reportValidity();
    }
});

if (siteSearch) siteSearch.addEventListener('input', () => siteSearch.setCustomValidity(''));

document.querySelectorAll('.benefit-trigger').forEach(trigger => trigger.addEventListener('click', () => {
    const card = trigger.closest('.benefit-card');
    const isOpen = card.classList.toggle('open');
    trigger.setAttribute('aria-expanded', isOpen);
    trigger.querySelector('.plus').textContent = isOpen ? '−' : '+';
}));

const enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) enquiryForm.addEventListener('submit', event => {
    event.preventDefault();
    document.getElementById('formStatus').textContent = 'Thank you for sending your enquiry. Our admissions team will get back to you shortly.';
    event.target.reset();
});

document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.href = 'mailto:ireobachisom@gmail.com';
    const emailLabel = link.querySelector('strong');
    if (emailLabel) emailLabel.textContent = 'aptechacademy@gmail.com';
    else link.textContent = 'aptechacademy@gmail.com';
});

document.querySelectorAll('header .logo').forEach(logo => {
    if (!logo.querySelector('.logo-icon')) {
        logo.insertAdjacentHTML('afterbegin', '<svg class="logo-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2 2 7l10 5L22 7 12 2Z" fill="currentColor"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>');
    }
});

document.querySelectorAll('.logo-text').forEach(logoText => {
    logoText.innerHTML = 'Apptech <small>Academy</small><span>.</span>';
});
document.title = document.title.replace(/Aptech Academy/g, 'Apptech Academy').replace(/Aptech/g, 'Apptech');
window.setTimeout(() => {
    document.title = document.title.replace(/Aptech Academy/g, 'Apptech Academy').replace(/Aptech/g, 'Apptech');
}, 0);
document.querySelectorAll('body *:not(script):not(style)').forEach(element => {
    if (element.children.length === 0 && element.textContent.includes('Aptech')) {
        element.textContent = element.textContent.replace(/Aptech Academy/g, 'Apptech Academy').replace(/Aptech/g, 'Apptech');
    }
});

const hero = document.querySelector('.hero');
if (hero) {
    const heroSlides = [
        { image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1800&q=90', eyebrow: 'Since 1986 · Learn without limits', title: 'Shape your future<br>with <span>Apptech Academy.</span>', text: 'Practical technology education, expert mentors and globally relevant skills for the career you want.', note: 'Career-ready<br>learning starts here' },
        { image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=90', eyebrow: 'Learn by doing · Grow with confidence', title: 'Skills that move<br>you <span>forward.</span>', text: 'Build a portfolio, practise with purpose and prepare for the opportunities ahead.', note: 'Build skills<br>that employers value' },
        { image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=90', eyebrow: 'Your path · Your possibility', title: 'Make your next<br>move <span>count.</span>', text: 'Choose a clear learning path and get the support to make it yours.', note: 'Start curious.<br>Leave capable.' }
    ];
    let slideIndex = 0;
    const eyebrow = hero.querySelector('.hero-content .eyebrow');
    const title = hero.querySelector('.hero-content h1');
    const text = hero.querySelector('.hero-content p:not(.eyebrow)');
    const number = document.getElementById('heroNumber');
    const note = document.getElementById('heroNote');
    const showSlide = () => {
        const slide = heroSlides[slideIndex];
        hero.classList.add('is-changing');
        window.setTimeout(() => {
            hero.style.setProperty('--hero-image', `url("${slide.image}")`);
            eyebrow.textContent = slide.eyebrow;
            title.innerHTML = slide.title;
            text.textContent = slide.text;
            number.textContent = String(slideIndex + 1).padStart(2, '0');
            note.innerHTML = slide.note;
            hero.classList.remove('is-changing');
        }, 120);
    };
    showSlide();
    window.setInterval(() => { slideIndex = (slideIndex + 1) % heroSlides.length; showSlide(); }, 5200);
}

if (window.lucide) lucide.createIcons();
const certificationHeading = document.querySelector('.certification-strip h3');
if (certificationHeading) certificationHeading.textContent = 'Certified pathways connected to Google, Microsoft and Apple.';