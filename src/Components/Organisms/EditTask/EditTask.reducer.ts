type ButtonText = 'Add' | 'Update';

// Edit State
type EditTaskState = {
    task: string;
    buttonText: ButtonText;
};

// Initial State
export const initialState: EditTaskState = { task: '', buttonText: 'Add' };

// Action Edit State
export const EditTaskActionType = {
    update: 'update',
    reset: 'reset',
    updateText: 'updateText',
} as const;

export type EditTaskActionType = keyof typeof EditTaskActionType;

// Available EditTaskAction
export type EditTaskAction =
    | { type: 'update'; payload: { name: string; buttonText: ButtonText } }
    | { type: 'reset' }
    | { type: 'updateText'; payload: { name: string } };

// Edit Task Reducer
export const editTaskReducer = (
    state: EditTaskState,
    action: EditTaskAction,
): EditTaskState => {
    switch (action.type) {
        case EditTaskActionType.update: {
            return {
                task: action.payload.name,
                buttonText: action.payload.buttonText,
            };
        }
        case EditTaskActionType.reset: {
            return initialState;
        }
        case EditTaskActionType.updateText: {
            return {
                task: action.payload.name,
                buttonText: state.buttonText,
            };
        }
        default: {
            throw Error('Unknown Action');
        }
    }
};
