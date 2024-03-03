import image from "../assets/Another1.png"
import image2 from "../assets/moptro2.png"
import { Box, Typography } from "@mui/material"
import { useNavigate } from 'react-router-dom';
import UserImage from "./Image"
function Header(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/user')
        console.log('Box clicked!');
      };
    return(
        <Box>
        <Box display="flex" alignItems="center" justifyContent="center" mb="20px">
        <Box display="flex" alignItems="center" justifyContent="center" mt="70px" mb="20px" sx={{
        cursor: 'pointer',
      }}
      onClick={handleClick}>
        <UserImage image={image2} size="104px"></UserImage>
        </Box>
        <Box borderRadius={"50%"} color="#36A546" fontSize={"16px"} bgcolor={"#5e5e5e6e"} width={"30px"} height={"30px"} background="#343232e6 0% 0% no-repeat padding-box" boxShadow=" inset 0px 4px 0px #00000040"
           filter="blur(2px)" > <Typography m={"1px 9px"}>4</Typography></Box>
        <Box position={"absolute"} top={"20px"} right={"5px"} sx={{
        cursor: 'pointer',
      }}>
        <UserImage image={image} size="50px"></UserImage>
        </Box>
    </Box>
        </Box>
    )
}
export default Header;