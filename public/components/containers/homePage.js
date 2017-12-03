import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as api from '../../api/index';

class ProductListContainer extends React.Component{
	constructor(props){
		super(props);
		this.showApiResponse=this.showApiResponse.bind(this);
	}
	componentWillMount(){
		api.getProductData();
	}
	showApiResponse(){
		if(this.props.productData && this.props.productData.payload){
			return this.props.productData.payload.results.map((data,index)=>{
				return(
						<li key={index} className="col-lg-3 col-md-4 col-xs-6 min-height-250 mb-15" >
							<a href={data.relative_url}>
								<img className="img-responsive  height-200" src={data.image.vehicle_images[0].image} alt={data.image.vehicle_images[0].tag} />
								<div className="title bikeDescWrapper text-center">{data.display_name}</div>
								<div className="text-bold text-center">  <span class="font18">₹</span>&nbsp;<span class="font18">{data.display_price}</span></div>
							</a>
						</li>
					)
			})
		}else{
			return '';
		}
	}
	render(){
		return(
			<div className="children">
				<h1 className="font24 text-x-black text-center">Vehicle Search API</h1>
				<ul className="container">{this.showApiResponse()}</ul>
			</div>
		)
	}
}


function mapStateToProps(store) {
	console.log("store",store)
	return{
		productData:store.productState.productData	
	}
}

export default connect(mapStateToProps)(ProductListContainer);	