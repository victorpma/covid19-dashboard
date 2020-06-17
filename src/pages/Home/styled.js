import styled from "styled-components";

export const Container = styled.div`
  padding: 0 100px;
  height: 100vh;
`;

export const Header = styled.header`
  margin: 40px 0;
  padding: 20px;

  h1 {
    font-size: 3rem;
    line-height: 4rem;
    font-weight: 700;
    color: var(--color-grey-dark);
    text-transform: uppercase;

    span {
      font-weight: 300;
      color: var(----color-grey-light--secondary);
    }
  }

  p {
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: var(--color-grey-light--secondary);

    span {
      font-weight: 700;
      color: var(--color-grey-dark);
    }
  }
`;

export const Main = styled.main``;

export const SectionSummary = styled.section`
  display: flex;
  justify-content: space-around;
  max-height: 300px;
`;

export const CardsSummary = styled.div`
  flex: 1;
  margin-right: 15px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
`;

export const GraphSummary = styled.div`
  flex: 2;
  border-radius: 10px;
  padding: 15px;
  background-color: var(--color-white);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  animation: appear 2s ease-out 1s;
  animation-fill-mode: backwards;

  @keyframes appear {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  position: relative;

  h3 {
    text-align: center;
    font-size: 2.4rem;
    line-height: 3.4rem;
    font-weight: bold;
    color: var(--color-grey-dark);
    position: absolute;
    width: 100%;
    top: 0;
  }

  canvas {
    position: absolute;
    padding: 10px;
    height: 100%;
    width: 100%;
  }
`;

export const SectionStatsCase = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

export const ContainerCasesStats = styled.div`
  margin-top: 30px;
  border-radius: 10px;
  padding: 30px;
  background-color: var(--color-white);
  height: 80vh;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;

  animation: appear 2s ease-out 1s;
  animation-fill-mode: backwards;

  @keyframes appear {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  h3 {
    font-size: 2.4rem;
    line-height: 3.4rem;
    font-weight: bold;
    color: var(--color-grey-dark);
  }

  p {
    font-size: 1.4rem;
    line-height: 2.2rem;
    font-weight: 400;
    color: var(--color-grey-light--secondary);
  }
`;

export const Table = styled.table`
  height: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--color-grey-dark);
  overflow: hidden;
  border-radius: 5px 5px 0 0;
  border-collapse: collapse;

  thead tr {
    background-color: var(--color-primary);
    color: var(--color-white);
    font-weight: bold;
    text-align: left;
    font-size: 1.6rem;
  }

  th,
  td {
    padding: 12px 15px;
  }

  tbody {
    display: block;
    overflow: auto;
    height: 80%;
    width: 100%;
  }

  thead,
  tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  tbody tr {
    border-bottom: 1px solid var(--color-grey-light);

    :nth-of-type(even) {
      background-color: #f3f3f3;
    }

    :last-of-type {
      border-bottom: 2px solid var(--color-primary);
    }
  }
`;

export const SectionStatsRegions = styled.section`
  margin-top: 30px;
  border-radius: 10px;
  padding: 30px;
  background-color: var(--color-white);
  height: 80vh;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;

  animation: appear 2s ease-out 1s;
  animation-fill-mode: backwards;

  @keyframes appear {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  h3 {
    font-size: 2.4rem;
    line-height: 3.4rem;
    font-weight: bold;
    color: var(--color-grey-dark);
  }

  p {
    font-size: 1.4rem;
    line-height: 2.2rem;
    font-weight: 400;
    color: var(--color-grey-light--secondary);
  }
`;

export const SectionMapGlobal = styled.section`
  margin-top: 30px;
  border-radius: 10px;
  padding: 30px;
  background-color: var(--color-white);
  height: 90vh;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;

  animation: appear 2s ease-out 1s;
  animation-fill-mode: backwards;

  @keyframes appear {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  h3 {
    font-size: 2.4rem;
    line-height: 3.4rem;
    font-weight: bold;
    color: var(--color-grey-dark);
  }

  p {
    font-size: 1.4rem;
    line-height: 2.2rem;
    font-weight: 400;
    color: var(--color-grey-light--secondary);
    margin-bottom: 15px;
  }
`;
