import { Container, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { TrendingCoins } from "../config.api";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import banner from "../assets/banner.jpg";
const useStyles = makeStyles({
  bannerText: {
    position: "absolute",
    top: "30%",
    textAlign: "center",
    display: "flex",
    // alignItems: "center",
    flexDirection: "column",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
  carouselItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    textTransform: "uppercase",
    color: "white",
  },
});

const Banner = () => {
  const classes = useStyles();
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
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  return (
    <div>
      <img src={banner} alt="" width="100%" height={"400px"} />
      <Container className={classes.bannerText}>
        <Typography variant="h1" color={"primary"}>
          Crypto
        </Typography>
        <Typography color={"primary"}>Track all crypto</Typography>
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={1000}
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          items={items}
          autoPlay
        />
      </Container>

      {/* </div> */}
    </div>
  );
};

export default Banner;
