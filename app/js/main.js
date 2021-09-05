const navIconMobile = document.querySelector('.nav__icon-soft')
const softMenu = document.querySelector('.soft-menu')
const softMenuList = document.querySelector('.soft-menu__list')
const btnClosSoftMenu = document.querySelector('.soft-menu__item:first-child i')
const btnTheme = document.querySelector('.theme__button')
const listTheme = document.querySelector('.theme')
const themeItems = document.querySelectorAll('.theme__icon')
const root = document.documentElement;

openSoftMenu = () => {
    softMenu.classList.add('open');
    setTimeout(function() {
        softMenuList.classList.add('open');
    }, 2);

}
closeSoftMenu = () => {
    softMenu.classList.remove('open');
    setTimeout(function() {
        softMenuList.classList.remove('open');
    }, 2);
}
clickedNavIcon = () => {
    navIconMobile.classList.add('icon-translate')
    stateNavIcon = true;
    openSoftMenu();
}
unClickedNavIcon = () => {
    navIconMobile.classList.remove('icon-translate')
    stateNavIcon = false;
}
openElements = (element) => {
    element.classList.add('open');
}
closeElements = (element) => {
    element.classList.remove('open');
}

let stateNavIcon = false;
navIconMobile.onclick = function() {
    if (!stateNavIcon) {
        clickedNavIcon();
    } else {
        unClickedNavIcon();
    }
}

btnClosSoftMenu.onclick = () => {
    closeSoftMenu();
    unClickedNavIcon();
}

softMenu.onclick = () => {
    closeSoftMenu();
    unClickedNavIcon();
}
softMenuList.onclick = (event) => {
    event.stopPropagation();
}

let stateTheme = false;
btnTheme.onclick = () => {
    if (!stateTheme) {
        openElements(listTheme);
        stateTheme = true;
    } else {
        closeElements(listTheme);
        stateTheme = false;
    }
}

// Change Theme 

setTheme = (color) => {
    let colorTheme;
    if (color == 'green') {
        colorTheme = '#7CD52D'
    } else if (color == 'blue') {
        colorTheme = '#47BAD4'
    } else if (color == 'red') {
        colorTheme = '#FC255A'
    } else if (color == 'orange') {
        colorTheme = '#FD732A'
    } else if (color == 'purple') {
        colorTheme = '#9729D3'
    } else if (color == 'yellow') {
        colorTheme = '#FED239'
    } else if (color == 'pink') {
        colorTheme = '#FD28FC'
    } else if (color == 'magenta') {
        colorTheme = '#FD5F5B'
    }
    root.style.setProperty('--primaryColor', colorTheme);
}

for (let item of themeItems) {
    item.onclick = () => {
        setTheme(item.getAttribute('data-color'));
        // clear icon checked
        for (let items of themeItems) {
            items.classList.remove('theme__icon--active');
        }
        item.classList.add('theme__icon--active');
    }
}
// Sticky
var navbar = document.querySelector(".nav");

window.onscroll = function() {
    // Fixed Safari ScrollTop
    const scrollTop = Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop
    )

    if (parseInt(scrollTop) >= 231) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
};