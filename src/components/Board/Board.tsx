import { useState } from "react";
import { v4 as uuid } from "uuid";
import { ColumnItem } from "../../controllers/ColumnItem";
import { SlotItem } from "../../controllers/SlotItem";
import { getColumnItems } from "../../helpers/getColumnItems";
import { Column } from "../Column/Column";
import { STWrapper } from "./STBoard";
import { BoardProps, BoardState } from "./types";

export function Board({ rows, cols }: BoardProps) {
  const [columns, setColumns] = useState<BoardState["columns"]>(
    getColumnItems({ cols, rows })
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

  const handleFillColumn = (column_id: string) => {
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
          handleFillColumn={handleFillColumn}
          empty={true}
          length={rows}
          id={id}
          slots={slots}
        />
      ))}

      <h2>WINNER: {winnerPlayer}</h2>
    </STWrapper>
  );
}
