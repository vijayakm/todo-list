import { EditTaskActionType, editTaskReducer, initialState } from './EditTask.reducer';

describe('editTaskReducer', () => {
    it('should handle "update" action', () => {
        const state = editTaskReducer(initialState, {
            type: EditTaskActionType.update,
            payload: { name: 'New Task', buttonText: 'Update' },
        });

        expect(state).toEqual({
            task: 'New Task',
            buttonText: 'Update',
        });
    });

    it('should handle "reset" action', () => {
        const state = editTaskReducer(
            { task: 'Existing Task', buttonText: 'Update' },
            {
                type: EditTaskActionType.reset,
            },
        );

        expect(state).toEqual(initialState);
    });

    it('should handle "updateText" action', () => {
        const state = editTaskReducer(initialState, {
            type: EditTaskActionType.updateText,
            payload: { name: 'Updated Task' },
        });

        expect(state).toEqual({
            task: 'Updated Task',
            buttonText: 'Add',
        });
    });
});
