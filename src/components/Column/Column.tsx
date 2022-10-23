import { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { Slot } from "../Slot/Slot";
import { ColumnProps, ColumnState } from "./types";

const STColumn = styled.section`
  background-color: steelblue;
`;

export function Column({
  length,
  empty,
  slots,
  id,
  handleFillColumn,
}: ColumnProps) {
  return (
    <STColumn onClick={() => handleFillColumn(id)}>
      {slots.map(({ filled, id, columnId, team }) => (
        <Slot
          filled={filled}
          columnId={columnId}
          key={uuid()}
          id={id}
          team={team}
        />
      ))}
    </STColumn>
  );
}
