import React from 'react';
import Movie from './movie';
import {connect} from 'react-redux';
import {defaulSearch} from '../actions';
import Spinner from './spinner';

import '../movies.css';

const Movies=(props)=> {
    console.log(props.searchResult)
    return (
        <div className='moviesWrap'>
            <div className='moviesContainer'>

                
                {
                    props.searchResult.length===0 ? <Spinner className='moonLoader'/> :
                    props.searchResult.map((response,i)=> {
                        return (
                            <Movie movie={response} key={i}/>
                        )
                    })
                    
                }
                
            </div>
        </div>
    )
}


const mapStateToProps=state=> {
    return {searchResult:state.ResultReducer.result}
}
export default connect(mapStateToProps,{defaulSearch})(Movies);