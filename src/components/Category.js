import React, {Component} from 'react';

class Category extends Component{
    constructor(){
        super();
        this.state = {
			categories: []
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
			categories: data.data.categories
        })
    }

    componentDidMount(){
		this.apiCall("http://localhost:3030/api/info", this.handler);
        
	} 
    render(){
        let categories = this.state.categories;
        return(
            categories.map((category, idx) => {
                return(
                    <div className="card bg-info text-white shadow" key={idx}>
                        <div className="card-body">
                            {category.title}
                        </div>
                    </div>
                )               

            })            
        )
    }    

}

export default Category;