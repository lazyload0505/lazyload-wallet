import { useState } from "react"

import "./style.scss";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function RecoverAccountView() {

 const navigate = useNavigate();

  return (
    <div className="content">
      
      <Stack spacing={2} direction="column">
      <h1>
        Recover Wallet View
      </h1>
        <Button 
          variant="outlined"
          onClick={() => navigate("/setup")}
        >Back To Setup</Button>
        <Button variant="outlined"
          onClick={() => navigate("/main")}
        >Confirm</Button>
      </Stack>
      <footer>Crafted by @lazyloadbox.</footer>
    </div>
  )
}

export default RecoverAccountView;
