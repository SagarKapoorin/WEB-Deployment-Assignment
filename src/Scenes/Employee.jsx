import React, { useState } from 'react';
import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SearchIcon from '@mui/icons-material/Search';

function Employee() {
  const initialData = [
    { id: 1, name: 'Arjun' },
    { id: 2, name: 'Sagar' },
    { id: 3, name: 'Vansh' }
  ];
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(initialData);

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterData(query);
  };

  const filterData = (query) => {
    const filtered = initialData.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <Box height={"900px"}>
      <Header />
      <Box display="flex" alignItems="center" justifyContent="center" mb="20px">
        <input
          value={searchQuery}
          onChange={handleSearchInputChange}
          name="Employee"
          className="input_employee"
          placeholder="Search With Name"
        />
        <SearchIcon style={{ color: '#FFFFFFB3', position: "relative", left: "-45px" }} />
      </Box>
      <Box display={"flex"} flexWrap={"wrap"} alignItems={"center"} justifyContent={"center"}>
        {filteredData.map(item => (
          <Box
            key={item.id}
            bgcolor={"#353434a8"}
            maxWidth={"300px"}
            boxShadow={"inset 0px 4px 0px #00000040"}
            m={'5px 5px 5px 5px'}
            padding={"15px"}
            width={"88%"}
            borderRadius={"10px"}
            mb="10px"
          >
            <Typography mb={"10px"} color={"#FFFFFF"} fontSize={"13px"}>EMP ID : <Typography fontWeight={"700"} fontSize={"13px"} display={"inline"}>1</Typography> </Typography>
            <Typography mb={"10px"} color={"#FFFFFF"} fontSize={"13px"}>Name : <Typography fontWeight={"700"} fontSize={"13px"} display={"inline"}>{item.name}</Typography></Typography>
            <Typography mb={"10px"} color={"#FFFFFF"} fontSize={"13px"}>DOB : <Typography fontWeight={"700"} fontSize={"13px"} display={"inline"} color={"orange"}>16-11-2000</Typography></Typography>
            <Typography mb={"10px"} color={"#FFFFFF"} fontSize={"13px"}>Role : <Typography fontWeight={"700"} fontSize={"13px"} display={"inline"} color={"#36A546"}>Software Engineer</Typography></Typography>
          </Box>
        ))}
      </Box>
      <Navbar />
    </Box>
  );
}

export default Employee;
