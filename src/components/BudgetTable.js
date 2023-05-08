import React from "react";
import { Table, TableHead, TableBody, TableCell, StyledEngineProvider } from '@mui/material';
import styled from 'styled-components';
import { tableCellClasses } from '@mui/material'
import BudgetCell from "./BudgetCell";



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#E8F1FF',
      color: 'black',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));


const Container = styled.div`
    position : absolute;
    width: 1398px;
    height: 58px;
    left: 40px;
    top: 100px;
`

function BudgetTable({budget}) {
    return(
        <StyledEngineProvider injectFirst>
        <Container>
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
                    {budget.map ( c => {
                        return (
                            <BudgetCell 
                                date={c.date} 
                                manager={c.manager}
                                contents={c.contents}
                                code={c.code}
                                type={c.type}
                                income={c.income}
                                price={c.price}
                                remain={c.remain}
                                when={c.when}
                                num={c.num}
                                receipt={c.receipt}
                                />
                        )
                    })}
                </TableBody>
            </Table>
        </Container>
        </StyledEngineProvider>
        )
}


export default BudgetTable;