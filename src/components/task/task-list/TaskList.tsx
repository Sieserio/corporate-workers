import styles from "./TaskList.module.scss";
import {Task} from "../task/Task.tsx";
import type {ITask} from "../../../types";

interface TaskListProps {
    tasks: ITask[];
}

export function TaskList({tasks}: TaskListProps) {
    return (
        <div className={styles.task_list}>
            {tasks.map((task) => (
                <Task key={task.id} {...task}/>
            ))}
        </div>
    )
}