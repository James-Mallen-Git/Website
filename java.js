var content = document.getElementById("content");
var button = document.getElementById('show-more');

button.onclick = function() {
    if (button.innerHTML == "Show less") {

        //shrinkBox
        content.classList.remove("open");
        button.innerHTML = "Extend";
    } else {
        //expandBox
        content.classList.add("open");
        button.innerHTML = "Show less";
    }
};


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbarlinks');
    const navbarlinks = document.querySelectorAll('.navbarlinks li');

    //toggle Nav bar
    burger.addEventListener('click', () => {
        nav.classList.toggle('navactive');

        //animate the links
        navbarlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s';

            }
        });

        //burger animation
        burger.classList.toggle('toggle');

    });


}

navSlide();