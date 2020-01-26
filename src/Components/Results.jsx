import React, { Component } from 'react'
import ResultCard from './ResultCard'
export class Results extends Component {
    render() {
        return (
            <div>
                <h6 className="col-lg-10" style={{ paddingBottom:"30px", margin:"auto", fontFamily:'Avenir, sans-serif', fontWeight:'900', fontSize:'30px'}}>
                    {
                        this.props.input?
                        this.props.tutors.length+" Tutors for \""+this.props.input+"\"":
                        "Tutors"}
                </h6>
                {this.props.tutors.map((tutor, index) =>
                <ResultCard input={this.props.input} tutor={tutor} key={index}/>
                )}
            </div>
        )
    }
}

export default Results
