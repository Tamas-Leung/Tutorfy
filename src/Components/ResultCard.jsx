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
                            <h4 style={{position:'absolute', background:'#5ba2ff',padding:'10px',  margin:'auto', float:'left', marginTop:'-10px', marginLeft:'-20px', color:'white'}}>
                                ${tutor.price}/hr
                            </h4>
                            <img className="resultCardImg" src={tutor.image} style={{height:'240px' ,paddingBottom:'0px',objectFit: 'cover', opacity:'1',background:"rgba(0,0,0,1)", borderRadius:'15px'}} alt=""></img>
                        </div>
                    </div>
                    <div className="col-lg-9" style={{padding:'20px', paddingLeft:'0px'}}>
                        <div className="row">
                        <h4 style={{marginLeft:'20px', fontSize:'33px', fontWeight:'900', display:"inline-block"}}>
                            {tutor.courseName}
                        </h4>
                        
                            
                            </div>
                            <div className="row"  style={{padding:'0px'}}>
                            <h4 style={{marginLeft:'20px', fontSize:'27px', fontWeight:'700', display:"inherit"}}>
                            {tutor.name}
                        </h4></div>

                         

                        <div style={{padding:'0px', position:'absolute', bottom:'0', width:'100%'}}>
                            <Rating name="half-rating" value={tutor.rating} precision={0.5} size="large"/>  
                            <Button variant="contained" color="primary" style={{ float:'right', fontFamily:'Avenir, sans-serif', fontSize:'20px'}}>Send Email</Button>
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
