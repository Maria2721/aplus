export const helpFields = [
    {
        id: 'helpSurname',
        name: 'Фамилия*',
        view: 'input',
        type:'text',
        rule: 'name',
    },
        {
        id: 'helpName',
        name: 'Имя*',
        view: 'input',
        type:'text',
        rule: 'name',
    },
    {
        id: 'helpMiddle',
        name: 'Отчество',
        view: 'input',
        type:'text',
        rule: 'middle',
    },
    {
        id: 'helpInn',
        name: 'ИНН*',
        view: 'input',
        type:'text',
        rule: 'inn',
    },
    {
        id: 'helpPhone',
        name: 'Номер телефона*',
        view: 'phone',
        type:'tel',
        rule: 'phone',
    },
    {
        id: 'helpQuestion',
        name: 'Ваш вопрос*',
        view: 'texterea',
        type:'text',
        rule: 'question',
    }
]
