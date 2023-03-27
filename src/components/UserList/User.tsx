import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type UserParams = {
  id: number;
  username: string;
};

export default function User({ id, username }: UserParams) {
  const navigate = useNavigate();

  return (
    <Username onClick={() => navigate(`/user/${id}`)}>{username}</Username>
  );
}

const Username = styled.h2`
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;
