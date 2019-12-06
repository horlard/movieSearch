import React from 'react';


const styles= {
    container:{
        width:'100%',
        background:'#000'
    },
    p : {
        textAlign:'center',
        color:'#fff',
        fontSize:'20px',
        padding:'10px 0',
        fontFamily: "'Open Sans', sans-serif"
    }
}
const Header=()=>{
    return (
        <div style={styles.container}>
            <p style={styles.p}>moviesSearch</p>
        </div>
    )
}

export default Header;