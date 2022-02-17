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
    <Container
      style={{
        backgroundColor: "white",
      }}
    >
      <Table style={{ backgroundColor: "red" }}>
        <TableContainer>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Symbol</TableCell>
              <TableCell align="right">Total Supply</TableCell>
              <TableCell align="right">Total Volume</TableCell>
              <TableCell align="right">High 24 hr.</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coins.map((coin) => (
              <Single coin={coin} />
            ))}
          </TableBody>
        </TableContainer>
      </Table>
    </Container>
  );
};

export default Home;
