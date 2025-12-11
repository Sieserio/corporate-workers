import {Text} from "../../../ui/text/Text.tsx";
import styles from './MainProfileSection.module.scss';
import {useEffect, useMemo, useState} from "react";
import {TaskFilter} from "../../task/task-filter/TaskFilter.tsx";
import {TaskTable} from "../../task/task-table/TaskTable.tsx";
import {ProfileCarma} from "../../profile/profile-carma/ProfileCarma.tsx";
import {ProfileTargetGoal} from "../../profile/profile-target-goal/ProfileTargetGoal.tsx";

import {useAppDispatch, useAppSelector} from "../../../store/hooks.ts";
import {fetchTasks} from "../../../store/slices/tasksSlice.ts";

export function MainProfileSection() {
    const dispatch = useAppDispatch();
    const { items: tasks, loading, error } = useAppSelector((state) => state.tasks);
    const [activeFilter, setActiveFilter] = useState('active');

    useEffect(()=>{
        dispatch(fetchTasks());
    }, [dispatch])

    const filteredTasks = useMemo(()=> {
        if (activeFilter === 'active') {
            return tasks.filter(task => task.state === 'active');
        } else {
            return tasks.filter(task => task.state === 'done' || task.state === 'cancel');
        }
    }, [tasks,activeFilter]);

    if (loading) {
        return <div>Загрузка задач...</div>;
    }

    if (error) {
        return <div>Ошибка: {error}</div>;
    }

    const handleChangeFilter = (filter: string) => {
        setActiveFilter(filter);
    }

    return (
        <div className={styles.section}>
            <div className={styles.container_main}>
                <Text tag={'h2'} size={'Large'} color={'Main'} weight={'Bold'}>Цели</Text>
                <TaskFilter activeFilter={activeFilter} onChangeFilter={handleChangeFilter}/>
                <TaskTable tasks={filteredTasks}/>
            </div>

            <div className={styles.container_aside}>
                <ProfileCarma/>
                <ProfileTargetGoal/>
            </div>

        </div>
    )
}