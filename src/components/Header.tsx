import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  const navigate = useNavigate();

  return <Container onClick={() => navigate("/")}>My Little Blog</Container>;
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
  cursor: pointer;

  @media (max-width: 1000px) {
    margin-bottom: 10px;
  }
`;
