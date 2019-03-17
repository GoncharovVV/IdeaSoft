module.exports = {
    toggleMenu: ()=>{
        const btnEl = document.querySelector('.js-toggle');
        if (btnEl) {
            btnEl.addEventListener('click', function() {
                const target = document.querySelector(this.getAttribute('data-parent')),
                    nameClass = this.getAttribute('data-class');
                    target.classList.toggle(nameClass);
            });
        }
    }
};