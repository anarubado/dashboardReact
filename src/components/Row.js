import React, { Component } from 'react';

class Row extends Component{

    constructor(){
        super();
        this.state = {
            products: []
        }
    }

    apiCall(url, handler){
        fetch(url)
            .then(response => response.json())
            .then(data => handler(data))
            //.catch(error => console.log(error))
    }

    products = (data) => {
        this.setState({
            products: data.data.products
        })
    }

    componentDidMount(){
        this.apiCall("http://localhost:3030/api/products", this.products);

    }
    
    render(){

        let products = this.state.products;
        return(
            products.map((product, idx) => {
                return (
                <tr key={ idx }>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>{product.author}</td>
                    <td>{product.category} - {product.subCategory}</td>
                    <td>${product.price}</td>
                    <td>{product.stock}</td>
                </tr>
                )

            })
            
        )

    }
    
}

export default Row;

