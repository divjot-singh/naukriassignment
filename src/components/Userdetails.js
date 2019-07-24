import React from 'react';

export default class Userdetails extends React.Component{
    render(){
        return(
            <div className="userdetails">
                <div className="container">
                    <div className="row">
                        <div className="col-half col-sm-6 left-col">
                            <p className="username">Rishabh Singh</p>
                            <p className="userdata">12th Pass&nbsp;&nbsp;|&nbsp;&nbsp;Fresher</p>
                        </div>
                        <div className="col-half col-sm-6">
                            <img src="assets/profileimg.jpg" className="profileimg"></img>
                        </div>
                    </div>
                    <div className="row form-group searchbox-container">
                        <i className="fa fa-search"></i>
                        <input type="text" className="form-control searchbox" placeholder="Search Jobs" />
                    </div>
                </div>
            </div>
        );
    }
}