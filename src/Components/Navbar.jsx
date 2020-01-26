import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AddTutor from './AddTutor'
import Search from './Search'
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';

export class Navbar extends Component {
    state={
        input:''
    }
    render() {
        var placeholder = "Search for Tutors"
        return (
            <AppBar position="fixed" style={{ background: "#5ba2ff", height:"70px",}}>
            <Toolbar>
                <img src="assets/tutorfy.png" style={{height:'55px', marginRight:'7px', marginTop:'5px'}}></img>
                <h6 style={{ fontSize:'30px',  fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:'900', marginRight:'40px', marginTop:'10px'}}>Tutorfy</h6>
                <div className="searchBar" >
              <InputBase
                style={{paddingLeft: 10, fontFamily: 'avenir, Nunito Sans, sans-serif', fontSize: '23px', flexGrow:1, color:'white'}}
                placeholder={placeholder}
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={(event)=>this.props.update(event.target.value)}
              />
              <Divider orientation="vertical" style={{height:'30px', marginRight:'5px', background:'white'}} />
              <IconButton type="submit" aria-label="search">
                <SearchIcon style={{color:'white'}}/>
              </IconButton>
            </div>
                <div style={{ flexGrow:'1'}}></div>
                <p style={{ fontFamily:'Avenir, sans-serif', fontWeight:'900', fontSize:'23px', marginTop:'20px', marginRight:'10px'}} className='text-Navbar'>Are you a Tutor?</p>
                <AddTutor/>
            </Toolbar>
            </AppBar>
        )
    }
}

export default Navbar
