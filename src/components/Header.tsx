import styled from "styled-components";

export default function Header() {
  return <Container>My Little Blog</Container>;
}

const Container = styled.header`
  margin-bottom: 30px;
  width: 100%;
  height: 80px;
  font-family: "Playball", cursive;
  font-size: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #151515;
`;
