import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getUserDetails } from "../../services/users/getUserDetails";

export default function Details() {
  const { userId } = useParams();
  const { data, isLoading } = useQuery(["user", userId], () =>
    getUserDetails(Number(userId)),
  );

  if (isLoading) {
    return <></>;
  }

  return (
    <Container>
      <h1>{data?.username}</h1>
      <h2>Name: {data?.name}</h2>
      <p>Email: {data?.email}</p>
      <p>Phone: {data?.phone}</p>
      <p>Website: {data?.website}</p>
      <h3>Address:</h3>
      <p>
        {data?.address.street} {data?.address.suite}
      </p>
      <p>
        {data?.address.city} {data?.address.zipcode}
      </p>
      <p>
        {data?.address.geo.lat}, {data?.address.geo.lng}
      </p>
      <h3>Company:</h3>
      <p>{data?.company.name}</p>
      <p>{data?.company.catchPhrase}</p>
      <p>{data?.company.bs}</p>
    </Container>
  );
}

const Container = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  width: 611px;
  background-color: #171717;
  border-radius: 16px;
  max-height: 600px;
  padding: 30px;
  row-gap: 14px;

  h1 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 6px;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    margin-top: 20px;
    font-size: 22px;
  }
`;
