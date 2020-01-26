import React, { Component } from 'react'
import ResultCard from './ResultCard'
export class Results extends Component {
    render() {
        return (
            <div>
                {this.props.tutors.map((tutor, index) =>
                <ResultCard tutor={tutor}/>
                )}
            </div>
        )
    }
}

export default Results
