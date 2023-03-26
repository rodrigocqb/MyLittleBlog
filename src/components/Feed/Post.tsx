import styled from "styled-components";

type PostParams = {
  title: string;
  body: string;
};

export default function Post({ title, body }: PostParams) {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{body}</p>
    </Container>
  );
}

const Container = styled.div`
  width: 611px;
  background-color: #171717;
  color: #ffffff;
  border-radius: 16px;
  padding: 10px 8px 12px 12px;
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
