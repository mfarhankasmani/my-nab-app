import React, { useState } from "react";
import { HeaderFooter } from "../../components";
import { Container } from "../../components";
import "./Login.css";
import {
  Grid,
  Paper,
  FormControl,
  OutlinedInput,
  Link,
  Button,
  Typography,
} from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions";
interface LoginState {
  nabId: string;
  password: string;
}

interface LoginError {
  nabId: boolean;
  password: boolean;
  loginFailed: boolean;
}

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
  })
);

const Login = () => {
  const dispatch = useDispatch();
  const updateLogin = (customerId: string) => dispatch(login(customerId));
  const classes = useStyles();

  const [values, setValues] = useState<LoginState>({
    nabId: "",
    password: "",
  });

  const [error, setError] = useState<LoginError>({
    nabId: false,
    password: false,
    loginFailed: false,
  });

  const handleChange = (prop: keyof LoginState) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
    setError({ ...error, [prop]: false });
  };

  const handleBlur = (prop: keyof LoginState) => (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    if (event.target.value === "") {
      setError({ ...error, [prop]: true });
    }
  };

  const checkError = () => {
    if (values.nabId === "" && values.password === "") {
      setError({ ...error, nabId: true, password: true });
      return true;
    }
    if (values.nabId === "") {
      setError({ ...error, nabId: true });
      return true;
    }
    if (values.password === "") {
      setError({ ...error, password: true });
      return true;
    }
    return false;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    if (checkError()) return;
    try {
      const response = await fetch(
        `http://localhost:5001/login/${values.nabId}`
      );
      if (response.status !== 200) throw new Error("No customer found");
      const data = await response.json();
      setError({ ...error, loginFailed: false });
      updateLogin(data.customerId);
      console.log({ response, data });
    } catch (err) {
      setError({ ...error, loginFailed: true });
    }
  };

  return (
    <div>
      <HeaderFooter header />
      <div className="banner-background">
        <Container>
          <div className="login__form">
            <Grid item xs={5}>
              <form onSubmit={handleSubmit}>
                <Paper className={classes.root}>
                  {error.loginFailed && (
                    <Alert severity="error">
                      The NAB ID or password entered is incorrect. Please try
                      again. Remember, your password is case sensitive.
                    </Alert>
                  )}
                  <Typography gutterBottom variant="h5" component="h2">
                    NAB INTERNET BANKING
                  </Typography>
                  <FormControl>
                    <Typography variant="button" display="block" gutterBottom>
                      NAB ID
                    </Typography>
                    <OutlinedInput
                      id="outlined-adornment-weight"
                      value={values.nabId}
                      onBlur={handleBlur("nabId")}
                      onChange={handleChange("nabId")}
                      error={error.nabId}
                    />
                  </FormControl>
                  <FormControl>
                    <Typography variant="body2" display="block" gutterBottom>
                      Password
                    </Typography>
                    <OutlinedInput
                      id="outlined-adornment-weight"
                      type="password"
                      value={values.password}
                      onBlur={handleBlur("password")}
                      onChange={handleChange("password")}
                      error={error.password}
                    />
                  </FormControl>
                  <Grid item xs={5}>
                    <Button variant="contained" color="primary" type="submit">
                      Login
                    </Button>
                  </Grid>
                  <Link href="#" color="error">
                    Forgot your NAB ID or password?
                  </Link>
                  <div className="login__form__footer">
                    <p>New to NAB Internet Banking?</p>
                    <Link href="#" color="error">
                      {"Register now"}
                    </Link>
                  </div>
                </Paper>
              </form>
            </Grid>
          </div>
        </Container>
      </div>
      <HeaderFooter footer />
    </div>
  );
};

export default Login;
