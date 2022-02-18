var slideIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener("load", function () {
    showSlides(slideIndex);
    myTimer = setInterval(function () { plusSlides(1) }, 3000);

    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];

    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];

    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n) {
    clearInterval(myTimer);
    if (n < 0) {
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1);
    }

    //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

    if (n === -1) {
        myTimer = setInterval(function () { plusSlides(n + 2) }, 3000);
    } else {
        myTimer = setInterval(function () { plusSlides(n + 1) }, 3000);
    }
}

//Controls the current slide and resets interval if needed
function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function () { plusSlides(n + 1) }, 3000);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

pause = () => {
    clearInterval(myTimer);
}

resume = () => {
    clearInterval(myTimer);
    myTimer = setInterval(function () { plusSlides(slideIndex) }, 3000);
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
