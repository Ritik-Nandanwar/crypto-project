import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

function createData(name, symbol, ath_change_percentage, image, low_24h) {
  return { name, symbol, ath_change_percentage, image, low_24h };
}

const Single = ({ coin }) => {
  return (
    <>
      <TableRow>
        <TableCell component="th" scope="row">
          {coin.name}
        </TableCell>
        <TableCell align="right">{coin.symbol}</TableCell>
        <TableCell align="right">{coin.total_supply}</TableCell>
        <TableCell align="right">{coin.total_volume}</TableCell>
        <TableCell align="right">{coin.high_24h}</TableCell>
      </TableRow>
    </>
  );
};

export default Single;
