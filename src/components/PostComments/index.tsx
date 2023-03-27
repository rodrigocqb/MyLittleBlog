import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getPostComments } from "../../services/posts/getPostComments";
import Comment from "./Comment";

export default function Comments() {
  const { postId } = useParams();
  const { data, isLoading } = useQuery(["comments", postId], () =>
    getPostComments(Number(postId)),
  );

  if (isLoading) {
    return <></>;
  }

  return (
    <Container>
      {data?.map((v) => (
        <Comment
          key={v.id}
          name={v.name}
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
`;
