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

const options = [
  {
    value: "personal",
    label: "Personal Account",
  },
  {
    value: "saving",
    label: "Saving Account",
  },
  {
    value: "term",
    label: "Term Deposit Account",
  },
  {
    value: "transaction",
    label: "Transaction Accounts",
  },
  {
    value: "loan",
    label: "Loan Account",
  },
];

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

  const [account, setAccount] = React.useState("");
  const handleChange = (
    event: React.ChangeEvent<{ value: string | number }>
  ) => {
    setAccount(event.target.value as string);
  };

  return (
    <Container>
      <div className={classes.newAccount}>
        <Grid item xs={5}>
          <form>
            <Paper className={classes.root}>
              <Alert severity="error">Kindly provide below values</Alert>
              <Typography gutterBottom variant="h5" component="h2">
                Create new account
              </Typography>
              <FormControl>
                <Typography variant="button" display="block" gutterBottom>
                  name
                </Typography>
                <OutlinedInput
                  id="outlined-adornment-weight"
                  value={"values.weight"}
                  // onChange={handleChange('weight')}
                />
              </FormControl>
              <Grid item xs={5}>
                <SelectDropdown
                  value={account}
                  label={"Select account type"}
                  onChange={handleChange}
                  options={options}
                />
              </Grid>
              <Grid item xs={5}>
                <Button variant="contained" color="primary">
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
