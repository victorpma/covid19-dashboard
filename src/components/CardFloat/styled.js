import styled from "styled-components";

export const CardFloat = styled.div`
  text-align: center;
  border-radius: 10px;
  padding: 15px;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);

  animation: moveInTop 1s ease-out;
  transition: all 0.2s;

  :hover {
    transform: scale(1.1);
  }

  @keyframes moveInTop {
    0% {
      transform: translateY(30px);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  h3.mundial {
    background-image: linear-gradient(
      to right top,
      #3d9bcd,
      #1398db,
      #0093e9,
      #008df5,
      #0085ff
    );
    -webkit-background-clip: text;
  }

  h3.brazil {
    background-image: linear-gradient(
      to right top,
      #5ccd3d,
      #8ad32a,
      #b2d814,
      #d9dc00,
      #ffde00
    );
    -webkit-background-clip: text;
  }
`;

export const Title = styled.h3`
  font-size: 1.4rem;
  line-height: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  display: inline-block;
  color: transparent;
`;

export const Value = styled.span`
  color: #2c3e50;
  font-size: 2.5rem;
  line-height: 3rem;
  font-weight: bold;
  margin: 10px 0;
`;

export const Description = styled.p`
  color: var(--color-grey-dark);
  font-size: 1.2rem;
`;
