(function() {
    'use strict';
    const container = document.querySelector('.container-var');
    function changeProperty() {
        container.style.setProperty('--main-bg', '#cdf');
    }
    setTimeout(changeProperty, 3000);
}());