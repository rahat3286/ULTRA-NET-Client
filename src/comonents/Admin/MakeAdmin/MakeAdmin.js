import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const MakeAdmin = () => {
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar/>
            </div>
            <div className="col-md-10">
                <div className="container">
                    <h1>this is makeadmin section</h1>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;