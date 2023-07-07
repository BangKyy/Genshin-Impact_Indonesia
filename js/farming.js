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