import { Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Single from "./Single";
import { CoinList } from "../config.api";
const Home = () => {
  const [coins, setCoins] = useState([]);
  const getCoins = async () => {
    let data = await axios.get(CoinList("USD"));
    setCoins(data.data);
    console.log(data.data);
  };
  useEffect(() => {
    getCoins();
  }, []);

  return (
    <Container>
      <Grid container spacing={2} item>
        {coins.map((coin) => (
          <Grid item>
            <Single coin={coin} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
