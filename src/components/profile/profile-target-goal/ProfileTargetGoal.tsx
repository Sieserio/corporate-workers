import styles from "./ProfileTargetGoal.module.scss";
import {Text} from "../../../ui/text/Text.tsx";
import IconCoin from "../../../assets/images/icons/ui/coin.svg";

export function ProfileTargetGoal() {
    return (
        <div className={styles.target_goal}>
            <Text tag={'h3'} size={'Title'} color={'Main'} weight={'Semibold'}>Коплю на футболку</Text>
            <div>
                <img src='/public/goal_tshirt.png' className={styles.target_goal_img} alt='футболка'/>
            </div>
            <div className={styles.target_goal_text_wrapper}>
                <IconCoin className={styles.target_goal_icon}/>
                <div className={styles.target_goal_text}>
                    <div className={styles.wrapperPosition}>
                        <Text tag={'p'} size='Standard' color={'Invert'} weight={'Regular'}>Собрано</Text>
                        <Text tag={'p'} size='Standard' color={'Invert'} weight={'Regular'}>141/324</Text>
                    </div>
                    <p className={styles.target_goal_text_progress}>progress bar</p>
                </div>
            </div>
        </div>
    )
}