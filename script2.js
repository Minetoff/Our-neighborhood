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

    var Line1 = new ymaps.AnimatedLine([
        [56.801452, 60.578988],
        [56.801573, 60.578664],
        [56.802052, 60.579324],
        [56.801665, 60.580554],
        [56.802043, 60.581021],
        [56.802121, 60.581432],
    ], {}, {
        // Задаем цвет.
        strokeColor: "#1E98FF",
        // Задаем ширину линии.
        strokeWidth: 5,
        // Задаем длительность анимации.
        animationTime: 2000
    });
    var Line2 = new ymaps.AnimatedLine([
        [56.802121, 60.581432],
        [56.802684, 60.581882],
        [56.804390, 60.577077],
        [56.804031, 60.576640],
        [56.803995, 60.576332], 
    ], {}, {
        strokeColor: "#1E98FF",
        strokeWidth: 5,
        animationTime: 2000
    });

    // Добавляем линии на карту.
    myMap.geoObjects.add(Line1);
    myMap.geoObjects.add(Line2);

    // Создаем метки.
    var Point1 = new ymaps.Placemark([56.801452, 60.578980], {
        balloonContent: '<h2>Лицей №109</h2>' +
        '<p><img style="width: 300px;" src="img/licey109.png"></p>'+
        '<p>Был основан в 1974 году</p>',
    }, {
        preset: 'islands#redIcon',
    });

    var Point2 = new ymaps.Placemark([56.802121, 60.581432], {
        balloonContent: '<h2>Мельникова Валентина Никитична</h2>' +
        '<h3>Волгоградская 37</h3>' +
        '<h3>Ветеран</h3>' +
        '<p><img style="width: 200px;" src="img/vet1.jpg"></p>' +
        '<h3>Дом Ветерана</h3>' +
        '<p><img style="width: 200px;" src="img/vetdom1.jpg"></p>',
    }, {
        preset: 'islands#redIcon'
    });
    var Point3 = new ymaps.Placemark([56.803995, 60.576332], {
        balloonContent: '<h2>Радостев Иван Петрович</h2>' +
        '<h3>Волгоградская 45</h3>' +
        '<h3>Ветеран</h3>' +
        '<p><img style="width: 200px;" src="img/vet2.jpg"></p>' +
        '<h3>Дом Ветерана</h3>' +
        '<p><img style="width: 200px;" src="img/vetdom2.jpg"></p>',
    }, {
        preset: 'islands#redIcon'
    });

    // Функция анимации пути.
    function playAnimation() {
        // Убираем последнюю линию.
        Line2.reset();
        // Добавляем первую метку на карту.
        myMap.geoObjects.add(Point1);
        // Анимируем первую линию.
        Line1.animate()
            // После окончания анимации первой линии добавляем вторую метку на карту и анимируем вторую линию.
            .then(function() {
                myMap.geoObjects.add(Point2);
                return Line2.animate();
            })
            // После окончания анимации второй линии добавляем третью метку на карту.
            .then(function() {
                myMap.geoObjects.add(Point3);
                // Добавляем паузу после анимации.
                return ymaps.vow.delay(null, 5000);
            })

    }
    // Запускаем анимацию пути.
    playAnimation();

}