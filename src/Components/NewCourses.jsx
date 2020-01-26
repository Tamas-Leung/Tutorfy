import React, { Component } from 'react'

export class NewCourses extends Component {

    state={
        input:''
    }
    render() {
        var courses = ["math","science","chemistry"]
        return (

            <div className="col-lg-10" style={{paddingTop:'100px', margin:'auto'}}>
                <h6 style={{ fontFamily:'Avenir, sans-serif', fontWeight:'900', fontSize:'30px'}}>New Courses</h6>
                <div className="row">
                {
                    courses.map((course, index) => 
                        <div className="col-lg-4" style={{textAlign:'center', cursor:'pointer'}} onClick={()=>{this.props.update(course)}}>
                           <div style={{height:'240px'}}>
                                <img className="resultCardImg" src={"assets/math.jpeg"} style={{height:'240px' ,paddingBottom:'0px',objectFit: 'cover', opacity:'1',background:"rgba(0,0,0,1)", borderRadius:'15px'}} alt=""></img>
                            </div>
                            <div className="centered" style={{background:'white'}}>
                        <h6 style={{ fontFamily:'Avenir, sans-serif', fontWeight:'900', margin:'10px'}}>{course.toUpperCase()}</h6>
                        </div>
                        </div>
                    )
                }
            </div>
            </div>
        )
    }
}

export default NewCourses
