import { v4 as uuid } from "uuid";
import { ISlotItem, PlayersTeam } from "../types/types";

interface SlotItemProps {
  columnId: string;
  filled: boolean;
}

export class SlotItem implements ISlotItem {
  id: string = uuid();
  columnId: string;
  filled: boolean;
  team: PlayersTeam | undefined;

  constructor({ columnId, filled }: SlotItemProps) {
    this.columnId = columnId;
    this.filled = filled;
  }
}
