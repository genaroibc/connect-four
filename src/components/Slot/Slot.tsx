import { STSlot } from "./STSlot";
import { SlotProps } from "./types";

export function Slot({ columnId, id, team }: SlotProps) {
  return <STSlot team={team} id={id} data-column-id={columnId} />;
}
