import { createSelector } from '@reduxjs/toolkit';
import { shallowEqual } from 'react-redux';

import { taskSelectors } from '../Store/task.slice';

// memoize options
const memoizeOptions = {
    memoizeOptions: {
        resultEqualityCheck: shallowEqual,
    },
};

export const selectTaskIds = createSelector(
    [taskSelectors.selectIds],
    (ids) => ids as string[],
    memoizeOptions,
);
