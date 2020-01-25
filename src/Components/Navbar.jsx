import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AddTutor from './AddTutor'
import Search from './Search'
export class Navbar extends Component {
    render() {
        return (
            <AppBar position="fixed" style={{ background: "#5ba2ff", height:"70px",}}>
            <Toolbar>
                <img src="assets/tutorfy.png" style={{height:'55px', marginRight:'7px', marginTop:'5px'}}></img>
                <h6 style={{ fontSize:'30px',  fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:'900', marginRight:'40px', marginTop:'10px'}}>Tutorfy</h6>
                <Search />
                <div style={{ flexGrow:'1'}}></div>
                <p style={{ fontFamily:'Avenir, sans-serif', fontWeight:'900', fontSize:'23px', marginTop:'20px', marginRight:'10px'}} className='text-Navbar'>Want to add a Tutor?</p>
                <AddTutor/>
            </Toolbar>
            </AppBar>
        )
    }
}

export default Navbar
