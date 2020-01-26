import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import AOS from 'aos';
AOS.init();

export class ResultCard extends Component {
    render() {
        var tutor = this.props.tutor
        return (
            <div  key={tutor._id} data-aos="fade-up" data-aos-offset="150">
            <div className="resultCard">
            <div className="col-8 container" style={{marginBottom:"25px", background:"white", borderRadius:'15px'}}>
                <div className="row" style={{fontFamily:'Avenir, sans-serif'}}>
                    <div className="col-lg-3" style={{paddingLeft:'0px'}}>
                        <div style={{height:'24 0px'}}>
                            <img className="resultCardImg" src={tutor.image} style={{height:'240px' ,paddingBottom:'0px',objectFit: 'cover', opacity:'1',background:"rgba(0,0,0,1)", borderRadius:'15px'}} alt=""></img>
                        </div>
                    </div>
                    <div className="col-lg-9" style={{padding:'20px'}}>
                        <div className="row">
                        <h4 style={{fontSize:'33px', fontWeight:'900', display:"inline-block"}}>
                            {tutor.courseName}
                        </h4>
                        
                            <h4 style={{background:'#5ba2ff',padding:'10px',  margin:'auto', float:'right', marginTop:'-20px', marginRight:'-25px', color:'white'}}>
                            ${tutor.price}/hr
                            </h4>
                            </div>
                            <div className="row"  style={{padding:'0px'}}>
                            <h4 style={{fontSize:'27px', fontWeight:'700', display:"inherit"}}>
                            {tutor.name}
                        </h4></div>

                         <Rating name="half-rating" value={tutor.rating} precision={0.5} size="large"/>

                        <div className="row"  style={{padding:'0px', float:'right', position:'relative',bottom:'0'}}>
                            <Button variant="contained" color="primary" style={{fontFamily:'Avenir, sans-serif', fontSize:'20px'}}>Send Email</Button>
                            </div>

                    </div>
                    
                </div>
                </div>
                </div>
            </div>
        )
    }
}

export default ResultCard
