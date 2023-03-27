import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type PostParams = {
  id: number;
  title: string;
  body: string;
};

export default function Post({ id, title, body }: PostParams) {
  const navigate = useNavigate();
  return (
    <Container
      onClick={() => {
        navigate(`/post/${id}`);
      }}
    >
      <h1>{title}</h1>
      <p>{body}</p>
    </Container>
  );
}

const Container = styled.div`
  width: 611px;
  background-color: #171717;
  border-radius: 16px;
  padding: 20px;
  min-height: fit-content;

  h1 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  p {
    color: #b7b7b7;
  }
`;
