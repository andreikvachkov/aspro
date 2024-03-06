const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach((input) => {
    input.addEventListener("input", (e) => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);

        if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
            if (e.target.className === "input-min") {
                rangeInput[0].value = minPrice;
                range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < priceGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap;
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var filterName = document.querySelector('.catalog__filter__item__cat .filter__name');
    var filterList = document.querySelector('.catalog__filter__item__cat ul');

    filterName.addEventListener('click', function () {
        filterList.classList.toggle('open');
        filterName.classList.toggle('open');
    });


});

function toggleNav() {
    var sidebar = document.getElementById("mobile-menu");
    sidebar.classList.toggle('open');
}

function toggleNavBasket(event) {
    event.preventDefault();
    var sidebar2 = document.getElementById("basket__poup");
    sidebar2.classList.toggle('open');
}

function toggleNavThanks(event) {
    event.preventDefault();
    var sidebar3 = document.getElementById("thanks__popup");
    sidebar3.classList.toggle('open');
}

var menuButtons = document.querySelectorAll('.mobile__submenu__btn');

menuButtons.forEach(function(menuButton) {
    menuButton.addEventListener('click', function(event) {
        event.preventDefault();
        var submenu = this.nextElementSibling;
        submenu.classList.toggle('open');
        this.classList.toggle('open');
    });
});