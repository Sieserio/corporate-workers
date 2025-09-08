import type {TextProp} from "./type.ts";
import styles from './Text.module.scss';

export const Text = ({
    children,
    tag: Tag = 'div',
    size = 'Standard',
    weight = 'Regular',
    color = 'Main'}: TextProp) => {
    const className = `${styles.text} ${styles[`size${size}`]} ${styles[`weight${weight}`]} ${styles[`color${color}`]}`
    return (
        <Tag className={className}> {children} </Tag>
    )
}