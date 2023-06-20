"use strict"

/* ---------------------- Smooth scroll ----------------------*/

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.preventDefault();
        const blockID = anchor.getAttribute('href').substring(1);
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})

/*--------------------- Mask Phone--------------------------- */
const selector = document.querySelector("input[type='tel']");
const im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);

/*----------------------Validate -----------------------------*/
new JustValidate('.form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 10
        },
        phone: {
            required: true,
            phone: true
        },
    },
    messages: {
        name: {
            minLength: 'Имя содержит мало символов',
            required: 'Вы не ввели имя',
        },
        phone: {
            required: 'Вы не ввели телефон',
        },
    },
    colorWrong: '#D52B1E',
});
