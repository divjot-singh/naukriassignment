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
    render(){
        return(
        <ProductContext.Provider value={{...this.state}}>{this.props.children}</ProductContext.Provider>
        );
    }
}
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};