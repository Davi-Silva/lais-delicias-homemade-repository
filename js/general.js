function onScrollTopDisplayNone() {
    var y = window.pageYOffset;
    var cart = document.querySelector(".cart");
    var ulMenuLeft = document.querySelector(".title-menu-left");
    var ulMenuRight = document.querySelector(".title-menu-right");
    console.log("y = " + y);
    if (y > 800) {
        cart.style.display = "none";
        ulMenuLeft.style.display = "none";
        ulMenuRight.style.display = "none";
    } else {
        cart.style.display = "block";
        ulMenuLeft.style.display = "block";
        ulMenuRight.style.display = "block";
    }
}

$('.nav').localScroll();
