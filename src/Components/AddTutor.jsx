import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
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

const StyledBar = withStyles({
root: {
    background: 'white',
    color: '#00695c'
},
bar: {
    borderRadius:10,
    backgroundColor: '#F77313',
    }
})(LinearProgress);

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

export class AddTutor extends Component {
    state={
        snackSuccess: false,
        snackError: false,
        emailValid: true,
        emptyEmail: false,
        emptyProduct: false,
        show: false,
        progress: false,
        error: false,
        email: '',
        subject: '',
        courseName: '',
        credentials: '',
        courseCode: '',
        description: '',
        image: '',
        university: '',
        phone: '',
        price: '',
        name:''
        
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
            axios.post('https://tutorfy-dh6.herokuapp.com/addTutor',{
                name  : this.state.name,  
                email: this.state.email,
                subject: this.state.subject,
                courseName: this.state.courseName,
                courseCode: this.state.courseCode,
                credentials: this.state.credentials,
                description: this.state.description,
                image: this.state.image,
                university: this.state.university,
                phone: this.state.phone,
                price: this.state.price,
                rating: 0,
                numberOfRatings: 0
            })
            .then(res => {
                this.setState({
                    product: '',
                    email: '',
                    snackSuccess: true,
                    progress: false,
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
        var unis = ["University of Toronto", "McMaster University", "University of Windsor",
                     "University of Waterloo", "York University", "Wilfrid Laurier University",
                      "Ryerson University", "University of Western Ontario", "University of Ottawa" ]

        if (this.state.show) document.title = "Tutorly | Create a Post";
        else document.title = "Tutorly | Find a Local Tutor"
          return (
            <div >
            <Dialog open={this.state.show} aria-labelledby="form-dialog-title">
                <DialogTitle disableTypography='true'id="form-dialog-title" style={{fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:900, fontSize:'27px', lineHeight:1.2, paddingBottom:'3px'}}>Add A Course Listing</DialogTitle>
                <DialogContent>
                    <DialogContentText disableTypography='true' style={{fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:500, fontSize:'18px', lineHeight:1.25}}>
                        Add a Course listing down below!
                    </DialogContentText>
                    <StyledTextField
                        autoFocus
                        error={this.state.emptyProduct}
                        helperText={this.state.emptyProduct?"Enter Post Title":""}
                        margin="dense"
                        id="courseName"
                        label="Post Title"
                        type="course"
                        autoComplete="off"
                        fullWidth
                        InputLabelProps={{ style: {color: 'black', fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:500, borderColor: 'red'} }} 
                        InputProps={{ style: {fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:700} }} 
                        onChange = {(event) => this.setState({courseName:event.target.value})}
                    />
                    <StyledTextField
                        error={this.state.emptyEmail || !this.state.emailValid}
                        margin="dense"
                        id="name"
                        label="Name"
                        type="name"
                        autoComplete="on"
                        fullWidth
                        InputLabelProps={{ style: {color: 'black', fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:500} }} 
                        InputProps={{ style: {fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:700} }} 
                        onChange = {(event) => this.setState({name:event.target.value})}
                    />
                    <StyledTextField
                        error={this.state.emptyEmail || !this.state.emailValid}
                        helperText={this.state.emptyEmail?"Enter Email":!this.state.emailValid?"Invalid Email":""}
                        margin="dense"
                        id="email"
                        label="Email"
                        type="email"
                        autoComplete="on"
                        fullWidth
                        InputLabelProps={{ style: {color: 'black', fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:500} }} 
                        InputProps={{ style: {fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:700} }} 
                        onChange = {(event) => this.setState({email:event.target.value})}
                    />
                    <StyledTextField
                        autoFocus
                        error={this.state.emptyProduct}
                        helperText={this.state.emptyProduct?"Enter Phone Number":""}
                        margin="dense"
                        id="phone"
                        label="Phone"
                        type="course"
                        autoComplete="off"
                        fullWidth
                        InputLabelProps={{ style: {color: 'black', fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:500, borderColor: 'red'} }} 
                        InputProps={{ style: {fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:700} }} 
                        onChange = {(event) => this.setState({phone:event.target.value})}
                    />
                    <div >
                        <InputLabel id="demo-simple-select-label">Subject</InputLabel>
                        <Select style={{ display:"inline-block", width:"180px"}}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={this.subject}
                            onChange={(event) => this.setState({subject : event.target.value})}
                            >
                            <option value={"Math"}>Math</option>
                            <option value={"Engineering"}>Engineering</option>
                            <option value={"Biology"}>Biology</option>
                            <option value={"Chemistry"}>Chemistry</option>
                            <option value={"Physics"}>Physics</option>
                            <option value={"Art"}>Art</option>
                            <option value={"Business"}>Business</option>
                            <option value={"Computer Science"}>Computer Science</option>
                        </Select>
                        <StyledTextField style={{display:"inline-block"}}
                            autoFocus
                            error={this.state.emptyProduct}
                            helperText={this.state.emptyProduct?"Enter Course Code":""}
                            margin="dense"
                            id="courseCode"
                            label="Course Code"
                            type="course"
                            autoComplete="off"
                            fullWidth
                            InputLabelProps={{ style: {color: 'black', fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:500, borderColor: 'red'} }} 
                            InputProps={{ style: {fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:700} }} 
                            onChange = {(event) => this.setState({courseCode:event.target.value})}
                        />
                    </div>
                    
                    <StyledTextField
                        autoFocus
                        error={this.state.emptyProduct}
                        helperText={this.state.emptyProduct?"Enter Credentials":""}
                        margin="dense"
                        id="credentials"
                        label="Credentials"
                        type="credentials"
                        autoComplete="off"
                        fullWidth
                        InputLabelProps={{ style: {color: 'black', fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:500, borderColor: 'red'} }} 
                        InputProps={{ style: {fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:700} }} 
                        onChange = {(event) => this.setState({credentials:event.target.value})}
                    />
                    <InputLabel id="demo-simple-select-label">University</InputLabel>
                    <Select style={{width:"180px"}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.subject}
                        onChange={(event) => this.setState({university : event.target.value})}
                    >
                        {unis.map((uni,index) => <option value={uni}>{uni}</option>)}
                    </Select>
                    <StyledTextField
                        autoFocus
                        error={this.state.emptyProduct}
                        helperText={this.state.emptyProduct?"Enter Description":""}
                        margin="dense"
                        id="description"
                        label="Description"
                        type="description"
                        autoComplete="off"
                        fullWidth
                        InputLabelProps={{ style: {color: 'black', fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:500, borderColor: 'red'} }} 
                        InputProps={{ style: {fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:700} }} 
                        onChange = {(event) => this.setState({description:event.target.value})}
                    />
                    <StyledTextField
                        autoFocus
                        error={this.state.emptyProduct}
                        helperText={this.state.emptyProduct?"Enter Image":""}
                        margin="dense"
                        id="image"
                        label="Image"
                        type="text"
                        autoComplete="off"
                        fullWidth
                        InputLabelProps={{ style: {color: 'black', fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:500, borderColor: 'red'} }} 
                        InputProps={{ style: {fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:700} }} 
                        onChange = {(event) => this.setState({image:event.target.value})}
                    />
                    <StyledTextField
                        autoFocus
                        error={this.state.emptyProduct}
                        helperText={this.state.emptyProduct?"Enter Price":""}
                        margin="dense"
                        id="price"
                        label="Price (Hourly Rate)"
                        type="price"
                        autoComplete="off"
                        fullWidth
                        InputLabelProps={{ style: {color: 'black', fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:500, borderColor: 'red'} }} 
                        InputProps={{ style: {fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:700} }} 
                        onChange = {(event) => this.setState({price:event.target.value})}
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
            <Button variant='contained' style={{marginTop:"0px", borderRadius:'100px', background:'#5185ed', fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:'900', textTransform:'none', fontSize:'23px', padding:'0px 25px 0px 25px', color:'white', outline:'0'}} 
            onClick={() => this.setState({show:true, added: false, error: false, emailValid: true})}>Add a Post</Button>
            <Snackbar
                style={{fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:'900'}}
                anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                variant="error"
                autoHideDuration={6000}
                open={this.state.progress}
                >
                {/* <CheckCircleIcon/> */}
                <SnackbarContent style={{backgroundColor:'white',fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:'900', fontSize: 16}}
                message={<div ><h4 style={{display:'inline', color:'black'}}>Request Sent, Please Wait</h4><StyledBar variant="query"/></div>}
                action={ <IconButton
                    key="close"
                    aria-label="close"
                    onClick={() => this.setState({progress:false})}
                    ><CloseIcon style={{color:'black'}}/>
                    </IconButton>}
                />       
            </Snackbar>

            <Snackbar
                style={{fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:'900'}}
                anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                variant="error"
                autoHideDuration={6000}
                open={this.state.snackSuccess}
                >
                <SnackbarContent style={{backgroundColor:'rgb(80, 209, 0)',fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:'900', fontSize: 16}}
                message="Success, Posting was added"
                action={ <IconButton
                    key="close"
                    aria-label="close"
                    onClick={() => this.setState({snackSuccess:false})}
                    ><CloseIcon style={{color:'white'}}/>
                    </IconButton>}
                />
            </Snackbar>

            <Snackbar
                anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                variant="error"
                autoHideDuration={6000}
                open={this.state.snackError}
                >
                <SnackbarContent style={{backgroundColor:'red',fontFamily:'Avenir, Nunito Sans, sans-serif', fontWeight:'900', fontSize: 16}}
                message={"Error, Posting was not added"}
                action={ <IconButton
                    key="close"
                    aria-label="close"
                    onClick={() => this.setState({snackError:false})}
                    ><CloseIcon style={{color:'white'}}/>
                    </IconButton>}
                />
            </Snackbar>
            </div>
           );            
      }
  }

export default AddTutor
