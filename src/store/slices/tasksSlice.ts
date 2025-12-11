import type {ITask} from "../../types";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {taskService} from "../../services/MockTaskService.ts";

interface TasksState {
    items: ITask[],
    loading: boolean,
    error: string | null,
}

const initialState: TasksState = {
    items: [],
    loading: false,
    error: null,
}

export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async () => {
        return await taskService.getTasks();
    }
)

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {},
    selectors: {
        getTasks: (state) => state.items
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'ошибка загрузки';
            });
    },
})

export const {getTasks} = tasksSlice.selectors;
export default tasksSlice.reducer;