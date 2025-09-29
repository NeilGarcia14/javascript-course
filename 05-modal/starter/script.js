'use strict';

// modal element
const modalEl = document.querySelector('.modal');

// overlay modal
const overlayEl = document.querySelector('.overlay');

// close modal
const btnCloseModalEl = document.querySelector('.close-modal');

// open modal
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

console.log('Open buttons:', btnsOpenModalEl.length);

const openModal = function () {
  // remove hidden classname in modal
  modalEl.classList.remove('hidden');
  // remove hidden keyword classname in overlay
  overlayEl.classList.remove('hidden');
};

btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));

const closeModal = function () {
  // add hidden classname in modal
  modalEl.classList.add('hidden');
  // add hidden keyword classname in overlay
  overlayEl.classList.add('hidden');
};

// close modal event
btnCloseModalEl.addEventListener('click', closeModal);
// close overlay event
overlayEl.addEventListener('click', closeModal);
