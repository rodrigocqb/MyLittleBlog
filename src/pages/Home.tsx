import styled from "styled-components";
import Feed from "../components/Feed";
import Header from "../components/Header";
import UserList from "../components/UserList";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Feed />
        <UserList />
      </Container>
    </>
  );
}

const Container = styled.main`
  justify-content: center;
  column-gap: 30px;
`;
