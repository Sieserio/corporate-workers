import type {ITask} from "../types";

export const initialTasks: ITask[] = [
    {
        id: '1',
        description: 'Провести код-ревью',
        extraInfo: 'Дополнительное описание задачи',
        state: 'active',
        reward: {
            coin: 500,
            carma: 1500
        },
        progress: 75,
        time: '2 дня'
    },
    {
        id: '2',
        description: 'Завершить проект',
        extraInfo: 'Дополнительное описание задачи',
        state: 'active',
        reward: {
            coin: 700,
            carma: 3000
        },
        progress: 100,
        time: '13.10.26'
    },
    {
        id: '3',
        description: 'Завершить проект 2 dw dwd',
        extraInfo: 'Дополнительное описание задачи',
        state: 'done',
        reward: {
            coin: 0,
            carma: 3000
        },
        progress: 100,
        time: '21.01.25'
    },
    {
        id: '4',
        description: 'Обучение новых сотрудников',
        extraInfo: 'Дополнительное описание задачи',
        state: 'active',
        reward: {
            coin: 200,
            carma: 1700
        },
        progress: 30,
        time: '5 дней'
    },
    {
        id: '5',
        description: 'Обучение новых сотрудников',
        extraInfo: 'Дополнительное описание задачи',
        state: 'active',
        reward: {
            coin: 200,
            carma: 1700
        },
        progress: 30,
        time: '5 дней'
    },
    {
        id: '6',
        description: 'Обучение новых сотрудников',
        extraInfo: 'Дополнительное описание задачи',
        state: 'cancel',
        reward: {
            coin: 200,
            carma: 1700
        },
        progress: 30,
        time: '5 дней'
    },
    {
        id: '7',
        description: 'Обучение новых сотрудников 2',
        extraInfo: 'Дополнительное описание задачи',
        state: 'active',
        reward: {
            coin: 400,
            carma: 1100
        },
        progress: 20,
        time: '5 дней'
    }
];