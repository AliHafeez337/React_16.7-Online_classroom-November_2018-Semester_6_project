import React from 'react';

import '../component3.css';

const Profile = ( props ) => {
    return (
        <div className="container-Fluid">
            <div className="row">
                <div className="col-md-3 col-sm-2 col-xs-1">
                </div>
                <div className="col-md-6 col-sm-8 col-xs-10">
                <strong>Name</strong>
                <br />
                <h3>{this.props.profile.Name}</h3>
                </div>
                <div className="col-md-3 col-sm-2 col-xs-1">
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 col-sm-2 col-xs-1">
                </div>
                <div className="col-md-6 col-sm-8 col-xs-10">
                <strong>Email</strong>
                <br />
                <h3>{this.props.profile.Email}</h3>
                </div>
                <div className="col-md-3 col-sm-2 col-xs-1">
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 col-sm-2 col-xs-1">
                </div>
                <div className="col-md-6 col-sm-8 col-xs-10">
                <strong>Designation</strong>
                <br />
                <h3>{this.props.profile.Designation}</h3>
                </div>
                <div className="col-md-3 col-sm-2 col-xs-1">
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 col-sm-2 col-xs-1">
                </div>
                <div className="col-md-6 col-sm-8 col-xs-10">
                <strong>Classes</strong>
                <br />
                <h3>{this.props.profile.Classes}</h3>
                </div>
                <div className="col-md-3 col-sm-2 col-xs-1">
                </div>
            </div>
        </div>
    )
};

export default Profile;