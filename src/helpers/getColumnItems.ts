import { v4 as uuid } from "uuid";
import { ColumnItem } from "../controllers/ColumnItem";
import { SlotItem } from "../controllers/SlotItem";

interface Props {
  rows: number;
  cols: number;
}

export function getColumnItems({ rows, cols }: Props) {
  const FINAL_COLUMNS: Array<ColumnItem> = [];

  for (let colIndex = 0; colIndex < cols; colIndex++) {
    // console.log("creating col " + colIndex);

    const columnId = uuid();
    const slots: Array<SlotItem> = [];

    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
      // console.log("creating row " + rowIndex);

      const slot = new SlotItem({ columnId, filled: false });
      slots.push(slot);
    }

    const column = new ColumnItem({ slots });
    FINAL_COLUMNS.push(column);
  }

  return FINAL_COLUMNS;
}
