import React, { Component } from 'react'

export class ResultCard extends Component {
    render() {
        return (
            <div>
               {this.props.tutor.courseName} 
            </div>
        )
    }
}

export default ResultCard
