import { combineReducers } from 'redux';

// Reducers
import productReducer from './product-reducer';

const reducers=combineReducers({
	productState:productReducer
})

export default reducers;


