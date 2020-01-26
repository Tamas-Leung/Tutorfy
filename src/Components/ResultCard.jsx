import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Rating from '@material-ui/lab/Rating';
import EmailIcon from '@material-ui/icons/Email';
import AOS from 'aos';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import IsEmail from 'isemail';
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

AOS.init();


const StyledTextField = withStyles({
    root: {
        '& label.Mui-focused': {
        color: '#4797ff',
        },
        '& .MuiInput-underline:after': {
        borderBottomColor: '#4797ff',
        }
    }
})(TextField);
export class ResultCard extends Component {
    state={
        show:false
    }

    submit (){
        var emptyEmail = this.state.email == ""
        var emptyProduct = this.state.product == ""
        this.setState({
            emptyProduct: emptyProduct,
            emptyEmail: emptyEmail
            })
        if (IsEmail.validate(this.state.email, {errorLevel: true}) >0)
            this.setState({
                emailValid: false
                })
        else if (!emptyProduct && !emptyEmail) {
            this.setState({
                show: false,
                progress: true,
                })
            axios.post('https://tutorfy-dh6.herokuapp.com/contactTutor',{
                email  : this.state.email,  
                tutorEmail: this.props.tutor.email,
                message: this.state.message
            })
            .then(res => {
                this.setState({
                    product: '',
                    email: '',
                    snackSuccess: true,
                    progress: false,
                    show:false
                    })
                })
                .catch(err => {
                    this.setState({
                        error: true,
                        show: false,
                        snackError: true,
                        progress: false
                    })
                })
            }
        }
            

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
                        <Rating name="half-rating" value={tutor.rating} precision={0.5} size="large" style={{display:'inline-block'}}/>
                        <h4 style={{display:'inline-block'}}>{"("+tutor.numberOfRatings+")"}</h4>  
{/*         
                        <div style={{padding:'0px', position:'absolute', bottom:'0', width:'100%', marginTop:'-20px'}}>
                            <Rating name="half-rating" value={tutor.rating} precision={0.5} size="large"/>  
                            <Button variant="contained" color="primary" style={{ float:'right', fontFamily:'Avenir, sans-serif', fontSize:'20px'}}>Send Email</Button>
                        </div> */}

                        <div style={{ bottom: '0', position: 'relative'}}>
                                <div style={{marginBottom: '10px'}}>
                                <Chip label={tutor.courseCode} style={{marginLeft:'10px', fontSize:'23px', padding:'10px 10px 10px 10px', fontWeight:700}}/>
                                <Chip label={tutor.university} style={{marginLeft:'10px', fontSize:'23px', padding:'10px 10px 10px 10px',fontWeight:700}}/>
                                    <Button style={{float: 'right', fontFamily: 'avenir, Nunito Sans, sans-serif', fontSize:'30px',fontWeight: '900', fontSize:'20px', outline:'0' }} 
                                     onClick={()=> this.setState({show:true})}
                                            startIcon={
                                                <EmailIcon style={{color: "#5ba2ff", fontSize: 27, fontWeight: 900}}/> }>Send Email
                                            
                                    </Button>
                                </div>
                            </div>

                    </div>
                    
                </div>
                </div>
                </div>



                <Dialog open={this.state.show} aria-labelledby="form-dialog-title">
                <DialogTitle disableTypography='true'id="form-dialog-title" style={{fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:900, fontSize:'27px', lineHeight:1.2, paddingBottom:'3px'}}>Contact a Tutor</DialogTitle>
                <DialogContent>
                    <DialogContentText disableTypography='true' style={{fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:500, fontSize:'18px', lineHeight:1.25}}>
                        Add a Course listing down below!
                    </DialogContentText>
                    <StyledTextField
                        autoFocus
                        error={this.state.emptyProduct}
                        helperText={this.state.emptyProduct?"Enter Course Name":""}
                        margin="dense"
                        id="email"
                        label="Your Email"
                        type="email"
                        autoComplete="on"
                        fullWidth
                        InputLabelProps={{ style: {color: 'black', fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:500, borderColor: 'red'} }} 
                        InputProps={{ style: {fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:700} }} 
                        onChange = {(event) => this.setState({email:event.target.value})}
                    />
                    <StyledTextField
                        error={this.state.emptyEmail || !this.state.emailValid}
                        margin="dense"
                        id="name"
                        label="Message"
                        type="Message"
                        autoComplete="off"
                        fullWidth
                        InputLabelProps={{ style: {color: 'black', fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:500} }} 
                        InputProps={{ style: {fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:700} }} 
                        onChange = {(event) => this.setState({message:event.target.value})}
                    />
                   </DialogContent> 
                   <DialogActions>
                    <Button 
                        style={{fontFamily:'avenir, Nunito Sans, sans-serif', fontWeight:'700', padding:'5px 10px 5px 10px'}}
                        onClick = {() => this.setState({show:!this.state.show})}>
                        Cancel
                    </Button>
                    <Button 
                        style={{fontFamily:'avenir, Nunito Sans, sans-serif', fontWeight:'700',backgroundColor:'#4797ff', padding:'5px 20px 5px 20px', width:'100px'}}
                        onClick={this.submit.bind(this)}>
                        Submit
                    </Button>
                </DialogActions>
                   </Dialog>
            </div>
        )
    }
}

export default ResultCard
