(function() {

    let windowWidth = window.innerWidth;
    let breadcrumbsBlock = document.querySelector('.js-breadcrumbs');

    const scrollBreadcrumbs = () => {
        windowWidth = window.innerWidth;

        if (windowWidth < 768) {
            breadcrumbsBlock.scroll(10000, 0);
        }
    }

    window.addEventListener('load', (event) => {
        scrollBreadcrumbs();
    });
    window.addEventListener('resize', (event) => {
        scrollBreadcrumbs();
    });

})();