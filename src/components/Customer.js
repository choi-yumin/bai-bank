import React from "react";
import { Table, TableHead, TableBody, TableRow, TableCell, StyledEngineProvider } from '@mui/material';
import styled from 'styled-components';
import { tableCellClasses } from '@mui/material'



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#E8F1FF',
      color: 'black',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));


const Back = styled.div`
    position : absolute;
    width: 1398px;
    height: 58px;
    left: 40px;
    top: 100px;
`

function Customer(props) {
    return(
        <StyledEngineProvider injectFirst>
        <Back>
            <Table>
                <TableHead>
                    <StyledTableCell>사업일</StyledTableCell>
                    <StyledTableCell>담당자</StyledTableCell>
                    <StyledTableCell>집행내용</StyledTableCell>
                    <StyledTableCell>코드</StyledTableCell>
                    <StyledTableCell>거래형태</StyledTableCell>
                    <StyledTableCell>수입</StyledTableCell>
                    <StyledTableCell>지출</StyledTableCell>
                    <StyledTableCell>잔액</StyledTableCell>
                    <StyledTableCell>통장거래일</StyledTableCell>
                    <StyledTableCell>이체계좌번호</StyledTableCell>
                    <StyledTableCell>영수증</StyledTableCell>
                    <StyledTableCell>비고</StyledTableCell>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>{props.date}</TableCell>
                        <TableCell>{props.manager}</TableCell>
                        <TableCell>{props.detail}</TableCell>
                        <TableCell>{props.code}</TableCell>
                        <TableCell>{props.type}</TableCell>
                        <TableCell>{props.price}</TableCell>
                        <TableCell>{props.out}</TableCell>
                        <TableCell>{props.remain}</TableCell>
                        <TableCell>{props.exchangedate}</TableCell>
                        <TableCell>{props.bank}</TableCell>
                        <TableCell>{props.receipt}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Back>
        </StyledEngineProvider>
        )
}


export default Customer;