import React from 'react';
import {jobdata,joblocation,jobcategories, userdetails} from './data';

const ProductContext = React.createContext();

class ProductProvider extends React.Component{
    state={
        jobdata:[],
        joblocation:{},
        jobcategories:[],
        userdetails:{}
    }
    setStateUsingApi(){
        const that=this;
        fetch('assets/data.json').then(function(result){
            result.json()
            .then((data) => {
                that.setState( () => {
                    return {
                        jobdata:[...data,...jobdata],
                        joblocation:joblocation,
                        jobcategories:jobcategories,
                        userdetails:userdetails
                    }

                })
            }).catch( err => {
                that.setStateUsingData();
            })
        }).catch(err => {
            that.setStateUsingData();
        })
    }

    setStateUsingData(){
        this.setState( () =>{
            return {
                jobdata:jobdata,
                joblocation:joblocation,
                jobcategories:jobcategories,
                userdetails:userdetails
            }
        } );
    }
    componentDidMount(){
        this.setStateUsingData.bind(this);
        this.setStateUsingApi.bind(this);
        this.setStateUsingApi();
    }
    render(){
        return(
        <ProductContext.Provider value={{...this.state}}>{this.props.children}</ProductContext.Provider>
        );
    }
}
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};