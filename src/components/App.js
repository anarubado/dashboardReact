import React, {Component} from 'react';

import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Card from './Card'
import Box from './Box';
import Category from './Category';
import Table from './Table';
import Footer from './Footer';

//import PropTypes from 'prop-types';

// Recordar pasarle la propiedad key a cada componente que se repita cuando estos se iteran.
// .map tiene como segundo parametro un indice. Este puede servir para la propiedad key. Dentro del div que encapsula al componente, agregamos el atributo.
// Recordar reemplazar class por className


class App extends Component {

  constructor(){
    super();
    this.state = {
        product: {}
    }
  }
  apiCall(url, handler){
    fetch(url)
        .then(response => response.json())
        .then(data => handler(data))
        .catch(error => console.log(error))
  }

  lastProduct = (data) => {
    this.setState({
        products: data.data.lastProduct
    })
  }

  componentDidMount(){
    this.apiCall("http://localhost:3030/api/info", this.lastProduct);
  }


  render(){
    let lastProduct = this.state.lastProduct;
    return (
      <div id="wrapper">      
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />
            <div className="container-fluid">
  
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
              </div>
  
              <div className="row">
                <Card />
              </div>
  
              <div className="row">
                <Box>
                  <div className="text-center">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src="/images/product_dummy.svg" alt="dummy"/>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                  <a target="_blank" rel="nofollow" href="/">View product detail</a>
                </Box>
  
                <Box>
                  <div className="row">
                    <div className="col-lg-6 mb-4">
                      <Category />
                    </div>
                  </div>
                </Box>
  
              </div>
  
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>
              </div>
  
              <Table />
  
            </div>
          </div>
          <Footer />
        </div>      
      </div>
  
    );

  }
  
}

// Aca va la config para propTypes
// MiComponente.propTypes = {
//  nombreDeLaProp: PropTypes.array
//}

// MiComponente.defaultProps = {}

export default App;
