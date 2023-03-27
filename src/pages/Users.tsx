import { useQuery } from "react-query";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import User from "../components/UserList/User";
import { getUsers } from "../services/users/getUsers";

export default function Users() {
  const { data, isLoading } = useQuery("users", getUsers);

  if (isLoading) {
    return <></>;
  }

  return (
    <>
      <Header />
      <main>
        <Container>
          <Title>User List</Title>
          {data?.map((v) => (
            <User
              key={v.id}
              id={v.id}
              username={v.username}
            />
          ))}
        </Container>
      </main>
      <Footer />
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  width: 100%;
  height: fit-content;
  min-height: 400px;
  background-color: #171717;
  padding: 12px 32px;

  @media (min-width: 1001px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
`;
