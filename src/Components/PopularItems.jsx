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
                        <PopTutor tutors={tutors}/>
                        </div>
                        </div>
                        <div className="col-lg-6" style={{margin:'auto', paddingRight:'0px'}}>
                        <h6 style={{ fontFamily:'Avenir, sans-serif', fontWeight:'900', fontSize:'30px'}}>Popular Courses</h6>
                        <div className="row">
                        <PopCourse courses={courses}/>
                        </div>
                        </div>
                </div>
                </div>
        )
    }
}

export default PopularItems
