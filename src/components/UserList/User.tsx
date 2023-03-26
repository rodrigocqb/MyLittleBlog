import styled from "styled-components";

export default function User({ username }: { username: string }) {
  return <Username>{username}</Username>;
}

const Username = styled.h2`
  font-size: 18px;
  font-weight: 500;
`;
