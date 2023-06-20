"use strict"

/* Mask Phone */
const selector = document.querySelector("input[type='tel']");
const im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);

/* Validate */

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
