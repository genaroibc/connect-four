import { ColumnItem } from "../../controllers/ColumnItem";
import { PlayersTeam } from "../../types/types";

export interface BoardProps {
  cols: number;
  rows: number;
}

export interface BoardState {
  columns: Array<ColumnItem>;
  playerTurn: PlayersTeam;
  winnerPlayer: PlayersTeam | undefined;
}
