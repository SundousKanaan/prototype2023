// import { fetchData } from './modules/fetch.js';

const navButton = document.querySelector("body > button")
const header = document.querySelector("header")

navButton.addEventListener('click', () => {
    if (header.classList.contains("openNav")) {
        header.classList.remove('openNav');
        header.classList.add('closeNav');
        navButton.classList.remove('openNav');
    } else {
        header.classList.add('openNav');
        header.classList.remove('closeNav');
        navButton.classList.add('openNav');
    }
})


// define the function that runs the countdown
const runCountdown = () => {
    let circles = document.querySelectorAll(".clock svg circle:nth-of-type(2)");
    let clockCounter = 0;
    let countDownInt;

    const countDown = () => {
        for (let i = 0; i < circles.length; i++) {
            if (circles[i] === circles[0]) {
                if (clockCounter <= 40) {
                    circles[i].style.cssText = `stroke-dashoffset: calc(817 - (817 * ${clockCounter}) / 100);`;
                }
                clockCounter++;
            } else if (circles[i] === circles[1]) {
                if (clockCounter <= 15) {
                    circles[i].style.cssText = `stroke-dashoffset: calc(817 - (817 * ${clockCounter}) / 100);`;
                }
                clockCounter++;
            } else if (circles[i] === circles[2]) {
                if (clockCounter <= 20) {
                    circles[i].style.cssText = `stroke-dashoffset: calc(817 - (817 * ${clockCounter}) / 100);`;
                }
                clockCounter++;
            } else if (circles[i] === circles[3]) {
                if (clockCounter <= 45) {
                    circles[i].style.cssText = `stroke-dashoffset: calc(817 - (817 * ${clockCounter}) / 100);`;
                }
                clockCounter++;
            } else if (clockCounter <= 25) {
                circles[i].style.cssText = `stroke-dashoffset: calc(817 - (817 * ${clockCounter}) / 100);`;
                clockCounter++;
            }
            if (clockCounter === 100) {
                clearInterval(countDownInt);
            }
        }
    };
    // handle clicking on the clock
    countDownInt = setInterval(countDown, 60);
};

// call the function when the page is loaded
window.addEventListener("load", runCountdown);


const API_URL = "https://api.github.com/users/SundousKanaan";
const reposAPI_URL = "https://api.github.com/users/SundousKanaan/repos";
// const titelsAPI_URL = `https://api.github.com/repos/SundousKanaan/${repoTitel}`;

async function fetchData() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const avatarImg = document.querySelector("main > div > article:first-of-type > section:first-of-type img");
const h1Element = document.querySelector("main > div > article:first-of-type > section:first-of-type div h1");
const company = document.querySelector("main > div > article:first-of-type > section:first-of-type div p:first-of-type");
const location = document.querySelector("main > div > article:first-of-type > section:first-of-type div p:nth-of-type(2)");
const bio = document.querySelector("main > div > article:first-of-type > section:first-of-type div p:nth-of-type(3)");
const email = document.querySelector("main > div > article:first-of-type > section:first-of-type div a");

async function fetchFunction() {
    const allData = await fetchData(API_URL);
    // console.log("allData", allData);

    h1Element.textContent = allData.name;
    location.textContent = allData.location;
    email.href = `mailto: ${allData.email}`;
    email.textContent = allData.email;
    company.textContent = allData.company;

    bio.textContent = allData.bio;
    avatarImg.src = allData.avatar_url;
    avatarImg.alt = allData.name + " avatar foto";

}

fetchFunction();