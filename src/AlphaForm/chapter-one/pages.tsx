import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Pages: React.FC = (): JSX.Element => {
  return (
    <div>
      <Link to='page-one'><button type='button'>Page 1</button></Link>
      <Link to='page-one'><button type='button'>Page 2</button></Link>
    </div>
  );
};

export default Pages;