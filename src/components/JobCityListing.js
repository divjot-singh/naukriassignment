import React from 'react';
import {ProductConsumer} from '../context';

export default class JobCityListing extends React.Component{
    render(){
        return(
            <div className="citylisting">
                <div className="joblistingheader">
                    <img src="assets/icons/Jobs by Location.svg" className="joblistingicon" height="35" width="35"></img>
                    <div style={{flex:'1 0 auto', fontSize:'1em'}}>
                            <h5>Jobs by Cities</h5> 
                    </div>
                    <a style={{fontSize:'0.7em'}} href="javascript:void(0)" className="color-cyan">View All</a>
                </div>
                <div className="joblist">
                        <ProductConsumer>
                            {
                                (value) => {
                                    return Object.keys(value.joblocation).map( (key,index) => {
                                        const src="assets/city_images/"+key.toLowerCase()+".jpg";
                                        return (
                                                    <div className="listcontainer">
                                                        <img src={src} height="100" width="100"></img>
                                                        <p className="cityname">{key}</p>
                                                        <p className="cityjobcount">{value.joblocation[key]} jobs</p>
                                                    </div>
                                                )
                                    } );
                                }
                            }
                        </ProductConsumer>
                </div>
            </div>
        );
    }
}