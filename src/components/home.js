import React from 'react';


import SearchBar from './searchBar';
import Movies from './movies';

import {connect} from 'react-redux';
import {defaulSearch} from '../actions'



const key='80748dc0';



class Home extends React.Component {
    
    componentDidMount(){
        this.props.defaulSearch()
    }

    
    render() {
        
        return (
            <div>
                <SearchBar/>
                <Movies/>
            </div>
                
            
        )
    }
} 

export default connect(null,{defaulSearch})(Home);