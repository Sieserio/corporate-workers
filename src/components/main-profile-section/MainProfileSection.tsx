import {Text} from "../../ui/text/Text.tsx";
import {ButtonNav} from "../../ui/button-nav/ButtonNav.tsx";
import styles from './MainProfileSection.module.scss';
import IconCarma from '../../assets/images/icons/ui/carma.svg';
import IconCoin from '../../assets/images/icons/ui/coin.svg';
import {useState} from "react";

export function MainProfileSection() {
    const [activeFilter, setActiveFilter] = useState('active');

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
                <Text tag={'h2'} size='Large' color={'Main'} weight={'Bold'}>Цели</Text>
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
                    таблица
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