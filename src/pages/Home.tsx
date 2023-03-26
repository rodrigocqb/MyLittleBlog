import styled from "styled-components";
import Feed from "../components/Feed";

export default function Home() {
  return (
    <Container>
      <Feed />
    </Container>
  );
}

const Container = styled.main`
  justify-content: center;
  column-gap: 30px;
`;
