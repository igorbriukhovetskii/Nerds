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