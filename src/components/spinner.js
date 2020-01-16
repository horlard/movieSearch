import React from 'react';
import {MoonLoader} from 'react-spinners';
import '../movies.css'



export default (props)=> {
    return (
        <div className={props.className}>
            <MoonLoader/>
        </div>
    )
}
