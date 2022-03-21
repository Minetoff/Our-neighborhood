ymaps.ready(['AnimatedLine']).then(init);

function init(ymaps) {
    // Создаем карту.
    var myMap = new ymaps.Map("map", {
        center: [56.801421, 60.578928],
        zoom: 16,
        controls: []
    }, {
        searchControlProvider: 'yandex#search'
    });

    var firstAnimatedLine = new ymaps.AnimatedLine([
        [56.801452, 60.578988],
        [56.801509, 60.578645],
        [56.799355, 60.575898],
        [56.799489, 60.575405],
    ], {}, {
        // Задаем цвет.
        strokeColor: "#ED4543",
        // Задаем ширину линии.
        strokeWidth: 5,
        // Задаем длительность анимации.
        animationTime: 3000
    });
    var secondAnimatedLine = new ymaps.AnimatedLine([
        [56.799489, 60.575405],
        [56.799350, 60.575295],
        [56.800792, 60.571347],
        [56.800996, 60.571320],
    ], {}, {
        strokeColor: "#1E98FF",
        strokeWidth: 5,
        animationTime: 3000
    });
    var thirdAnimatedLine = new ymaps.AnimatedLine([
        [56.800996, 60.571320],
        [56.801014, 60.570923],
        [56.802935, 60.565873],
        [56.803903, 60.565923],
    ], {}, {
        strokeColor: "#1E98FF",
        strokeWidth: 5,
        animationTime: 3000
    });
    var fourthAnimatedLine = new ymaps.AnimatedLine([
        [56.803903, 60.565923],
        [56.803750, 60.565272],
        [56.803688, 60.564226],
        [56.803402, 60.563862],
        [56.802787, 60.565471],
        [56.801310, 60.563701],
        [56.801038, 60.563588],
    ], {}, {
        strokeColor: "#1E98FF",
        strokeWidth: 5,
        animationTime: 3000
    });
    var fifthAnimatedLine = new ymaps.AnimatedLine([
        [56.801038, 60.563588],
        [56.800818, 60.563304],
        [56.800712, 60.562987],
        [56.800224, 60.562233],
    ], {}, {
        strokeColor: "#1E98FF",
        strokeWidth: 5,
        animationTime: 3000
    });
    var sixthAnimatedLine = new ymaps.AnimatedLine([
        [56.800224, 60.562233],
        [56.799532, 60.564098],
        [56.801710, 60.566898],
        [56.799391, 60.573064],
        [56.799275, 60.573005],
    ], {}, {
        strokeColor: "#1E98FF",
        strokeWidth: 5,
        animationTime: 3000
    });
    var seventhAnimatedLine = new ymaps.AnimatedLine([
        [56.799275, 60.573005],
        [56.799621, 60.573649],
    ], {}, {
        strokeColor: "#1E98FF",
        strokeWidth: 5,
        animationTime: 3000
    });
    // Добавляем линии на карту.
    myMap.geoObjects.add(firstAnimatedLine);
    myMap.geoObjects.add(secondAnimatedLine);
    myMap.geoObjects.add(thirdAnimatedLine);
    myMap.geoObjects.add(fourthAnimatedLine);
    myMap.geoObjects.add(fifthAnimatedLine);
    myMap.geoObjects.add(sixthAnimatedLine);
    myMap.geoObjects.add(seventhAnimatedLine);
    // Создаем метки.
    var firstPoint = new ymaps.Placemark([56.801452, 60.578980], {
        balloonContent: '<a href="https://yandex.ru/company/contacts/moscow/">Главный офис Яндекса</a>' +
        '<p><img style="width: 190px;" src="img/licey109.png"></p>' +
        '<p>В офисе на улице Льва Толстого находится штаб-квартира Яндекса, он самый большой и по размерам, ' +
        'и по численности сотрудников. Сейчас он занимает почти целый квартал между улицами Льва Толстого ' +
        'и Тимура Фрунзе. Общая площадь всех зданий — более 50 тысяч квадратных метров.</p>',
    }, {
        preset: 'islands#redIcon',
    });

    var secondPoint = new ymaps.Placemark([56.799489, 60.575405], {}, {
        preset: 'islands#redIcon'
    });
    var thirdPoint = new ymaps.Placemark([56.800969, 60.571354], {}, {
        preset: 'islands#redIcon'
    });
    var fourthPoint = new ymaps.Placemark([56.803903, 60.565923], {}, {
        preset: 'islands#redIcon'
    });
    var fifthPoint = new ymaps.Placemark([56.801038, 60.563588], {}, {
        preset: 'islands#redIcon'
    });
    var sixthPoint = new ymaps.Placemark([56.800224, 60.562233], {}, {
        preset: 'islands#redIcon'
    });
    var seventhPoint = new ymaps.Placemark([56.799275, 60.573005], {}, {
        preset: 'islands#redIcon'
    });
    var eighthPoint = new ymaps.Placemark([56.799621, 60.573649], {}, {
        preset: 'islands#redIcon'
    });
    // Функция анимации пути.
    function playAnimation() {
        // Убираем последнюю линию.
        secondAnimatedLine.reset();
        thirdAnimatedLine.reset();
        fourthAnimatedLine.reset();
        fifthAnimatedLine.reset();
        sixthAnimatedLine.reset();
        seventhAnimatedLine.reset();
        // Добавляем первую метку на карту.
        myMap.geoObjects.add(firstPoint);
        // Анимируем первую линию.
        firstAnimatedLine.animate()
            // После окончания анимации первой линии добавляем вторую метку на карту и анимируем вторую линию.
            .then(function() {
                myMap.geoObjects.add(secondPoint);
                return secondAnimatedLine.animate();
            })
            .then(function() {
                myMap.geoObjects.add(thirdPoint);
                return thirdAnimatedLine.animate();
            })
            .then(function() {
                myMap.geoObjects.add(fourthPoint);
                return fourthAnimatedLine.animate();
            })
            .then(function() {
                myMap.geoObjects.add(fifthPoint);
                return fifthAnimatedLine.animate();
            })
            .then(function() {
                myMap.geoObjects.add(sixthPoint);
                return sixthAnimatedLine.animate();
            })
            .then(function() {
                myMap.geoObjects.add(seventhPoint);
                return seventhAnimatedLine.animate();
            })
            // После окончания анимации второй линии добавляем третью метку на карту.
            .then(function() {
                myMap.geoObjects.add(eighthPoint);
                // Добавляем паузу после анимации.
                return ymaps.vow.delay(null, 5000);
            })

    }
    // Запускаем анимацию пути.
    playAnimation();

}