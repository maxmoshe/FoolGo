import React from 'react'

class AuthorInfo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="AuthorImage">
                    <img src={this.props.image}></img>
                </div>
                <div className="AuthorName">
                    <h1>Eyal Kaki</h1>
                </div>
                <div className="AuthorDescription">
                <p>lorem ipsum dolor mit amet lorem ipsum dolor mit amet lorem ipsum dolor mit amet
                lorem ipsum dolor mit amet lorem ipsum dolor mit amet lorem ipsum dolor mit amet
                lorem ipsum dolor mit amet lorem ipsum dolor mit amet lorem ipsum dolor mit amet


                lorem ipsum dolor mit amet lorem ipsum dolor mit amet lorem ipsum dolor mit amet
                lorem ipsum dolor mit amet lorem ipsum dolor mit amet lorem ipsum dolor mit amet
                lorem ipsum dolor mit amet lorem ipsum dolor mit amet lorem ipsum dolor mit amet

                lorem ipsum dolor mit amet lorem ipsum dolor mit amet lorem ipsum dolor mit amet
                lorem ipsum dolor mit amet lorem ipsum dolor mit amet lorem ipsum dolor mit amet
                lorem ipsum dolor mit amet lorem ipsum dolor mit amet lorem ipsum dolor mit amet


                lorem ipsum dolor mit amet lorem ipsum dolor mit amet lorem ipsum dolor mit amet
                lorem ipsum dolor mit amet lorem ipsum dolor mit amet lorem ipsum dolor mit amet
                lorem ipsum dolor mit amet lorem ipsum dolor mit amet lorem ipsum dolor mit amet</p>
                </div>
            </div>
        )
    }
}

export default AuthorInfo;