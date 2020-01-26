import React, { Component } from 'react'
import Navbar from './Navbar'
import NewCourses from './NewCourses'
import PopularItems from './PopularItems'
import Results from './Results'
import './App.css';
export class Homepage extends Component {
    state={
        input:''
    }
    render() {
        return (
            <div style={{marginTop:'7.5%'}}>
                <div className="col-lg-10 row" style={{margin:'auto'}}>
                    <div className="col-lg-6">
                        <div style={{marginTop:'100px'}}>
                            <h1 className="mainTitle" style={{ marginLeft:'-10px'}}>Tutorfy</h1>
                            <h3 className="subTitle" style={{marginTop:'-10px', marginLeft:'10px'}}>Find the best tutors in your McMaster University. We only supply the best of tutors! No one does it better than us, no one!</h3>
                            </div>
                        </div>
                    
                    <div className="col-lg-6" style={{textAlign:'center'}}>
                        <img src="assets/tutorfy-banner.svg" style={{height:'500px'}}></img>
                    </div>
                </div>
                <Navbar input={this.state.input} update={(input)=>this.setState({input})}/>
                <NewCourses input={this.state.input} update={(input)=>this.setState({input})}/>
                <PopularItems input={this.state.input} update={(input)=>this.setState({input})}/>
                {console.log(this.state.input)}
                <Results/>
            </div>
        )
    }
}

export default Homepage
