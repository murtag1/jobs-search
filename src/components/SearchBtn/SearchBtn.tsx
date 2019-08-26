import React from 'react';

interface PropsType {
  title: string;
}

function BooleanFilterItem(props: PropsType) {
  return (
    <button className="search-btn" >
      {props.title}
    </button>
  );
}

export default BooleanFilterItem;
