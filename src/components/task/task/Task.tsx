import styles from './Task.module.scss';
import {Text} from "../../../ui/text/Text.tsx";
import IconCoin from '../../../assets/images/icons/ui/coin.svg';
import IconCarma from '../../../assets/images/icons/ui/carma.svg';
import type {ITask} from "../../../types";
import DoneIcon from '../../../assets/images/icons/ui/done.svg';
import CancelIcon from '../../../assets/images/icons/ui/cancel.svg';

export function Task({
    id,
    state,
    description,
    reward,
    progress,
    time
}: ITask) {

    return (
        <div className={styles.task}>

            {state === 'active' ?
                <div className={`${styles.task__state}  ${styles.task__active}`}>
                    <Text tag={'p'} size={'Title'} color={'Invert'} weight={'Semibold'}>
                        {id}
                    </Text>
                </div>
                : state === 'done' ?
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
                    {description}
                </Text>
            </div>

            <div className={styles.task__reward}>
                {reward.coin > 0 &&
                    <div className={styles.task__reward_num}>
                        <IconCoin/>
                        <Text tag={'p'} size={'Standard'} color={'Main'} weight={'Bold'}>
                            + {reward.coin}
                        </Text>
                    </div>}
                {reward.carma > 0 &&
                    <div className={styles.task__reward_num}>
                        <IconCarma/>
                        <Text tag={'p'} size={'Standard'} color={'Main'} weight={'Bold'}>
                            + {reward.carma}
                        </Text>
                    </div>}
            </div>

            <div>
                <Text tag={'p'} size={'Standard'} color={'Main'} weight={'Regular'}>
                    {progress}
                </Text>
            </div>

            <div>
                <Text tag={'p'} size={'Standard'} color={'Main'} weight={'Regular'}>
                    {time}
                </Text>
            </div>
        </div>
    )
}