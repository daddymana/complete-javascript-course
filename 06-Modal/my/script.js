'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Close Modal function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

// Open Modal fuction
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}


// Open Modal Buttons click handler
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// Close Modal Button click handler
btnCloseModal.addEventListener('click', closeModal)

// Ovelay click handler
overlay.addEventListener('click', closeModal);

// Esc Key handler
document.addEventListener('keydown', function(e) {
  if (e.key === "Escape") {
    if (!modal.classList.contains('hidden')) {
      closeModal()
    }
  }
});