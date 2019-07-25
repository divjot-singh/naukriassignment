import React from 'react';

export default class Jobcard extends React.Component{
    getdatedifference(date){
        const curdate=new Date();
        date=new Date(date);
        return isNaN(curdate - date) ? "7 days ago" : Math.floor((curdate - date)/(3600000*24))+" days ago";
    }
    render(){
        const job=this.props.job;
        const imgsrc=job.company_logo || "assets/companylogo.png";
        const jobtimestamp=job.timestamp || this.getdatedifference(job.created_at)
        const jobsalary=job.salary || "8-10 lac per annum";
        return(
            <div className="jobcard">
                <div className="jobheader">
                    <div className="jobheaderleft">
                        <h5>{job.title}</h5>
                        <p>{job.company}</p>
                    </div>
                    <div className="jobphotocontainer">
                        <img src={imgsrc} height="40" width="40" alt="Company Logo"></img>
                    </div>
                </div>
                <div className="jobdetail">
                    <p><i className="fa fa-map-marker-alt"></i> {job.location}</p>
                    <p><i className="fa fa-hand-holding-usd"></i>&#8377; {jobsalary}</p>
                </div>
                <p className="jobtimestamp">Posted {jobtimestamp}</p>
            </div>
        );
    }
}