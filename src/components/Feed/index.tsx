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
          title={v.title}
          body={v.body}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
`;
