//TODO: избавиться от этого файла после подключения апи
export const hardcodeSauna = {
    id: 1,
    name: 'Сауна',
    description: 'Описание сауны, которое рассказывает о сауне',
    address: 'ул. Пушкина, дом. 1',
    phone: '+79000000000',
    status: 'Статус',
    gallery: [
        {
            name: 'Фотка',
            description: 'Описание фотки',
            alt: 'Тестовая фотка',
            url: 'https://source.unsplash.com/random?building',
        },
        {
            name: 'Фотка 2',
            description: 'Описание фотки 2',
            alt: 'Тестовая фотка 2',
            url: 'https://source.unsplash.com/random?people',
        },
    ]
};

export const hardcodeRooms = [
    {
        id: 1,
        name: 'Комната 1',
        description: 'Описание комнаты 1',
        capacity: 5,
        activity: true,
        gallery: [
            {
                name: 'Фотка',
                description: 'Описание фотки',
                alt: 'Тестовая фотка',
                url: 'https://source.unsplash.com/random?sauna',
            },
            {
                name: 'Фотка 2',
                description: 'Описание фотки 2',
                alt: 'Тестовая фотка 2',
                url: 'https://source.unsplash.com/random?wood',
            },
        ]
    },
    {
        name: 'Комната 2',
        description: 'Описание комнаты 2',
        capacity: 2,
        activity: true,
        gallery: [
            {
                name: 'Фотка',
                description: 'Описание фотки',
                alt: 'Тестовая фотка',
                url: 'https://source.unsplash.com/random?ocean',
            },
            {
                name: 'Фотка 2',
                description: 'Описание фотки 2',
                alt: 'Тестовая фотка 2',
                url: 'https://source.unsplash.com/random?palm',
            },
            {
                name: 'Фотка 3',
                description: 'Описание фотки 3',
                alt: 'Тестовая фотка 3',
                url: 'https://source.unsplash.com/random?beach',
            },
            {
                name: 'Фотка 4',
                description: 'Описание фотки 4',
                alt: 'Тестовая фотка 4',
                url: 'https://source.unsplash.com/random?sunset',
            },
        ]
    },
    {
        name: 'Комната 3',
        description: 'Описание комнаты 3',
        capacity: 2,
        activity: true,
        gallery: []
    },
];

export const hardcodeMonth = 'Ноябрь';

export const hardcodeDays = [
    {
        dayOfMonth: 1,
        dayOfWeek: 'ср',
        isWeekend: false,
        isDisabled: false,
        times: [
            {
                time: '09:00',
                price: '1300'
            },
            {
                time: '10:00',
                price: '1300'
            },
            {
                time: '11:00',
                price: '1300'
            }
        ]
    },
    {
        dayOfMonth: 2,
        dayOfWeek: 'чт',
        isWeekend: false,
        isDisabled: true,
        times: [
            {
                time: '14:00',
                price: '700'
            },
            {
                time: '15:00',
                price: '600'
            },
            {
                time: '16:00',
                price: '500'
            }
        ]
    },
    {
        dayOfMonth: 3,
        dayOfWeek: 'пт',
        isWeekend: false,
        isDisabled: false,
        times: [
            {
                time: '12:00',
                price: '1300'
            },
            {
                time: '13:00',
                price: '1200'
            },
            {
                time: '14:00',
                price: '1400'
            }
        ]
    },
    {
        dayOfMonth: 4,
        dayOfWeek: 'сб',
        isWeekend: true,
        isDisabled: false,
        times: [
            {
                time: '09:00',
                price: '1300',
                isDisabled: true
            },
            {
                time: '10:00',
                price: '1400'
            }
        ]
    },
    {
        dayOfMonth: 5,
        dayOfWeek: 'вск',
        isWeekend: true,
        isDisabled: false,
        times: [
            {
                time: '13:00',
                price: '1400'
            }
        ]
    },
    {
        dayOfMonth: 6,
        dayOfWeek: 'пн',
        isDisabled: false,
        times: [
            {
                time: '09:00',
                price: '1300'
            }
        ]
    }
];