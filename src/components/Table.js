import React from 'react';

function Table(props){
    return(
        <div className="card shadow mb-4">
            <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Categories</th>
                            <th>Colors</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.row}
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    )

}

export default Table;

