const info = {
    'r1': {
        Name: 'Амурский район',
        Hard: null,
        Water: null
    },
    'r2': {
        Name: 'Аяно-Майский район',
        Hard: ['Все населённые пункты'],
        Water: null
    },
    'r3': {
        Name: 'Бикинский район',
        Hard: ['село Васильевка'],
        Water: null
    },
    'r4': {
        Name: 'Ванинский район',
        Hard: ['Поселок временного проживания лесозаготовителей Сизиман', 'метеостанция Мопау'],
        Water: null
    },
    'r5': {
        Name: 'Верхнебуреинский район',
        Hard: ['Село Чекунда', 'Посёлки Алонка, Сулук, Шахтинский', 'Рабочий поселок Софийск' ],
        Water: null
    },
    'r6': {
        Name: 'Вяземский район',
        Hard: null,
        Water: null
    },
    'r7': {
        Name: 'Комсомольский район',
        Hard: [
            'Боктор, Бельго, Верхнетамбовское, Нижнетамбовское, Нижние Халбы, Новоильиновка',
            'Среднетамбовское, Чучи, поселки Кенай, Уктур, Ягодный',
            'рабочий поселок Гурское'
        ],
        Water: 'Наводнения 2013 и 2019 годов'
    },
    'r8': {
        Name: 'Нанайский район',
        Hard: ['Метеостанция Солекуль'],
        Water: null
    },
    'r9': {
        Name: 'Николаевский район',
        Hard: ['Все населенные пункты, входящие в состав района'],
        Water: null
    },
    'r10': {
        Name: 'Охотский район',
        Hard: [
            'Все населённые пункты',
            'Оленеводческие базы бригад Черпулай',
            'Метеостанции Уега, Улья'
        ],
        Water: null
    },
    'r11': {
        Name: 'Лазовский район',
        Hard: ['Сёло Гвасюги', 'Посёлки Долми, Золотой, Катэн, Солонцовый, Среднехорский, Сукпай, Южный' ],
        Water: null
    },
    'r12': {
        Name: 'Осипенковский район',
        Hard: [
            'Сёла Владимировка, Гуга, Князево, Оглонги, Удинск',
            'Посёлок Херпучи',
            'Контрольный пункт связи Ниланкан',
            'Гидрологические посты Каменка, Обхорошее, Тимченко, Упагда'
        ],
        Water: null
    },
    'r13': {
        Name: 'Советско-Гаванский район',
        Hard: ['Cело Гроссевичи', 'Посёлки Иннокентьевский, Коппи, Нельма'],
        Water: null
    },
    'r14': {
        Name: 'Солнечный район',
        Hard: null,
        Water: null
    },
    'r15': {
        Name: 'Тугуро-Чумиканский район',
        Hard: ['Все населенные пункты, входящие в состав района'],
        Water: null
    },
    'r16': {
        Name: 'Ульчинский район',
        Hard: [
            'Сёла Белоглинка, Большие Санники, Воскресенское, Дуди, имени Максима Горького, Калиновка, Кальма, Кизи, Кольчем, Мариинское, Монгол, Новотроицкое, Солонцы, Тахта, Ухта, Чильба',
            'Поселки Мариинский Рейд, Тыр'
        ],
        Water: null
    },
    'r17': {
        Name: 'Хабаровский район',
        Hard: [
            'Сёла Иванковцы, Наумовка, Новокаменка, Новокуровка, Пасека, Томское, Улика-Национальное, Улика-Павловка, Хаил',
            'Посёлки Догордон, Кукан, Победа',
            'Улица Заречная, села Бычиха (расположенную на Большом Уссурийском острове)'
        ],
        Water: 'Наводнения 2013 и 2019 годов'
    },
};

function update_tooltip_content(id) {
    const tooltip__title = document.querySelector('.tooltip__title');
    const tooltip__hard  = document.querySelector('.tooltip__hard');
    const tooltip__water = document.querySelector('.tooltip__water');

    // Название региона
    tooltip__title.innerHTML = info[id].Name;

    // Список труднодоступных мест района
    if (info[id].Hard == null) {
        tooltip__hard.innerHTML = 'Нет информации';
    } else {
        tooltip__hard.innerHTML = '';
        info[id].Hard.forEach(element => {
            tooltip__hard.innerHTML += element + '<br>';
        });
    }

    // Информация о наводнении
    if (info[id].Water == null) {
        tooltip__water.innerHTML = 'Нет информации';
    } else {
        tooltip__water.innerHTML = info[id].Water;
    }
}

function bind_tooltip(id, fake_id) {

    const tooltip = document.querySelector('.tooltip');

    update_tooltip_content(id);

    tippy('#' + fake_id, {
        content: tooltip.innerHTML,
        allowHTML: true,
        arrow: false
    });
};

document.addEventListener('DOMContentLoaded', function(event) {
    Object.keys(info).forEach(key => {
        if (key == 'r14') {
            bind_tooltip(key, 'r14a');
            bind_tooltip(key, 'r14b');
        } else if (key == 'r15') {
            bind_tooltip(key, 'r15a');
            bind_tooltip(key, 'r15b');
            bind_tooltip(key, 'r15c');
            bind_tooltip(key, 'r15d');
        } else if (key == 'r17') {
            bind_tooltip(key, 'r17a');
            bind_tooltip(key, 'r17b');
        } else {
            bind_tooltip(key, key);
        }
    });
});