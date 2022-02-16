import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

const Single = ({ coin }) => {
  return (
    <Container>
      <Paper elevation={4}>
        <Card>
          <CardHeader title={coin.name} />
          <CardContent>
            <img width="100px" height="100px" src={coin.image} alt="" />
          </CardContent>
        </Card>
      </Paper>
      {}
    </Container>
  );
};

export default Single;
