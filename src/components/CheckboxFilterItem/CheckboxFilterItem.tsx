import React from 'react';

interface PropsType {
  handleChange(event: React.SyntheticEvent): void;
  title: string;
  checked: boolean;
}

function CheckboxFilterItem(props: PropsType) {
  return (
    <label className="checkbox-filter-item">
      <div className="checkbox-filter-item__title">{props.title}</div>
      <input
        className="checkbox-filter-item__checkbox"
        type="checkbox"
        checked={props.checked}
        onChange={props.handleChange}/>
    </label>
  );
}

export default CheckboxFilterItem;
