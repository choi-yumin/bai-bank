import React from "react";
import { TableRow, TableCell } from '@mui/material';

function BudgetCell(props) {
    return (
        <TableRow>
            <TableCell>{props.date}</TableCell>
            <TableCell>{props.manager}</TableCell>
            <TableCell>{props.contents}</TableCell>
            <TableCell>{props.code}</TableCell>
            <TableCell>{props.type}</TableCell>
            <TableCell>{props.income}</TableCell>
            <TableCell>{props.price}</TableCell>
            <TableCell>{props.remain}</TableCell>
            <TableCell>{props.when}</TableCell>
            <TableCell>{props.num}</TableCell>
            <TableCell>{props.receipt}</TableCell>
        </TableRow>
    )
}


export default BudgetCell;
