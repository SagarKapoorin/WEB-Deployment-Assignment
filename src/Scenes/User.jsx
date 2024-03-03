import { Box, Input, Typography } from "@mui/material";
import Header from "../components/Header";
import FlexBetween from "../components/FlexBetween";
import SingleBarChart from "../components/Bar";
import Navbar from "../components/Navbar";
function User(){

    return(
        <Box>
        <Header/>
        <Box display="flex" alignItems="center" justifyContent="center" mb="20px">
       <input name="Employee" className="input_user" placeholder="Employee Productivity Dashboard"></input>
        </Box>
        <Box ml={'3%'} >
        <Box bgcolor={"#5E5E5E82"} boxShadow={"inset 0px 4px 0px #00000040"} mr={'10px'} padding={"15px"} width={"88%"} borderRadius={"10px"}>
        <FlexBetween>
        <Typography color={"#FFFFFF"} ml={"10px"} fontSize={'16px'}>Productivity on Monday</Typography>
        <Typography color={"#36A546"} mr={"10px"} fontSize={'16px'}>4%</Typography>
        </FlexBetween>
        <SingleBarChart size={4}/>

        <FlexBetween>
        <Typography color={"#FFFFFF"} ml={"10px"} fontSize={'16px'}>Productivity on Monday</Typography>
        <Typography color={"#36A546"} mr={"10px"} fontSize={'16px'}>92%</Typography>
        </FlexBetween>
        <SingleBarChart size={92}/>

        <FlexBetween>
        <Typography color={"#FFFFFF"} ml={"10px"} fontSize={'16px'}>Productivity on Monday</Typography>
        <Typography color={"#36A546"} mr={"10px"} fontSize={'16px'}>122%</Typography>
        </FlexBetween>
        <SingleBarChart size={122}/>

        <FlexBetween>
        <Typography color={"#FFFFFF"} ml={"10px"} fontSize={'16px'}>Productivity on Monday</Typography>
        <Typography color={"#36A546"} mr={"10px"} fontSize={'16px'}>93%</Typography>
        </FlexBetween>
        <SingleBarChart size={93}/>

        <FlexBetween>
        <Typography color={"#FFFFFF"} ml={"10px"} fontSize={'16px'}>Productivity on Monday</Typography>
        <Typography color={"#36A546"} mr={"10px"} fontSize={'16px'}>89%</Typography>
        </FlexBetween>
        <SingleBarChart size={89}/>
        
        <FlexBetween>
        <Typography color={"#FFFFFF"} ml={"10px"} fontSize={'16px'}>Productivity on Monday</Typography>
        <Typography color={"#36A546"} mr={"10px"} fontSize={'16px'}>98%</Typography>
        </FlexBetween>
        <SingleBarChart size={98}/>
        </Box>
        </Box>
        <Navbar/>
        </Box>
     
    )
}
export default User;