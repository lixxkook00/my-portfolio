const navIconMobile = document.querySelector(".nav__icon-soft");
const softMenu = document.querySelector(".soft-menu");
const softMenuList = document.querySelector(".soft-menu__list");
const softMenuItems = document.querySelectorAll(".soft-menu__item");
const btnClosSoftMenu = document.querySelector(
    ".soft-menu__item:first-child i"
);
const btnTheme = document.querySelector(".theme__button");
const listTheme = document.querySelector(".theme");
const themeItems = document.querySelectorAll(".theme__icon");
const root = document.documentElement;
const process = document.querySelectorAll(".skill__item-process span");
const processItem = document.querySelectorAll(".skill__item");
const btnLogo = document.querySelector("#navLogo");
const listSoftMenu = document.querySelectorAll(".soft-menu__item");
const navItem = document.querySelectorAll(".nav__item");
const btnDarkMode = document.querySelector(".dark-mode__btn");
const btnDarkModeOpen = document.querySelector(".dark-mode__open");
const btnDarkModeClose = document.querySelector(".dark-mode__close");
const portfolioList = document.querySelector(".portfolio .container .row");
const skillList = document.querySelectorAll(".skill-list")

// Theme from localstorage
const currentTheme = window.localStorage.getItem("themeColor");
const currentDarkMode = window.localStorage.getItem("darkMode");
// Sticky
const navbar = document.querySelector(".nav");

// Portfolio Control
const btnPortfolioControls = document.querySelectorAll(
    ".portfolio__filter-item"
);

import portfolios, { renderPortfolios,renderSkill } from "./data.js";
// Get/Set Process value for Portfolio
const renderProcess = () => {
    const processList = document.querySelectorAll(".process");

    processList.forEach((item) => {
        // console.log(item.childNodes[1].getAttribute('data-percent'))
        item.childNodes.forEach((item) => {
            if (item.nodeName === "SPAN") {
                let percent = parseInt(item.getAttribute("data-percent"));
                let color = item.getAttribute("data-color");
                item.style.width = `${percent}%`;
                item.style.backgroundColor = color;
            }
        });
    });
};

const renderP = (object) => {
    // Animation before loading
    portfolioList.innerHTML = `
            <div class="loading col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div class="loading-img">
                    <img src="./app/img/loading.gif" alt="">
                </div>
            </div>
        `;
    setTimeout(() => {
        renderPortfolios(object, portfolioList);
        renderSkill(skillList)
        renderProcess();
    }, 800);
};

// Render Portfolio first time
renderP(portfolios);

// Render Portfolio controls
btnPortfolioControls.forEach((item) => {
    item.onclick = () => {
        // Active UI
        btnPortfolioControls.forEach((item) => {
            item.classList.remove("portfolio__filter-item--active");
        });
        item.classList.add("portfolio__filter-item--active");

        // Rerender
        if (item.dataset.filter == "all") {
            renderP(portfolios);
        } else {
            const newObject = portfolios.filter(
                (project) => project.type == item.dataset.filter
            );
            console.log(newObject);
            renderP(newObject);
        }
    };
});

// Utils
const openSoftMenu = () => {
    softMenu.classList.add("open");
    setTimeout(function () {
        softMenuList.classList.add("open");
    }, 2);
};
const closeSoftMenu = () => {
    softMenu.classList.remove("open");
    setTimeout(function () {
        softMenuList.classList.remove("open");
    }, 2);
};
const clickedNavIcon = () => {
    navIconMobile.classList.add("icon-translate");
    stateNavIcon = true;
    openSoftMenu();
};
const unClickedNavIcon = () => {
    navIconMobile.classList.remove("icon-translate");
    stateNavIcon = false;
};
const openElements = (element) => {
    element.classList.add("open");
};
const closeElements = (element) => {
    element.classList.remove("open");
};

// Nav on Mobile
let stateNavIcon = false;
navIconMobile.onclick = function () {
    if (!stateNavIcon) {
        clickedNavIcon();
    } else {
        unClickedNavIcon();
    }
};

softMenu.onclick = () => {
    closeSoftMenu();
    unClickedNavIcon();
};
softMenuList.onclick = (event) => {
    event.stopPropagation();
};

let stateTheme = false;
btnTheme.onclick = () => {
    if (!stateTheme) {
        openElements(listTheme);
        stateTheme = true;
    } else {
        closeElements(listTheme);
        stateTheme = false;
    }
};

// Change Theme
const setTheme = (color) => {
    let colorTheme;
    if (color == "green") {
        colorTheme = "#7CD52D";
    } else if (color == "blue") {
        colorTheme = "#47BAD4";
    } else if (color == "red") {
        colorTheme = "#FC255A";
    } else if (color == "orange") {
        colorTheme = "#FD732A";
    } else if (color == "purple") {
        colorTheme = "#9729D3";
    } else if (color == "yellow") {
        colorTheme = "#FED239";
    } else if (color == "pink") {
        colorTheme = "#FD28FC";
    } else if (color == "magenta") {
        colorTheme = "#EA030A";
    }
    root.style.setProperty("--primaryColor", colorTheme);
};
const checkTheme = (item, list) => {
    // clear icon checked
    for (let items of list) {
        items.classList.remove("theme__icon--active");
    }
    item.classList.add("theme__icon--active");
};

