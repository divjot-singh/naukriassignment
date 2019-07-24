import React from 'react';
import {jobdata,joblocation,jobcategories, userdetails} from './data';

const ProductContext = React.createContext();

class ProductProvider extends React.Component{
    state={
        jobdata:jobdata,
        joblocation:joblocation,
        jobcategories:jobcategories,
        userdetails:userdetails
    }
    componentDidMount(){
        fetch('https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823',{mode:'no-cors'}).then(function(result){
            console.log(result);
        })
    }
    render(){
        return(
        <ProductContext.Provider value={{...this.state}}>{this.props.children}</ProductContext.Provider>
        );
    }
}
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};