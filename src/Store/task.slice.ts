import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { Task } from '../utils/types';

// Define the entity adapter for tasks
const tasksAdapter = createEntityAdapter<Task>();

// State
type MergeState = {
    currentTask: Partial<Task>;
};

const initialState: MergeState = { currentTask: {} };

const taskSlice = createSlice({
    name: 'tasks',
    initialState: tasksAdapter.getInitialState(initialState),
    reducers: {
        setCurrentTask: (state: MergeState, { payload }: PayloadAction<Task>) => {
            state.currentTask = payload;
        },
        resetCurrentTask: (state: MergeState) => {
            state.currentTask = initialState.currentTask;
        },
        upsertTask: tasksAdapter.upsertOne,
        removeTask: tasksAdapter.removeOne,
    },
});

export default taskSlice.reducer;

// Can create a set of memoized selectors based on the location of this entity state
export const taskSelectors = tasksAdapter.getSelectors<RootState>((state) => state.task);

// Available actions
export const { upsertTask, removeTask, setCurrentTask, resetCurrentTask } =
    taskSlice.actions;
