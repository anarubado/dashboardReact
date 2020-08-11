import React from 'react';

import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Card from './Card'
import Box from './Box';
import Category from './Category';
import Footer from './Footer';

// Recordar pasarle la propiedad key a cada componente que se repita cuando estos se iteran.
// .map tiene como segundo parametro un indice. Este puede servir para la propiedad key. Dentro del div que encapsula al componente, agregamos el atributo.
// Recordar reemplazar class por className

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
              <Box />
              <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
                    </div>
                    <div className="card-body">
                      <div className="row">                        
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                      </div>
                    </div>
                </div>
              </div>
            </div>

          </div>

        </div>
        <Footer />

      </div>
      
    </div>

  );
}

export default App;
