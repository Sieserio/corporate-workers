import styles from "./TaskTable.module.scss";
import {Text} from "../../../ui/text/Text.tsx";
import {TaskList} from "../task-list/TaskList.tsx";
import type {ITask} from "../../../types";

interface TaskTableProps {
    tasks: ITask[];
}

export function TaskTable({tasks}: TaskTableProps) {
    return (
        <div className={styles.table}>
            <div className={styles.table__title}>
                <div></div>
                <Text tag={'p'} size={'Small'} color={'Main'} weight={'Light'}>Описание</Text>
                <Text tag={'p'} size={'Small'} color={'Main'} weight={'Light'}>Награда</Text>
                <Text tag={'p'} size={'Small'} color={'Main'} weight={'Light'}>Прогресс</Text>
                <Text tag={'p'} size={'Small'} color={'Main'} weight={'Light'}>Время</Text>
            </div>

            <TaskList tasks={tasks}/>
        </div>
    )
}