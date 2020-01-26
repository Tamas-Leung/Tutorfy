import React, { Component } from 'react'

export class ResultCard extends Component {
    render() {
        var tutor = this.props.tutor
        return (
            <div className="col-8 container" style={{marginBottom:"25px", background:"white"}}>
                <div className="row">
                    <div className="col-4">
                        <div style={{height:'240px'}}>
                            <img className="resultCardImg" src={tutor.image} style={{height:'240px' ,paddingBottom:'0px',objectFit: 'cover', opacity:'1',background:"rgba(0,0,0,1)", borderRadius:'15px'}} alt=""></img>
                        </div>
                    </div>
                    <div className="col-5">
                        {tutor.courseName}
                    </div>
                    <div className="col-3">
                        {tutor.price}
                    </div>
                </div>
               
            </div>
        )
    }
}

export default ResultCard
