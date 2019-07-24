import React from 'react';
import {Jobcategorycard} from './Jobcategorycard';
import { ProductConsumer } from '../context';

export default class Jobcategories extends React.Component{
    render(){
        const showcount=this.props.showcount;
        return(
            <div className={ showcount ? "jobcategorylisting" : "jobcategory"}>
                
                    {(showcount ? <h5>Jobs By Categories</h5> : "")}
                    <ProductConsumer>
                        {
                            (value) => {
                                return(
                                    <div className="categorycardlisting">{
                                        value.jobcategories.map((category) => {
                                            return (
                                                
                                                    <Jobcategorycard key={category.id} showcount={showcount}> 
                                                        <p className="categorytitle">{category.category}</p>
                                                        {showcount ? <p className="categorycount">{category.count} jobs</p> : ""}
                                                    </ Jobcategorycard>
                                                );
                                                
                                        })}
                                    </div>
                                ); 
                                
                            }                            
                        }
                    </ProductConsumer>
                    
                
            </div>
        );
    }
}