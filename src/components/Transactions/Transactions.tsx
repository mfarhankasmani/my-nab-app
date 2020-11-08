import React from "react";
import "./Transactions.css";
import { Container, SelectDropdown } from "../../components";
import { Typography, createStyles, Theme, makeStyles } from "@material-ui/core";
import TransactionTable from "./TransactionTable";
import { useDispatch, useSelector } from "react-redux";
import { selectAccount } from "../../store/actions";
import { IAccountData, IState } from "../../store/types";

interface ITransactions {}

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
  const { selectedAccount, accounts } = useSelector((state: IState) => state);
  const [rows, setRows] = React.useState<any[]>([]);
  const dispatch = useDispatch();

  const accountArray = [...accounts];

  const options = accountArray.map((account: IAccountData) => {
    return {
      value: account.accountId,
      label: account.accoutType,
    };
  });

  const getTransactions = async () => {
    if (selectedAccount === "") {
      setRows([]);
      return;
    }
    try {
      const response = await fetch(
        `http://localhost:5001/transaction/${selectedAccount}`
      );
      if (response.status !== 200) throw new Error("something went wrong");
      const data = await response.json();
      setRows([...data.data]);
      console.log({ rows });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<{ value: string | number }>
  ) => {
    dispatch(selectAccount(event.target.value as string));
  };

  React.useEffect(() => {
    getTransactions();
    // eslint-disable-next-line
  }, [selectedAccount]);

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
          value={selectedAccount}
          label="Select Account"
          onChange={handleChange}
          options={options}
        />
        <TransactionTable rows={rows} />
      </div>
    </Container>
  );
};

export default Transactions;
