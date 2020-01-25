import React, { Component } from 'react'
import Navbar from './Navbar'
import NewCourses from './NewCourses'
import PopularItems from './PopularItems'

import './App.css';
export class Homepage extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <NewCourses/>
                <PopularItems/>
            </div>
        )
    }
}

export default Homepage
