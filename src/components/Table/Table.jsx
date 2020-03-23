import React from "react";

import { Total } from "../Total/Total";
import { testIds } from "./testIds";

import table from "./Table.module.css";

export const Table = ({ operationList }) => {
  return (
    <table className={table.table} data-testid={testIds.table}>
      <tbody>
      {operationList.map((item, index) => (
          <tr data-testid={testIds.row} key={index}>
              <td className={table.name} data-testid={testIds.name}>
                  {item.name}
              </td>
              <td className={table.amount} data-testid={testIds.amount}>
                  {item.amount}
              </td>
          </tr>
      ))}
      </tbody>
      <tfoot>
        <tr>
          <td />
          <td>
            <Total operationList={operationList.map(x => x.amount)} />
          </td>
        </tr>
      </tfoot>
    </table>
  );
};
