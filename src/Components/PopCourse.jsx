import React, { Component } from 'react'

export class PopCourse extends Component {
    state={
        input:''
    }
    render() {
        var courses = ["math","science","chemistry","physics","magnetics","computer"]
        var tutors = ["math","science","chemistry","physics","magnetics","computer"]
        return (
            courses.map((course, index) =>
            <div className="col-lg-4" style={{textAlign:'center', marginBottom:'30px', cursor:'pointer'}} onClick={(input)=>{this.setState({input}); this.props.update(course)}}>
                <div style={{height:'250px'}}>
                    <img className="resultCardImg" src={"assets/math1.jpeg"} style={{height:'250px' ,paddingBottom:'0px',objectFit: 'cover', opacity:'1',background:"rgba(0,0,0,1)",  borderRadius:'15px'}} alt=""></img>
                </div>
                <div className="centered" style={{background:'white'}}>
            <h6 style={{ fontFamily:'Avenir, sans-serif', fontWeight:'900', margin:'10px'}}>{course.toUpperCase()}</h6>
            </div>
            </div>
            )
        )
    }
}

export default PopCourse
