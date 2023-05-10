import React from "react";
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { styled } from '@mui/material'
import { tableCellClasses } from '@mui/material'

/*const StyledButton = styled(Button) `
    background: '#E8F1FF';
    width: 30px;
    height: 50px;
    margin: 0 0 0 10px;
    padding: 0 30px;
    border-radius: 10px;
`
*/

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#E8F1FF',
      color: 'black',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));


class Customer extends React.Component{
    render() {
        return(
            <Table style = {{position : 1000}}>
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
                        <TableCell>{this.props.name}</TableCell>
                        <TableCell>{this.props.birthday}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        )
    }
}

export default Customer;