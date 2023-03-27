import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Details from "../components/UserDetails";
import UserList from "../components/UserList";

export default function UserDetails() {
  return (
    <>
      <Header />
      <Container>
        <Details />
        <UserList />
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.main`
  justify-content: center;
  column-gap: 30px;
`;
