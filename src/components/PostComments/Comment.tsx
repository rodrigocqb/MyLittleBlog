import styled from "styled-components";

type CommentParams = {
  name: string;
  body: string;
};

export default function Comment({ name, body }: CommentParams) {
  return <Container>
    <h1>{name}</h1>
    <p>{body}</p>
  </Container>;
}

const Container = styled.div`
  width: 100%;
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

  @media (max-width: 1000px) {
    border-radius: 0;
  }
`;