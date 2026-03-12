/* ============================================
   OSOME CARE BEAUTY - JavaScript
   ============================================ */

// Product Data
const productData = {
    'alpha-arbutin': {
        title: 'Alpha Arbutin 2% Face Serum 30ml',
        fullTitle: 'OSOME CARE Alpha Arbutin 2% Face Serum 30ml | Dark Spot Corrector for Hyperpigmentation & Uneven Skin Tone | Skin Brightening Serum for Clear Radiant Skin',
        images: ['Alpha Arbutin 2%/1.png', 'Alpha Arbutin 2%/2.png', 'Alpha Arbutin 2%/3.png', 'Alpha Arbutin 2%/4.png', 'Alpha Arbutin 2%/5.png'],
        buyLink: 'https://amzn.in/d/0avWFV3o',
        specs: [
            { label: 'Brand', value: 'OSOME CARE' },
            { label: 'Size', value: '30ml' },
            { label: 'Item Form', value: 'Serum (Drop)' },
            { label: 'Skin Type', value: 'All Skin Types' },
            { label: 'Key Ingredient', value: 'Alpha Arbutin 2%' },
            { label: 'Features', value: 'Paraben Free' }
        ],
        features: [
            'REDUCES DARK SPOTS & HYPERPIGMENTATION: Helps visibly reduce dark spots, pigmentation, acne marks, and uneven skin tone, promoting clearer and brighter-looking skin.',
            'SKIN BRIGHTENING & TONE CORRECTION: Improves dull-looking skin, enhances overall clarity, and supports a more even and radiant complexion with regular use.',
            'LIGHTWEIGHT & FAST ABSORBING: Quick-absorbing, non-greasy face serum that blends easily into the skin, making it ideal for daily use under moisturiser or sunscreen.',
            'SUITABLE FOR ALL SKIN TYPES: Gentle yet effective formulation suitable for dry, oily, combination, normal, and sensitive skin. Ideal for both men and women.',
            'IMPROVES SKIN TEXTURE: Acts as a dark spot corrector serum and texture improver, helping to achieve a smoother and clearer complexion.'
        ]
    },
    'vitamin-c': {
        title: 'Vitamin C 15% Face Serum 30ml',
        fullTitle: 'OSOME CARE Vitamin C 15% Face Serum 30ml | Skin Brightening & Glow Boosting Serum | Reduces Dark Spots, Improves Skin Texture & Radiance | Lightweight & Fast Absorbing',
        images: ['Vitamin C 15%/1.png', 'Vitamin C 15%/2.png', 'Vitamin C 15%/3.png', 'Vitamin C 15%/4.png', 'Vitamin C 15%/5.png'],
        buyLink: 'https://amzn.in/d/0hG2jXjs',
        specs: [
            { label: 'Brand', value: 'OSOME CARE' },
            { label: 'Size', value: '30ml' },
            { label: 'Item Form', value: 'Serum (Drop)' },
            { label: 'Skin Type', value: 'All Skin Types' },
            { label: 'Key Ingredient', value: 'Vitamin C 15%' },
            { label: 'Features', value: 'Antioxidant Rich' }
        ],
        features: [
            'HIGH POTENCY VITAMIN C FORMULA: Enriched with antioxidants to help brighten skin, reduce dark spots, and improve uneven skin tone for a radiant complexion.',
            'BOOSTS GLOW & SKIN RADIANCE: Helps enhance natural glow, supports collagen health, and improves overall skin clarity with regular use.',
            'ANTI-AGING SKIN BENEFITS: Helps reduce the appearance of fine lines, dullness, and early signs of ageing, promoting smoother and youthful-looking skin.',
            'LIGHTWEIGHT & FAST ABSORBING: Quick-absorbing, non-greasy face serum that penetrates easily into the skin, making it ideal for daily use under moisturiser or sunscreen.',
            'SUITABLE FOR ALL SKIN TYPES: Gentle yet effective formula suitable for dry, oily, combination, normal, and sensitive skin, ideal for both men and women.'
        ]
    },
    'dark-spot': {
        title: 'Dark Spot Removal Serum 30ml',
        fullTitle: 'OSOME CARE Dark Spot Removal Serum 30ml – Reduces Pigmentation, Acne Marks & Uneven Skin Tone | Premium Amber Glass Bottle with Dropper',
        images: ['spot remover/1.png', 'spot remover/2.png', 'spot remover/3.png', 'spot remover/4.png', 'spot remover/5.png'],
        buyLink: 'https://amzn.in/d/0a07eXof',
        specs: [
            { label: 'Brand', value: 'OSOME CARE' },
            { label: 'Size', value: '30ml' },
            { label: 'Item Form', value: 'Serum (Drop)' },
            { label: 'Skin Type', value: 'All Skin Types' },
            { label: 'Scent', value: 'Unscented' },
            { label: 'Features', value: 'Paraben Free' }
        ],
        features: [
            'TARGETED TREATMENT: Specifically formulated to treat dark spots and pigmentation for a more even skin tone.',
            'CONVENIENT SIZE: Comes in a 30ml amber glass bottle with dropper applicator for precise and hygienic application.',
            'SERUM FORMULA: Lightweight serum texture absorbs quickly into skin, making it suitable for daily use.',
            'PREMIUM PACKAGING: Housed in an elegant amber glass bottle with gold-toned dropper cap to protect the formula from light degradation.',
            'SKIN BRIGHTENING: Designed to help reduce the appearance of hyperpigmentation and promote a clearer, more radiant complexion.'
        ]
    },
    'skin-brightening': {
        title: 'Skin Brightening Face Serum 30ml',
        fullTitle: 'Osome Care Skin Brightening Face Serum 30ml – For Glowing, Even Tone Skin, Reduces Dark Spots & Dullness',
        images: ['Skin Brightening Face Serum/1.png', 'Skin Brightening Face Serum/2.png', 'Skin Brightening Face Serum/3.png', 'Skin Brightening Face Serum/4.png', 'Skin Brightening Face Serum/5.png'],
        buyLink: 'https://amzn.in/d/0gWlCNsa',
        specs: [
            { label: 'Brand', value: 'OSOME CARE' },
            { label: 'Size', value: '30ml' },
            { label: 'Item Form', value: 'Serum (Drop)' },
            { label: 'Skin Type', value: 'All Skin Types' },
            { label: 'Benefits', value: 'Radiant Skin' },
            { label: 'Features', value: 'Fast Absorbing' }
        ],
        features: [
            'SKIN BRIGHTENING FORMULA: Advanced face serum specifically formulated for skin whitening and brightening.',
            'CONVENIENT DROPPER BOTTLE: Comes in a 30ml amber glass bottle with precision dropper applicator for easy, mess-free use.',
            'TARGETS DULLNESS: Formulated to reduce the appearance of dark spots, pigmentation, and overall skin dullness.',
            'LIGHTWEIGHT TEXTURE: Non-greasy and fast-absorbing formula that can be used in morning and evening skincare routines.',
            'UNIVERSAL SUITABILITY: Designed for effectiveness on all skin types including dry, oily, combination, normal, and sensitive skin.'
        ]
    },
    'niacinamide': {
        title: 'Niacinamide 10% Face Serum 30ml',
        fullTitle: 'Osome Care Niacinamide 10% Face Serum 30ml – Reduces Blemishes, Acne Marks & Pores for Clear, Even Skin',
        images: ['Niacinamide 10%/1.png', 'Niacinamide 10%/2.png', 'Niacinamide 10%/3.png', 'Niacinamide 10%/4.png', 'Niacinamide 10%/5.png'],
        buyLink: 'https://amzn.in/d/08IbB3M9',
        specs: [
            { label: 'Brand', value: 'OSOME CARE' },
            { label: 'Size', value: '30ml' },
            { label: 'Item Form', value: 'Serum (Drop)' },
            { label: 'Skin Type', value: 'All Skin Types' },
            { label: 'Key Ingredient', value: 'Niacinamide 10%' },
            { label: 'Features', value: 'Paraben Free' }
        ],
        features: [
            'HIGH POTENCY FORMULA: Contains 10% Niacinamide concentration to effectively target blemishes and acne marks.',
            'SKIN BENEFITS: Helps reduce appearance of blemishes and acne marks while improving texture and minimizing pores.',
            'SUITABLE FOR ALL SKIN TYPES: Lightweight serum formula absorbs quickly without leaving a greasy residue.',
            'CONVENIENT SIZE: Comes in a 30ml amber glass bottle with a dropper applicator for precise application.',
            'EASY APPLICATION: Recommended use is 2-3 drops applied to cleansed face and neck, morning and evening.'
        ]
    }
};

