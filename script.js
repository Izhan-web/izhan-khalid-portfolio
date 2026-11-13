/**
 * Izhan Khalid — Personal Portfolio Landing Page
 * Handles responsive navigation, accessible mobile menu, and active scroll spy.
 */

document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.getElementById('mobile-toggle');
  const primaryNav = document.getElementById('primary-nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // -------------------------------------------------------------------------
  // 1. Mobile Menu Toggle & Keyboard Accessibility
  // -------------------------------------------------------------------------
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

    // Close on Escape key
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

      // Special case: If user has scrolled to the bottom of the page, activate contact
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
  // 3. Scroll-Triggered Reveal Animations
  // -------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if (revealElements.length > 0) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
      // Initialize hidden state only when IntersectionObserver is supported and active
      revealElements.forEach((el) => el.classList.add('reveal-init'));

      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal-visible');
              observer.unobserve(entry.target);
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
