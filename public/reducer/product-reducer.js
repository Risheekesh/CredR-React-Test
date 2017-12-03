 import * as types from '../actions/action-types';

 const initialState={
 	productData:[]
 };

 const productReducer=(state=initialState,action)=>{
 	switch(action.type){
 		case types.GET_PRODUCT_SEARCH:
 			return Object.assign({},state,{productData:action.data});
 	}
 	return state;
 }

 export default productReducer;