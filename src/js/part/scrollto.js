(function () {

    let scrollLink = document.querySelectorAll('.js-scrollto');
    Array.prototype.forEach.call(scrollLink, function (el, i) {
        let elName = el.getAttribute('href')
        let elTarget = document.querySelector(elName);
        let elPosition = elTarget.getBoundingClientRect().top;

        el.addEventListener('click', (event) => {
            event.preventDefault();

            console.log(elName, elTarget, elPosition)
            window.scroll({
                top: elPosition,
                left: 0,
                behavior: 'smooth'
            })
        });
    });
    
})();