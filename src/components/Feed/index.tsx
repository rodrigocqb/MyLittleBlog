import { useQuery } from "react-query";
import styled from "styled-components";
import { getPosts } from "../../services/posts/getPosts";
import Post from "./Post";

export default function Feed() {
  const { data, isLoading } = useQuery("posts", getPosts);

  if (isLoading) {
    return <></>;
  }

  return (
    <Container>
      {data?.map((v) => (
        <Post
          key={v.id}
          id={v.id}
          title={v.title}
          body={v.body}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  width: 611px;
  row-gap: 16px;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;
