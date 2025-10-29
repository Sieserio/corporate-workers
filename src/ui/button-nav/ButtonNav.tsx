import type {ButtonNavProps} from "./types.ts";
import styles from './ButtonNav.module.scss';
import {Text} from "../text/Text.tsx";

export function ButtonNav({
    active = '',
    text = '',
    children
}:ButtonNavProps) {
    return (
        <button className={`${styles.button} ${styles[active]}`}>
            <div className={styles.button_icon_wrapper}>
                {children}
            </div>
            <Text tag={'p'} size='Standard' color='Main' weight='Medium'>{text}</Text>
        </button>
    )
}