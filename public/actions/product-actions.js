import * as types from '../actions/action-types';

export function getProductSearch(data) {
	console.log("product-action", data);
  return {
    type: types.GET_PRODUCT_SEARCH,
    data
  };
}