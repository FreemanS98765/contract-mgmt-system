import { Fragment } from "react";

const Filter = (props) => {

  const dropdownChangeHandler = (event) => {
    if (event.target.id === "status-menu") {
      props.onChangeStatusFilter(event.target.value);
    }

    if (event.target.id === "date-menu") {
      props.onChangeDateFilter(event.target.value);
    }

    return;
  };

  const filterItems = (
    <Fragment>
      <select
        id={props.menuId}
        value={props.selected}
        onChange={dropdownChangeHandler}
      >
        {props.filters.map((filterItem) => (
          <option value={filterItem.value}>
            {`${props.filterName}: ${filterItem.name}`}
          </option>
        ))}
      </select>
    </Fragment>
  );

  return <div className="select is-medium mr-3">{filterItems}</div>;
};

export default Filter;
