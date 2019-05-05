import React from "react";

function Select(props) {
  return (
    <select value={props.value} onChange={props.onChange}>
      <option key="empty" value="">
        -- select --
      </option>
      {props.collection.map(item => {
        return (
          <option key={item[props.valueProp]} value={item[props.valueProp]}>
            {item[props.titleProp]}
          </option>
        );
      })}
    </select>
  );
}

export default Select;
