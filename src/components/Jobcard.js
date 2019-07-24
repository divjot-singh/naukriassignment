import React from 'react';

export default class Jobcard extends React.Component{
    render(){
        const job=this.props.job;
        return(
            <div className="jobcard">
                <div className="jobheader">
                    <div className="jobheaderleft">
                        <h5>{job.title}</h5>
                        <p>{job.company}</p>
                    </div>
                    <div className="jobphotocontainer">
                        <img src="assets/companylogo.png" height="40" width="40" alt="Company Logo"></img>
                    </div>
                </div>
                <div className="jobdetail">
                    <p><i className="fa fa-map-marker-alt"></i> {job.location}</p>
                    <p><i className="fa fa-hand-holding-usd"></i>&#8377; {job.salary}</p>
                </div>
                <p className="jobtimestamp">Posted {job.timestamp}</p>
            </div>
        );
    }
}