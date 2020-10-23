import React from 'react'
import {NavLink, Route} from 'react-router-dom'

function Register(){
    return(
        <div id="Login" style={{display: 'flex', flexDirection: "column",alignItems: 'center',border: '1px solid #0e86ca', borderRadius: '5px', padding: 10, backgroundColor: 'grey', width: '20%'}}>
            <h3 style={{color: '#065294', textDecoration: 'none'}}>Register</h3>
            <input type="text" placeholder="Email address" style={{width: '70%', height: 30, borderRadius: 3}}></input>
            <input type="password" placeholder="Password" autoComplete="false" style={{width: '70%', height: 30, borderRadius: 3, margin: 5}}></input>
            <button style={{width: '70%', backgroundImage: 'linear-gradient(326deg, #065294 0%, #5f0a87 74%)', border: 'none', color: 'white', height: 30, borderRadius: 3, margin: 5}}>Register</button>
            <NavLink to='login'>
                <a href="google.com" style={{color: "white", textDecoration: 'none',}}>Log in</a>
            </NavLink>
        </div>
    )
}

export default Register;