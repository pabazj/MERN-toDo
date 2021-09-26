import { combineReducers } from 'redux';

import toDoReducer from './reducers/toDo.reducer';

const rootReducer = combineReducers({
    toDo: toDoReducer
});
export default rootReducer;
