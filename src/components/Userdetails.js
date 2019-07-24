import React from 'react';
import { ProductConsumer } from '../context';

export default class Userdetails extends React.Component{
    render(){
        return(
            <div className="userdetails">
                <div className="container">
                    
                    <ProductConsumer>
                        {
                            (value) => {
                                const userdata=value.userdetails;
                                const imgsrc="assets/"+userdata.photo;
                                return (
                                    <div className="row">
                                    <div className="col-half col-sm-6 left-col">
                                        <p className="username">{userdata.name}</p>
                                        <p className="userdata">{userdata.education}&nbsp;&nbsp;|&nbsp;&nbsp;{userdata.experience}</p>
                                    </div>
                                    <div className="col-half col-sm-6">
                                        <img src={imgsrc} className="profileimg" alt="Profile"></img>
                                    </div>
                                    </div>
                                );
                            }
                        }
                    </ProductConsumer>
                        
                    
                    <div className="row form-group searchbox-container">
                        <i className="fa fa-search"></i>
                        <input type="text" className="form-control searchbox" placeholder="Search Jobs" />
                    </div>
                </div>
            </div>
        );
    }
}