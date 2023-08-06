import React from "react";
import "./filter.models.css";
interface iOption {
  value: string;
  option: string;
}

interface iProps {
  dropData: Array<iOption>;
  label: string;
  selectedValue: unknown;
}

const Filter = (props: iProps) => {
  const { dropData, label, selectedValue } = props;
  console.log(selectedValue, "___");
  return (
    <div className="drop_down___container">
      <label>{label}</label> <br />
      <select name="" id="" className="drop_down">
        {dropData &&
          dropData?.map((el) => (
            <option value={el?.value}>{el?.option}</option>
          ))}
      </select>
    </div>
  );
};

export default Filter;
