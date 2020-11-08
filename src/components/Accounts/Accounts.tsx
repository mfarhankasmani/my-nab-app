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
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../store/types";
import {
  setAccounts,
  selectAccount,
  updateTabIndex,
} from "../../store/actions";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

interface IAccounts {}

const Accounts: React.FunctionComponent<IAccounts> = () => {
  const classes = useStyles();
  const newAccounts = useSelector((state: IState) => state.newAccounts);
  const accounts = useSelector((state: IState) => state.accounts);
  const customerId = useSelector((state: IState) => state.customerId);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const getAccounts = async () => {
      try {
        const response = await fetch(
          `http://localhost:5001/account/${customerId}`
        );
        const data = await response.json();
        if (response.status !== 200) throw new Error("No Account found");
        dispatch(setAccounts(data.data));
      } catch (err) {
        console.log(err);
      }
    };
    getAccounts();
    // eslint-disable-next-line
  }, [customerId]);

  const handleOnClick = (accountId: string) => {
    dispatch(selectAccount(accountId));
    dispatch(updateTabIndex(1));
  };

  const rows = [...accounts, ...newAccounts];
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
                  onClick={() => handleOnClick(row.accountId)}
                >
                  <StyledTableCell component="th" scope="row">
                    {row.accoutType}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.isPending && "Pending"}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.currentBalance && row.currentBalance}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.availableBalance && row.availableBalance}
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
