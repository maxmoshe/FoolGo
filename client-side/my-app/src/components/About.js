import React from 'react'
import {NavLink, Route} from 'react-router-dom'

/* Components */
import AuthorInfo from './AuthorInfo'

function About() {
    return(
<<<<<<< HEAD
        <div className="About">
            <div className="SelectPane">
              <div className="Author">
                  <p>moshe nimrod</p>
              </div>
              <div className="Author">
                  <p>eyal caspi</p>
              </div>
=======
        <div style={{width: 'calc(100% - 470px)', height: '100vw', backgroundColor: 'grey', paddingTop: 50, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1>About Us</h1>
            <p>Ours Staffs</p>
            <div style={{display: 'flex', width: '60%', justifyContent: 'space-around'}}>
            <div style={{height: '20%', width: '30%'}}>
                <img src="https://artzycafe.com/wp-content/uploads/2020/05/Vocations-in-Cooking.jpg" style={{width: '70%', height: 'auto'}}/>
                <h3>nimrod namer</h3>
                <p>nimrod Number 1 Cheff on The Israel State</p>
            </div>
            <div style={{height: '20%', width: '30%'}}>
                <img src="https://artzycafe.com/wp-content/uploads/2020/05/Vocations-in-Cooking.jpg" style={{width: '70%', height: 'auto'}}/>
                <h3>nimrod namer</h3>
                <p>nimrod Number 1 Cheff of The Israel State</p>
>>>>>>> 4781305ea92e453072ddcd67e0d38dcc37f4d91b
            </div>
            <div className="AuthorInfo">
                <AuthorInfo image="https://c8.alamy.com/comp/EPF1YW/nun-with-handgun-isolated-on-white-EPF1YW.jpg"></AuthorInfo>
            </div>
        </div>
    )
}

export default About;