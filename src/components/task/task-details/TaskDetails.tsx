import styles from "./TaskDetails.module.scss";
import {Text} from "../../../ui/text/Text.tsx";
import DoneIcon from "../../../assets/images/icons/ui/done.svg";
import CancelIcon from "../../../assets/images/icons/ui/cancel.svg";
import IconCoin from "../../../assets/images/icons/ui/coin.svg";
import IconCarma from "../../../assets/images/icons/ui/carma.svg";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {getTasks} from "../../../store/slices/tasksSlice.ts";
import type {ITask} from "../../../types";


export function TaskDetails() {
    const { id } = useParams();
    const tasks = useSelector(getTasks);
    const task: ITask | undefined  = tasks.find(task => task.id === id);

    if (!task) {
        return <div> Такого задания не найдено </div>;
    }

    return (
        <div className={styles.wrapper}>
            <Text tag={'h2'} size={'Big'} color={'Main'} weight={'Semibold'}> {task.description} </Text>
            <div className={styles.task}>
                {task.state === 'active' ?
                    <div className={`${styles.task__state}  ${styles.task__active}`}>
                        <Text tag={'p'} size={'Title'} color={'Invert'} weight={'Semibold'}>
                            {id}
                        </Text>
                    </div>
                    : task.state === 'done' ?
                        <div className={`${styles.task__state}  ${styles.task__done}`}>
                            <DoneIcon/>
                        </div>
                        :
                        <div className={`${styles.task__state} ${styles.task__cancel}`}>
                            <CancelIcon/>
                        </div>
                }

                <div>
                    <Text tag={'p'} size={'Standard'} color={'Main'} weight={'Regular'}>
                        {task.description}
                    </Text>
                </div>

                <div className={styles.task__reward}>
                    {task.reward.coin > 0 &&
                        <div className={styles.task__reward_num}>
                            <IconCoin/>
                            <Text tag={'p'} size={'Standard'} color={'Main'} weight={'Bold'}>
                                + {task.reward.coin}
                            </Text>
                        </div>}
                    {task.reward.carma > 0 &&
                        <div className={styles.task__reward_num}>
                            <IconCarma/>
                            <Text tag={'p'} size={'Standard'} color={'Main'} weight={'Bold'}>
                                + {task.reward.carma}
                            </Text>
                        </div>}
                </div>

                <div>
                    <Text tag={'p'} size={'Standard'} color={'Main'} weight={'Regular'}>
                        {task.progress}
                    </Text>
                </div>

                <div>
                    <Text tag={'p'} size={'Standard'} color={'Main'} weight={'Regular'}>
                        {task.time}
                    </Text>
                </div>

            </div>
            <Text tag={'p'} size={'Standard'} color={'Main'} weight={'Regular'}> {task.extraInfo} </Text>
        </div>

    )
}