document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNavigation = document.querySelector('.main-navigation');

    menuToggle.addEventListener('click', function () {
        mainNavigation.classList.toggle('show');
        const items = document.querySelectorAll('.navigation-list__item');
        const angle = 90;
        const radius = 150;
        const startingAngle = 180 - angle / 2;

        if (mainNavigation.classList.contains('show')) {
            mainNavigation.style.display = 'flex';
            items.forEach(function (item, index) {
                const currentAngle = startingAngle + index * (angle / (items.length - 1));
                const x = radius * Math.cos(currentAngle * (Math.PI / 180));
                const y = radius * Math.sin(currentAngle * (Math.PI / 180));
                item.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
            });
        } else {
            mainNavigation.style.display = 'none';
            items.forEach(function (item) {
                item.style.transform = 'translate(0, 0)';
            });
        }
    });
});
