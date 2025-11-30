import styles from "./TaskList.module.scss";
import {Task} from "../task/Task.tsx";
import type {TaskTableProps} from "../task-table/type.ts";

export function TaskList({tasks}: TaskTableProps) {
    return (
        <div className={styles.task_list}>
            {tasks.map((task) => (
                <Task key={task.id} {...task}/>
            ))}
        </div>
    )
}