import React from 'react';
import {MoonLoader} from 'react-spinners';
import '../movies.css'


const styles={
    div:{
        position:'absolute',
        
    }
}
export default (props)=> {
    return (
        <div className={props.className}>
            <MoonLoader/>
        </div>
    )
}
