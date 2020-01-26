import React, { Component } from 'react'
import Navbar from './Navbar'
import NewCourses from './NewCourses'
import PopularItems from './PopularItems'
import Results from './Results'
import './App.css';
import axios from 'axios'
import {animateScroll as scroll} from 'react-scroll';


export class Homepage extends Component {
    constructor(props){
        super(props);
        this.data=[]
        this.popCourse=[]
        this.popSubject=[]
        this.newCourse=[]
    }
    state={
        input:''
    }

    componentDidMount(){
        axios.get('https://tutorfy-dh6.herokuapp.com/getTutor')
          .then((data) => {
            this.data = data.data
            this.setState({
              response:true
            });
          })
          .catch((error) => {
            console.error(error)
        })

        axios.get('https://tutorfy-dh6.herokuapp.com/getPopularCourses')
          .then((response) => {
            this.popCourse = response.data
            this.setState({
              response:true
            });
          })
          .catch((error) => {
            console.error(error)
        })

        axios.get('https://tutorfy-dh6.herokuapp.com/getPopularSubjects')
          .then((response) => {
            this.popSubject = response.data
            this.setState({
              response:true
            });
          })
          .catch((error) => {
            console.error(error)
        })

        axios.get('https://tutorfy-dh6.herokuapp.com/getLatestSubjects')
          .then((response) => {
            this.newCourse = response.data
            this.setState({
              response:true
            });
          })
          .catch((error) => {
            console.error(error)
        })
        
    }

      filter = (tutor) => {
        return  tutor.courseName.toLowerCase().includes(this.state.input.toLowerCase())
      }

      componentDidUpdate(){
        if(this.state.input!="")
        scroll.scrollTo(1635);
      }

    render() {
        var filteredData = this.data.filter(this.filter)
        return (
            <div style={{marginTop:'7.5%'}}>
                <div className="col-lg-10 row" style={{margin:'auto'}}>
                    <div className="col-lg-6">
                        <div style={{marginTop:'100px'}}>
                            <h1 className="mainTitle" style={{ marginLeft:'-10px'}}>Tutorfy</h1>
                            <h3 className="subTitle" style={{marginTop:'-10px', marginLeft:'10px', fontWeight:' 00'}}>Struggling with school? We can help with finding the best tutors at your local campus. </h3>
                            </div>
                        </div>
                    
                    <div className="col-lg-6" style={{textAlign:'center'}}>
                        <img src="assets/tutorfy-banner.svg" style={{height:'500px'}}></img>
                    </div>
                </div>
                <Navbar input={this.state.input} update={(input)=>this.setState({input})}/>
                <NewCourses input={this.state.input} info={this.newCourse} update={(input)=>this.setState({input})}/>
                <PopularItems input={this.state.input} popCourse={this.popCourse} popSubject={this.popSubject} update={(input)=>this.setState({input})}/>
                <Results input={this.state.input} tutors={filteredData}/>
            </div>
        )
    }
}

export default Homepage
