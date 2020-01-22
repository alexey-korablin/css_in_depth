+function () {
    const button = document.getElementById('toggle-menu');
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const menu = document.getElementById('main-menu');
        menu.classList.toggle('is-open');
    })
}()