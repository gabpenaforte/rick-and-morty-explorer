import styled from "styled-components";
import { Box, TextField } from "@mui/material";

export const Root = styled(Box)`
    width: 65%;
    position: absolute;
    left: 50%;
    top: 340px;
    background: #fff;
    translate: -50%;
`;

export const SearchInput = styled(TextField)`
    width: 100%;
`;