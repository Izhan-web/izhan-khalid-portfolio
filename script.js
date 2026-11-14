/**
 * Izhan Khalid — Technical Mono Portfolio
 * Vanilla JavaScript: navigation, scroll spy, animations, accessibility.
 */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------------------
  // 1. Mobile Menu Toggle & Keyboard Accessibility
  // -------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobile-toggle');
  const primaryNav = document.getElementById('primary-nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  if (mobileToggle && primaryNav) {
    const toggleMenu = (open) => {
      const willOpen = typeof open === 'boolean' ? open : !primaryNav.classList.contains('is-open');
      primaryNav.classList.toggle('is-open', willOpen);
      mobileToggle.setAttribute('aria-expanded', String(willOpen));
      mobileToggle.setAttribute('aria-label', willOpen ? 'Close navigation menu' : 'Open navigation menu');
    };

    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close menu when a navigation link is clicked
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (primaryNav.classList.contains('is-open')) {
          toggleMenu(false);
        }
      });
    });

    // Close on Escape key and return focus
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && primaryNav.classList.contains('is-open')) {
        toggleMenu(false);
        mobileToggle.focus();
      }
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (
        primaryNav.classList.contains('is-open') &&
        !primaryNav.contains(e.target) &&
        !mobileToggle.contains(e.target)
      ) {
        toggleMenu(false);
      }
    });
  }

  // -------------------------------------------------------------------------
  // 2. Active Navigation Scroll Spy
  // -------------------------------------------------------------------------
  if (sections.length > 0 && navLinks.length > 0) {
    const updateActiveNav = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const headerOffset = 120;
      let currentSectionId = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - headerOffset;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          currentSectionId = section.getAttribute('id');
        }
      });

      // Special case: Bottom of page activates contact
      if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 60) {
        currentSectionId = 'contact';
      }

      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href === `#${currentSectionId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav();
  }

  // -------------------------------------------------------------------------
  // 3. Header Scrolled State (past 40px)
  // -------------------------------------------------------------------------
  const siteHeader = document.getElementById('site-header');
  if (siteHeader) {
    const updateHeader = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollY > 40) {
        siteHeader.classList.add('is-scrolled');
      } else {
        siteHeader.classList.remove('is-scrolled');
      }
    };
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }

  // -------------------------------------------------------------------------
  // 4. Scroll Progress Indicator (avoid dividing by zero)
  // -------------------------------------------------------------------------
  const progressBar = document.getElementById('progress');
  if (progressBar) {
    const updateProgress = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  // -------------------------------------------------------------------------
  // 5. Hero Load Reveal (Split heading into words)
  // -------------------------------------------------------------------------
  const heroHeading = document.getElementById('hero-heading');
  if (heroHeading) {
    const fullText = heroHeading.textContent.trim();
    heroHeading.setAttribute('aria-label', fullText);
    const words = fullText.split(/\s+/);
    heroHeading.innerHTML = '';

    words.forEach((word, index) => {
      const mask = document.createElement('span');
      mask.className = 'word-mask';
      const span = document.createElement('span');
      span.className = `hero-word hero-word-${index}`;
      span.setAttribute('aria-hidden', 'true');
      span.textContent = word + (index < words.length - 1 ? '\u00A0' : '');
      mask.appendChild(span);
      heroHeading.appendChild(mask);
    });

    const triggerHeroReveal = () => {
      document.querySelectorAll('.hero-word').forEach((w) => w.classList.add('is-revealed'));
      document.querySelector('.hero-headline')?.classList.add('is-revealed');
      document.querySelector('.hero-rotating-wrapper')?.classList.add('is-revealed');
      document.querySelector('.hero-actions')?.classList.add('is-revealed');
    };

    requestAnimationFrame(triggerHeroReveal);
  }

  // -------------------------------------------------------------------------
  // 6. Rotating Word (2.2s cycle, 300ms slide/fade, pause on tab hidden)
  // -------------------------------------------------------------------------
  const rotatingWordEl = document.getElementById('rotating-word');
  if (rotatingWordEl) {
    const words = ['networking', 'cybersecurity', 'artificial intelligence', 'web development'];
    let currentIndex = 0;
    let intervalId = null;

    const changeWord = () => {
      rotatingWordEl.classList.add('word-exit');
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % words.length;
        rotatingWordEl.textContent = words[currentIndex];
        rotatingWordEl.classList.remove('word-exit');
        rotatingWordEl.classList.add('word-enter');
        void rotatingWordEl.offsetWidth; // Force repaint
        rotatingWordEl.classList.remove('word-enter');
      }, 300);
    };

    const startRotation = () => {
      if (!intervalId && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        intervalId = setInterval(changeWord, 2200);
      }
    };

    const stopRotation = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };

    startRotation();

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stopRotation();
      } else {
        startRotation();
      }
    });
  }

  // -------------------------------------------------------------------------
  // 7. Project Card Spotlight Effect (pointermove, --x and --y)
  // -------------------------------------------------------------------------
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    });
  });

  // -------------------------------------------------------------------------
  // 8. Scroll-Triggered Reveal Animations & Hover-Lag Fix
  // -------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if (revealElements.length > 0) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
      revealElements.forEach((el) => el.classList.add('reveal-init'));

      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target;
              el.classList.add('reveal-visible');
              // Hover lag fix: remove transition classes once animation ends
              el.addEventListener(
                'transitionend',
                () => {
                  el.classList.remove('reveal-init', 'reveal-visible', 'delay-1', 'delay-2', 'delay-3');
                },
                { once: true }
              );
              observer.unobserve(el);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -40px 0px',
          threshold: 0.1,
        }
      );

      revealElements.forEach((el) => revealObserver.observe(el));
    }
  }
});
