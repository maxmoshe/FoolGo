import React from 'react'
import {NavLink, Route} from 'react-router-dom'

function Register(){
    return(
        <div id="Login" style={{display: 'flex', flexDirection: "column", backgroundColor: '#313640', alignItems: 'center', justifyContent: 'space-around', borderRadius: '10px', padding: 10, width: '30vw', minHeight: '35vh', minWidth: 300}}>
            <h3 style={{textDecoration: 'none', fontSize: 25}}>Registrar</h3>
            <div style={{display: 'flex', height: 70, flexDirection: "column", justifyContent: 'space-between', alignItems: 'center', width: '70%'}}>
            <input type="text" className="login-input" placeholder="Email address"></input>
            <input type="password" placeholder="Password" autoComplete="false" className="login-input" style={{margin: 5}}></input>
            </div>
            <div style={{width: '70%', display: 'flex', flexDirection: 'column', alignItems: 'center', height:55, justifyContent: 'space-between'}} >
            <button style={{width: '100%', backgroundImage: 'linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)', border: 'none', color: 'white', height: 30, borderRadius: 3, fontSize: 20}}>Register</button>
            <NavLink to="/login">
                <a style={{color: "white", fontSize: 14}}>Login</a>
            </NavLink>
            </div>
        </div>
    )
}

export default Register;