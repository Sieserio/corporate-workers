import {Text} from "../../ui/text/Text.tsx";
import {ButtonNav} from "../../ui/button-nav/ButtonNav.tsx";
import styles from './MainProfileSection.module.scss';
import IconCarma from '../../assets/images/icons/ui/carma.svg';
import IconCoin from '../../assets/images/icons/ui/coin.svg';
import {useState} from "react";
import {TaskActive} from "../task-active/TaskActive.tsx";

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

    const handleActiveClick = () => {
        setActiveFilter('active');
        //здесь будут действия фильтрации
    }

    const handleDoneClick = () => {
        setActiveFilter('done');
        //здесь будут действия фильтрации
    }

    return (
        <div className={styles.section}>
            <div className={styles.container_main}>
                <Text tag={'h2'} size={'Large'} color={'Main'} weight={'Bold'}>Цели</Text>
                <div className={styles.buttons}>
                    <ButtonNav
                        active={activeFilter === 'active' ? 'active' : ''}
                        text='Активные'
                        onClick={handleActiveClick}
                    />
                    <ButtonNav
                        active={activeFilter === 'done' ? 'active' : ''}
                        text='Выполненные'
                        onClick={handleDoneClick}
                    />
                </div>
                <div className={styles.progress_table}>
                    <div className={styles.progress_table__title}>
                        <div></div>
                        <Text tag={'p'} size={'Small'} color={'Main'} weight={'Light'}>Описание</Text>
                        <Text tag={'p'} size={'Small'} color={'Main'} weight={'Light'}>Награда</Text>
                        <Text tag={'p'} size={'Small'} color={'Main'} weight={'Light'}>Прогресс</Text>
                        <Text tag={'p'} size={'Small'} color={'Main'} weight={'Light'}>Время</Text>
                    </div>
                    <div className={styles.progress_table__task_list}>
                        {tasks.map((task) => (
                            <TaskActive key={task.id} {...task}/>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.container_aside}>
                <div className={styles.container_aside__carma}>
                    <Text tag={'h3'} size={'Title'} color={'Main'} weight={'Semibold'}>Общая карма</Text>
                    <Text tag={'p'} size='Standard' color={'Main'} weight={'Regular'}>Koffein, г. Нальчик, ул. Ленина 145</Text>
                    <div className={styles.container_aside__carma_coin}>
                        <IconCarma className={styles.icon}/>
                        <Text tag={'p'} size={'Large'} color={"Main"} weight={'Bold'}>2300</Text>
                    </div>
                    <Text tag={'h3'} size={'Title'} color={'Invert'} weight={'Semibold'}>Конкурс месяца</Text>
                </div>

                <div className={styles.container_aside__goal}>
                    <Text tag={'h3'} size={'Title'} color={'Main'} weight={'Semibold'}>Коплю на футболку</Text>
                    <div >
                        <img src='/public/goal_tshirt.png' className={styles.container_aside__goal_img} alt='футболка'/>
                    </div>
                    <div className={styles.container_aside__goal_text_wrapper}>
                        <IconCoin className={styles.container_aside__goal_icon}/>
                        <div className={styles.container_aside__goal_text}>
                            <div className={styles.wrapperPosition}>
                                <Text tag={'p'} size='Standard' color={'Invert'} weight={'Regular'}>Собрано</Text>
                                <Text tag={'p'} size='Standard' color={'Invert'} weight={'Regular'}>141/324</Text>
                            </div>
                            <p className={styles.container_aside__goal_text_progress}>progressssssss bar</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}