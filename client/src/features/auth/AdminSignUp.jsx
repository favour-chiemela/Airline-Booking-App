import React, {useState} from 'react';
import {registerAdminUrl} from '../../api/Api';
import axios from 'axios';
import {Box,Typography,Button, TextField}from '@mui/material'
import {AdminStyles} from '../auth/styles/AdminSignUp'

const AdminSignUp = () => {
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

        const response = await axios.post(registerAdminUrl, userData)

        if(response.status === 200){
            console.log('BC res --> ',response.data)
        }
    }

  return (
    <Box sx = {AdminStyles.AdminMainStyles}>
      <Typography sx={AdminStyles.AdminText}><Box component = 'span' sx={AdminStyles.SpanStyles}>Admin</Box></Typography>
      < Box component = "form"  onSubmit={handleSubmit} sx= {AdminStyles.FormStyle}>
       <Box sx = {AdminStyles.InputStlyes}>
        <TextField
          sx = {AdminStyles.TextFieldStyles}
          label = "FirstName" 
          value={data.firstName} 
          name="firstName" 
          onChange={handleChange} 
          type="text"
        />
        </Box>
        <Box sx = {AdminStyles.InputStlyes}>
        <TextField
         sx = {AdminStyles.TextFieldStyles}
        label = "lastName"  
        value={data.lastName} 
        name="lastName" 
        onChange={handleChange} 
        type="text" 
        />
        </Box>
        <Box sx = {AdminStyles.InputStlyes}>
        <TextField
           sx = {AdminStyles.TextFieldStyles}
            label = "email" 
            value={data.email} 
            name="email" 
            onChange={handleChange} 
            type="email" 
        />
        </Box>
        <Box sx = {AdminStyles.InputStlyes}>
        <TextField
             sx = {AdminStyles.TextFieldStyles}
            label = "userName" 
            value={data.userName} 
            name="userName" 
            onChange={handleChange} 
            type="text" 
        />
        </Box>
        <Box sx = {AdminStyles.InputStlyes}>
        <TextField
         sx = {AdminStyles.TextFieldStyles}
             label = "phoneNumber" 
             value={data.phoneNumber}
             name="phoneNumber" 
             onChange={handleChange} 
             type="tel"
        />
        </Box>
        <Box sx = {AdminStyles.InputStlyes}>
        <TextField
         sx = {AdminStyles.TextFieldStyles}
          label = "password" 
          value={data.password} 
          name="password" 
          onChange={handleChange} 
          type="password" 
        />
        </Box>
        <Box style ={AdminStyles.ButtonStyles}>
          <Button 
           type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminSignUp;
