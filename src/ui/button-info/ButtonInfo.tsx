import type {ButtonInfoProps} from "./type.ts";
import styles from './ButtonInfo.module.scss';

export const ButtonInfo = ({
    children,
    onClick}: ButtonInfoProps) => {
    return (
        <button onClick={onClick} className={styles.button}>
            {children}
        </button>
    )
}