
window.addEventListener('scroll', () => {
    let pageLogo = document.querySelector('#page-logo');
    let scrollTop = window.scrollY;
    if(scrollTop > 0) {
        pageLogo.classList.add('sticy');
    }else {
        pageLogo.classList.remove('sticy');
    }
});