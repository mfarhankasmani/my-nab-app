import React from "react";
import { Container } from "..";
import "./Header.css";
import { Typography, Button, Grid } from "@material-ui/core";

interface IHeaderFooter {
  header?: boolean;
  footer?: boolean;
  isLoggedIn?: boolean;
}

const HeaderFooter: React.FunctionComponent<IHeaderFooter> = ({
  header = false,
  footer = false,
  isLoggedIn = false,
}) => {
  return (
    <div className="headerFooter">
      <Container>
        {header && (
          <div className="header">
            <div className="header__image">
              <img
                src="https://ib.nab.com.au/reno/shell/v3.19.1/assets/nab-logo-blk.47be092f6990c9b49b63418c930bce0c.svg"
                id="nab-logo"
                alt="NAB more than money"
                width="140px"
                height="39px"
              />
            </div>
            {isLoggedIn && (
              <Grid container alignItems="center" xs={12}>
                <Grid item xs={10}>
                  <Typography
                    variant="h5"
                    component="h2"
                    className="header__text"
                  >
                    INTERNET BANKING
                  </Typography>
                </Grid>
                <Button variant="contained" color="primary">
                  Logout
                </Button>
              </Grid>
            )}
          </div>
        )}
        {footer && (
          <div className="footer">
            <p>
              <span>&#169;</span> National Australia Bank Limited
            </p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default HeaderFooter;
