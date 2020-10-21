import React, { useContext } from "react";
import TabsContext from "../context/Context";

const Content = () => {
  // context includes: state (tabs,active), setState
  const context = useContext(TabsContext);
  const { tabs, active } = context.state;
  return (
    <div className="container">
      {active != null ? (
        <div>
          {tabs[active]}
        </div>
      ) : null}
    </div>
  );
};
export default Content;