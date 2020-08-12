import React from 'react';

import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Card from './Card'
import Box from './Box';
import Category from './Category';
import Table from './Table';
import Row from './Row';
import Footer from './Footer';

// Recordar pasarle la propiedad key a cada componente que se repita cuando estos se iteran.
// .map tiene como segundo parametro un indice. Este puede servir para la propiedad key. Dentro del div que encapsula al componente, agregamos el atributo.
// Recordar reemplazar class por className

var nums = [1,2,3,4,5,6];
  
var content =
  <div>
    <div className="text-center">
      <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src="/images/product_dummy.svg" alt="dummy"/>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
    <a target="_blank" rel="nofollow" href="/">View product detail</a>
  </div>;

var content1 = 
  <div className="row">
    {nums.map(function(num, idx){
      return (
        <div className="col-lg-6 mb-4" key={idx}>         
          <Category />
        </div>
      )
    })}
</div>;

function App() {

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
              <Card />
              <Card />
            </div>

            <div className="row">
              <Box content={content}/>
              <Box content={content1}/>
            </div>

            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>
            </div>

            <Table row={<Row />}/>

          </div>
        </div>
        <Footer />
      </div>      
    </div>

  );
}

export default App;
