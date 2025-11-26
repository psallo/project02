import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

export default function AboutPage() {
  return (
    <Container>
      <Title>
        <H5>Services</H5>
        <H1>우리의 서비스</H1>
        <H6>“We want to support businesses that are just getting started.”</H6>
      </Title>
      <BoxWrap>
        <ContentBox>첫 줄 내용</ContentBox>
        <EmptyBox />
      </BoxWrap>
      <BoxWrap>
        <EmptyBox />
        <ContentBox>둘째 줄 내용</ContentBox>
      </BoxWrap>
      <BoxWrap>
        <ContentBox>셋째 줄 내용</ContentBox>
        <EmptyBox />
      </BoxWrap>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f9f9f9;
`;
const Title = styled.div`
  margin-top: 4em;
  margin-bottom: 4em;
  text-align: center;
`;
const H5 = styled.h5`
  font-size: 1em;
  margin-bottom: 1em;
`;
const H1 = styled.h1`
  font-size: 3em;
  margin-bottom: 0.4em;
`;
const H6 = styled.h6`
  font-size: 1em;
`;
const BoxWrap = styled.div`
  display: flex;
  padding: 2em 2em;
`;
const ContentBox = styled.div`
  flex: 8;
  background-color: #d2f8dc;
  border-radius: 15px;
  height: 300px;
`;
const EmptyBox = styled.div`
  flex: 2;
`;
