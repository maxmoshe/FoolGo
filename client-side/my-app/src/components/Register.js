import React from 'react'

function Register(){
    return(
        <div id="Login" style={{display: 'flex', flexDirection: "column",alignItems: 'center',border: '1px solid #0e86ca', borderRadius: '5px', padding: 10, backgroundColor: 'grey', width: '20%'}}>
            <h3 style={{color: '#065294', textDecoration: 'none'}}>Register</h3>
            <input type="text" placeholder="Email address" style={{width: '70%', height: 30, borderRadius: 3}}></input>
            <input type="password" placeholder="Password" autoComplete="false" style={{width: '70%', height: 30, borderRadius: 3, margin: 5}}></input>
            <button style={{width: '70%', backgroundColor: "#065294", border: 'none', color: 'white', height: 30, borderRadius: 3, margin: 5}}>Register</button>
            <a href="google.com" style={{color: "white", textDecoration: 'none', fontSize: 14}}>Log in</a>
        </div>
    )
}

export default Register;