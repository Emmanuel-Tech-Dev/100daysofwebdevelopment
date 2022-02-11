const smallImage = document.querySelector(".img-subs").querySelectorAll("img");
const bigImage = document.getElementById("img");

function openImage() {
    bigImage.src = img.src;
}


const image = document.getElementsByClassName("sub-img")
const imgSub = document.getElementsByClassName("sub");

for (i = 0; i < imgSub.length; i++){
    imgSub[i].addEventListener("click", () => {
        for (i = 0; i < image.length; i++){
            image[i].classList.remove("active");
        }
        this.parentElement.classList.toggle("active");
    })
}

const navslide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navlinks");
    const navlinks = document.querySelectorAll(".navlinks li")

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        navlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navfade 0.5s ease forwards ${index / 7 + .5}s`;
            }
        })

        burger.classList.toggle("toggle")
    })

    Array.from(navlinks).forEach(element => {
        element.addEventListener("click", () => {
            burger.click()
        });
    });

}
navslide();

const slider = document.querySelector('.media-scroller');
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function (e) {
    mouseDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
};
let stopDragging = function (event) {
    mouseDown = false;
};

slider.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if (!mouseDown) { return; }
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);