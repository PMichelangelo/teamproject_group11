(() => {
  const mobileMenu = document.querySelector('.menu-container');
  const openMenuBtn = document.querySelector('.open-menu');
  const closeMenuBtn = document.querySelector('.close-menu');
  const links = document.querySelectorAll('.mob-menu-item');

  const toggleMenu = () => {
    const isMenuOpen = mobileMenu.classList.contains('is-open');
    mobileMenu.classList.toggle('is-open', !isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  links.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  const mediaQuery = window.matchMedia('(min-width: 768px)');
  const handleMediaChange = e => {
    if (e.matches) {
      mobileMenu.classList.remove('is-open');
      document.body.style.overflow = 'auto';
    }
  };

  mediaQuery.addListener(handleMediaChange);
})();
