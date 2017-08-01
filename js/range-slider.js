'use strict';

window.slider = (function () {
    // Слайдер
    var slider = document.querySelector('#price-slider');
    // Дорожка слайдера
    var sliderTrack = document.querySelector('#slider-track');
    // Левый контрол слайдера
    var sliderMinHandle = document.querySelector('#min-handle');
    // Начальная точка движения левого контрола слайдера
    var minStartPoint;
    // Текущая позиция слайдера
    var currentValue;

    /**
     * Функция задаёт начальные координаты левого контрола слайдера при клике на него
     * @param {Object} event
     */
    var onSliderMinHandleMouseDown = function (event) {
        event.preventDefault();
        minStartPoint = {
            x: event.clientX
        };

        console.log("minHandleMouseDown");

        slider.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    var onMouseUp = function (event) {
        event.preventDefault();

        slider.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };

    /**
     * Функция перемещает левый контрол слайдера при движении курсора мыши
     * @param {Object} event
     */
    var onMouseMove = function (event) {
        event.preventDefault();
        var shift = {
            x: minStartPoint.x - event.clientX
        };
        var currentCoordinates = sliderMinHandle.offsetLeft - shift.x;
        sliderMinHandle.style.left = sliderMinHandle.offsetLeft - shift.x + 'px';
    };

    return {
        initialize: function () {
            sliderMinHandle.addEventListener('mousedown', onSliderMinHandleMouseDown);
        }
    };
})();