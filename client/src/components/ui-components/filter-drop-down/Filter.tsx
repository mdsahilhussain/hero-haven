import "./filter.models.css";
import { FormControl, FormLabel, Select } from '@chakra-ui/react'
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
  return (
<FormControl className="drop_down___container">
  <FormLabel className="label">{label}</FormLabel>
  <Select className="drop_down___box" variant="outline" placeholder={`Select ${label}`} size={"md"}>
  {dropData.length > 0 &&
        dropData.map((item: iOption) => (
          <option key={item.value} value={item.value}>
            {item.option}
          </option>
        ))
      }
</Select>
</FormControl>
  );
};

export default Filter;
