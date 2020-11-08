import React from "react";
import { Container, SelectDropdown } from "../../components";
import {
  Grid,
  Paper,
  FormControl,
  OutlinedInput,
  Button,
  Typography,
} from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import { useDispatch } from "react-redux";
import { createNewAccount, updateTabIndex } from "../../store/actions";
//@ts-ignore
import uuid from "uuid/dist/v4";
import { INewAccountData } from "../../store/types";

const options = [
  {
    value: "Personal Account",
    label: "Personal Account",
  },
  {
    value: "Saving Account",
    label: "Saving Account",
  },
  {
    value: "Term Deposit Account",
    label: "Term Deposit Account",
  },
  {
    value: "Transaction Accounts",
    label: "Transaction Accounts",
  },
  {
    value: "Loan Account",
    label: "Loan Account",
  },
];

interface NewAccountState {
  name: string;
  accountType: string;
}

interface INewAccount {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "flex-direction": "column",
      padding: "20px",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    newAccount: {
      display: "flex",
      "margin-top": "40px",
      "justify-content": "center",
      "align-items": "center",
    },
  })
);

const NewAccount: React.FunctionComponent<INewAccount> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [values, setValues] = React.useState<NewAccountState>({
    name: "",
    accountType: "",
  });

  const [error, setError] = React.useState({
    name: false,
    accountType: false,
    showAlert: false,
  });

  const handleChange = (prop: keyof NewAccountState) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
    setError({ ...error, [prop]: false, showAlert: false });
  };

  const handleBlur = (prop: keyof NewAccountState) => (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    if (event.target.value === "") {
      setError({ ...error, [prop]: true });
    }
  };

  const checkError = () => {
    if (values.accountType === "" && values.name === "") {
      setError({ ...error, name: true, showAlert: true });
      return true;
    }
    if (values.name === "") {
      setError({ ...error, name: true, showAlert: true });
      return true;
    }
    if (values.accountType === "") {
      setError({ ...error, showAlert: true });
      return true;
    }
    return false;
  };

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (checkError()) return;
    const newAccount: INewAccountData = {
      accountId: uuid(),
      accoutType: values.accountType,
      isPending: true,
    };
    dispatch(createNewAccount(newAccount));
    dispatch(updateTabIndex(0));
    setValues({ name: "", accountType: "" });
  };

  return (
    <Container>
      <div className={classes.newAccount}>
        <Grid item xs={5}>
          <form onSubmit={handleSubmit}>
            <Paper className={classes.root}>
              {error.showAlert && (
                <Alert severity="error">Kindly provide all the values</Alert>
              )}
              <Typography gutterBottom variant="h5" component="h2">
                Create new account
              </Typography>
              <FormControl>
                <Typography variant="button" display="block" gutterBottom>
                  name
                </Typography>
                <OutlinedInput
                  id="outlined-adornment-weight"
                  value={values.name}
                  onChange={handleChange("name")}
                  onBlur={handleBlur("name")}
                  error={error.name}
                />
              </FormControl>
              <Grid item xs={5}>
                <SelectDropdown
                  value={values.accountType}
                  label={"Select account type"}
                  onChange={handleChange("accountType")}
                  options={options}
                />
              </Grid>
              <Grid item xs={5}>
                <Button variant="contained" color="primary" type="submit">
                  Create Account
                </Button>
              </Grid>
            </Paper>
          </form>
        </Grid>
      </div>
    </Container>
  );
};

export default NewAccount;
