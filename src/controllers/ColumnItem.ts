import { v4 as uuid } from "uuid";
import { IColumnItem, PlayersTeam } from "../types/types";
import { SlotItem } from "./SlotItem";

interface ColumnItemProps {
  slots: Array<SlotItem>;
}

export class ColumnItem implements IColumnItem {
  id = uuid();
  slots: Array<SlotItem> = [];
  lastFreeSlot: SlotItem | undefined = undefined;
  isFulfilled: boolean = false;

  constructor({ slots }: ColumnItemProps) {
    this.slots = slots;
    this.updateLastFreeSlot();
    this.updateIsFulfilled();
  }

  fill(chip_team: PlayersTeam): void {
    if (!this.lastFreeSlot) return;

    this.lastFreeSlot.filled = true;
    this.lastFreeSlot.team = chip_team;

    this.updateLastFreeSlot();
    this.updateIsFulfilled();
  }

  updateLastFreeSlot(): void {
    const freeSlot = this.slots.find(slot => !slot.filled);

    this.lastFreeSlot = freeSlot;
  }

  updateIsFulfilled(): void {
    this.isFulfilled = this.slots.every(slot => slot.filled);
  }
}
