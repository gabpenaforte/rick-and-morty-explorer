import styled from "styled-components";
import { Typography } from "@mui/material";

export const Root = styled.header`
  padding: 16px;
  margin-bottom: 8px;
  background-color: #f8d7da;
  height: 380px;
  width: 100%;
`;

export const Title = styled(Typography)`
  width: 350px;
  position: relative;
  top: 80px;
  left: 230px;
  color: #58151c;
`;

export const Subtitle = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 25px;
  left: 230px;

  span {
    margin-left: 16px;
    font-size: 1.2rem;
    color: #58151c;
  }
`;

export const Image = styled.div`
  position: absolute;
  top: 200px;
  right: 260px;

  img {
    width: 200px;
    height: 150px;
  }
`;
