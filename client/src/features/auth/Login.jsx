
import React, {useState} from 'react';
import {loginUrl} from '../../api/Api';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import {TextField, Button, Typography,Box} from '@mui/material'
import {LoginStyles} from '../auth/styles/Styling.jsx'

const Login = () => {
  const navigate = useNavigate();
  const initialValue = {
    email: 'inem@gmail.com',
    password: '',
  };

  const [data, setData] = useState (initialValue);

  const handleChange = async e => {
    e.preventDefault ();
    setData (prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault ();
    const userData = {
      email: data.email,
      password: data.password,
    };

    const response = await axios.post(loginUrl, userData);
    console.log ('BC res 1--> ', response);
    if (response.status === 200) {
      console.log ('BC res --> ', response.data);
    }
  };

  const handleNavigate = () => {
    navigate('/forgot-password', {state:{email: data.email}})
  };

  

  return (
    <Box sx = {LoginStyles.LoginMainStyles}>
      <Typography sx={LoginStyles.WelcText}>Welcome<Box component = 'span' sx={LoginStyles.SpanStyles}>Back</Box></Typography>
      <Box component = "form" onSubmit={handleSubmit} sx= {LoginStyles.FormStyle}>
        <Box sx = {LoginStyles.InputStlyes}>
        <TextField 
        sx={LoginStyles.TextFieldStyles}
        value = {data.email}
        name = "email"
        onChange={handleChange}
        type = "email"
        id="email" 
        label="Email" 
        variant="outlined" />
        
      </Box>
        <Box>
        <TextField
        value = {data.password}
        name = "password"
        onChange={handleChange}
        type = "password" 
        id="password" 
        label="password" 
        variant="outlined" />
          {/* <label htmlFor="">
            password:
            <input
              value={data.password}
              name="password"
              onChange={handleChange}
              type="password"
            />
          </label> */}
       </Box>
        <Box style ={LoginStyles.ButtonStyles}>
          <Button sx = {LoginStyles.Submit}
           variant = 'contained' type="submit">Submit</Button>
        </Box>
      </Box>
      <Typography sx = {LoginStyles.ForgotPasswordStyle} 
      onClick={handleNavigate}>Forgot Password</Typography>
    </Box>
  );
};

export default Login;
