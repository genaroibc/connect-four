import styled from "styled-components";

interface STWrapperProps {
  columns: number;
  rows: number;
}

export const STWrapper = styled.section<STWrapperProps>`
  width: 100%;
  margin: auto;
  padding: 1rem;

  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 80px);
  grid-template-rows: repeat(${({ rows }) => rows}, 80px);
  place-content: center;

  background-color: steelblue;
  text-align: center;
  border-radius: 10px;
`;
