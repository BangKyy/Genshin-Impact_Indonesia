function navbarScroll () {
    const nav = document.querySelector(".navbar");
    const navOption = docoument.querySelector(".option");

    window.addEventListener("scroll", () => {
        window.scrollY > 100 ? nav.classList.add("navbar-active") : nav.classList.remove("navbar-active");
    });

    navOption.addEventListener("mouseover", (e) => {
       e.target.style.color = "#ffe5aa";
       setTimeout(() => {
        e.target.style.color = "#fffdf8";
       }, 500);
    }, false);
}
navbarScroll();

// const changeNavColor = (document, scrollY, scrolls=[], colors=[]) => {
//     const nav = document.querySelector(".navbar");
//     const scrollPositions = scrolls.length ? scrolls : [0, 680, 2200];
//     const bgColors = colors.length ? colors : ["#a4bad6", "#e8eef5", "#dde8f7"];
//     const currentScrollPositions = scrollPositions.filter((position) => position <= scrollY);
//     const bgColorsIndex = currentScrollPositions.length - 1;
//     nav.style.backgroundColor = bgColors[bgColorsIndex];
// };
// changeNavColor();