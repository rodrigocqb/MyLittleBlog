import styled from "styled-components";
import { IoBookSharp, IoPersonSharp } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  const path = useLocation().pathname;
  const navigate = useNavigate();

  return (
    <Container>
      <IconWrapper
        isCurrentPage={path === "/"}
        onClick={() => navigate("/")}
      >
        <IoBookSharp />
      </IconWrapper>
      <IconWrapper
        isCurrentPage={path === "/users"}
        onClick={() => navigate("/users")}
      >
        <IoPersonSharp />
      </IconWrapper>
    </Container>
  );
}

const Container = styled.footer`
  display: none;

  @media (max-width: 1000px) {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #9b9b9b;
    position: fixed;
    bottom: 0;
    left: 0;

    svg {
      font-size: 36px;
    }
  }
`;

const IconWrapper = styled.div<{ isCurrentPage: boolean }>`
  width: fit-content;
  height: fit-content;

  svg {
    color: ${(props) => (props.isCurrentPage ? "#ffebcd" : "#ffffff")};
  }
`;
