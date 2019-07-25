import React from 'react';
import {ProductConsumer} from '../context';
import Jobcard from './Jobcard';
import Jobcategory from './Jobcategories';
export default class JobListing extends React.Component{
    render(){
        const type=this.props.jobtype;
        return(
                <div className="joblisting">
                    <div className="joblistingheader">
                        <img alt="header" src={(type && type === "location") ? "assets/icons/Jobs Near You.svg" : "assets/icons/Jobs For You.svg" } className="joblistingicon" height="35" width="35"></img>
                        <div>
                            <h5>Jobs {(type && type === "location") ? "Near" : "For" } You</h5>
                            {(type && type === "location") ? <p>in and around &nbsp;<span className="color-cyan">Cupertino and Noida</span></p> : <p>Based on your &nbsp;<span className="color-cyan">Preferences</span></p> } 
                        </div>
                        <a href="javaScript:void(0);" className="color-cyan">View</a>
                        
                    </div>
                    {
                            (type && type === "preference") ? <Jobcategory /> : ""
                        }
                    <div className="joblist">
                        <ProductConsumer>
                            {
                                (value) => {
                                    return value.jobdata.map((job) => {
                                        if(type === "location" && (job.location.indexOf("Noida") > -1 || job.location.indexOf("Cupertino") > -1) ){
                                            return <Jobcard key={job.id} job={job} />
                                        }
                                        else if(type === "preference" && job.title.indexOf("Developer") > -1){
                                            return (<Jobcard key={job.id} job={job} />);
                                        }
                                    });
                                }
                            }
                        </ProductConsumer>
                    </div>
                </div>
               );
    }
}