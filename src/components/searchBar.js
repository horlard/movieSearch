import React from 'react'

import {connect} from 'react-redux';
import {mainSearch} from '../actions';

import '../movies.css'





const Styles={
   
    input : {
        width : '100%',
        padding: '15px',
        borderRadius:'17px',
        outline:'none',
        border: '1px solid rgba(34,36,38,.15)',
        fontFamily: "'Open Sans', sans-serif",
        color:'#909090',

    },
    i : {
        fontSize:'16px',
        color:'#909090',
        position:'absolute',
        right:'7px',
        top:'15px',
        border:'none',
        background:'transparent'
    }
}

class SearchBar extends React.Component {


    state={
        searchTerm:''
    }
    

    onInputChange=e=> {
        this.setState({searchTerm:e.target.value})
        console.log(this.state.searchTerm)
    }

    onSearch=(e)=> {
        e.preventDefault()
        this.props.mainSearch(this.state.searchTerm)
    }


    render() {
        return (
            <form style={Styles.div} onSubmit={this.onSearch} className='form-submit'>
                <input style={Styles.input} placeholder='Search movies...' onChange={this.onInputChange} value={this.state.searchTerm} className='text'/>
                <i className="search icon" style={Styles.i} onClick={this.onSearch}></i>
            </form>
        )
    }
    
}

export default connect(null,{mainSearch})(SearchBar);