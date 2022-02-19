import {
  AppBar,
  Button,
  Container,
  FormControl,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({});

const Navbar = () => {
  const classes = useStyles();
  //   const classes = useStyles();
  const [currency, setCurrency] = React.useState("USD");

  const handleChange = (e) => {
    setCurrency(e.target.value);
    console.log(e.target.value);
  };

  const navigate = useNavigate();
  return (
    <>
      <AppBar
        style={{
          maxHeight: "12vh",
        }}
        position="static"
        color="transparent"
      >
        <Container>
          <Toolbar>
            <Typography
              onClick={() => navigate("/")}
              variant="h4"
              style={{
                color: "gold",
                flex: 1,
                cursor: "pointer",
              }}
            >
              C-Krypto
            </Typography>
            <FormControl>
              <Select value={currency} label="Currency" onChange={handleChange}>
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
              </Select>
            </FormControl>
          </Toolbar>
        </Container>
        <Toolbar></Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
