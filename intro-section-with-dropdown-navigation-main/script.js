window.onload = function() {

    screenWidthCheck();

    let dropdownItems = document.querySelectorAll('.navbar--menu--dropdown p');
    for (let item of dropdownItems) {
        item.addEventListener('click', dropdownMenu);
        item.addEventListener('mousedown', preventSelection);
    }

    let openMenuBtn = document.getElementById('open-mobile-menu');
    openMenuBtn.addEventListener('click', openMobileMenu);

    let closeMenuBtn = document.getElementById('close-mobile-menu');
    closeMenuBtn.addEventListener('click', closeMobileMenu);
};

const dropdownMenu = (event) => {
    let parentElem = event.currentTarget;
    let arrowDown = parentElem.querySelector('.navbar--menu--dropdown_icondown');
    let arrowUp = parentElem.querySelector('.navbar--menu--dropdown_iconup');
    let menuList = parentElem.nextElementSibling;
    arrowUp.classList.toggle('hide');
    arrowDown.classList.toggle('hide');
    menuList.classList.toggle('hide');
}

const preventSelection = (event) => {
    event.preventDefault();
};

const screenWidthCheck = () => {
    if (document.documentElement.clientWidth < 768) {
        document.getElementById('desktop-navbar').classList.add('hide');
        document.getElementById('mobile-navbar').classList.remove('hide');
    }
    else {
        document.getElementById('desktop-navbar').classList.remove('hide');
        document.getElementById('mobile-navbar').classList.add('hide');
    }
};

const openMobileMenu = () => {
    document.querySelector('.navbar--mobilemenu_wrapper').classList.remove('hide');
    document.getElementById('open-mobile-menu').classList.add('hide');
    document.body.classList.add('darkfilter');
    console.log(document.body.classList);
    console.log(document.body);
};

const closeMobileMenu = () => {
    document.querySelector('.navbar--mobilemenu_wrapper').classList.add('hide');
    document.getElementById('open-mobile-menu').classList.remove('hide');
    document.body.classList.remove('darkfilter');
    console.log(document.body.classList);
    console.log(document.body);
};