import React from 'react';

interface PropsType {
  handleChange(event: React.SyntheticEvent): void;
  title: string;
  value: string;
}

function InputFilterItem(props: PropsType) {
  return (
    <label className="input-filter-item">
      <div className="input-filter-item__title">{props.title}</div>
      <input
        className="input-filter-item__input"
        type="input"
        value={props.value}
        onChange={props.handleChange}/>
    </label>
  );
}

export default InputFilterItem;
