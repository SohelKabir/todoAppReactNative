import * as types from 'app/store/actions/types';
import createReducer from 'app/lib/createReducer';

const initialState = [];

export const todosReducer = createReducer(initialState, {
  [types.SET_TODOS](state, action) {
    return {
      ...state,
      todos: action.todos,
    };
  },
});
