/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./filter.models.css";

interface iOption {
  icon: any;
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
      <div className="drop_down--div">
        <select name="" id="" className="drop_down">
          {dropData &&
            dropData?.map((el) => (
              <option value={el?.value}>
                <span>
                  {el?.icon}
                  {el?.option}
                </span>
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
