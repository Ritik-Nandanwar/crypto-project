import {
  AppBar,
  Container,
  //   makeStyles,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
// const useStyles = makeStyles(() => ({
//   title: {
//     color: "gold",
//     flex: 1,
//     fontWeight: "bold",
//     cursor: "pointer",
//   },
// }));

const Navbar = () => {
  //   const classes = useStyles();
  const navigate = useNavigate();
  return (
    <>
      <AppBar
        style={{
          maxHeight: "12vh",
          marginBottom: "28px",
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
            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginLeft: 15,
              }}
            >
              <MenuItem value="INR">INR</MenuItem>
              <MenuItem value="USD">USD</MenuItem>
            </Select>
          </Toolbar>
        </Container>
        <Toolbar></Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
