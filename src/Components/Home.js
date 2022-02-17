import {
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
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
    <Container style={{}}>
      <Table style={{ backgroundColor: "gray" }}>
        <TableHead style={{}}>
          <TableRow style={{ color: "pink", width: "100%" }}>
            <TableCell>Name</TableCell>
            <TableCell align="left">Symbol</TableCell>
            <TableCell align="left">Total Supply</TableCell>
            <TableCell align="left">Total Volume</TableCell>
            <TableCell align="left">High 24 hr.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coins.map((coin) => (
            <Single coin={coin} />
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Home;
