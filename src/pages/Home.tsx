import styled from "styled-components";
import Feed from "../components/Feed";
import UserList from "../components/UserList";

export default function Home() {
  return (
    <Container>
      <Feed />
      <UserList />
    </Container>
  );
}

const Container = styled.main`
  justify-content: center;
  column-gap: 30px;
`;
