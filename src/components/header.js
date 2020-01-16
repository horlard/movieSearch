import React from 'react';


const styles= {
    div:{
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
        <div style={styles.div}>
            <p style={styles.p}>Movie Search</p>
        </div>
    )
}

export default Header;