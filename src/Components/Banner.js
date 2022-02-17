import { Container, Typography } from "@mui/material";
import React from "react";
import banner from "../assets/banner.jpg";
const Banner = () => {
  return (
    <div>
      <img
        width="100%"
        style={{
          width: "100%",
          height: "50vh",
          backgroundPosition: "center center",
          backgroundRepeat: "noRepeat",
          position: "relative",
        }}
        src={banner}
        alt=""
      />
      <Container
        className=""
        style={{
          position: "absolute",
          fontFamily: "Monsterrat",
          top: "20%",
          marginLeft: "8vw",
          //   left: "40%",
          color: "white",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography variant="h1" style={{}}>
          Crypto
        </Typography>
        <Typography>Track all crypto</Typography>
      </Container>
      {/* </div> */}
    </div>
  );
};

export default Banner;
