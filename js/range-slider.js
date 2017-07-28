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

    /**
     * Функция задаёт начальные координаты левого контрола слайдера при клике на него
     * @param {Object} event
     */
    var onSliderMinHandleMouseDown = function (event) {
        event.preventDefault();
        minStartPoint = {
            x: event.clientX
        };

        slider.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    var onMouseMove = function (event) {
        event.preventDefault();
        var shift = {
            x: minStartPoint.x - event.clientX
        };
        var currentCoordinates = sliderMinHandle.offsetLeft - shift.x;
    };
});