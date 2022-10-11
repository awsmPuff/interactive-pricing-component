const slider = document.querySelector(".slider-bar");
const switchBtn = document.querySelector(".switch");
const toggle = document.querySelector(".toggle");
const price = document.querySelector(".price");
const views = document.querySelector(".views");
const pageViews = ["10K", "50K", "100K", "500k", "1M"];
const perMonth = [8, 12, 16, 24, 36];

var isYearly = false;

price.innerHTML = perMonth[slider.value];
views.innerHTML = pageViews[slider.value];
slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${(slider.value - slider.min)/(slider.max - slider.min)*100}%, hsl(224, 65%, 95%) ${(slider.value - slider.min)/(slider.max - slider.min)*100}%, hsl(224, 65%, 95%) 100%)`;

function updatePrice() {
    if(isYearly) {
        price.innerHTML = perMonth[slider.value] * 0.75;
    } else {
        price.innerHTML = perMonth[slider.value];
    }
}

toggle.addEventListener("change", () => {
    if(isYearly === false) {
        isYearly = true;
        switchBtn.style.backgroundColor = "#7be9de";
    } else {
        isYearly = false;
        switchBtn.style.backgroundColor = "hsl(223, 50%, 87%)";
    }
    updatePrice();
});

slider.addEventListener("input", () => {
    // Set process color before and after slider
    slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${(slider.value - slider.min)/(slider.max - slider.min)*100}%, hsl(224, 65%, 95%) ${(slider.value - slider.min)/(slider.max - slider.min)*100}%, hsl(224, 65%, 95%) 100%)`;
    views.innerHTML = pageViews[slider.value];
    updatePrice();
});

const mediaQuery = window.matchMedia('(min-width: 768px)');
if(mediaQuery.matches) {
    document.querySelector(".discount").innerHTML = "25% discount";
}

