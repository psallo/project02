import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <Container>
      <Typography variant="caption" sx={{ color: "white" }}>
        © 2025 All Rights Reserved
      </Typography>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: #2e4f21;
  align-items: flex-end;
  justify-content: center;
  height: 50px;
`;
