import React from 'react'
import {NavLink, Route} from 'react-router-dom'


function About() {
    return(
        <div style={{width: 'calc(100% - 470px)', height: '100vw', backgroundColor: 'grey', paddingTop: 50, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1>About Us</h1>
            <p>Ours Staffs</p>
            <div style={{display: 'flex', width: '60%', justifyContent: 'space-around'}}>
            <div style={{height: '20%', width: '30%'}}>
                <img src="https://artzycafe.com/wp-content/uploads/2020/05/Vocations-in-Cooking.jpg" style={{width: '70%', height: 'auto'}}/>
                <h3>nimrod namer</h3>
                <p>nimrod Number 1 Cheff of The Israel State</p>
            </div>
            <div style={{height: '20%', width: '30%'}}>
                <img src="https://artzycafe.com/wp-content/uploads/2020/05/Vocations-in-Cooking.jpg" style={{width: '70%', height: 'auto'}}/>
                <h3>nimrod namer</h3>
                <p>nimrod Number 1 Cheff of The Israel State</p>
            </div>
            </div>
        </div>
        
    )
}

export default About;