import { useState } from "react";

import './style.scss';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function SetupView() {
  const navigate = useNavigate();
  //TODO: get the extension id. 
  const runtimeID = chrome.runtime.id
  const alink = "chrome-extension://" + runtimeID + "/tabs/home.html"
  return (
    <div className="content">
      <h1>
        Setup: Welcome to <a href={alink} target="_blank">{process.env.PLASMO_PUBLIC_NAME}</a> Extension.
      </h1>
      <Stack spacing={2} direction="column">
        <Button 
          variant="outlined"
          onClick={() => navigate("/recoverWallet")}
        >Sign In With Seed Phrase</Button>
        <Button 
          variant="outlined"
          onClick={() => navigate("/createWallet")}
        >Create New Wallet</Button>
      </Stack>
      <footer>Crafted by @lazyloadbox.</footer>
    </div>
  )
}

export default SetupView
