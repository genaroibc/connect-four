import { SlotItem } from "../../controllers/SlotItem";

export interface ColumnProps {
  length: number;
  empty: boolean;
  handleFillColumn: (column_id: string) => void;
  slots: Array<SlotItem>;
  id: string;
}

export interface ColumnState {
  slots: Array<SlotItem>;
}
