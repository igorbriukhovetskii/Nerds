'use strict';

/*Яндекс карта*/
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.93918106, 30.32160450],
            zoom: 17,
            controls: []
        }, {}),

        myPlacemark = new ymaps.Placemark([59.938801, 30.323195], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map/map-marker.png',
            iconImageSize: [231, 190],
            iconImageOffset: [-48, -190]
        });

    myMap.geoObjects.add(myPlacemark);
});

// Скрипт модального окна
window.modal = (function () {
    // Модальное окно
    var modalWindow = document.querySelector('.modal');
    // Контент модального окна
    var modalWindowContent = document.querySelector('.modal__inner');
    // Кнопка открытия окна формы обратной связи
    var writeUsOpenBtn = document.querySelector('.contacts__btn');
    // Кнопка закрытия окна формы обратной связи
    var writeUsCloseBtn = modalWindow.querySelector('.write-us__closing-btn');
    // Форма внутри модального окна
    var writeUsForm = modalWindowContent.querySelector('.write-us__form');
    // Поле ввода имени пользователя
    var userNameInput = writeUsForm.querySelector('#user-name');
    // Подпись поля ввода имени пользователя
    var userNameInputLabel = writeUsForm.querySelector('label[for="user-name"]');
    // Поле ввода адреса электронной почты пользователя
    var userEmailInput = writeUsForm.querySelector('#user-email');
    // Подпись поля ввода адреса электронной почты пользователя
    var userEmailInputLabel = writeUsForm.querySelector('label[for="user-email"]');
    // Поле ввода сообщения пользователя
    var userTextInput = writeUsForm.querySelector('#user-message');
    // Подпись поля ввода сообщения пользователя
    var userTextInputLabel = writeUsForm.querySelector('label[for="user-message"]');
    // Состояние валидности формы
    var numberOfFilledFields;

    /**
     * Обработчик клика на кнопке открытия формы обратной связи.
     * Делает видимым модальное окно.
     * @param {Object} event
     */
    var onWriteUsButtonClick = function (event) {
        event.preventDefault();
        modalWindow.style.display = 'block';
        modalWindowContent.style.animation = 'grow 0.4s';
        modalWindowContent.style.display = 'block';
        writeUsCloseBtn.addEventListener('click', onWriteUsCloseBtnClick);
        writeUsForm.addEventListener('submit', onWriteUsSubmit);
    };

    /**
     * Обработчик клика на кнопке закрытия формы обратной связи.
     * Скрывает модальное окно.
     * @param {Object} event
     */
    var onWriteUsCloseBtnClick = function (event) {
        event.preventDefault();
        modalWindow.style.display = 'none';
        writeUsCloseBtn.removeEventListener('click', onWriteUsCloseBtnClick);
        writeUsForm.removeEventListener('submit', onWriteUsSubmit);
    };

    /**
     * Функция проверяет заполнение полей формы.
     * Не заполненные поля и подписи к ним меняют цвет.
     * @param {Object} event
     * @param {Element} inputField
     * @param {Element} inputFieldLabel
     */
    var testFieldNotEmpty = function (event, inputField, inputFieldLabel) {
        if (inputField.value === '') {
            inputField.style.borderColor = '#f00';
            inputFieldLabel.style.color = '#f00';
        } else {
            numberOfFilledFields++;
        }
    };

    /**
     * Функция проверяет заполнение полей формы при её отправке.
     * Если есть пустые поля, форма не отправляется и проигрывается анимация.
     * @param {Object} event
     */
    var onWriteUsSubmit = function (event) {
        numberOfFilledFields = 0;
        event.preventDefault();
        testFieldNotEmpty(event, userNameInput, userNameInputLabel);
        testFieldNotEmpty(event, userEmailInput, userEmailInputLabel);
        testFieldNotEmpty(event, userTextInput, userTextInputLabel);
        if (numberOfFilledFields === 3) {
            writeUsForm.submit();
        } else {
            modalWindowContent.style.animation = 'shaking 0.5s';
        }
    };

    return {
        initialize: function () {
            writeUsOpenBtn.addEventListener('click', onWriteUsButtonClick);
        }
    }

})();

window.modal.initialize();