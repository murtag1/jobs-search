import React, { useState, useEffect } from 'react';
import InputFilterItem from '../InputFilterItem/InputFilterItem';
import CheckboxFilterItem from '../CheckboxFilterItem/CheckboxFilterItem';
import SearchBtn from '../SearchBtn/SearchBtn';

interface PropsType {
  path: string;
  history: any;
}

function JobsFilter(props: PropsType) {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [isFullTIme, setIsFullTIme] = useState(false);

  useEffect(() => {
    const descriptionDefault = props.path.match(/description=(.*)&full_time/i);
    const locationDefault = props.path.match(/location=(.*)/i);
    const isFullTimeDefault = props.path.match(/full_time=(.*)&/i);
    if (descriptionDefault && descriptionDefault[1]) setDescription(descriptionDefault[1]);
    if (locationDefault && locationDefault[1]) setLocation(locationDefault[1]);
    if (isFullTimeDefault && isFullTimeDefault[1]) setIsFullTIme(isFullTimeDefault[1] === 'true');
  }, []);

  function handleDescriptionChange(event: React.SyntheticEvent) {
    const descriptionValue = (event.target as HTMLInputElement).value;
    setDescription(descriptionValue);
  }

  function handleLocationChange(event: React.SyntheticEvent) {
    const locationValue = (event.target as HTMLInputElement).value;
    setLocation(locationValue);
  }

  function handleIsFullTimeChange(event: React.SyntheticEvent) {
    const isFullTimeCheked = (event.target as HTMLInputElement).checked;
    setIsFullTIme(isFullTimeCheked);
  }

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    props.history.push(`description=${description}&full_time=${isFullTIme}&location=${location}`);
  }

  return (
    <form className="jobs-filter" onSubmit={handleSubmit}>
      <div className="jobs-filter__item">
        <InputFilterItem
          handleChange={handleDescriptionChange}
          title="Description"
          value={description} />
      </div>
      <div className="jobs-filter__item">
        <InputFilterItem
          handleChange={handleLocationChange}
          title="Location"
          value={location} />
      </div>
      <div className="jobs-filter__item">
        <CheckboxFilterItem
          handleChange={handleIsFullTimeChange}
          title="Full time"
          checked={isFullTIme}
        />
      </div>
      <div className="jobs-filter__item">
        <SearchBtn
          title="Search"
        />
      </div>
    </form>
  );
}

export default JobsFilter;
