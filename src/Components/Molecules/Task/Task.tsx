import React, { useCallback } from 'react';
import { Pressable, Text, View } from 'react-native';

import { useDispatch, useSelector } from '../../../store';
import {
    removeTask,
    resetCurrentTask,
    setCurrentTask,
    taskSelectors,
} from '../../../Store/task.slice';
import { styles } from './Task.styles';
import { TaskProps } from './Task.types';

const Task = (props: TaskProps) => {
    // Props
    const { id } = props;
    // Selectors
    const task = useSelector((state) => taskSelectors.selectById(state, id));
    const isCurrentTask = useSelector((state) => state.task.currentTask.id === id);
    const dispatch = useDispatch();

    // Functions
    const changeCurrentTask = useCallback(() => {
        if (task == null) return;

        if (isCurrentTask) {
            dispatch(resetCurrentTask());
        } else {
            dispatch(setCurrentTask(task));
        }
    }, [task, isCurrentTask]);

    const remove = useCallback(() => {
        if (isCurrentTask) {
            dispatch(resetCurrentTask());
        }
        dispatch(removeTask(id));
    }, [isCurrentTask, id]);

    // Component
    return task != null ? (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Pressable
                    onPress={changeCurrentTask}
                    style={isCurrentTask ? styles.selectedCircular : styles.circular}
                ></Pressable>
                <Text style={styles.itemText}>{task.name}</Text>
            </View>
            <Pressable style={styles.remove} onPress={remove}>
                <Text>Remove</Text>
            </Pressable>
        </View>
    ) : null;
};

export default React.memo(Task);
Task.displayName = 'Tasks';
