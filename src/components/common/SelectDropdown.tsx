import React from "react";
import {
  Typography,
  FormControl,
  NativeSelect,
  InputBase,
  withStyles,
  createStyles,
  Theme,
  makeStyles,
} from "@material-ui/core";

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      width: "50vh",
      "&:focus": {
        borderRadius: 4,
        borderColor: "red",
        boxShadow: "0 0 0 0.1rem red",
      },
    },
  })
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      marginBottom: theme.spacing(1),
    },
  })
);

interface ISelectDropdown {
  label: string;
  options: { value: string | number; label: string }[];
  value: string;
  onChange: (event: React.ChangeEvent<{ value: string | number }>) => void;
}

const SelectDropdown: React.FunctionComponent<ISelectDropdown> = ({
  label,
  value,
  onChange,
  options,
}) => {
  const classes = useStyles();

  const optionDrop = options.map((opt) => {
    return <option value={opt.value}>{opt.label}</option>;
  });

  return (
    <FormControl className={classes.margin}>
      <Typography variant="body2" display="block" gutterBottom>
        {label}
      </Typography>
      <NativeSelect
        id={label}
        value={value}
        onChange={onChange}
        input={<BootstrapInput />}
      >
        <option aria-label="None" value="" />
        {optionDrop}
      </NativeSelect>
    </FormControl>
  );
};

export default SelectDropdown;
