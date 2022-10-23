import styled from "styled-components";
import { PlayersTeam } from "../../types/types";

interface STSlotProps {
  team: PlayersTeam | undefined;
}

export const STSlot = styled.div<STSlotProps>`
  background-color: transparent;
  max-width: 80px;
  max-height: 80px;
  width: 80px;
  height: 80px;

  border-radius: 50%;
  border: 2px solid #000;

  background-color: ${({ team }) => team};
`;
