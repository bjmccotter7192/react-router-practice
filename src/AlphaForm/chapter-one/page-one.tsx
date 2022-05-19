import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const PageOne: React.FC = (): JSX.Element => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h1>Page 1</h1>

      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <br/><br/>
      <Link to='page-two'><button type='button'>Next</button></Link>
    </div>
  );
};

export default PageOne;