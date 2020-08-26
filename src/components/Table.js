import React from 'react';

import Row from './Row';


function Table(props){
    return(
        <div className="card shadow mb-4">
            <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Author</th>
                            <th>Categories</th>
                            <th>Price</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Row />
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    )

}

export default Table;

