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
        [56.801509, 60.578645],
        [56.799355, 60.575898],
        [56.799489, 60.575405],
    ], {}, {
        // Задаем цвет.
        strokeColor: "#1E98FF",
        // Задаем ширину линии.
        strokeWidth: 5,
        // Задаем длительность анимации.
        animationTime: 100
    });
    var Line2 = new ymaps.AnimatedLine([
        [56.799489, 60.575405],
        [56.799350, 60.575295],
        [56.800792, 60.571347],
        [56.800996, 60.571320],
    ], {}, {
        strokeColor: "#1E98FF",
        strokeWidth: 5,
        animationTime: 100
    });
    var Line3 = new ymaps.AnimatedLine([
        [56.800996, 60.571320],
        [56.801014, 60.570923],
        [56.802935, 60.565873],
        [56.803903, 60.565923],
    ], {}, {
        strokeColor: "#1E98FF",
        strokeWidth: 5,
        animationTime: 100
    });
    var Line4 = new ymaps.AnimatedLine([
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
        animationTime: 100
    });
    var Line5 = new ymaps.AnimatedLine([
        [56.801038, 60.563588],
        [56.800818, 60.563304],
        [56.800712, 60.562987],
        [56.800224, 60.562233],
    ], {}, {
        strokeColor: "#1E98FF",
        strokeWidth: 5,
        animationTime: 100
    });
    var Line6 = new ymaps.AnimatedLine([
        [56.800224, 60.562233],
        [56.799532, 60.564098],
        [56.801710, 60.566898],
        [56.799391, 60.573064],
        [56.799275, 60.573005],
    ], {}, {
        strokeColor: "#1E98FF",
        strokeWidth: 5,
        animationTime: 100
    });
    var LineAkad1 = new ymaps.AnimatedLine([
        [56.800224, 60.562233],
        [56.800833, 60.560580],
        [56.797990, 60.556735],
        [56.802368, 60.545642],
        [56.803256, 60.540847],
        [56.803321, 60.539213],
        [56.803125, 60.536902],
        [56.799725, 60.532738],
        [56.793307, 60.520763],
    ], {}, {
        strokeColor: "#1E98FF",
        strokeWidth: 5,
        animationTime: 100
    });
    var LineAkad2 = new ymaps.AnimatedLine([
        [56.793307, 60.520763],
        [56.783432, 60.539170],
        [56.777947, 60.529337],
        [56.777911, 60.528327],
        [56.775800, 60.523525],
        [56.781718, 60.513044],
        [56.782788, 60.512373],
        [56.783783, 60.513521],
        [56.785291, 60.511830],
        [56.785858, 60.509152],
        [56.789134, 60.503525],
        [56.790957, 60.500392],
        [56.795199, 60.508227],
        [56.794232, 60.510014],
    ], {}, {
        strokeColor: "#1E98FF",
        strokeWidth: 5,
        animationTime: 100
    });
    var Line7 = new ymaps.AnimatedLine([
        [56.799275, 60.573005],
        [56.799621, 60.573649],
    ], {}, {
        strokeColor: "#1E98FF",
        strokeWidth: 5,
        animationTime: 100
    });
    var Line8 = new ymaps.AnimatedLine([
        [56.799621, 60.573649],
        [56.797222, 60.580296],
        [56.806419, 60.591697],
        [56.808415, 60.610273],
        [56.815588, 60.607746],
        [56.816106, 60.614161],
        [56.818357, 60.613309],
    ], {}, {
        strokeColor: "#1E98FF",
        strokeWidth: 5,
        animationTime: 100
    });
    var Line9 = new ymaps.AnimatedLine([
        [56.818357, 60.613309],
        [56.823244, 60.611445],
        [56.823244, 60.611445],
        [56.828181, 60.616708],
        [56.828820, 60.617043],
        [56.834073, 60.614608],
        [56.834294, 60.615153],
    ], {}, {
        strokeColor: "#1E98FF",
        strokeWidth: 5,
        animationTime: 100
    });
    var Line10 = new ymaps.AnimatedLine([
        [56.834294, 60.615153],
        [56.834474, 60.614464],
        [56.835703, 60.613959],
        [56.836124, 60.614622],

    ], {}, {
        strokeColor: "#1E98FF",
        strokeWidth: 5,
        animationTime: 100
    });
    var Line11 = new ymaps.AnimatedLine([
        [56.836124, 60.614622],
        [56.835887, 60.612844],
        [56.839513, 60.611614],
        [56.839119, 60.608740],
        [56.839298, 60.608493],
    ], {}, {
        strokeColor: "#1E98FF",
        strokeWidth: 5,
        animationTime: 100
    });
    var Line12 = new ymaps.AnimatedLine([
        [56.839298, 60.608493],
        [56.838996, 60.607780],
        [56.838768, 60.605562],
        [56.838817, 60.605127],
        [56.838036, 60.598479],
        [56.837910, 60.598189],
        [56.837701, 60.596285],
        [56.837860, 60.596273],
    ], {}, {
        strokeColor: "#1E98FF",
        strokeWidth: 5,
        animationTime: 100
    });
    // Добавляем линии на карту.
    myMap.geoObjects.add(Line1);
    myMap.geoObjects.add(Line2);
    myMap.geoObjects.add(Line3);
    myMap.geoObjects.add(Line4);
    myMap.geoObjects.add(Line5);
    myMap.geoObjects.add(Line6);
    myMap.geoObjects.add(LineAkad1);
    myMap.geoObjects.add(LineAkad2);
    myMap.geoObjects.add(Line7);
    myMap.geoObjects.add(Line8);
    myMap.geoObjects.add(Line9);
    myMap.geoObjects.add(Line10);
    myMap.geoObjects.add(Line11);
    myMap.geoObjects.add(Line12);
    // Создаем метки.
    var Point1 = new ymaps.Placemark([56.801452, 60.578980], {
        balloonContent: '<h2>Лицей №109</h2>' +
        '<p><img style="width: 300px;" src="img/licey109.png"></p>'+
        '<p>Был основан в 1974 году</p>',
    }, {
        preset: 'islands#redIcon',
    });

    var Point2 = new ymaps.Placemark([56.799489, 60.575405], {
        balloonContent: '<h2>СЕЙЧАС</h2>' +
        '<h3>Кировский</h3>' +
        '<p><img style="width: 200px;" src="img/кировский.png"></p>' +
        '<p>Сейчас здесь стоит один из магазинов сети "Кировский".</p>' +
        'Группа компаний "Кировский" успешно работает более 33 лет. ' + 
        'С 1987 года, со дня основания первого универсама "Кировский". ' +
        'Во главе компании - Игорь Иванович Ковпак ' +
        '<h2>БЫЛО</h2>' +
        '<h3>Ресторан Рига</h3>' +
        '<p><img style="width: 300px;" src="img/рига.jpg"></p>' +
        '<p>Но раньше на этом месте стоял <b>Ресторан "Рига"</b></p>',
    }, {
        preset: 'islands#redIcon'
    });
    var Point3 = new ymaps.Placemark([56.800969, 60.571354], {
        balloonContent: '<h2>СЕЙЧАС</h2>' +
        '<h3>Магнит</h3>' +
        '<p><img style="width: 300px;" src="img/магнит.png"></p>' +
        '<p>Магазин сети "Магнит" был открыт на этом месте в 2021 году.</p>' +
        '<h2>БЫЛО</h2>' +
        '<h3>Аптека</h3>' +
        '<p><img style="width: 300px;" src="img/аптека.jpg"></p>' +
        '<p>Но раньше здесь находилась большая аптека.</p>',
    }, {
        preset: 'islands#redIcon'
    });
    var Point4 = new ymaps.Placemark([56.803903, 60.565923], {
        balloonContent: '<h2>Дом науки и техники</h2>' +
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
    var Point5 = new ymaps.Placemark([56.801038, 60.563588], {
        balloonContent: '<h2>Истребитель МиГ-21</h2>' +
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
    var Point6 = new ymaps.Placemark([56.800224, 60.562233], {
        balloonContent: '<h2>Аллея парка Чкаловка</h2>' +
        '<h3>Сейчас</h3>' +
        '<p><img style="width: 300px;" src="img/аллея_новая.jpg"></p>' +
        '<p>Это главнная аллея парка Чкалова в наши дни.</p>' +
        '<h3>Было</h3>' +
        '<p><img style="width: 300px;" src="img/аллея_старая.jpg"></p>' +
        '<p>А вот как она выглядела раньше</p>',

    }, {
        preset: 'islands#redIcon'
    });
    var PointAkad2 = new ymaps.Placemark([56.794232, 60.510014], {
        balloonContent: '<h2>Рассказ об Академическом (Французский)</h2>' +
        '<video width="400" height="320" controls="controls" autoplay"><source src="img/video.mp4"></video>' +
        '<h3>Перевод</h3>' +
        '<p>Академический район — мое любимое место в городе. Он яркий, новый, красивый. есть много мест для прогулок, например, скульптура северного оленя или дорога «Радуга»! Я люблю Екатеринбург!</p>',

    }, {
        preset: 'islands#redIcon'
    });56.793307, 60.520763
    var PointAkad = new ymaps.Placemark([56.793307, 60.520763], {
        balloonContent: '<h2>Академический район</h2>' +
        '<p><img style="width: 300px;" src="img/akadem.jpg"></p>' +
        '<p>Один из восьми внутригородских районов города Екатеринбурга. Расположен в его юго-западной части. Образован в 2020 году, границы определены в 2021 году.</p>' +
        '<p>Район рассчитан на 325 тысяч человек, до 2026 года планируется построить 13 млн м² недвижимости, из них — 9 млн м² — жилые помещения, 4,2 млн м² — нежилой недвижимости[3]. К 2014 году в районе построено более 1 млн м² недвижимости</p>',

    }, {
        preset: 'islands#redIcon'
    });
    var Point7 = new ymaps.Placemark([56.799275, 60.573005], {
        balloonContent: '<h2>СЕЙЧАС</h2>' +
        '<h2>Отдел полиции №4</h2>' +
        '<p><img style="width: 300px;" src="img/полиция.png"></p>' +
        '<p>Сейчас на этом месте расположился отдел полиции №4.</p>' +
        '<h2>БЫЛО</h2>' +
        '<h2>Предприятие</h2>' +
        '<p><img style="width: 300px;" src="img/предприятие.jpg"></p>' +
        '<p>Но раньше здесь находилось предприятие торгово-бытового обслуживания</p>',
    }, {
        preset: 'islands#redIcon'
    });
    var Point8 = new ymaps.Placemark([56.799621, 60.573649], {
        balloonContent: '<h2>Бульвар на улице </h2>' +
        '<h2>Академика Бардина</h2>' +
        '<h2>Сейчас</h2>' +
        '<p><img style="width: 300px;" src="img/парк_новый.png"></p>' +
        '<h2>Было</h2>' +
        '<p><img style="width: 300px;" src="img/парк_старый.png"></p>',
    }, {
        preset: 'islands#redIcon'
    });
    var Point9 = new ymaps.Placemark([56.818357, 60.613309], {
        balloonContent: '<h2>Мемориальный дом-музей П.П. Бажова</h2>' +
        '<p><img style="width: 300px;" src="img/bazhov.jpg"></p>' +
        '<p>Музей основан решением исполкома городского совета от 22 марта 1966 года и приказомпо министерству культуры Российской Федерации № 117 от 1 марта 1967 года — об организации музея П. П. Бажова в Свердловске.</p>' +
        '<p>3 февраля 1969 года музейная экспозиция в доме открыта для посетителей.</p>' +
        '<p>Особенность музея состоит в том, что в доме всё осталось — как при жизни хозяина.</p>' +
        '<p>Музей входит в состав Объединенного музея писателей Урала.</p>' 
    }, {
        preset: 'islands#redIcon'
    });
    
    var Point10 = new ymaps.Placemark([56.834294, 60.615153], {
        balloonContent: '<h2>Свердловская областная универсальная научная библиотека им. В. Г. Белинского </h2>' +
        '<p><img style="width: 300px;" src="img/biblio.jpg"></p>' +
        '<h3>История</h3>' +
        '<p>Библиотека им. В. Г. Белинского – первая публичная общедоступная библиотека Екатеринбурга. В конце XIX столетия представители местной элиты (учительница, врач, журналист, нотариус, директор банка) решили, что Екатеринбургу нужна библиотека, в которой у всех будет равный доступ к информации независимо от социального статуса. Имя учительницы, подарившей библиотеке две с половиной тысячи книг и ставшей первой заведующей библиотекой им. В.Г. Белинского – Елизавета Михайловна Кремлева. С тех пор Белинка меняла адреса и статусы, пройдя путь от публичной общественной до областной универсальной научной.</p>' +
        '<p>Библиографический указатель «История Белинки в публикациях: 1899–2010 гг.» дает возможность всем, кому интересна, небезразлична жизнь и судьба крупнейшей библиотеки на Урале, узнать ее историю, отраженную в книгах, статьях, заметках, интервью, мемуарах, фельетонах, отчетах.</p>' +
        '<h3>Библиотека сегодня</h3>' +
        '<p>В настоящее время библиотека занимает два здания. Весь облик и интерьеры первого здания, построенного в 50-е годы ХХ века и являющегося объектом культурного наследия, выдержаны в стиле «адаптированного классицизма». Здание «Новой Белинки» принимает читателей с 2003 года и воплощает принципиально другой образ библиотеки – функциональной, деловой, демократичной.</p>'
    }, {
        preset: 'islands#redIcon'
    });
    
    var Point11 = new ymaps.Placemark([56.836124, 60.614622], {
        balloonContent: '<h2>Бизнес-центр «Высоцкий»</h2>' +
        '<p><img style="width: 300px;" src="img/visot.jpg"></p>' +
        '<p>Современный небоскрёб, расположенный в центре города Екатеринбурга, в районе улиц Красноармейской и Малышева. Высота - 188,3 м. 54-этажный небоскрёб до постройки в 2015 году башни «Исеть» являлся самым высоким зданием не только Екатеринбурга, но и всей России за пределами Москвы.</p>'
    }, {
        preset: 'islands#redIcon'
    });
    
    var Point12 = new ymaps.Placemark([56.839298, 60.608493], {
        balloonContent: '<h2>Главпочтамп</h2>' +
        '<p><img style="width: 300px;" src="img/pochta.jpg"></p>' +
        '<p>Здание, расположенное в Екатеринбурге, на проспекте Ленина, дом 39, и построенное в 1933 году архитекторами К. И. Соломоновым и В. Д. Соколовым. Здание выполнено в форме конструктивизма 1930-х годов.</p>' +
        '<h3>Нулевой километр</h3>' +
        '<p><img style="width: 300px;" src="img/0.jpg"></p>' +
        '<p>Знак «Нулевая точка отсчета километров» появился у здания Главпочтамта уральской столицы 23 сентября 1986 года.</p>' +
        '<p>Он представляет собой круг, в котором изображена карта Свердловской области со звездочкой на месте областного центра. Правда, поскольку памятник создавался в советские годы, город на этой карте все еще носит название Свердловск. «Нулевой километр» - это географический центр Екатеринбурга, точка отсчета расстояний до других городов.</p>'
    }, {
        preset: 'islands#redIcon'
    });
    
    var Point13 = new ymaps.Placemark([56.837860, 60.596273], {
        balloonContent: '<h2>Памятник В.И. Ленину</h2>' +
        '<p><img style="width: 300px;" src="img/lenin.jpg"></p>' +
        '<p>Памятник советскому государственному деятелю Владимиру Ильичу Ленину. Является одной из достопримечательностей города Екатеринбург. Памятник скульптора Владимира Ингала, архитекторов Анатолия Прибульского и Петра Деминцева был открыт 5 ноября 1957 года на Площади 1905 года в центре города.</p>' +
        '<h2>Владимир Ильич Ленин</h2>' +
        '<p><img style="width: 300px;" src="img/дутшт2.jpg"></p>' +
        '<p>Российский революционер, крупный теоретик марксизма, советский политический и государственный деятель, создатель Российской социал-демократической рабочей партии (большевиков), главный организатор и руководитель Октябрьской революции 1917 года в России, первый председатель Совета народных комиссаров РСФСР и Совета народных комиссаров СССР, создатель первого в мировой истории социалистического государства.</p>',
    }, {
        preset: 'islands#redIcon'
    });
    

    // Функция анимации пути.
    function playAnimation() {
        // Убираем последнюю линию.
        Line2.reset();
        Line3.reset();
        Line4.reset();
        Line5.reset();
        Line6.reset();
        LineAkad1.reset();
        LineAkad2.reset()
        Line7.reset();
        Line8.reset();
        Line9.reset();
        Line10.reset();
        Line11.reset();
        Line12.reset();
        // Добавляем первую метку на карту.
        myMap.geoObjects.add(Point1);
        // Анимируем первую линию.
        Line1.animate()
            // После окончания анимации первой линии добавляем вторую метку на карту и анимируем вторую линию.
            .then(function() {
                myMap.geoObjects.add(Point2);
                return Line2.animate();
            })
            .then(function() {
                myMap.geoObjects.add(Point3);
                return Line3.animate();
            })
            .then(function() {
                myMap.geoObjects.add(Point4);
                return Line4.animate();
            })
            .then(function() {
                myMap.geoObjects.add(Point5);
                return Line5.animate();
            })
            .then(function() {
                myMap.geoObjects.add(Point6);
                myMap.geoObjects.add(PointAkad);
                return Line6.animate() && LineAkad1.animate();
            })
            .then(function() {
                myMap.geoObjects.add(Point7);
                myMap.geoObjects.add(PointAkad2);
                return Line7.animate() && LineAkad2.animate();
            })
            .then(function() {
                myMap.geoObjects.add(Point8);
                return Line8.animate();
            })
            .then(function() {
                myMap.geoObjects.add(Point9);
                return Line9.animate();
            })
            .then(function() {
                myMap.geoObjects.add(Point10);
                return Line10.animate();
            })
            .then(function() {
                myMap.geoObjects.add(Point11);
                return Line11.animate();
            })
            .then(function() {
                myMap.geoObjects.add(Point12);
                return Line12.animate();
            })
            // После окончания анимации второй линии добавляем третью метку на карту.
            .then(function() {
                myMap.geoObjects.add(Point13);
                // Добавляем паузу после анимации.
                return ymaps.vow.delay(null, 5000);
            })

    }
    // Запускаем анимацию пути.
    playAnimation();

}