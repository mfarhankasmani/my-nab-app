import React from "react";
import "./Accounts.css";
import { Container, StyledTableRow, StyledTableCell } from "../../components";
import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function createData(
  accoutType: string,
  isPending: boolean,
  currentBalance?: number,
  availableBalance?: number
) {
  return { accoutType, isPending, currentBalance, availableBalance };
}

const rows = [
  createData("Personal Account", false, 2000, 2000),
  createData("Saving Account", false, 3000, 3000),
  createData("Term Deposit Account", false, 16.0, 24),
  createData("Transaction Accounts", true, 3.7, 67),
  createData("Loan Account", true, 16.0, 0),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

interface IAccounts {}

const Accounts: React.FunctionComponent<IAccounts> = () => {
  const classes = useStyles();
  return (
    <Container>
      <div className="accounts">
        <Typography variant="h3" gutterBottom>
          Account Summary
        </Typography>
        <Typography variant="h6" gutterBottom>
          Account list
        </Typography>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Account</StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
                <StyledTableCell align="right">Current balance</StyledTableCell>
                <StyledTableCell align="right">
                  Available balance
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow
                  key={row.accoutType}
                  onClick={() => console.log(row.accoutType)}
                >
                  <StyledTableCell component="th" scope="row">
                    {row.accoutType}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.isPending && "Pending"}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.currentBalance}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.availableBalance}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Container>
  );
};

export default Accounts;
