import React from 'react';

interface PropsType {
  dateStr: string;
}

const months: any = {
  Jan: '01',
  Feb: '02',
  Mar: '03',
  Apr: '04',
  May: '05',
  Jun: '06',
  Jul: '07',
  Aug: '08',
  Sep: '09',
  Oct: '10',
  Nov: '11',
  Dec: '12',
};

function JobCreationDate(props: PropsType) {
  function parseDate(date: string) {
    const dateArray = date.split(' ');
    return `${dateArray[2]}.${months[dateArray[1]]}.${dateArray[5]}`;
  }

  return (
    <div className="job-creaction-date">{parseDate(props.dateStr)}</div>
  );
}

export default JobCreationDate;
