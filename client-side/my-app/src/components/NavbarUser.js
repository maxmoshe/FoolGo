import React from "react";
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';

class NavbarUser extends React.Component{
    constructor(){
        super();
        this.state = {
        }
    }
    render(){
        return(
            <div className='NavbarUser' style={{width: 55, display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
                <img src='https://i.imgur.com/lADm7s1.jpg' style={{width:35, height: 35, borderRadius: '100%'}}/>
                <span className='dropdown-caret'></span>
                <div id="navbar-dropdown" style={{position: "absolute", display: 'flex', flexDirection: 'column', width: 175, backgroundColor: "rgb(49, 54, 64)", right: 0, border: '1px solid grey', top:50, borderRadius: 5, padding: "10px 0 10px 0"}}>
                    <div style={{borderBottom: '1px solid grey', height: 45, fontSize: 18}}>
                        <span>Logged in as &nbsp;</span>
                        <span style={{fontWeight: 'bold'}}>PavSkanko</span>
                    </div>
                    <span className="dropdown-text">My Profile</span>
                    <span className="dropdown-text">My Legal Complaints</span>
                    <span className="dropdown-text">Logout</span>
                </div>
            </div>
        )
    }
}
export default NavbarUser;