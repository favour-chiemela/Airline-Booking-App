import React, { useState } from 'react';
import { forgotPassUrl } from '../../api/Api';
import axios from 'axios'
import{LoginStyles} from '../auth/styles/Styling';
import {Box,Button,TextField,Typography} from '@mui/material'
import Styles from './styles/SignUp.module.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(forgotPassUrl(email));
      console.log('Forgot pass data --> ', response.data);
    } catch (error) {
      console.error('Forgot pass error --> ', error.response.data);

    }
  }

  return (
    <div className='forgotPass' style={LoginStyles.LoginMainStyles}>
      <Typography sx={LoginStyles.WelcText}>Enter Your Email To Reset Password</Typography>
      <Box component = "form" sx = {Styles.SignUpForm}>
         <TextField
            sx = {LoginStyles.InputStlyes}
            label = "Email"
            type = "email"
            value = {email}
            onChange = {(e) => setEmail(e.target.value)}
         />
        <Button 
         variant = 'contained'
         sx={LoginStyles.ButtonStyles}
         onClick={handleSubmit} 
         type="submit">
          Send
        </Button>
      </Box>
    </div>
  )
}

export default ForgotPassword
