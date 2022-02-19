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

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const Single = ({ coin }) => {
  return (
    <>
      <TableRow>
        <TableCell component="th" scope="row">
          {coin.name.toUpperCase()}
        </TableCell>
        <TableCell align="left">{coin.symbol.toUpperCase()}</TableCell>
        <TableCell align="left">
          ${numberWithCommas(coin.current_price.toFixed(2))}
        </TableCell>
        {/* <TableCell align="left">{coin.total_supply}</TableCell> */}
        <TableCell align="left">{coin.total_volume}</TableCell>
        <TableCell align="left">{coin.high_24h}</TableCell>
      </TableRow>
    </>
  );
};

export default Single;
