import React from "react";

interface iOption {
  value: string;
  option: string;
}

interface iProps {
  dropData: Array<iOption>;
}

const Filter = (props: iProps) => {
  const { dropData } = props;
  return (
    <select name="" id="">
      {dropData &&
        dropData?.map((el) => <option value={el?.value}>{el?.option}</option>)}
    </select>
  );
};

export default Filter;
