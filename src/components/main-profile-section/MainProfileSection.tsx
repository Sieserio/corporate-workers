import {Text} from "../../ui/text/Text.tsx";
import styles from './MainProfileSection.module.scss';
import {useState} from "react";
import {TaskFilter} from "../task/task-filter/TaskFilter.tsx";
import {TaskTable} from "../task/task-table/TaskTable.tsx";
import {ProfileCarma} from "../profile/profile-carma/ProfileCarma.tsx";
import {ProfileTargetGoal} from "../profile/profile-target-goal/ProfileTargetGoal.tsx";

export function MainProfileSection() {
    const [activeFilter, setActiveFilter] = useState('active');
    const tasks = [
        {
            id: 1,
            description: 'Провести код-ревью',
            reward: {
                coin: 500,
                carma: 1500
            },
            progress: 75,
            time: '2 дня'
        },
        {
            id: 2,
            description: 'Завершить проект',
            reward: {
                coin: 700,
                carma: 3000
            },
            progress: 100,
            time: '13.10.26'
        },
        {
            id: 3,
            description: 'Завершить проект 2 dw dwd',
            reward: {
                coin: 0,
                carma: 3000
            },
            progress: 100,
            time: '21.01.25'
        },
        {
            id: 4,
            description: 'Обучение новых сотрудников',
            reward: {
                coin: 200,
                carma: 1700
            },
            progress: 30,
            time: '5 дней'
        },
        {
            id: 5,
            description: 'Обучение новых сотрудников',
            reward: {
                coin: 200,
                carma: 1700
            },
            progress: 30,
            time: '5 дней'
        },
        {
            id: 6,
            description: 'Обучение новых сотрудников',
            reward: {
                coin: 200,
                carma: 1700
            },
            progress: 30,
            time: '5 дней'
        }
    ];

    const handleChangeFilter = (filter: string) => {
        setActiveFilter(filter);
        //здесь будут действия фильтрации
    }

    return (
        <div className={styles.section}>
            <div className={styles.container_main}>
                <Text tag={'h2'} size={'Large'} color={'Main'} weight={'Bold'}>Цели</Text>
                <TaskFilter activeFilter={activeFilter} onChangeFilter={handleChangeFilter}/>
                <TaskTable tasks={tasks}/>
            </div>

            <div className={styles.container_aside}>
                <ProfileCarma/>
                <ProfileTargetGoal/>
            </div>

        </div>
    )
}