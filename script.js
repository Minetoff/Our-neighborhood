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
        animationTime: 2000
    });
    var secondAnimatedLine = new ymaps.AnimatedLine([
        [56.799489, 60.575405],
        [56.799350, 60.575295],
        [56.800792, 60.571347],
        [56.800996, 60.571320],
    ], {}, {
        strokeColor: "#1E98FF",
        strokeWidth: 5,
        animationTime: 2000
    });
    var thirdAnimatedLine = new ymaps.AnimatedLine([
        [56.800996, 60.571320],
        [56.801014, 60.570923],
        [56.802935, 60.565873],
        [56.803903, 60.565923],
    ], {}, {
        strokeColor: "#1E98FF",
        strokeWidth: 5,
        animationTime: 2000
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
        animationTime: 2000
    });
    var fifthAnimatedLine = new ymaps.AnimatedLine([
        [56.801038, 60.563588],
        [56.800818, 60.563304],
        [56.800712, 60.562987],
        [56.800224, 60.562233],
    ], {}, {
        strokeColor: "#1E98FF",
        strokeWidth: 5,
        animationTime: 2000
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
        animationTime: 2000
    });
    var seventhAnimatedLine = new ymaps.AnimatedLine([
        [56.799275, 60.573005],
        [56.799621, 60.573649],
    ], {}, {
        strokeColor: "#1E98FF",
        strokeWidth: 5,
        animationTime: 2000
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
        balloonContent: '<h1><a href="https://лицей109.екатеринбург.рф/">Лицей №109</a></h1>' +
        '<p><img style="width: 300px;" src="img/licey109.png"></p>'+
        '<p>Был основан в 1974 году</p>',
    }, {
        preset: 'islands#redIcon',
    });

    var secondPoint = new ymaps.Placemark([56.799489, 60.575405], {
        balloonContent: '<h1>СЕЙЧАС</h1>' +
        '<h2>Кировский</h2>' +
        '<p><img style="width: 200px;" src="img/кировский.png"></p>' +
        '<p>Сейчас здесь стоит один из магазинов сети "Кировский".</p>' +
        'Группа компаний "Кировский" успешно работает более 33 лет. ' + 
        'С 1987 года, со дня основания первого универсама "Кировский". ' +
        'Во главе компании - Игорь Иванович Ковпак ' +
        '<h1>БЫЛО</h1>' +
        '<h2>Ресторан Рига</h2>' +
        '<p><img style="width: 300px;" src="img/рига.jpg"></p>' +
        '<p>Но раньше на этом месте стоял <b>Ресторан "Рига"</b></p>',
    }, {
        preset: 'islands#redIcon'
    });
    var thirdPoint = new ymaps.Placemark([56.800969, 60.571354], {
        balloonContent: '<h1>СЕЙЧАС</h1>' +
        '<h2>Магнит</h2>' +
        '<p><img style="width: 300px;" src="img/магнит.png"></p>' +
        '<p>Магазин сети "Магнит" был открыт на этом месте в 2021 году.</p>' +
        '<h1>БЫЛО</h1>' +
        '<h2>Аптека</h2>' +
        '<p><img style="width: 300px;" src="img/аптека.jpg"></p>' +
        '<p>Но раньше здесь находилась большая аптека.</p>',
    }, {
        preset: 'islands#redIcon'
    });
    var fourthPoint = new ymaps.Placemark([56.803903, 60.565923], {
        balloonContent: '<h1>Дом науки и техники</h1>' +
        '<p><img style="width: 300px;" src="img/дом_науки_и_техники.jpg"></p>' +
        '<p>Сегодня малопримечательное, увешанное рекламой здание в сквере напротив парка Чкалова </p>' +
        'больше известно, как кинотеатр "Премьер-зал на Юго-Западе".' +
        'Мало кто знает, что здесь до сих пор функционирует Дом науки и техники' +
        '<p>Он был основан еще в 1935 году и должен был служить популяризации научно-технического прогресса. </p>' +
        'За свою долгую историю Дом науки и техники сменил множество помещений: ' +
        '<ul><li>Центральный корпус УПИ</li><li>дом Промышленности</li><li>дом Крестьянина</li></ul>' +
        'К 250-летию города было решено построить для него собственное здание. ' +
        'Открывал новое здание техники секретарь обкома КПСС Б.Н Ельцин.',
    }, {
        preset: 'islands#redIcon'
    });
    var fifthPoint = new ymaps.Placemark([56.801038, 60.563588], {
        balloonContent: '<h1>Истребитель МиГ-21</h1>' +
        '<p><img style="width: 300px;" src="img/самолет_старый.jpg"></p>' +
        '<p>Раньше в парке Чкалова на этом месте стоял экспонат: </p>' +
        'самолет <b>МИГ-21</b>, советский многоцелевой истребитель, разработанный ОКБ Микояна и Гуревича ".' +
        'в середине 1950-х годов. МиГ-21 стал первым самолетом КБ МиГ с треугольным крылом. ' +
        '<p>Это самый распространенный сверхзвуковой боевой самолет в мире. </p>' +
        'Выпускался серийно в СССП с 1959 по 1985 год, а также в Чехословакии, Инднии и Китае. ' +
        'Применялся во многих вооруженных конфликтах.',
    }, {
        preset: 'islands#redIcon'
    });
    var sixthPoint = new ymaps.Placemark([56.800224, 60.562233], {
        balloonContent: '<h1>Аллея парка Чкаловка</h1>' +
        '<h2>Сейчас</h2>' +
        '<p><img style="width: 300px;" src="img/аллея_новая.jpg"></p>' +
        '<p>Это главнная аллея парка Чкалова в наши дни.</p>' +
        '<h2>Было</h2>' +
        '<p><img style="width: 300px;" src="img/аллея_старая.jpg"></p>' +
        '<p>А вот как она выглядела раньше</p>',

    }, {
        preset: 'islands#redIcon'
    });
    var seventhPoint = new ymaps.Placemark([56.799275, 60.573005], {
        balloonContent: '<h1>СЕЙЧАС</h1>' +
        '<h2>Отдел полиции №4</h2>' +
        '<p><img style="width: 300px;" src="img/полиция.png"></p>' +
        '<p>Сейчас на этом месте расположился отдел полиции №4.</p>' +
        '<h1>БЫЛО</h1>' +
        '<h2>Предприятие</h2>' +
        '<p><img style="width: 300px;" src="img/предприятие.jpg"></p>' +
        '<p>Но раньше здесь находилось предприятие торгово-бытового обслуживания</p>',
    }, {
        preset: 'islands#redIcon'
    });
    var eighthPoint = new ymaps.Placemark([56.799621, 60.573649], {
        balloonContent: '<h1>Бульвар на улице </h1>' +
        '<h1>Академика Бардина</h1>' +
        '<h2>Сейчас</h2>' +
        '<p><img style="width: 300px;" src="img/парк_новый.png"></p>' +
        '<h2>Было</h2>' +
        '<p><img style="width: 300px;" src="img/парк_старый.png"></p>',
    }, {
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