import React from "react";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export const Navbar: React.VFC = () => {
  const history = useHistory();
  console.log(history.location);
  const [value, setValue] = React.useState("/");

  const handleChange = (event: React.ChangeEvent<{}>, value: string) => {
    setValue(value);
    history.push(value);
  };

  return (
    <AppBar position="static">
      <Tabs value={value} onChange={handleChange}>
        <Tab label="TOP" value="/" />
        <Tab label="ABOUT" value="/about" />
      </Tabs>
    </AppBar>
  );
};
