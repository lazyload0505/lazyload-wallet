import React, { useState } from "react";
import { render } from 'react-dom';
import { MemoryRouter, Routes, Route } from "react-router-dom";

import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { type SelectChangeEvent } from '@mui/material/Select';


import "./style.scss";
import SetupView from "./setup";
import MainView from "./main";
import CreateAccountView from "./createAccount";
import RecoverAccountView from "./recoverAccount";

function IndexPopup() {
  const [chain, setchain] = useState("0x884");
  const handleChange = (event: SelectChangeEvent) => {
    setchain(event.target.value);
  };
  return (
    <React.StrictMode>
      <MemoryRouter initialEntries={["/setup"]}>
        <header>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
            spacing={2}
          >
            <h3>Lazyload Wallet</h3>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <Select
                value={chain}
                onChange={handleChange}
                defaultValue={"0x884"}
              >
                <MenuItem value={"0x884"}>Local Test</MenuItem>
                <MenuItem value={"0x1"}>Ethereum</MenuItem>
                <MenuItem value={"0x89"}>Polygon</MenuItem>
                <MenuItem value={"0xa86a"}>Avalanche</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </header>
        <Routes>
          <Route path="/setup" element={<SetupView />} />
          <Route path="/main" element={<MainView />} />
          <Route path="/createWallet" element={<CreateAccountView />} />
          <Route path="/recoverWallet" element={<RecoverAccountView />} />
        </Routes>
      </MemoryRouter>
    </React.StrictMode>
  )
}

export default IndexPopup
