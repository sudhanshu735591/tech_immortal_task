import { Box, Button } from "@mui/material";
import SearchBox from "../search/index.tsx";
import React, { useState } from "react";
import Popup from "../popup/index.tsx";

function Navbar() {
  const [edit, setEdit] = useState("false");
  const handleClickOpen = () => {
    setEdit("true");
  };

  return (
    <Box sx={{ backgroundColor: "rgb(20,28,34)", padding: "20px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap", 
          gap: "10px",
          alignItems: "center", 
        }}
      >
        <Box sx={{ flexGrow: 1, minWidth: "200px" }}> 
          <SearchBox />
        </Box>

        <Button
          sx={{
            backgroundColor: "white",
            padding: "10px 20px",
            minWidth: "150px", 
          }}
          variant="outlined"
          onClick={handleClickOpen}
        >
          Add Form
        </Button>

        <Popup edit={edit} setEdit={setEdit} />
      </Box>
    </Box>
  );
}

export default Navbar;
