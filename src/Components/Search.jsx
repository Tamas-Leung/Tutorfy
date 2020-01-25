import React, { Component } from 'react'
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

export class Search extends Component {
    state={
        textField:''
    }
    render() {
        var placeholder = "Search for Tutors"
        return (
            <div className="searchBar" >
              <InputBase
                style={{paddingLeft: 10, fontFamily: 'avenir, Nunito Sans, sans-serif', fontSize: '23px', flexGrow:1, color:'white'}}
                placeholder={placeholder}
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={(event)=>this.setState({textField:event.target.value})}
              />
              <Divider orientation="vertical" style={{height:'45px', marginRight:'5px', background:'white'}} />
              <IconButton type="submit" aria-label="search">
                <SearchIcon style={{color:'white'}}/>
              </IconButton>
            </div>
        )
    }
}

export default Search