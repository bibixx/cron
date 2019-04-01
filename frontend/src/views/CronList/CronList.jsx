import React from 'react';

const CronList = () => (
  <ul>
    {new Array(10).fill(null).map((_, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <li key={i}>{i}</li>
    ))}
  </ul>
);

export default CronList;
