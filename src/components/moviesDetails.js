import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


import {idSearch} from '../actions';
import Spinner from './spinner';



import '../movies.css';




class MoviesDetails extends React.Component {

    componentDidMount(){
        this.props.idSearch(this.props.match.params.id)
    }

    
    render() {
        const {result}=this.props
        if (result.length===0) {
            return (
                <Spinner className='moonLoad'/>
            )
        }
        return (
           <div className='detailWrap'>
               <Link to='/'>
                    <i className="arrow left icon"></i>
                </Link>
               <div className='detailContainer'>
                   <div className='image'>
                        <img src={result.Poster} className='photo'/>
                   </div>
                   <div className='details'>
                       <h2>
                           Title:
                           <span>{result.Title}</span>
                       </h2>
                       <h2>
                           Year:
                           <span>{result.Year}</span>
                       </h2>
                       <h2>
                           Rated:
                           <span>{result.Rated}</span>
                       </h2>
                       <h2>
                           Released:
                           <span>{result.Released}</span>
                       </h2>
                       <h2>
                           Runtime:
                           <span>{result.Runtime}</span>
                       </h2>
                       <h2>
                           Directors:
                           <span>{result.Directors}</span>
                       </h2>
                       <h2>
                           Actors:
                           <span>{result.Actors}</span>
                       </h2>
                       <h2>
                           Genre:
                           <span>{result.Genre}</span>
                       </h2>
                       <h2>
                           Writers:
                           <span>{result.Writers}</span>
                       </h2>
                       <h2>
                           Plot:
                           <span>{result.Plot}</span>
                       </h2>
                   </div>
               </div>
               
           </div> 
        )
    }
}

const mapStateToProps=state=> {
    return {result:state.IdSearch.result}
}

export default connect(mapStateToProps,{idSearch})(MoviesDetails);


