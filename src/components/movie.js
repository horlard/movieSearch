import React from 'react'
import {Link} from 'react-router-dom';
import '../movies.css';

const Movie=(props)=> {
    console.log(props)
    const {Year,Poster,Title,imdbID}=props.movie
    return (
        <div className='movieWrap'>
            <Link to={`/movie/${imdbID}`}>
                 <img src={Poster} className='photo'/>
            </Link>
               
               <div className='info'>
                   <div className='header'>
                       Title:
                       <small>{Title}</small>
                   </div>
                   <div className='header'>
                       Year:
                       <small>{Year}</small>
                   </div>

               </div>
           
        </div>
    )
}

export default Movie;