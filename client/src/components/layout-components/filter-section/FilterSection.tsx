import Filter from "../../ui-components/filter-drop-down/Filter";
import "./filter-section.models.css";
import { toolsFilter } from "./filterOptionHelperData";

const FilterSection = () => {
  return (
    <section className="filter">
      <ul className="filter___container--dropDown">
        <li>
          <Filter dropData={toolsFilter} />
        </li>
        <li>filter</li>
        <li>filter</li>
      </ul>
      <ul className="filter___container--sortingDropDown">
        <li>filter</li>
      </ul>
    </section>
  );
};

export default FilterSection;
