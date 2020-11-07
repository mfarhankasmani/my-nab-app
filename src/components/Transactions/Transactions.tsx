import React from "react";
import "./Transactions.css";
import { Container, SelectDropdown } from "../../components";
import { Typography, createStyles, Theme, makeStyles } from "@material-ui/core";
import TransactionTable, { IDataTransactionTable } from "./TransactionTable";

interface ITransactions {}

const options = [
  {
    value: 10,
    label: "Ten",
  },
  {
    value: 20,
    label: "Twenty",
  },
  {
    value: 10,
    label: "Thirty",
  },
];

function createData(
  date: string,
  transactionDetails: string,
  debit: number,
  credit: number,
  balance: number
): IDataTransactionTable {
  return { date, transactionDetails, debit, credit, balance };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263, 3287263),
  createData("China", "CN", 1403500365, 9596961, 3287263),
  createData("Italy", "IT", 60483973, 301340, 3287263),
  createData("United States", "US", 327167434, 9833520, 3287263),
  createData("Canada", "CA", 37602103, 9984670, 3287263),
  createData("Australia", "AU", 25475400, 7692024, 3287263),
  createData("Germany", "DE", 83019200, 357578, 3287263),
  createData("Ireland", "IE", 4857000, 70273, 3287263),
  createData("Mexico", "MX", 126577691, 1972550, 3287263),
  createData("Japan", "JP", 126317000, 377973, 3287263),
  createData("France", "FR", 67022000, 640679, 3287263),
  createData("United Kingdom", "GB", 67545757, 242495, 3287263),
  createData("Russia", "RU", 146793744, 17098246, 3287263),
  createData("Nigeria", "NG", 200962417, 923768, 3287263),
  createData("Brazil", "BR", 210147125, 8515767, 3287263),
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
    transactions: {
      "margin-top": "40px",
    },
  })
);

const Transactions: React.FunctionComponent<ITransactions> = () => {
  const classes = useStyles();
  const [account, setAccount] = React.useState("");

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChange = (
    event: React.ChangeEvent<{ value: string | number }>
  ) => {
    setAccount(event.target.value as string);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container>
      <div className={classes.transactions}>
        <Typography variant="h3" gutterBottom>
          Transactions
        </Typography>
        <Typography variant="h6" gutterBottom>
          Transaction list
        </Typography>
        <SelectDropdown
          value={account}
          label="Select Account"
          onChange={handleChange}
          options={options}
        />
        <TransactionTable
          rows={rows}
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </div>
    </Container>
  );
};

export default Transactions;