// =========================================
// DOM Elements
// =========================================
document.addEventListener('DOMContentLoaded', () => {

    // --- Hero Slider ---
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.getElementById('sliderDots');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSlide = 0;
    let slideInterval;

    // Create slider dots
    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.classList.add('slider-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        dotsContainer.children[currentSlide].classList.remove('active');
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        dotsContainer.children[currentSlide].classList.add('active');
    }

    function nextSlide() {
        goToSlide((currentSlide + 1) % slides.length);
    }

    function prevSlide() {
        goToSlide((currentSlide - 1 + slides.length) % slides.length);
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function resetSlideShow() {
        clearInterval(slideInterval);
        startSlideShow();
    }

    nextBtn.addEventListener('click', () => { nextSlide(); resetSlideShow(); });
    prevBtn.addEventListener('click', () => { prevSlide(); resetSlideShow(); });
    startSlideShow();

    // Touch swipe for hero slider
    let touchStartX = 0;
    let touchEndX = 0;
    const sliderEl = document.querySelector('.hero-slider');
    sliderEl.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    sliderEl.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) { nextSlide(); } else { prevSlide(); }
            resetSlideShow();
        }
    }, { passive: true });

    // --- Product Image Sliders ---
    document.querySelectorAll('.product-card').forEach(card => {
        const images = card.querySelectorAll('.product-img');
        const dotsContainer = card.querySelector('.product-img-dots');
        let currentImg = 0;

        // Create dots
        images.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.classList.add('product-img-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                showProductImage(i);
            });
            dotsContainer.appendChild(dot);
        });

        function showProductImage(index) {
            images[currentImg].classList.remove('active');
            dotsContainer.children[currentImg].classList.remove('active');
            currentImg = index;
            images[currentImg].classList.add('active');
            dotsContainer.children[currentImg].classList.add('active');
        }

        // Auto-rotate on hover
        let hoverInterval;
        card.querySelector('.product-image-wrapper').addEventListener('mouseenter', () => {
            let idx = currentImg;
            hoverInterval = setInterval(() => {
                idx = (idx + 1) % images.length;
                showProductImage(idx);
            }, 1500);
        });

        card.querySelector('.product-image-wrapper').addEventListener('mouseleave', () => {
            clearInterval(hoverInterval);
        });
    });

    // --- Navbar Scroll ---
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }

        // Active nav link
        const sections = document.querySelectorAll('section[id]');
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Back to top
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- Hamburger Menu ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // --- Search Toggle ---
    const searchToggle = document.getElementById('searchToggle');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput');

    searchToggle.addEventListener('click', () => {
        searchOverlay.classList.toggle('active');
        if (searchOverlay.classList.contains('active')) {
            searchInput.focus();
        }
    });

    searchClose.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
    });

    // --- Product Modal ---
    const modal = document.getElementById('productModal');
    const modalClose = document.getElementById('modalClose');
    const modalMainImage = document.getElementById('modalMainImage');
    const modalThumbnails = document.getElementById('modalThumbnails');
    const modalTitle = document.getElementById('modalTitle');
    const modalSpecs = document.getElementById('modalSpecs');
    const modalFeatures = document.getElementById('modalFeatures');
    const modalBuyBtn = document.getElementById('modalBuyBtn');

    function openModal(productId) {
        const product = productData[productId];
        if (!product) return;

        modalTitle.textContent = product.fullTitle;
        modalMainImage.src = product.images[0];
        modalMainImage.alt = product.title;
        modalBuyBtn.href = product.buyLink;

        // Thumbnails
        modalThumbnails.innerHTML = '';
        product.images.forEach((img, i) => {
            const thumb = document.createElement('img');
            thumb.src = img;
            thumb.alt = `${product.title} - Image ${i + 1}`;
            thumb.classList.add('modal-thumb');
            if (i === 0) thumb.classList.add('active');
            thumb.addEventListener('click', () => {
                modalMainImage.src = img;
                document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
            modalThumbnails.appendChild(thumb);
        });

        // Specs
        modalSpecs.innerHTML = '';
        product.specs.forEach(spec => {
            const specDiv = document.createElement('div');
            specDiv.classList.add('modal-spec');
            specDiv.innerHTML = `
                <span class="modal-spec-label">${spec.label}</span>
                <span class="modal-spec-value">${spec.value}</span>
            `;
            modalSpecs.appendChild(specDiv);
        });

        // Features
        modalFeatures.innerHTML = '';
        product.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            modalFeatures.appendChild(li);
        });

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Quick View & View Details buttons
    document.querySelectorAll('.quick-view-btn, .btn-details').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = btn.dataset.product;
            openModal(productId);
        });
    });

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // --- Contact Form ---
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        const phone = document.getElementById('contactPhone').value;
        const message = document.getElementById('contactMessage').value;

        // Construct WhatsApp message
        const whatsappMsg = encodeURIComponent(
            `Hi OSOME CARE Beauty!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage: ${message}`
        );
        window.open(`https://wa.me/917827042645?text=${whatsappMsg}`, '_blank');

        contactForm.reset();
        alert('Thank you! Your message has been sent. We will get back to you soon.');
    });

    // --- Intersection Observer for Staggered Animations ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('fade-in-up');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Stagger product cards
    document.querySelectorAll('.product-card').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.dataset.delay = i * 120;
        observer.observe(el);
    });

    // Stagger features
    document.querySelectorAll('.feature-item').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.dataset.delay = i * 100;
        observer.observe(el);
    });

    // Stagger testimonials
    document.querySelectorAll('.testimonial-card').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.dataset.delay = i * 150;
        observer.observe(el);
    });

    // About features & stats
    document.querySelectorAll('.about-feature, .stat').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.dataset.delay = i * 100;
        observer.observe(el);
    });

    // Section headers
    document.querySelectorAll('.section-header, .section-tag, .contact-form-wrapper').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        observer.observe(el);
    });

    // --- Hero Parallax Effect ---
    const heroSlider = document.querySelector('.hero-slider');
    window.addEventListener('scroll', () => {
        if (window.innerWidth > 768) {
            const scrolled = window.scrollY;
            if (scrolled < window.innerHeight) {
                heroSlider.style.transform = `translateY(${scrolled * 0.3}px)`;
                heroSlider.style.opacity = 1 - (scrolled * 0.001);
            }
        }
    }, { passive: true });

    // --- Smooth Scroll for all anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    console.log('✨ OSOME CARE Beauty — Premium Edition loaded!');
});
