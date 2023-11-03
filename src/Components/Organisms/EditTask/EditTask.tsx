import { nanoid } from '@reduxjs/toolkit';
import React, { useEffect, useReducer } from 'react';
import { Dimensions, Pressable, Text, View } from 'react-native';
import TextInput from 'react-native-text-input-interactive';

import { useDispatch, useSelector } from '../../../store';
import { upsertTask } from '../../../Store/task.slice';
import { EditTaskActionType, editTaskReducer, initialState } from './EditTask.reducer';
import { styles } from './EditTask.styles';

// Const
const ADD = 'Add';
const UPDATE = 'Update';

const EditTask = () => {
    // States
    const [editState, editDispatch] = useReducer(editTaskReducer, initialState);

    // Selectors
    const dispatch = useDispatch();
    const currentTask = useSelector((state) => state.task.currentTask);

    // Dimensions of screen
    const { width: ScreenWidth } = Dimensions.get('screen');
    
    // const 
    const isAdd = editState.buttonText === ADD;
    const placeholder = isAdd ? "New Task" : "";
    
    // use Effect
    useEffect(() => {
        if (currentTask != null && currentTask.name != null) {
            editDispatch({
                type: EditTaskActionType.update,
                payload: { name: currentTask.name, buttonText: UPDATE },
            });
        } else {
            editDispatch({ type: EditTaskActionType.reset });
        }
    }, [currentTask]);

    // Functions
    const editTask = () => {
        if (editState.task === '') return;
        const id = isAdd ? nanoid() : currentTask.id!;
        dispatch(
            upsertTask({
                name: editState.task,
                id,
            }),
        );
        if (isAdd) {
            editDispatch({ type: EditTaskActionType.reset });
        }
    };

    // Component
    return (
        <View style={styles.textBoxWrapper}>
            <TextInput
                textInputStyle={{
                    width: ScreenWidth * 0.7,
                    color: '#002333',
                }}
                placeholder={placeholder}
                onChangeText={(text) =>
                    editDispatch({
                        type: EditTaskActionType.updateText,
                        payload: { name: text },
                    })
                }
                value={editState.task}
            />
            <Pressable style={styles.btn} onPress={editTask}>
                <Text style={styles.textBtn}>{editState.buttonText}</Text>
            </Pressable>
        </View>
    );
};

export default EditTask;
EditTask.displayName = 'EditTask';
