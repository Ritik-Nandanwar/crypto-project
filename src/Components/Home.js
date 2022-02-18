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
  // const handleSearch = () => {
  //   return coins.filter(
  //     (coin) =>
  //       coin.name.toLowerCase().includes(search) ||
  //       coin.symbol.toLowerCase().includes(search)
  //   );
  // };

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
      <Table>
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
          {coins.slice((page - 1) * 10, (page - 1) * page + 10).map((coin) => (
            <Single coin={coin} />
          ))}
        </TableBody>
      </Table>
      <Pagination
        count={100}
        rowsPerPage={10}
        style={{
          padding: 20,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        // classes={{ ul: classes.pagination }}
        onChange={(_, value) => {
          setPage(value);
          window.scroll(0, 450);
        }}
      />
    </Container>
  );
};

export default Home;
