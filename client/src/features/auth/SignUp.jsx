import React, {useState} from 'react';
import {registerUrl} from '../../api/Api';
import axios from 'axios';
import { TextField,Box,Typography,Button} from '@mui/material';
import Styles from '../auth/styles/SignUp.module.css'
import { LoginStyles } from './styles/Styling';

const SignUp = () => {
  const initialValue = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    userName: '',
  };

  const [data, setData] = useState (initialValue);

  const handleChange = async e => {
    e.preventDefault ();
    setData (prevState => ({
        ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async e => {
        e.preventDefault ();
        const userData = {
            userName: data.userName,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            password: data.password
        }

        const response = await axios.post(registerUrl, userData)

        if(response.status === 200){
            console.log('BC res --> ',response.data)
        }
    }

  return (
    <Box className= {Styles.SignUp}>
      <Typography sx={LoginStyles.WelcText}>Register</Typography>
      <form className = {Styles.SignUpForm} onSubmit={handleSubmit}>
        <div className = {Styles.SignUpDiv1}>
        <TextField
          sx = {LoginStyles.InputStlyes}
          label = "FirstName"
          value={data.firstName} 
          name="firstName"
           onChange={handleChange} 
           type="text" 
           varient = "outlined"
          />
        </div>
        <div>
        <TextField
         sx = {LoginStyles.InputStlyes}
         label = "lastName"
         value={data.lastName} 
        name="lastName" 
        onChange={handleChange} 
        type="text"
        varient = "outlined" 
        />
        </div>
        <div>
        <TextField
            sx = {LoginStyles.InputStlyes}
            label = "email" 
            value={data.email} 
            name="email" onChange={handleChange} 
            type="email" 
        />
        </div>
        <div>
        <TextField
             sx = {LoginStyles.InputStlyes}
             label = "userName"
             value={data.userName}
             name="userName"
             onChange={handleChange} 
             type="text" 
        />
        </div>
        <div>
        <TextField
            sx = {LoginStyles.InputStlyes}
             label = "phoneNumber" 
             value={data.phoneNumber}
             name="phoneNumber" 
             onChange={handleChange} 
             type="tel"
        />
        </div>
        <div>
        <TextField
          sx = {LoginStyles.InputStlyes}
          label = "password" 
          value={data.password} 
          name="password" 
          onChange={handleChange} 
          type="password" 
        />
        </div>
        <div>
          <Button varient= 'contained'sx={LoginStyles.ButtonStyles} type="submit">Submit</Button>
        </div>
      </form>
    </Box>
  );
};

export default SignUp;
