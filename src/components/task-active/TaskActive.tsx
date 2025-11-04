import styles from './TaskActive.module.scss';
import type {TaskActiveProps} from "./type.ts";
import {Text} from "../../ui/text/Text.tsx";
import IconCoin from '../../assets/images/icons/ui/coin.svg';
import IconCarma from '../../assets/images/icons/ui/carma.svg';
export function TaskActive({
    id,
    description,
    reward,
    progress,
    time
}: TaskActiveProps) {

    return (
        <div className={styles.task}>
            <div className={styles.task__number}>
                <Text tag={'p'} size={'Title'} color={'Invert'} weight={'Semibold'}>
                    {id}
                </Text>
            </div>

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