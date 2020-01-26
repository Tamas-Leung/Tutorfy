import React, { Component } from 'react'

export class ResultCard extends Component {
    render() {
        var tutor = this.props.tutor
        return (
            <div className="resultCard">
            <div className="col-8 container" style={{marginBottom:"25px", background:"white", borderRadius:'15px'}}>
                <div className="row" style={{fontFamily:'Avenir, sans-serif'}}>
                    <div className="col-3">
                        <div style={{height:'24 0px'}}>
                            <img className="resultCardImg" src={tutor.image} style={{height:'240px' ,paddingBottom:'0px',objectFit: 'cover', opacity:'1',background:"rgba(0,0,0,1)", borderRadius:'15px'}} alt=""></img>
                        </div>
                    </div>
                    <div className="col-9 row" style={{padding:'0px'}}>
                        <h4 style={{fontSize:'27px', fontWeight:'900', display:"inline-block"}}>
                            {tutor.courseName}
                        </h4>
                            <h4 style={{background:'#5ba2ff',padding:'10px',  margin:'auto',  display:"inline-block",float:'right', marginTop:'-10px', marginRight:'-25px', color:'white'}}>
                            ${tutor.price}/hr
                            </h4>
                    </div>
                    
                </div>
                </div>
            </div>
        )
    }
}

export default ResultCard
