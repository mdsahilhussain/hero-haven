import Filter from "../../ui-components/filter-drop-down/Filter";
import "./filter-section.models.css";
import { tools, stylesheet, sorting } from "./filterOptionHelperData";

interface filterObject {
  tools: string;
  stylesheet: string;
}

interface iProps {
  setFilterData: any;
}

const FilterSection = (props: iProps) => {
  const { setFilterData } = props;
  return (
    <section className="filter">
      <ul className="filter___container--dropDown">
        <li>
          <Filter
            dropData={tools}
            label={"Tools"}
            selectedValue={setFilterData}
          />
        </li>
        <li>
          <Filter
            dropData={stylesheet}
            label={"Stylesheet"}
            selectedValue={setFilterData}
          />
        </li>
        {/* <li>
          <Filter
            dropData={toolsFilter}
            label={"Color"}
            selectedValue={"hussain"}
          />
        </li> */}
      </ul>
      <ul className="filter___container--sortingDropDown">
        <li>
          <Filter
            dropData={sorting}
            label={"Sorting by"}
            selectedValue={"sahil"}
          />
        </li>
      </ul>
    </section>
  );
};

export default FilterSection;
