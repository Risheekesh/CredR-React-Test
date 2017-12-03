import axios from 'axios';
import {getProductSearch} from '../actions/product-actions';
import store from '../store';

export function getProductData(){
	return axios.get("https://api.credr.com/v1/product/search/?q=eyJwYWdlIjoxLCJjdXJyZW50X2NpdHlfaWQiOjJ9").then(response=> {
		store.dispatch(getProductSearch(response.data));
		return response;
	})
}
