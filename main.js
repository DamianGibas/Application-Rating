
const colors = ["#ffffff", "#ec5146", "#f6963c", "#ffd447", "#b0c954", "#61bd61"];
const ratingText = ["Bad", "Decent", "Average", "Good", "Excellent"];

const starsEl = document.querySelectorAll('.star');
const rootEl = document.querySelector(':root');
const ratingTextEl = document.querySelector('#rating-text');
const ratingStarsEl = document.querySelector('#rating-stars');

starsEl.forEach((star, index) => {
    star.addEventListener('click', () => highlightStar(index));
});

function highlightStar(index) {

    starsEl.forEach((star, idx) => {

        if (idx <= index) {
            star.classList.add('is-selected');

        } else {
            star.classList.remove('is-selected');
        }
    });
    
    const selectedStars = document.querySelectorAll('.is-selected');
    const color = colors[selectedStars.length]; 

    selectedStars.forEach((star, idx) => {
        rootEl.style.setProperty(`--star${idx+1}`, color);
    });

    ratingTextEl.innerText = `${ratingText[selectedStars.length - 1]}`;

    if (selectedStars.length === 1) {
        ratingStarsEl.innerText = `${selectedStars.length} star`;
    } else {
        ratingStarsEl.innerText = `${selectedStars.length} stars`;
    }

};