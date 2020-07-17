{
  const dropdowns = document.querySelectorAll('.dropdown__toggle');
  Array.prototype.forEach.call(dropdowns, (dropdown) => {
    dropdown.addEventListener('click', (evt) => {
      evt.target.parentNode.classList.toggle('is-open');
    });
  });
}
