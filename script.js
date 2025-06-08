function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open"); /* the toggle also removes
                                            the openclass after 2ndclick*/
    icon.classList.toggle("open");
}