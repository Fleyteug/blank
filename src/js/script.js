
//navBtns

const navBtns = document.querySelectorAll('.menu__item');

navBtns.forEach(function (item) {
    item.addEventListener('mouseover', function() {
        let currentBtn = item;
        let btnId = currentBtn.getAttribute('data-nav');


        if (! currentBtn.classList.contains('menu__item-active')) {
            navBtns.forEach(function(item) {
                item.classList.remove('menu__item-active');
            });
        }

        currentBtn.classList.add('menu__item-active');
    });

    
    item.addEventListener('mouseout', function() {
        navBtns.forEach(function (item) {
            item.classList.remove('menu__item-active');
        });
    });
});

