import React, { Component } from 'react'

export class PopTutor extends Component {
    state={
        input:''
    }
    render() {
        var courses = ["math","science","chemistry","physics","magnetics","computer"]
        var tutors = ["math","science","chemistry","physics","magnetics","computer"]
        return (
            tutors.map((tutor, index) =>
            <div className="col-lg-4" style={{textAlign:'center', marginBottom:'30px', cursor:'pointer'}} onClick={()=>{this.props.update(tutor)}}>
                <div style={{height:'250px'}}>
                    <img className="resultCardImg" src={"assets/cs.jpeg"} style={{height:'250px' ,paddingBottom:'0px',objectFit: 'cover', opacity:'1',background:"rgba(0,0,0,1)", borderRadius:'15px'}} alt=""></img>
                </div>
                <div className="centered" style={{background:'white'}}>
            <h6 style={{ fontFamily:'Avenir, sans-serif', fontWeight:'900', margin:'10px'}}>{tutor.toUpperCase()}</h6>
            </div>
            </div>
            )
        )
    }
}

export default PopTutor
