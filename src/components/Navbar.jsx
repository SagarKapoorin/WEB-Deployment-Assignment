
import { Box, Typography,IconButton } from "@mui/material"
import { useNavigate } from 'react-router-dom';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Navbar(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/user')
        console.log('Box clicked!');
      };
      const handleClick1 = () => {
        navigate('/employee')
        console.log('Box clicked!');
      };
    return(
        <div className="Navbar">
            <IconButton onClick={handleClick}> <HomeIcon style={{ color: '#36A546' }}/></IconButton>
            <IconButton onClick={handleClick1}><AccountCircleIcon style={{ color: '#36A546' }}/></IconButton>
        </div>
   
    )
}
export default Navbar;