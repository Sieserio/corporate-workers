import styles from "./ProfileCarma.module.scss";
import {Text} from "../../../ui/text/Text.tsx";
import IconCarma from "../../../assets/images/icons/ui/carma.svg";

export function ProfileCarma() {
    return (
        <div className={styles.carma}>
            <Text tag={'h3'} size={'Title'} color={'Main'} weight={'Semibold'}>Общая карма</Text>
            <Text tag={'p'} size='Standard' color={'Main'} weight={'Regular'}>Koffein, г. Нальчик, ул. Ленина 145</Text>
            <div className={styles.carma_coin}>
                <IconCarma className={styles.icon}/>
                <Text tag={'p'} size={'Large'} color={"Main"} weight={'Bold'}>2300</Text>
            </div>
            <Text tag={'h3'} size={'Title'} color={'Invert'} weight={'Semibold'}>Конкурс месяца</Text>
        </div>
    )
}