// When Select form Theme color list
for (let item of themeItems) {
    item.onclick = () => {
        setTheme(item.getAttribute("data-color"));
        window.localStorage.setItem(
            "themeColor",
            item.getAttribute("data-color")
        );
        checkTheme(item, themeItems);
    };
}

// soft menu click
softMenuItems.forEach((item) => {
    item.onclick = () => {
        softMenuItems.forEach((items) => {
            items.classList.remove("soft-menu__item--active");
        });
        item.classList.add("soft-menu__item--active");
    };
});

// Get current theme color from localStorage
if (currentTheme != null) {
    setTheme(currentTheme);
    for (let item of themeItems) {
        if (item.getAttribute("data-color") == currentTheme) {
            checkTheme(item, themeItems);
        }
    }
}
const changeNavActive = (index) => {
    // nav
    navItem.forEach((item) => {
        item.classList.remove("nav__item--active");
    });
    navItem[index].classList.add("nav__item--active");

    // soft menu
    softMenuItems.forEach((item) => {
        item.classList.remove("soft-menu__item--active");
    });
    softMenuItems[index + 1].classList.add("soft-menu__item--active");
};

const navItemActiveOnScroll = (elementToScroll, index) => {
    if (
        elementToScroll.getBoundingClientRect().top <= 60 &&
        elementToScroll.getBoundingClientRect().top > 0
    ) {
        changeNavActive(index);
    }
};

// Catch event when window onscroll
window.onscroll = function () {
    // Fixed Safari ScrollTop
    const scrollTop = Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop
    );

    // Nav item active when scroll
    if (
        document.querySelector("#home").getBoundingClientRect().top < 0 &&
        document.querySelector("#home").getBoundingClientRect().top > -500
    ) {
        changeNavActive(0);
    }

    navItemActiveOnScroll(document.querySelector("#about"), 1);
    navItemActiveOnScroll(document.querySelector("#portfolio"), 2);

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        changeNavActive(3);
    }

    // console.log(document.querySelector('#home').getBoundingClientRect().top)
    // Sticky Nav
    if (parseInt(scrollTop) >= 231) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
    // Skill animation
    // if (document.querySelector(".skill").getBoundingClientRect().top <= 569) {
    //     process.forEach((item) => {
    //         // Get/Set Value for process bar Skill
    //         processItem.forEach((item) => {
    //             let percentValue = parseInt(
    //                 item.childNodes[3].innerText.slice(0, -1)
    //             );
    //             item.childNodes[5].childNodes[1].style.width = `${percentValue}%`;
    //         });

    //         item.classList.add("animation-process");
    //     });
    // }
};

// Scroll smooth
const scrollToElement = (button, id) => {
    button.onclick = () => {
        document.querySelector(`#${id}`).scrollIntoView({ behavior: "smooth" });
    };
};

listSoftMenu.forEach((item) => {
    item.childNodes[1].PreventDefault;
    item.onclick = () => {
        let dataAddress = item.childNodes[1].getAttribute("data-address");
        if (dataAddress !== "") {
            document
                .querySelector(`#${dataAddress}`)
                .scrollIntoView({ behavior: "smooth" });
            closeSoftMenu();
            unClickedNavIcon();
        }
    };
});

//Redirect
btnLogo.onclick = () => {
    window.location.href = "./";
};

// Dark Mode
let stateDarkMode = true;
const openDarkMode = () => {
    btnDarkMode.classList.remove("down");
    btnDarkMode.classList.add("up");
    stateDarkMode = true;
    root.style.setProperty("--darkModeBackground", "#000");
    root.style.setProperty("--darkModeColor", "#fff");
};
const closeDarkMode = () => {
    btnDarkMode.classList.remove("up");
    btnDarkMode.classList.add("down");
    stateDarkMode = false;
    root.style.setProperty("--darkModeBackground", "#fff");
    root.style.setProperty("--darkModeColor", "#000");
};

btnDarkModeOpen.onclick = () => {
    openDarkMode();
    window.localStorage.setItem("darkMode", true);
    console.log(currentDarkMode);
};
btnDarkModeClose.onclick = () => {
    closeDarkMode();
    window.localStorage.setItem("darkMode", false);
    console.log(currentDarkMode);
};
if (currentDarkMode === "true") {
    openDarkMode();
}


// LOADING ANIMATION
window.addEventListener('load', (event) => {
    setTimeout(() => {
        document.querySelector('#loading').style.display = "none";
        if(!window.localStorage.getItem("darkMode")){
            openDarkMode();
            window.localStorage.setItem("darkMode", true);
        }
    },2000)
})