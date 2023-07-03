const body = document.querySelector(".body");
//Menus
const menuBurger = document.querySelector(".menuBurger");
const menu = document.querySelector(".headerActions");
//Overlays
const loginOverlay = document.querySelector(".loginOverlay");
const signupOverlay = document.querySelector(".signupOverlay");
const menuOverlay = document.querySelector(".menuOverlay")
//Forms
const modalForm = document.querySelector(".modalForm");
const signupForm = document.querySelector(".signupForm");
// Buttons
const modalBtns = document.querySelectorAll(".modalBtn");
const submitBtn = document.querySelector(".submitBtn");
const signupBtn = document.querySelector(".signupBtn");
const loginBtn = document.querySelector(".loginBtn");
const modalCloseBtns = document.querySelectorAll(".modalClose");
// Q & A
const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const menuItems = document.querySelectorAll(".menu__item");


const handleOpenMenu = () => {
    menu.classList.toggle("headerActions-active");
    menuBurger.classList.toggle("menuBurger-active");
    menuOverlay.classList.toggle("menuActive");
    body.classList.toggle("disableScroll");
}

const handleCloseMenu = () => {
    menu.classList.remove("headerActions-active");
    menuBurger.classList.remove("menuBurger-active");
    menuOverlay.classList.remove("menuActive");
    body.classList.remove("disableScroll");
}

const handleOpenLoginModal = () => {
    loginOverlay.classList.toggle("modal-active");
    body.classList.add("disableScroll");
}

const handleOpenSignupModal = () => {
    signupOverlay.classList.toggle("modal-active");
    body.classList.add("disableScroll");
}

const handleCloseModalOnXBtn = () => {
    loginOverlay.classList.remove("modal-active");
    signupOverlay.classList.remove("modal-active");
    body.classList.remove("disableScroll");
}

const handleCloseModalOnClickOutside = (e) => {
    if (e.target === loginOverlay || e.target === signupOverlay) {
        loginOverlay.classList.remove("modal-active");
        signupOverlay.classList.remove("modal-active");
        body.classList.remove("disableScroll");
    }
}

const changeBtnState = () => {
    if ((!!createlogin.value.length && !!createpassword.value.length && !!repeatpassword.value.length && checkbox.checked) || (!!username.value && !!password.value)) {
        for (let el of modalBtns) {
            el.removeAttribute("disabled");
        }
    } else {
        for (let el of modalBtns) {
            el.setAttribute("disabled", "disabled");
        }
    }
}

// menuBurger.onclick = handleMenuBurgerClick;
menuBurger.onclick = handleOpenMenu;
loginBtn.onclick = handleOpenLoginModal;
signupBtn.onclick = handleOpenSignupModal;
window.onclick = handleCloseModalOnClickOutside;
menuOverlay.onclick = handleCloseMenu;

for (let el of modalCloseBtns) {
    el.onclick = handleCloseModalOnXBtn;
}

for (let el of menuItems) {
    el.onclick = handleCloseMenu;
}

modalForm.addEventListener("input", changeBtnState);
signupForm.addEventListener("input", changeBtnState);

// Q & A
function hideQuestion(index) {
    for (let q of questions) {
        q.classList.remove("answer-active");
    }
    questions[index].classList.add("answer-active");

    for (let a of answers) {
        a.classList.remove("answer-active");
    }
    answers[index].classList.add("answer-active");
}

questions.forEach((question, index) => {
    question.onclick = () => {
        hideQuestion(index);
    }
})
