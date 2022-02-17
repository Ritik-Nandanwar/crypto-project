import { Container, Link, Typography } from "@mui/material";
import { TrendingCoins } from "../config.api";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import banner from "../assets/banner.jpg";
const handleDragStart = (e) => e.preventDefault();

const Banner = () => {
  const [trending, setTrending] = useState([]);
  const getTrendingCoins = async () => {
    let d = await axios.get(TrendingCoins("USD"));
    setTrending(d.data);
    console.log(d.data);
  };
  useEffect(() => {
    getTrendingCoins();
  }, []);
  const items = trending.map((coin) => {
    return (
      <Link to={`/single/${coin.id}`}>
        <img src={coin.image} height="80" alt="" />
      </Link>
    );
  });
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };
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
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={1000}
          animationDuration={1000}
          items={items}
          autoPlay
          responsive={responsive}
        />
      </Container>

      {/* </div> */}
    </div>
  );
};

export default Banner;
