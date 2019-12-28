import React from 'react';
import {Link} from 'react-router-dom';


import OmdbApi from '../api/omdbApi';
import '../movies.css';


const key='80748dc0';
class MoviesDetails extends React.Component {

    state={
        response:[]
    }

    async componentDidMount() {
        const response=await OmdbApi.get('/',{
            params: {
                i:this.props.match.params.id,
                apikey:key
            }
        })

        console.log(response)
        this.setState({response})
        console.log(this.state)

        
    }
    render() {
        const {Poster}=this.state.response
        return (
           <div className='detailWrap'>
               
               <div className='detailContainer'>
                   <div className='image'>
                   <img src={Poster} className='photo'/>
                   </div>
               </div>
               
           </div> 
        )
    }
}

export default MoviesDetails;


