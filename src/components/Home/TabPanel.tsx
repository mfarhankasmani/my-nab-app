import React from "react";

interface ITabPanel {
  index: number;
  value: number;
}

const TabPanel: React.FunctionComponent<ITabPanel> = (props) => {
  const { index, value, children } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...props}
    >
      {value === index && <>{children}</>}
    </div>
  );
};

export default TabPanel;
