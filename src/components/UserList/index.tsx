import { useQuery } from "react-query";
import styled from "styled-components";
import { getUsers } from "../../services/users/getUsers";
import User from "./User";

export default function UserList() {
  const { data, isLoading } = useQuery("users", getUsers);

  if (isLoading) {
    return <></>;
  }

  return (
    <Container>
      <Title>User List</Title>
      {data?.map((v) => (
        <User
          key={v.id}
          username={v.username}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  width: 300px;
  height: fit-content;
  min-height: 400px;
  background-color: #171717;
  border-radius: 16px;
  position: sticky;
  top: 130px;
  padding: 12px 32px;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
`;
