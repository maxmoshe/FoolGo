import React from 'react'
import {NavLink, Route} from 'react-router-dom'

/* Components */
import AuthorInfo from './AuthorInfo'

function About() {
    return(
        <div className="About">
            <div className="SelectPane">
              <div className="Author">
                  <p>moshe nimrod</p>
              </div>
              <div className="Author">
                  <p>eyal caspi</p>
              </div>
            </div>
            <div className="AuthorInfo">
                <AuthorInfo image="https://c8.alamy.com/comp/EPF1YW/nun-with-handgun-isolated-on-white-EPF1YW.jpg"></AuthorInfo>
            </div>
        </div>
    )
}

export default About;