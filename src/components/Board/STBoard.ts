import styled from "styled-components";

interface STWrapperProps {
  columns: number;
}

export const STWrapper = styled.section<STWrapperProps>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 100px);
  place-content: center;
  gap: 0.5rem;

  background-color: steelblue;
  padding: 1rem;
`;
