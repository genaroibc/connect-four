import { PlayersTeam } from "../../types/types";

export interface SlotProps {
  filled: boolean;
  columnId: string;
  id: string;
  team: PlayersTeam | undefined;
}
