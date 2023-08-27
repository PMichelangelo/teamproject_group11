(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();

const priceItems = document.querySelectorAll('.price-item-name');

function hidePseudoElement() {
  priceItems.forEach(item => {
    item.classList.remove('active');
  });
}

function togglePseudoElement(item) {
  priceItems.forEach(otherItem => {
    if (otherItem !== item) {
      otherItem.classList.remove('active');
    }
  });
  item.classList.toggle('active');
}

priceItems.forEach(item => {
  item.addEventListener('click', event => {
    event.stopPropagation();
    togglePseudoElement(item);
  });
});

document.addEventListener('click', hidePseudoElement);