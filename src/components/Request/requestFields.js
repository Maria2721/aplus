export const requestFields = [
    {
        id: 'surname',
        name: 'Фамилия*',
        type:'text',
        rule: 'required',
    },
        {
        id: 'name',
        name: 'Имя*',
        type:'text',
        rule: 'required',
    },
    {
        id: 'middle',
        name: 'Отчество',
        view: 'input',
        type:'text',
        rule: '',
    },
    {
        id: 'email',
        name: 'E-mail*',
        type:'text',
        rule: 'required',
    },
    {
        id: 'company',
        name: 'Название компании',
        type:'text',
        rule: '',
    }
]