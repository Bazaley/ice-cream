(() => {
  const refs = {
    mobileMenu: document.querySelector('[data-mobile-menu]'),
    burger: document.querySelector('[data-burger]'),
    btnClose: document.querySelector('[data-btn-close]'),
    backdrop: document.querySelector('[data-backdrop]'),
    modalClose: document.querySelector('[data-modal-close]'),
    modalOpen: document.querySelector('[data-open-modal]'),
  };

  refs.burger.addEventListener('click', toggleMobile);
  refs.btnClose.addEventListener('click', toggleMobile);
  

  function toggleMobile() {
    refs.mobileMenu.classList.toggle('is-open');
  }

  refs.modalOpen.addEventListener('click', toggleModal);
  refs.modalClose.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.backdrop.classList.toggle('is-hidden');
  }
})();
