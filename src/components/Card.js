import React, { Component } from 'react';

class Card extends Component{

    constructor(props){
        super(props);
        this.state = {
			metrics: []
        }
    }

    apiCall(url, handler){
        fetch(url)
            .then(response => response.json())
            .then(data => handler(data))
            .catch(error => console.log(error))
    }

    handler = (data) => {
		
        this.setState({
			metrics: data.data.metrics
        })
    }

    componentDidMount(){
		this.apiCall("http://localhost:3030/api/info", this.handler);
        
	} 
	
	render(){

		let metrics = this.state.metrics;

		return(
			metrics.map((metric, idx) => {
				return(
					<div className="col-md-4 mb-4" key={idx}>
						<div className="card border-left-primary shadow h-100 py-2">
							<div className="card-body">
								<div className="row no-gutters align-items-center">
									<div className="col mr-2">
										<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{ metric.title}</div>
										<div className="h5 mb-0 font-weight-bold text-gray-800">{metric.value}</div>
									</div>
									<div className="col-auto">
										<i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
									</div>
								</div>
							</div>
						</div>
					</div>

				)

			})
			
		)

	}
}
		

export default Card;