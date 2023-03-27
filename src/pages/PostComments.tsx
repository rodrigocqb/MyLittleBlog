import styled from "styled-components";
import Header from "../components/Header";
import Comments from "../components/PostComments";
import UserList from "../components/UserList";

export default function PostComments() {
  return (
    <>
      <Header />
      <Container>
        <Comments />
        <UserList />
      </Container>
    </>
  );
}

const Container = styled.main`
  justify-content: center;
  column-gap: 30px;
`;
