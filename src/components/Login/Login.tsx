import React from "react";
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
  const classes = useStyles();
  return (
    <div>
      <HeaderFooter header />
      <div className="banner-background">
        <Container>
          <div className="login__form">
            <Grid item xs={5}>
              <form>
                <Paper className={classes.root}>
                  <Alert severity="error">
                    The NAB ID or password entered is incorrect. Please try
                    again. Remember, your password is case sensitive.
                  </Alert>
                  <Typography gutterBottom variant="h5" component="h2">
                    NAB INTERNET BANKING
                  </Typography>
                  <FormControl>
                    <Typography variant="button" display="block" gutterBottom>
                      NAB ID
                    </Typography>
                    <OutlinedInput
                      id="outlined-adornment-weight"
                      value={"values.weight"}
                      // onChange={handleChange('weight')}
                    />
                  </FormControl>
                  <FormControl>
                    <Typography variant="body2" display="block" gutterBottom>
                      Password
                    </Typography>
                    <OutlinedInput
                      id="outlined-adornment-weight"
                      value={"values.weight"}
                      // onChange={handleChange('weight')}
                    />
                  </FormControl>
                  <Grid item xs={5}>
                    <Button variant="contained" color="primary">
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
