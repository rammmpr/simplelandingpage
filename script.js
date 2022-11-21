window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-90px";
    }
}

var swiper = new Swiper(".mySwiper", {
slidesPerView: 3,
spaceBetween: 30,
slidesPerGroup: 3,
loop: true,
loopFillGroupWithBlank: true,
pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
});