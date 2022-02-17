import {
  AppBar,
  Container,
  FormControl,
  InputLabel,
  //   makeStyles,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  //   const classes = useStyles();
  const [age, setAge] = React.useState("USD");

  const handleChange = (e) => {
    setAge(e.target.value);
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
              <InputLabel>Currency</InputLabel>
              <Select value={age} label="Age" onChange={handleChange}>
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
