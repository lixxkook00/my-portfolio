const portfolios = [
    {
        name: "Fresh Mart",
        img: "./app/img/fresh-mart.png",
        linkViewPage: "https://lixxkook00.github.io/fresh-mart/",
        linkSourceCode: "https://github.com/lixxkook00/fresh-mart",
        type: "project",
        material: [
            {
                language: "HTML",
                color: "#FD732A",
                percent: "62",
            },
            {
                language: "CSS",
                color: "#F0AA53",
                percent: "22",
            },
            {
                language: "JS",
                color: "#486E34",
                percent: "16",
            },
        ],
    },
    {
        name: "Music Player",
        img: "./app/img/musicplayer.png",
        linkViewPage: "https://lixxkook00.github.io/music-player/",
        linkSourceCode: "https://github.com/lixxkook00/music-player",
        type: "project",
        material: [
            {
                language: "HTML",
                color: "#FD732A",
                percent: "27",
            },
            {
                language: "SCSS",
                color: "#c4568c",
                percent: "36",
            },
            {
                language: "JS",
                color: "#486E34",
                percent: "37",
            },
        ],
    },
    {
        name: "Bounce423",
        img: "./app/img/bounce423.png",
        linkViewPage: "https://simmer.io/@lixxkook/bounce-423-final",
        linkSourceCode: "https://simmer.io/@lixxkook/bounce-423-final",
        type: "cloneui",
        material: [
            {
                language: "c#",
                color: "#621192",
                percent: "100",
            },
        ],
    },
    {
        name: "Shopee",
        img: "./app/img/shopee.png",
        linkViewPage: "https://lixxkook00.github.io/shopee/",
        linkSourceCode: "https://github.com/lixxkook00/shopee",
        type: "cloneui",
        material: [
            {
                language: "HTML",
                color: "#FD732A",
                percent: "69",
            },
            {
                language: "CSS",
                color: "#F0AA53",
                percent: "20",
            },
            {
                language: "JS",
                color: "#486E34",
                percent: "11",
            },
        ],
    },
    {
        name: "Instagram",
        img: "./app/img/instagram.png",
        linkViewPage: "https://lixxkook00.github.io/clone-ui-instagram/",
        linkSourceCode: "https://github.com/lixxkook00/clone-ui-instagram",
        type: "cloneui",
        material: [
            {
                language: "HTML",
                color: "#FD732A",
                percent: "71",
            },
            {
                language: "CSS",
                color: "#F0AA53",
                percent: "29",
            },
            {
                language: "JS",
                color: "#486E34",
                percent: "0",
            },
        ],
    },
    {
        name: "Google Search",
        img: "./app/img/google-search.png",
        linkViewPage: "https://lixxkook00.github.io/clone-ui-google-search/",
        linkSourceCode: "https://github.com/lixxkook00/clone-ui-google-search",
        type: "cloneui",
        material: [
            {
                language: "HTML",
                color: "#FD732A",
                percent: "57",
            },
            {
                language: "CSS",
                color: "#F0AA53",
                percent: "43",
            },
            {
                language: "JS",
                color: "#486E34",
                percent: "0",
            },
        ],
    },
    {
        name: "Kookies Store",
        img: "./app/img/kookies-store.png",
        linkViewPage: "https://lixxkook00.github.io/kookies-store/",
        linkSourceCode: "https://github.com/lixxkook00/kookies-store",
        type: "project",
        material: [
            {
                language: "HTML",
                color: "#FD732A",
                percent: "43",
            },
            {
                language: "CSS",
                color: "#F0AA53",
                percent: "47",
            },
            {
                language: "JS",
                color: "#486E34",
                percent: "10",
            },
        ],
    },
];
const renderPortfolios = (portfolios, element, callback) => {
    const portfolioContent = portfolios
        .map((item) => {
            const processPercent = item.material
                .map((language) => {
                    return `
                    <span data-percent="${language.percent}" 
                          data-color="${language.color}" 
                          class="process__item 
                          process__item--one"
                          >
                           ${language.language}
                    </span>
                `;
                })
                .join("");
            return `
                <div class=" col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div class="portfolio__item">
                        <div class="portfolio__item-name">
                            ${item.name}
                        </div>
                        <div class="portfolio__item-img" onclick="">
                            <img src="${item.img}" alt="">
                            <div class="portfolio__item-popup">
                                <a href="${item.linkViewPage}">
                                    <span><i class="fas fa-eye"></i></span>
                                </a>
                                <a href="${item.linkSourceCode}">
                                    <span><i class="fas fa-code"></i></span>
                                </a>
                            </div>
                        </div>
                        <div class="portfolio__item-language">
                            <span class="process">
                                ${processPercent}
                            </span>
                        </div>
                    </div>
                </div>
            `;
        })
        .join("");

    element.innerHTML = portfolioContent;
};
export default portfolios;
export { renderPortfolios };
