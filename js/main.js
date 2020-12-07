// changing



// VARIABLES

let nav = document.getElementById('nav');
let menu = document.getElementById('links');
let opend = document.getElementById('open');
let buttons = document.getElementsByClassName('btn-header');
let closed = true;

function menus() {
    let current = window.pageYOffset;

    if (current <= 650) {
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '700ms';
        menu.style.top = '70px';
        opend.style.color = '#fff';
    } else {
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '700ms';
        menu.style.top = '80px';
        opend.style.color = '#fff';
    }
}

function opening() {
    if (closed) {
        menu.style.width = '70vw';
        closed = false;
    } else {
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        closed = true;
    }
}

window.addEventListener('load', menus);

window.addEventListener('click', function (e) {
    if (closed == false) {
        let span = document.querySelector('span');
        if (e.target !== span && e.target !== opend) {
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            closed = true;
        }
    }
});

window.addEventListener('scroll', menus);

window.addEventListener('resize', function () {
    if (screen.width >= 700) {
        closed = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});

opend.addEventListener('click', opening);


var pieData = {
    TWOSOME_in_Jungmun: 30,
    Humin: 25,
    Compose: 14,
    Pascucci_in_Jungmun: 11,
    TWOSOME_in_Seonghwa: 6,
    Holly_in_Seonghwa: 6,
    Other: 8
};
var chartDonut = c3.generate({
    bindto: "#piechart",
    data: {
        json: [pieData],
        keys: {
            value: Object.keys(pieData),
        },
        type: "donut",
    },
    donut: {
        title: "Weekly Hotplace",
    },
});