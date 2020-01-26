import React, { Component } from 'react'
import PopTutor from './PopTutor'
import PopCourse from './PopCourse'

export class PopularItems extends Component {
    render() {
        var courses = ["math","science","chemistry","physics","magnetics","computer"]
        var tutors = ["math","science","chemistry","physics","magnetics","computer"]
        return (
            <div className="col-lg-10" style={{margin:'auto', marginTop:'4%'}}>
                <div className="row" >
                <div className="col-lg-6" style={{margin:'auto', paddingLeft:'0px'}}>
                        <h6 style={{ fontFamily:'Avenir, sans-serif', fontWeight:'900', fontSize:'30px'}}>Popular Tutors</h6>
                        <div className="row">
                        {tutors.map((tutor, index) =>
                            <div className="col-lg-4" style={{textAlign:'center', marginBottom:'30px', cursor:'pointer'}} onClick={()=>{this.props.update(tutor)}}>
                                <div style={{height:'250px'}}>
                                    <img className="resultCardImg" src={"assets/cs.jpeg"} style={{height:'250px' ,paddingBottom:'0px',objectFit: 'cover', opacity:'1',background:"rgba(0,0,0,1)", borderRadius:'15px'}} alt=""></img>
                                </div>
                                <div className="centered" style={{background:'white'}}>
                            <h6 style={{ fontFamily:'Avenir, sans-serif', fontWeight:'900', margin:'10px'}}>{tutor.toUpperCase()}</h6>
                            </div>
                            </div>
                            )}
                        </div>
                        </div>
                        <div className="col-lg-6" style={{margin:'auto', paddingRight:'0px'}}>
                        <h6 style={{ fontFamily:'Avenir, sans-serif', fontWeight:'900', fontSize:'30px'}}>Popular Courses</h6>
                        <div className="row">
                        {courses.map((course, index) =>
                            <div className="col-lg-4" style={{textAlign:'center', marginBottom:'30px', cursor:'pointer'}} onClick={(input)=>{this.setState({input}); this.props.update(course)}}>
                                <div style={{height:'250px'}}>
                                    <img className="resultCardImg" src={"assets/math1.jpeg"} style={{height:'250px' ,paddingBottom:'0px',objectFit: 'cover', opacity:'1',background:"rgba(0,0,0,1)",  borderRadius:'15px'}} alt=""></img>
                                </div>
                                <div className="centered" style={{background:'white'}}>
                            <h6 style={{ fontFamily:'Avenir, sans-serif', fontWeight:'900', margin:'10px'}}>{course.toUpperCase()}</h6>
                            </div>
                            </div>
                            )}
                        </div>
                        </div>
                </div>
                </div>
        )
    }
}

export default PopularItems
