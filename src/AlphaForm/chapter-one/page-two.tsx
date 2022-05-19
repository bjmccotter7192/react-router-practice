import React from 'react';

const PageTwo: React.FC = (): JSX.Element => {
  return (
    <div>
      <h1>Page 2</h1>

      <label>
        Buzz:
        <input type="text" name="buzz" />
      </label>
    </div>
  );
};

export default PageTwo;