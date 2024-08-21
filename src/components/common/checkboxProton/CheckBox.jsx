import React from "react";
import {
  makeStyles,
  Checkbox as MuiCheckbox,
  FormControlLabel,
} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";

const useStyle = makeStyles({
  root: {
    "&$checked": {
      color: "#000",
    },
  },
  Checked: {},
  wrap: {
    width: "100%",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 0,
  },
  label: {
    fontSize: "1rem",
    fontFamily: `'Raleway', sans-serif`,
  },
});

const CheckBox = ({ cuisine, changeChecked }) => {
  const classes = useStyle();
  const { checked, label, id } = cuisine;
  return (
    <div>
      <FormControlLabel
        classes={{
          label: classes.label,
          root: classes.wrap,
        }}
        control={
          <Checkbox
            classes={{
              checked: classes.checked,
              root: classes.root,
            }}
            size="small"
            checked={checked}
            onChange={() => changeChecked(id)}
          />
        }
        label={label}
      />
    </div>
  );
};

export default CheckBox;
