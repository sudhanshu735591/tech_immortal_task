import { Box, Typography } from "@mui/material";
import React from "react";
import Navbar from "../navbar/index.tsx";
import TableData from "../tableData/index.tsx";
function Home(){
    
    return(
        <Box>
            <Navbar/>
            <TableData/>
        </Box>
    )
}
export default Home;