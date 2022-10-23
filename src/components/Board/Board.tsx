import { useState } from "react";
import { v4 as uuid } from "uuid";
import { ColumnItem } from "../../controllers/ColumnItem";
import { SlotItem } from "../../controllers/SlotItem";
import { Column } from "../Column/Column";
import { STWrapper } from "./STBoard";
import { BoardProps, BoardState } from "./types";

const COL_A_ID = uuid();
const COL_B_ID = uuid();
const COL_C_ID = uuid();

const SLOT_A_0 = new SlotItem({ columnId: COL_A_ID, filled: false });
const SLOT_A_1 = new SlotItem({ columnId: COL_A_ID, filled: false });
const SLOT_A_2 = new SlotItem({ columnId: COL_A_ID, filled: false });

const SLOT_B_0 = new SlotItem({ columnId: COL_B_ID, filled: false });
const SLOT_B_1 = new SlotItem({ columnId: COL_B_ID, filled: false });
const SLOT_B_2 = new SlotItem({ columnId: COL_B_ID, filled: false });

const SLOT_C_0 = new SlotItem({ columnId: COL_C_ID, filled: false });
const SLOT_C_1 = new SlotItem({ columnId: COL_C_ID, filled: false });
const SLOT_C_2 = new SlotItem({ columnId: COL_C_ID, filled: false });

const COLUMN_A = new ColumnItem({ slots: [SLOT_A_0, SLOT_A_1, SLOT_A_2] });
const COLUMN_B = new ColumnItem({ slots: [SLOT_B_0, SLOT_B_1, SLOT_B_2] });
const COLUMN_C = new ColumnItem({ slots: [SLOT_C_0, SLOT_C_1, SLOT_C_2] });

const INITIAL_COLUMNS_STATE = [COLUMN_A, COLUMN_B, COLUMN_C];

export function Board({ rows, cols }: BoardProps) {
  const [columns, setColumns] = useState<BoardState["columns"]>(
    INITIAL_COLUMNS_STATE
  );

  const [winnerPlayer, setWinnerPlayer] =
    useState<BoardState["winnerPlayer"]>(undefined);

  const [playerTurn, setPlayerTurn] =
    useState<BoardState["playerTurn"]>("blue");

  const changePlayerTurn = () => {
    if (playerTurn === "blue") {
      setPlayerTurn("tomato");
    } else setPlayerTurn("blue");
  };

  const handleAddChip = (column_id: string) => {
    const updatedColumns = columns.map(col => {
      if (col.id === column_id) {
        col.fill(playerTurn);
        return col;
      }

      return col;
    });

    setColumns(updatedColumns as Array<ColumnItem>);
    checkPlayerWin();
    changePlayerTurn();
  };

  const checkPlayerWin = () => {
    const fulfilledColumn = columns.find(col => {
      if (col.isFulfilled) {
        const columnTeam = col.slots[0].team;

        if (col.slots.every(slot => slot.team === columnTeam)) {
          return col;
        }
      }
    });

    if (fulfilledColumn) return setWinnerPlayer(fulfilledColumn.slots[0].team);
    const finalRows: Array<Array<SlotItem>> = columns.map(_ => []);
    // columns
    for (let i = 0; i < columns.length; i++) {
      const col = columns[i];

      // slots
      for (let j = 0; j < col.slots.length; j++) {
        const slot = col.slots[j];
        finalRows[j].push(slot);
      }
    }

    const fulfilledRow = finalRows.find(row => {
      const rowTeam = row[0].team;

      return row.every(slot => slot.team === rowTeam);
    });

    if (fulfilledRow) return setWinnerPlayer(fulfilledRow[0].team);
  };

  return (
    <STWrapper columns={cols}>
      {columns.map(({ id, slots }) => (
        <Column
          key={uuid()}
          handleAddChip={handleAddChip}
          empty={true}
          length={rows}
          id={id}
          slots={slots}
        />
      ))}

      <h2>winner: {winnerPlayer}</h2>
    </STWrapper>
  );
}
