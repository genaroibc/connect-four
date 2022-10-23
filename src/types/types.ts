import { SlotItem } from "../controllers/SlotItem";

export interface ISlotItem {
  id: string;
  filled: boolean;
  columnId: string;
  team: string | undefined;
}

export interface IColumnItem {
  id: string;
  slots: Array<SlotItem>;
  fill: (chip_team: PlayersTeam) => void;
  lastFreeSlot: SlotItem | undefined;
  isFulfilled: boolean;
}

export type PlayersTeam = "tomato" | "blue";
