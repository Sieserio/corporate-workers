import type {ITask} from "../types";
import {initialTasks} from "../data/tasks.ts";

class MockTaskService {
    private tasks: ITask[] = [...initialTasks];

    async getTasks(): Promise<ITask[]> {
        console.log("Getting tasks...");
        return [...this.tasks]
    }
}

export const taskService = new MockTaskService()