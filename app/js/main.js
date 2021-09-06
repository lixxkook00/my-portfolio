const navIconMobile = document.querySelector('.nav__icon-soft')
const softMenu = document.querySelector('.soft-menu')
const softMenuList = document.querySelector('.soft-menu__list')
const btnClosSoftMenu = document.querySelector('.soft-menu__item:first-child i')
const btnTheme = document.querySelector('.theme__button')
const listTheme = document.querySelector('.theme')
const themeItems = document.querySelectorAll('.theme__icon')
const root = document.documentElement;
const process = document.querySelectorAll('.skill__item-process span')
const processItem = document.querySelectorAll('.skill__item')
const btnLogo = document.querySelector('#navLogo')


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

// btnClosSoftMenu.onclick = () => {
//     closeSoftMenu();
//     unClickedNavIcon();
// }

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
checkTheme = (item, list) => {
    // clear icon checked
    for (let items of list) {
        items.classList.remove('theme__icon--active');
    }
    item.classList.add('theme__icon--active');
}

// When Select form Theme color list
for (let item of themeItems) {
    item.onclick = () => {
        setTheme(item.getAttribute('data-color'));
        console.log(item)
        window.localStorage.setItem('themeColor', item.getAttribute('data-color'));
        checkTheme(item, themeItems)
    }
}

// Get current theme color from localStorage
const currentTheme = window.localStorage.getItem('themeColor');
if (currentTheme != null) {
    setTheme(currentTheme);
    for (let item of themeItems) {
        if (item.getAttribute('data-color') == currentTheme) {
            checkTheme(item, themeItems)
        }
    }
}

// Sticky
const navbar = document.querySelector(".nav");

// Catch event when window onscroll
window.onscroll = function() {
    // Fixed Safari ScrollTop
    const scrollTop = Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop
    )

    // console.log(document.querySelector('.skill').getBoundingClientRect().top)
    // Sticky Nav
    if (parseInt(scrollTop) >= 231) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
    // Skill animation
    if (document.querySelector('.skill').getBoundingClientRect().top <= 569) {
        process.forEach(item => {
            // Get/Set Value for process bar Skill
            processItem.forEach(item => {
                let percentValue = parseInt(item.childNodes[3].innerText.slice(0, -1))
                item.childNodes[5].childNodes[1].style.width = `${percentValue}%`
            })

            item.classList.add('animation-process')
        })
    }
};

// Get/Set Process value for Portfolio
const processList = document.querySelectorAll('.process')
processList.forEach(item => {
    // console.log(item.childNodes[1].getAttribute('data-percent'))
    item.childNodes.forEach(item => {
        if (item.nodeName === 'SPAN') {
            let percent = parseInt(item.getAttribute('data-percent'));
            let color = item.getAttribute('data-color')
            item.style.width = `${percent}%`
            item.style.backgroundColor = color;
        }
    })
})


// Scroll smooth

scrollToElement = (button, id) => {
    button.onclick = () => {
        document.querySelector(`#${id}`).scrollIntoView({ behavior: 'smooth' });
    }
}

const listSoftMenu = document.querySelectorAll('.soft-menu__item')
listSoftMenu.forEach(item => {
    item.childNodes[1].PreventDefault
    item.onclick = () => {
        let dataAddress = item.childNodes[1].getAttribute('data-address')
        if (dataAddress !== '') {
            document.querySelector(`#${dataAddress}`).scrollIntoView({ behavior: 'smooth' });
            closeSoftMenu();
            unClickedNavIcon();
        }
    }
})

//Redirect
btnLogo.onclick = () => {
    window.location.href = './'
}