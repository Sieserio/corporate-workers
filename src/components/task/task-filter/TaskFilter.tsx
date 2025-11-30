import styles from "./TaskFilter.module.scss";
import {ButtonNav} from "../../../ui/button-nav/ButtonNav.tsx";
import type {TaskFilterProps} from "./type.ts";

export function TaskFilter({
    activeFilter,
    onChangeFilter
}: TaskFilterProps) {
    return (
        <div className={styles.buttons}>
            <ButtonNav
                active={activeFilter === 'active'}
                text='Активные'
                onClick={()=> onChangeFilter("active")}
            />
            <ButtonNav
                active={activeFilter === 'done'}
                text='Выполненные'
                onClick={()=> onChangeFilter("done")}
            />
        </div>
    )
}