import {
  Container,
  Grid,
  Pagination,
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
  const [page, setPage] = useState(1);

  const getCoins = async () => {
    let data = await axios.get(CoinList("USD"));
    setCoins(data.data);
    console.log(data.data);
  };
  useEffect(() => {
    getCoins();
  }, [page]);

  return (
    <Container style={{}}>
      <Table>
        <TableHead style={{}}>
          <TableRow style={{ color: "pink", width: "100%" }}>
            <TableCell>Name</TableCell>
            <TableCell align="left">Symbol</TableCell>
            <TableCell align="left">Current Price</TableCell>
            <TableCell align="left">Total Volume</TableCell>
            <TableCell align="left">High 24 hr.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coins.slice(page * 10, page * 10 + 10).map((coin) => (
            <Single key={coin.id} coin={coin} />
          ))}
        </TableBody>
      </Table>
      <Pagination
        count={9}
        rowsPerPage={10}
        style={{
          padding: 20,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        onChange={(_, value) => {
          setPage(value);
          window.scroll(0, 450);
        }}
      />
    </Container>
  );
};

export default Home;
